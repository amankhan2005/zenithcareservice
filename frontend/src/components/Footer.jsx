 // src/components/Footer.jsx
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si"; // reliable TikTok icon
// If you want the new "X" logo later, you can import FaXTwitter from "react-icons/fa6"

import { useSettings } from "../context/SettingsContext";

export default function Footer() {
  const { settings } = useSettings();
  if (!settings) return null;

  // backend base (used to prefix local uploads)
  const backend = import.meta.env.VITE_BACKEND_URL || "";

  // logo handling (if stored as relative path on backend)
  const logoUrl = settings.logo
    ? settings.logo.startsWith("http")
      ? settings.logo
      : `${backend}${settings.logo}`
    : "/fallback-logo.png";

  // robust social lookups: handle keys like twitter or x
  const facebookUrl = settings.facebook || settings.fb || "";
  const instagramUrl = settings.instagram || settings.ig || "";
  const twitterUrl = settings.twitter || settings.x || settings.x_url || "";
  const tiktokUrl = settings.tiktok || settings.tikTok || settings.tiktok_url || "";

  return (
    <footer className="bg-gradient-to-b from-[#07251f] to-[#0f2b23] text-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start pb-10">

          {/* Column 1 - Logo */}
          <div className="px-2 md:px-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <div className="bg-white p-3 rounded-xl shadow-lg inline-block">
                <img
                  src={logoUrl}
                  alt="Site Logo"
                  className="w-36 h-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Empowering children through evidence-based ABA therapy and family support.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="px-2 md:px-6">
            <h4 className="text-lg font-semibold text-white mb-3 relative inline-block after:block after:w-12 after:h-1 after:bg-orange-400 after:rounded-sm after:mt-3">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              <li><a href="/" className="block hover:text-white hover:pl-2 transition-all">Home</a></li>
              <li><a href="/about-us" className="block hover:text-white hover:pl-2 transition-all">About Us</a></li>
              <li><a href="/services" className="block hover:text-white hover:pl-2 transition-all">Services</a></li>
              <li><a href="/contact-us" className="block hover:text-white hover:pl-2 transition-all">Contact</a></li>
              <li><a href="/faq" className="block hover:text-white hover:pl-2 transition-all">FAQs</a></li>
              <li><a href="/careers" className="block hover:text-white hover:pl-2 transition-all">Careers</a></li>
            </ul>
          </div>

          {/* Column 3 - Get in Touch */}
          <address className="not-italic px-2 md:px-6">
            <h4 className="text-lg font-semibold text-white mb-3 relative inline-block after:block after:w-12 after:h-1 after:bg-orange-400 after:rounded-sm after:mt-3">
              Get in Touch
            </h4>

            <ul className="mt-4 space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-400 mt-1" />
                <span>{settings.address || "No address available"}</span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-400" />
                <a href={`tel:${settings.phone || ""}`} className="hover:text-white transition-colors">
                  {settings.phone || "N/A"}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-400" />
                <a href={`mailto:${settings.email || ""}`} className="hover:text-white transition-colors">
                  {settings.email || "N/A"}
                </a>
              </li>
            </ul>
          </address>

          {/* Column 4 - Social */}
          <div className="px-2 md:px-6">
            <h4 className="text-lg font-semibold text-white mb-3 relative inline-block after:block after:w-12 after:h-1 after:bg-orange-400 after:rounded-sm after:mt-3">
              Follow Us
            </h4>

            <p className="text-gray-300 text-sm mt-2 mb-4">
              Join our community for tips, success stories, and event updates.
            </p>

            <div className="flex items-center gap-3">
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 shadow-sm"
                >
                  <FaFacebookF />
                </a>
              )}

              {instagramUrl && (
                <a
                  href={instagramUrl}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 shadow-sm"
                >
                  <FaInstagram />
                </a>
              )}

              {twitterUrl && (
                <a
                  href={twitterUrl}
                  aria-label="Twitter / X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 shadow-sm"
                >
                  <FaTwitter />
                </a>
              )}

              {tiktokUrl && (
                <a
                  href={tiktokUrl}
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 shadow-sm"
                >
                  <SiTiktok />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-gray-400">
          <div>© {new Date().getFullYear()} Autism ABA Partners. All Rights Reserved.</div>
          <div>
            Developed by{" "}
            <a
              href="https://www.webieapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              WebieApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
