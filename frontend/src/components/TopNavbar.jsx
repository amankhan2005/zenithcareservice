 import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSettings } from "../context/SettingsContext";

export default function TopNavbar() {
  const [open, setOpen] = useState(false);
  const { settings } = useSettings();

  const backend = import.meta.env.VITE_BACKEND_URL || "";

  // dynamic values with safe fallbacks
  const logoUrlRaw = settings?.logo || "";
  const logoUrl = logoUrlRaw
    ? logoUrlRaw.startsWith("http")
      ? logoUrlRaw
      : backend + logoUrlRaw
    : "/fallback-logo.png";

  const address =
    settings?.address ||
    "849 Fairmount Ave, Suite 200-T8, Towson, MD, 21286";
  const phone = settings?.phone || "(410) 905-5477";
  const email = settings?.email || "info@autismabapartners.com";

  // ------- SOCIAL LINKS: FIXED -------
  const facebook =
    settings?.facebook || settings?.fb || "";

  const instagram =
    settings?.instagram || settings?.ig || "";

  const x =
    settings?.twitter ||
    settings?.x ||
    settings?.x_url ||
    "";

  const tiktok =
    settings?.tiktok ||
    settings?.tikTok ||
    settings?.tiktok_url ||
    "";

  return (
    <div className="bg-[#225a36] text-white shadow-lg relative overflow-hidden">
      {/* subtle animated background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-40 h-40 bg-[#FBC02D] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Desktop / Tablet layout */}
        <div className="hidden md:flex justify-between items-center py-4">
          {/* Left Side: Contact Info */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#FBC02D] transition-all duration-300">
                <FaMapMarkerAlt className="text-white text-sm" />
              </div>
              <span className="group-hover:text-[#FBC02D] transition-colors duration-300 font-semibold tracking-wide">
                {address}
              </span>
            </a>

            <a
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 group transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#FBC02D] transition-all duration-300">
                <FaPhoneAlt className="text-white text-sm" />
              </div>
              <span className="group-hover:text-[#FBC02D] transition-colors duration-300 font-semibold tracking-wide">
                {phone}
              </span>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 group transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#FBC02D] transition-all duration-300">
                <FaEnvelope className="text-white text-sm" />
              </div>
              <span className="group-hover:text-[#FBC02D] transition-colors duration-300 font-semibold tracking-wide">
                {email}
              </span>
            </a>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-3">
            {facebook && (
              <a
                href={facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 rounded-xl hover:bg-[#FBC02D] transition-transform transform hover:scale-110"
              >
                <FaFacebookF className="text-white text-base" />
              </a>
            )}

            {instagram && (
              <a
                href={instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 rounded-xl hover:bg-[#FBC02D] transition-transform transform hover:scale-110"
              >
                <FaInstagram className="text-white text-base" />
              </a>
            )}

            {x && (
              <a
                href={x}
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 rounded-xl hover:bg-[#FBC02D] transition-transform transform hover:scale-110"
              >
                <FaXTwitter className="text-white text-base" />
              </a>
            )}

            {tiktok && (
              <a
                href={tiktok}
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 rounded-xl hover:bg-[#FBC02D] transition-transform transform hover:scale-110"
              >
                <FaTiktok className="text-white text-base" />
              </a>
            )}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex justify-between items-center py-3">
          {/* Left: address + social icons */}
          <div className="flex items-center gap-3">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <div className="bg-white/10 p-2 rounded-lg">
                <FaMapMarkerAlt className="text-white text-sm" />
              </div>
              <span className="text-sm font-semibold">
                {address.split(",")[0] || "Towson, MD"}
              </span>
            </a>

            {/* Social icons beside address */}
            <div className="flex items-center gap-2 ml-2">
              {facebook && (
                <a
                  href={facebook}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-white/10 rounded-md hover:bg-[#FBC02D] transition"
                >
                  <FaFacebookF className="text-white text-xs" />
                </a>
              )}

              {instagram && (
                <a
                  href={instagram}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-white/10 rounded-md hover:bg-[#FBC02D] transition"
                >
                  <FaInstagram className="text-white text-xs" />
                </a>
              )}

              {x && (
                <a
                  href={x}
                  aria-label="X (Twitter)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-white/10 rounded-md hover:bg-[#FBC02D] transition"
                >
                  <FaXTwitter className="text-white text-xs" />
                </a>
              )}

              {tiktok && (
                <a
                  href={tiktok}
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-white/10 rounded-md hover:bg-[#FBC02D] transition"
                >
                  <FaTiktok className="text-white text-xs" />
                </a>
              )}
            </div>
          </div>

          {/* Right: dropdown toggle */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="topbar-mobile"
            className="inline-flex items-center justify-center p-2 rounded-md bg-white/10 hover:bg-white/20"
          >
            <svg
              className={`w-5 h-5 transform transition-transform ${
                open ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Collapsible mobile panel */}
        <div
          id="topbar-mobile"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 text-sm">
            <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-3 px-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <FaPhoneAlt className="text-white text-sm" />
              </div>
              <span className="font-semibold">{phone}</span>
            </a>

            <a href={`mailto:${email}`} className="flex items-center gap-3 px-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <FaEnvelope className="text-white text-sm" />
              </div>
              <span className="font-semibold">{email}</span>
            </a>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              className="flex items-center gap-3 px-2"
            >
              <div className="bg-white/10 p-2 rounded-lg">
                <FaMapMarkerAlt className="text-white text-sm" />
              </div>
              <span className="font-semibold">{address}</span>
            </a>

            <div className="flex items-center gap-3 px-2">
              {facebook && (
                <a href={facebook} className="p-2 bg-white/10 rounded-md">
                  <FaFacebookF className="text-white text-base" />
                </a>
              )}

              {instagram && (
                <a href={instagram} className="p-2 bg-white/10 rounded-md">
                  <FaInstagram className="text-white text-base" />
                </a>
              )}

              {x && (
                <a href={x} className="p-2 bg-white/10 rounded-md">
                  <FaXTwitter className="text-white text-base" />
                </a>
              )}

              {tiktok && (
                <a href={tiktok} className="p-2 bg-white/10 rounded-md">
                  <FaTiktok className="text-white text-base" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
