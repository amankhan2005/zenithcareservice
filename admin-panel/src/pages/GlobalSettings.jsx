 // src/components/GlobalSettings.jsx
import React, { useEffect, useState } from "react";
import { fetchSettings, updateSettings } from "../api/settingsService";

const FIELDS = [
  "logo",
  "phone",
  "email",
  "address",
  "facebook",
  "instagram",
  "twitter",
  "tiktok",
];

function CenterModal({ open, title, message, onCancel, onConfirm, confirmText = "Yes", cancelText = "Cancel" }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onCancel}></div>
      <div className="relative bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl z-10">
        {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
        <p className="text-sm text-gray-700 mb-6">{message}</p>

        <div className="flex justify-end gap-3">
          <button onClick={onCancel} className="px-4 py-2 rounded-lg border border-gray-200">
            {cancelText}
          </button>
          <button onClick={onConfirm} className="px-4 py-2 rounded-lg bg-blue-600 text-white">
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

function CenterAlert({ open, type = "info", message, onClose }) {
  if (!open) return null;
  const bg = type === "success" ? "bg-emerald-50 border-emerald-400" : type === "error" ? "bg-red-50 border-red-400" : "bg-slate-50 border-gray-300";
  const textColor = type === "success" ? "text-emerald-800" : type === "error" ? "text-red-800" : "text-gray-800";
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto relative w-full max-w-md">
        <div className={`rounded-2xl p-5 border ${bg} shadow-xl mx-4`}>
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className={`font-semibold ${textColor}`}>{message}</p>
            </div>
            <div>
              <button onClick={onClose} className="text-sm text-gray-600">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GlobalSettings({ creds }) {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [logoFile, setLogoFile] = useState(null);
  const [saving, setSaving] = useState(false);

  // toggles: which fields admin wants to update
  const [toggles, setToggles] = useState(
    FIELDS.reduce((acc, f) => ((acc[f] = false), acc), {})
  );

  // confirm modal (when no toggles selected)
  const [confirmOpen, setConfirmOpen] = useState(false);
  // alerts
  const [alert, setAlert] = useState({ open: false, type: "info", message: "" });

  useEffect(() => {
    fetchSettings()
      .then((data) => {
        setSettings(data);
        setToggles(FIELDS.reduce((acc, f) => ((acc[f] = false), acc), {}));
      })
      .catch((err) => {
        console.error(err);
        setAlert({ open: true, type: "error", message: "Failed to load settings." });
      })
      .finally(() => setLoading(false));
  }, []);

  const setField = (field, value) => {
    setSettings((s) => {
      if (!s) return s;
      return { ...s, global: { ...s.global, [field]: value } };
    });
  };

  const toggleField = (field) => {
    setToggles((t) => ({ ...t, [field]: !t[field] }));
  };

  // helper to update only toggled fields in frontend state using server response or local sent values
  function applyFrontendUpdate(serverSettings, selectedFields, sentValues) {
    // serverSettings may be { settings: { global: {...} } } or an object with global
    let serverGlobal = null;
    if (!serverSettings) serverGlobal = null;
    else if (serverSettings.settings && serverSettings.settings.global) serverGlobal = serverSettings.settings.global;
    else if (serverSettings.global) serverGlobal = serverSettings.global;
    else serverGlobal = null;

    setSettings((prev) => {
      if (!prev) return prev;
      const next = { ...prev, global: { ...prev.global } };

      if (!selectedFields || selectedFields.length === 0) {
        // update all from server if available, otherwise overwrite with sentValues
        if (serverGlobal) {
          for (const k of Object.keys(serverGlobal)) next[k] = serverGlobal[k];
        } else if (sentValues) {
          for (const k of Object.keys(sentValues)) next[k] = sentValues[k];
        }
      } else {
        // update only selected fields
        for (const k of selectedFields) {
          if (serverGlobal && serverGlobal.hasOwnProperty(k)) {
            next[k] = serverGlobal[k];
          } else if (sentValues && sentValues.hasOwnProperty(k)) {
            next[k] = sentValues[k];
          } else {
            // last fallback: keep existing
          }
        }
      }
      return next;
    });
  }

  const save = async () => {
    try {
      if (!settings) {
        setAlert({ open: true, type: "error", message: "No settings loaded." });
        return;
      }

      const selected = Object.keys(toggles).filter((k) => toggles[k]);

      // If none selected, ask user via center confirm modal
      if (selected.length === 0) {
        setConfirmOpen(true);
        return;
      }

      setSaving(true);

      const fd = new FormData();
      fd.append("fieldsToUpdate", JSON.stringify(selected));

      // Logo handling
      if (selected.includes("logo")) {
        if (logoFile) {
          fd.append("logo", logoFile);
        } else {
          // no file selected but logo toggle on -> we still send nothing for logo
        }
      }

      // prepare values object for fallback frontend update
      const valuesToAppend = {};
      const mapping = {
        phone: settings.global.phone || "",
        email: settings.global.email || "",
        address: settings.global.address || "",
        facebook: settings.global.facebook || "",
        instagram: settings.global.instagram || "",
        twitter: settings.global.twitter || "",
        tiktok: settings.global.tiktok || "",
      };
      // append only selected fields to FormData (server expects those)
      for (const [key, val] of Object.entries(mapping)) {
        if (selected.includes(key)) {
          fd.append(key, val);
          valuesToAppend[key] = val;
        }
      }

      // send request
      const res = await updateSettings(creds, fd);

      // apply frontend update only for selected fields
      applyFrontendUpdate(res, selected, valuesToAppend);

      setAlert({ open: true, type: "success", message: "Settings saved successfully." });
      setLogoFile(null);
      setToggles(FIELDS.reduce((acc, f) => ((acc[f] = false), acc), {}));
    } catch (err) {
      console.error(err);
      setAlert({ open: true, type: "error", message: "Error saving settings: " + (err?.message || err) });
    } finally {
      setSaving(false);
    }
  };

  // handler when admin confirmed updating ALL (no toggles)
  const confirmUpdateAll = async () => {
    setConfirmOpen(false);
    try {
      if (!settings) return;
      setSaving(true);

      const fd = new FormData();
      // don't send fieldsToUpdate so backend will use all provided values
      if (logoFile) fd.append("logo", logoFile);

      const valuesToAppend = {
        phone: settings.global.phone || "",
        email: settings.global.email || "",
        address: settings.global.address || "",
        facebook: settings.global.facebook || "",
        instagram: settings.global.instagram || "",
        twitter: settings.global.twitter || "",
        tiktok: settings.global.tiktok || "",
      };

      for (const [k, v] of Object.entries(valuesToAppend)) {
        fd.append(k, v);
      }

      const res = await updateSettings(creds, fd);

      // update all fields in frontend from server if available, else fallback to valuesToAppend
      applyFrontendUpdate(res, [], valuesToAppend);

      setAlert({ open: true, type: "success", message: "Settings saved successfully." });
      setLogoFile(null);
      setToggles(FIELDS.reduce((acc, f) => ((acc[f] = false), acc), {}));
    } catch (err) {
      console.error(err);
      setAlert({ open: true, type: "error", message: "Error saving settings: " + (err?.message || err) });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-orange-50/20 to-green-50/20 pt-24 pb-20">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-orange-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-orange-600 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-green-200 rounded-full"></div>
            <div className="absolute inset-2 border-4 border-transparent border-t-green-600 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "1s" }} />
          </div>
          <p className="text-slate-700 font-bold text-lg">Loading settings...</p>
        </div>
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-orange-50/20 to-green-50/20 pt-24 pb-20">
        <div className="text-center bg-white rounded-[2rem] shadow-2xl p-16 border-2 border-orange-100">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-green-100 rounded-3xl flex items-center justify-center shadow-inner">
            <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-slate-700 font-bold text-xl">No settings found</p>
        </div>
      </div>
    );
  }

  const g = settings.global || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-green-50/30 pt-24 pb-20 px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="relative mb-10 animate-fadeInUp">
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-green-500/10 to-orange-500/10 rounded-[3rem] blur-3xl"></div>
          <div className="relative flex items-center gap-3">
            <div className="w-1.5 h-14 bg-gradient-to-b from-orange-600 to-green-600 rounded-full" />
            <div>
              <h2 className="text-5xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">Global Settings</h2>
              <p className="text-slate-600 font-semibold text-lg mt-1">Configure your application settings</p>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="group relative animate-fadeInUp" style={{ animationDelay: "100ms" }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative bg-white p-8 rounded-[2rem] shadow-xl border-3 border-orange-200 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-amber-600 rounded-full" />
                <h3 className="font-black text-2xl text-slate-900">Logo</h3>
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={!!toggles.logo} onChange={() => toggleField("logo")} />
                <span className="text-slate-600">Update</span>
              </label>
            </div>

            <div className="space-y-6">
              <div>
                <input type="file" accept="image/*" id="logo-upload" className="hidden" onChange={(e) => setLogoFile(e.target.files[0])} />
                <label htmlFor="logo-upload" className={`flex items-center gap-3 w-full p-6 border-3 border-dashed rounded-2xl cursor-pointer ${toggles.logo ? "border-orange-500 bg-orange-50" : "border-slate-200 bg-white/50"}`}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <p className="text-slate-700 font-bold">{logoFile ? logoFile.name : "Click to select logo file"}</p>
                    <p className="text-sm text-slate-500 mt-1">PNG, JPG, WEBP up to 10MB</p>
                  </div>
                </label>
              </div>

              {g.logo && (
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Current Logo</label>
                  <img src={g.logo} alt="logo preview" className="h-24 rounded-2xl border-3 border-orange-200 shadow-xl bg-white p-3" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact fields with toggles */}
        <div className="group relative animate-fadeInUp" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative bg-white p-8 rounded-[2rem] shadow-xl border-3 border-green-200 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full" />
                <h3 className="font-black text-2xl text-slate-900">Contact Details</h3>
              </div>
              <div className="text-sm text-slate-500">Toggle per-field to update</div>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input className="w-full border-2 border-slate-200 p-4 rounded-2xl" value={g.phone || ""} onChange={(e) => setField("phone", e.target.value)} />
                </div>
                <div className="pt-6">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!toggles.phone} onChange={() => toggleField("phone")} />
                    <span className="text-sm text-slate-600">Update</span>
                  </label>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input className="w-full border-2 border-slate-200 p-4 rounded-2xl" value={g.email || ""} onChange={(e) => setField("email", e.target.value)} />
                </div>
                <div className="pt-6">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!toggles.email} onChange={() => toggleField("email")} />
                    <span className="text-sm text-slate-600">Update</span>
                  </label>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Address</label>
                  <textarea className="w-full border-2 border-slate-200 p-4 rounded-2xl min-h-[100px]" value={g.address || ""} onChange={(e) => setField("address", e.target.value)} />
                </div>
                <div className="pt-6">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!toggles.address} onChange={() => toggleField("address")} />
                    <span className="text-sm text-slate-600">Update</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social media section */}
        <div className="group relative animate-fadeInUp" style={{ animationDelay: "300ms" }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-green-500 to-orange-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative bg-white p-8 rounded-[2rem] shadow-xl border-3 border-orange-200 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-green-600 rounded-full" />
                <h3 className="font-black text-2xl text-slate-900">Social Media Links</h3>
              </div>
              <div className="text-sm text-slate-500">Toggle which social links to update</div>
            </div>

            <div className="space-y-6">
              {/* Facebook */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Facebook</label>
                  <input className="w-full border-2 border-slate-200 p-4 rounded-2xl" value={g.facebook || ""} onChange={(e) => setField("facebook", e.target.value)} />
                </div>
                <div className="pt-6">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!toggles.facebook} onChange={() => toggleField("facebook")} />
                    <span className="text-sm text-slate-600">Update</span>
                  </label>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Instagram</label>
                  <input className="w-full border-2 border-slate-200 p-4 rounded-2xl" value={g.instagram || ""} onChange={(e) => setField("instagram", e.target.value)} />
                </div>
                <div className="pt-6">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!toggles.instagram} onChange={() => toggleField("instagram")} />
                    <span className="text-sm text-slate-600">Update</span>
                  </label>
                </div>
              </div>

              {/* Twitter (X) */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Twitter / X</label>
                  <input className="w-full border-2 border-slate-200 p-4 rounded-2xl" value={g.twitter || ""} onChange={(e) => setField("twitter", e.target.value)} />
                </div>
                <div className="pt-6">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!toggles.twitter} onChange={() => toggleField("twitter")} />
                    <span className="text-sm text-slate-600">Update</span>
                  </label>
                </div>
              </div>

              {/* TikTok */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-2">TikTok</label>
                  <input className="w-full border-2 border-slate-200 p-4 rounded-2xl" value={g.tiktok || ""} onChange={(e) => setField("tiktok", e.target.value)} />
                </div>
                <div className="pt-6">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!toggles.tiktok} onChange={() => toggleField("tiktok")} />
                    <span className="text-sm text-slate-600">Update</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save */}
        <div className="flex justify-end animate-fadeInUp" style={{ animationDelay: "400ms" }}>
          <button onClick={save} disabled={saving} className="group relative overflow-hidden px-10 py-5 rounded-2xl font-black text-lg text-white transition-all duration-300 hover:scale-105 shadow-2xl disabled:opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-green-600"></div>
            <span className="relative flex items-center gap-3">
              {saving ? (
                <>
                  <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle></svg>
                  Saving...
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14"/></svg>
                  Save Settings
                </>
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Centered confirm modal (when no toggles selected) */}
      <CenterModal
        open={confirmOpen}
        title="No fields selected"
        message="You have not toggled any field. Do you want to update ALL fields with the current values?"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={confirmUpdateAll}
        confirmText="Update All"
        cancelText="Cancel"
      />

      {/* Centered alert */}
      <CenterAlert
        open={alert.open}
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert({ open: false, type: "info", message: "" })}
      />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .border-3 { border-width: 3px; }
      `}</style>
    </div>
  );
}
