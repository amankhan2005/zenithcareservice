 // src/components/AdminSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCog,
  FaSlidersH,
  FaEnvelope,
  FaBriefcase,
  FaTimes,
  FaBars,
} from "react-icons/fa";

import Logo from "../assets/autism-logo.webp"; // put your white-logo file here

export default function AdminSidebar({
  isExpanded,
  setIsExpanded,
  isOpen,
  setIsOpen,
}) {
  const links = [
    { name: "Dashboard", path: "/admin", icon: <FaHome /> },
    { name: "Global Settings", path: "/admin/settings", icon: <FaCog /> },
    // { name: "Slider", path: "/admin/slider", icon: <FaSlidersH /> },
    { name: "Contacts", path: "/admin/contacts", icon: <FaEnvelope /> },
    { name: "Careers", path: "/admin/careers", icon: <FaBriefcase /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button - Enhanced for better touch */}
      <button
        aria-label="Open menu"
        className="lg:hidden fixed top-3 sm:top-4 left-3 sm:left-4 z-[60] p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-green-800 to-green-700 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-green-600"
        onClick={() => setIsOpen(true)}
      >
        <FaBars className="text-lg sm:text-xl" />
      </button>

      {/* Mobile Overlay - Faster and more responsive */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[45] transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}

      {/* SIDEBAR - Optimized for mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-50
          bg-gradient-to-b from-green-800 via-green-900 to-green-800
          text-white shadow-2xl
          transform transition-transform duration-300 ease-out
          border-r-2 border-green-700/30
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${isExpanded ? "w-64" : "w-20"}
          ${isOpen ? "w-72 sm:w-80" : ""} // Wider on mobile for better touch
        `}
        onMouseEnter={() => !isOpen && setIsExpanded(true)}
        onMouseLeave={() => !isOpen && setIsExpanded(false)}
        role="navigation"
        aria-label="Admin sidebar"
      >
        {/* Decorative background elements - Optimized */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/2 w-48 h-48 bg-amber-400 rounded-full blur-3xl"></div>
        </div>

        {/* Header / Logo - Mobile optimized */}
        <div className={`relative z-10 flex items-center ${isExpanded || isOpen ? "justify-between" : "justify-center"} p-4 sm:p-5 border-b border-green-700/30 bg-gradient-to-r from-green-800/30 to-green-700/30 backdrop-blur-sm`}>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-200"></div>
              <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-2 sm:p-2.5 shadow-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center overflow-hidden border-2 border-orange-300 group-hover:scale-105 transition-transform duration-200">
                <img src={Logo} alt="Autism ABA Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter brightness-0 invert" />
              </div>
            </div>

            {(isExpanded || isOpen) && (
              <div className="animate-fadeInRight">
                <h2 className="font-black text-base sm:text-lg text-white tracking-tight bg-gradient-to-r from-white to-orange-100 bg-clip-text">Autism ABA</h2>
                <p className="text-[10px] sm:text-xs text-green-200 font-semibold">Admin Portal</p>
              </div>
            )}
          </div>

          {/* Mobile close button - Better touch target */}
          <button
            className="lg:hidden text-white bg-white/10 hover:bg-white/20 p-2 sm:p-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 border border-white/20"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes className="text-lg sm:text-xl" />
          </button>
        </div>

        {/* NAV - Mobile optimized spacing */}
        <nav className="relative z-10 mt-4 sm:mt-6 px-2 sm:px-3">
          <ul className="space-y-1 sm:space-y-2">
            {links.map((link, index) => (
              <li key={link.path} className="animate-fadeInUp" style={{animationDelay: `${index * 30}ms`}}>
                <NavLink
                  to={link.path}
                  end={link.path === "/admin"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `group relative flex items-center px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl transition-all duration-200 overflow-hidden
                      ${isActive 
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-green-900 shadow-lg" 
                        : "text-white hover:bg-orange-500/20 hover:translate-x-1 active:scale-98"}
                      ${isExpanded || isOpen ? "justify-start" : "justify-center"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-600 to-amber-600 rounded-r-full"></div>
                      )}
                      
                      {/* Icon container - Better mobile sizing */}
                      <div className={`relative flex-shrink-0 ${isActive ? 'text-green-900' : 'text-white group-hover:text-orange-200'} transition-colors duration-200`}>
                        <div className={`text-lg sm:text-xl ${isActive ? 'scale-110' : 'group-hover:scale-110'} transition-transform duration-200`}>
                          {link.icon}
                        </div>
                        {!isActive && !isExpanded && !isOpen && (
                          <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 rounded-lg blur-sm transition-all duration-200"></div>
                        )}
                      </div>

                      {/* Text label - Mobile optimized */}
                      {(isExpanded || isOpen) && (
                        <span className={`ml-3 sm:ml-4 font-semibold text-sm sm:text-base ${isActive ? 'text-green-900' : 'text-white'} transition-colors duration-200`}>
                          {link.name}
                        </span>
                      )}

                      {/* Hover effect background - Faster animation */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom decoration - Mobile optimized */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 border-t border-green-700/30 bg-gradient-to-r from-green-800/30 to-green-700/30 backdrop-blur-sm ${isExpanded || isOpen ? '' : 'hidden'}`}>
          <div className="text-center">
            <p className="text-[10px] sm:text-xs text-green-300 font-semibold">Version 1.0</p>
            <p className="text-[8px] sm:text-[10px] text-green-400/70 mt-1">© 2025 Autism ABA</p>
          </div>
        </div>
      </aside>

      {/* ANIMATIONS - Optimized for performance */}
      <style>
        {`
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(-8px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fadeInRight {
            animation: fadeInRight 0.2s ease-out;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.3s ease-out forwards;
            opacity: 0;
          }

          /* Mobile optimizations */
          @media (max-width: 640px) {
            aside {
              -webkit-overflow-scrolling: touch;
            }
          }
        `}
      </style>
    </>
  );
}