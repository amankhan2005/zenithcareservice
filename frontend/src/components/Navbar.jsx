 // src/components/MainNavbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import autismLogo from "../assets/svgviewer-output.svg";

export default function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const navLinkClasses = ({ isActive }) =>
    `relative px-4 py-2.5 text-[16px] font-medium transition-all duration-200 ${
      isActive
        ? "text-[#0B5ED7]"
        : "text-gray-700 hover:text-[#0B5ED7]"
    }`;

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-3" : "shadow-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center hover:scale-105 transition">
            <img
              src={autismLogo}
              alt="Decoder Health"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-16" : "h-20"
              }`}
            />
          </NavLink>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden lg:flex items-center gap-1">
            <li><NavLink to="/" className={navLinkClasses}>Home</NavLink></li>
            <li><NavLink to="/about-us" className={navLinkClasses}>About Us</NavLink></li>

            {/* SERVICES DROPDOWN */}
            <li
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center gap-1 px-4 py-2.5 cursor-pointer text-[16px] font-medium text-gray-700 hover:text-[#0B5ED7]">
                Services <FaChevronDown className="text-xs mt-[1px]" />
              </div>

              <div
                className={`absolute left-0 mt-3 w-72 rounded-xl bg-white border border-gray-100 shadow-xl transition-all duration-200 ${
                  openDropdown === "services"
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                {[
                  ["Culturally Competent Care", "/services/culturally-responsive-care"],
                  ["Grace & Respect", "/services/compassion-respect"],
                  ["Evidence-Based Practice", "/services/evidence-based-aba"],
                  ["Speed & Agility", "/services/flexible-support"],
                ].map(([label, to]) => (
                  <NavLink
                    key={to}
                    to={to}
                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#0B5ED7]/10 hover:text-[#0B5ED7]"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </li>

            <li><NavLink to="/faq" className={navLinkClasses}>FAQs</NavLink></li>
            <li><NavLink to="/careers" className={navLinkClasses}>Careers</NavLink></li>
            <li><NavLink to="/team" className={navLinkClasses}>Team</NavLink></li>

            {/* MORE DROPDOWN */}
            <li
              className="relative"
              onMouseEnter={() => setOpenDropdown("more")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center gap-1 px-4 py-2.5 cursor-pointer text-[16px] font-medium text-gray-700 hover:text-[#0B5ED7]">
                More <FaChevronDown className="text-xs mt-[1px]" />
              </div>

              <div
                className={`absolute right-0 mt-3 w-72 rounded-xl bg-white border border-gray-100 shadow-xl transition-all duration-200 ${
                  openDropdown === "more"
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <NavLink to="/message-from-ceo" className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#0B5ED7]/10 hover:text-[#0B5ED7]">
                  Message From CEO
                </NavLink>

                <NavLink to="/autism-is-cool" className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#0B5ED7]/10 hover:text-[#0B5ED7]">
                  Autism is Cool
                </NavLink>

                {/* ✅ EXTERNAL LINKS */}
                <a
                  href="https://www.youtube.com/@DecoderHealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#0B5ED7]/10 hover:text-[#0B5ED7]"
                >
                  Youtube Channel
                </a>

                <a
                  href="https://www.nimh.nih.gov/health/statistics/autism-spectrum-disorder-asd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#0B5ED7]/10 hover:text-[#0B5ED7]"
                >
                  Autism Spectrum Disorder
                </a>

                <NavLink to="/campaigns" className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#0B5ED7]/10 hover:text-[#0B5ED7]">
                  Campaigns
                </NavLink>
              </div>
            </li>
          </ul>

          {/* CTA */}
          <NavLink
            to="/contact-us"
            className="hidden lg:inline-flex items-center rounded-full bg-[#0B5ED7] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#084298] transition"
          >
            Contact us
          </NavLink>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100"
          >
            <span className="w-6 h-0.5 bg-gray-700 block relative before:absolute before:w-6 before:h-0.5 before:bg-gray-700 before:-top-2 after:absolute after:w-6 after:h-0.5 after:bg-gray-700 after:top-2"></span>
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl lg:hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-[#0B5ED7]">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="px-6 py-4 space-y-1">
              <NavLink to="/" onClick={()=>setMenuOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-[#0B5ED7]/10">Home</NavLink>
              <NavLink to="/about-us" onClick={()=>setMenuOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-[#0B5ED7]/10">About Us</NavLink>

              {/* MOBILE SERVICES */}
              <li>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium hover:bg-[#0B5ED7]/10"
                >
                  <span>Services</span>
                  <FaChevronDown className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {[
                      ["Culturally Competent Care", "/services/culturally-responsive-care"],
                      ["Grace & Respect", "/services/compassion-respect"],
                      ["Evidence-Based Practice", "/services/evidence-based-aba"],
                      ["Speed & Agility", "/services/flexible-support"],
                    ].map(([label, to]) => (
                      <NavLink
                        key={to}
                        to={to}
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 text-sm rounded-lg text-gray-600 hover:bg-[#0B5ED7]/10"
                      >
                        {label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>

              <NavLink to="/faq" onClick={()=>setMenuOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-[#0B5ED7]/10">FAQs</NavLink>
              <NavLink to="/careers" onClick={()=>setMenuOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-[#0B5ED7]/10">Careers</NavLink>
              <NavLink to="/team" onClick={()=>setMenuOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-[#0B5ED7]/10">Team</NavLink>

              {/* ✅ MOBILE EXTERNAL LINKS */}
              <a
                href="https://www.youtube.com/@DecoderHealth"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-lg hover:bg-[#0B5ED7]/10"
              >
                Youtube Channel
              </a>

              <a
                href="https://www.nimh.nih.gov/health/statistics/autism-spectrum-disorder-asd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-lg hover:bg-[#0B5ED7]/10"
              >
                Autism Spectrum Disorder
              </a>

              <NavLink to="/campaigns" onClick={()=>setMenuOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-[#0B5ED7]/10">Campaigns</NavLink>
            </ul>

            <div className="p-6 border-t">
              <NavLink
                to="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-[#0B5ED7] text-white py-3 rounded-lg font-semibold hover:bg-[#084298]"
              >
                Contact us
              </NavLink>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
