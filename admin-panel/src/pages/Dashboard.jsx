 // src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { fetchDashboard } from "../api/settingsService";

export default function AdminDashboard({ creds }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function load() {
    setLoading((v) => (data ? v : true));
    setRefreshing(!!data);
    try {
      const d = await fetchDashboard(creds);
      setData(d || {});
    } catch (e) {
      console.error(e);
      setData(null);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    if (!creds) return;
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creds]);

  if (loading && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#FFF7ED]">
        <div className="backdrop-blur-xl rounded-3xl shadow-2xl p-10 bg-white/60 border border-slate-50/80">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-slate-200 rounded-full" />
            <div className="absolute inset-0 border-4 border-transparent border-t-emerald-600 rounded-full animate-spin" />
          </div>
          <p className="text-slate-800 text-lg font-semibold tracking-wide">Loading your Dashboard…</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#FFF7ED]">
        <div className="text-center backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-10 border border-slate-50">
          <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center shadow-inner">
            <svg className="w-7 h-7 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-slate-800 font-bold text-lg">No data available</div>
          <div className="text-slate-500 text-sm mt-1">Please try again later.</div>
        </div>
      </div>
    );
  }

  const stats = [
    {
      label: "Contacts",
      count: data.contactsCount ?? 0,
      subtext: `${data.unhandledContacts ?? 0} unhandled`,
      accent: "emerald",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Careers",
      count: data.careersCount ?? 0,
      subtext: `${data.activeCareers ?? 0} active`,
      accent: "orange",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M3 11h18M5 21h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const accentMap = {
    emerald: {
      badge: "bg-emerald-100/70 text-emerald-800 border border-emerald-100 shadow",
      ring: "ring-2 ring-emerald-100/80 shadow-lg",
      dot: "bg-emerald-500",
      halo: "from-emerald-50/80 to-emerald-100/20",
      icon: "bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-lg",
      count: "text-emerald-700",
    },
    orange: {
      badge: "bg-orange-100/70 text-orange-800 border border-orange-100 shadow",
      ring: "ring-2 ring-orange-100/80 shadow-lg",
      dot: "bg-orange-500",
      halo: "from-orange-50/80 to-amber-100/20",
      icon: "bg-gradient-to-tr from-orange-500 to-yellow-400 text-white shadow-lg",
      count: "text-orange-700",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#FBF3FF] to-[#FFF7ED] pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 drop-shadow-lg">Admin Dashboard</h2>
            <p className="text-slate-600 mt-2 font-medium text-lg">Get a premium overview of your latest activity and stats.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={load}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-gradient-to-tr from-white via-slate-50 to-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              {refreshing ? (
                <>
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d="M4 4v6h6M20 20v-6h-6M20 8a8 8 0 01-7.5 7.98M4 16A8 8 0 0011.5 8" />
                  </svg>
                  Refreshing…
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d="M4 4v6h6M20 20v-6h-6M20 8a8 8 0 01-7.5 7.98M4 16A8 8 0 0011.5 8" />
                  </svg>
                  Refresh
                </>
              )}
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-14">
          {stats.map((s) => {
            const a = accentMap[s.accent];
            return (
              <div key={s.label}
                className={`relative rounded-3xl bg-white/80 p-7 backdrop-blur border ${a.ring} transition-all hover:scale-[1.01]`}
              >
                <div className={`absolute -inset-x-2 -top-2 h-2 bg-gradient-to-r ${a.halo} rounded-t-3xl`} />
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl ${a.icon}`}>
                    {s.icon}
                  </div>
                  <span className={`px-4 py-1.5 text-xs font-extrabold rounded-lg ${a.badge}`}>Live</span>
                </div>
                <div className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">{s.label}</div>
                <div className={`mt-2 text-5xl font-extrabold ${a.count}`}>{s.count}</div>
                <div className="mt-2 flex items-center gap-2 text-base text-slate-700">
                  <span className={`w-2.5 h-2.5 rounded-full ${a.dot} animate-pulse`} />
                  {s.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Latest Contacts */}
          <section className="rounded-3xl backdrop-blur-lg border bg-white/80 p-7 shadow-xl transition-all hover:shadow-2xl">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2 tracking-tight drop-shadow">
                <span className="inline-block w-2 h-7 bg-emerald-600 rounded-full" />
                Latest Contacts
              </h3>
              <span className="px-4 py-1.5 text-sm font-semibold rounded-lg border border-emerald-100 bg-emerald-50/80 text-emerald-800 shadow">
                {(data.latestContacts?.length ?? 0)} Recent
              </span>
            </div>
            {!(data.latestContacts?.length > 0) ? (
              <EmptyState
                iconBg="bg-emerald-100/70"
                iconColor="text-emerald-700"
                title="No new contacts"
                subtitle="New form submissions will show up here."
              />
            ) : (
              <div className="space-y-5 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar">
                {data.latestContacts.map((c, idx) => (
                  <article
                    key={c?._id || idx}
                    className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 hover:bg-emerald-50/90 transition-all shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-400 text-white font-black flex items-center justify-center text-xl shadow">
                          {(c?.parentName?.[0] || "?").toUpperCase()}
                        </div>
                        <div>
                          <div className="font-extrabold text-slate-900">{c?.parentName || "Unknown"}</div>
                          <div className="text-xs text-emerald-700 font-bold">{c?.email || "No email"}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-600">
                        {c?.serviceInterest && (
                          <span className="px-3 py-1 rounded-md border border-emerald-200 bg-white/90 text-emerald-700 font-black shadow">
                            {c.serviceInterest}
                          </span>
                        )}
                        <time className="px-3 py-1 rounded-md bg-slate-100 font-bold shadow-inner">
                          {c?.createdAt
                            ? new Date(c.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "—"}
                        </time>
                      </div>
                    </div>
                    {c?.message ? (
                      <p className="mt-4 text-base font-medium text-slate-700 line-clamp-3">{c.message}</p>
                    ) : null}
                  </article>
                ))}
              </div>
            )}
          </section>

          {/* Latest Jobs */}
          <section className="rounded-3xl backdrop-blur-lg border bg-white/80 p-7 shadow-xl transition-all hover:shadow-2xl">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2 tracking-tight drop-shadow">
                <span className="inline-block w-2 h-7 bg-orange-500 rounded-full" />
                Latest Jobs
              </h3>
              <span className="px-4 py-1.5 text-sm font-semibold rounded-lg border border-orange-100 bg-orange-50/80 text-orange-800 shadow">
                {(data.latestJobs?.length ?? 0)} Open
              </span>
            </div>
            {!(data.latestJobs?.length > 0) ? (
              <EmptyState
                iconBg="bg-orange-100/70"
                iconColor="text-orange-700"
                title="No jobs posted"
                subtitle="Create a job posting to see it here."
              />
            ) : (
              <div className="space-y-5 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar">
                {data.latestJobs.map((j, idx) => (
                  <article
                    key={j?._id || idx}
                    className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5 hover:bg-orange-50/90 transition-all shadow"
                  >
                    <header className="mb-2">
                      <h4 className="font-extrabold text-slate-900 text-lg leading-tight">{j?.title || "Untitled Job"}</h4>
                    </header>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-3 py-1 rounded-md border border-orange-200 bg-white/80 text-orange-700 font-black shadow">
                        📍 {j?.location || "Not specified"}
                      </span>
                      <span className="px-3 py-1 rounded-md border border-emerald-200 bg-white/80 text-emerald-700 font-black shadow">
                        🧷 {j?.type || "N/A"}
                      </span>
                    </div>
                    {j?.description ? (
                      <p className="mt-4 text-base font-medium text-slate-700">
                        {j.description.slice(0, 140)}
                        {(j.description?.length ?? 0) > 140 ? "…" : ""}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 999px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 999px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: #94a3b8; }
      `}</style>
    </div>
  );
}

/** Small reusable empty state */
function EmptyState({ iconBg, iconColor, title, subtitle }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-10 text-center shadow-lg">
      <div className={`mx-auto mb-4 w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center shadow-inner`}>
        <svg className={`w-7 h-7 ${iconColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            d="M12 9v4m0 4h.01M3 12a9 9 0 1018 0 9 9 0 10-18 0z" />
        </svg>
      </div>
      <div className="font-extrabold text-slate-800 text-lg">{title}</div>
      <div className="text-slate-500 text-base mt-2">{subtitle}</div>
    </div>
  );
}
