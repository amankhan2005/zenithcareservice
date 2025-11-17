 import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function AdminHeader({ onLogout, isExpanded }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dontAsk, setDontAsk] = useState(false);

  const startLogout = () => {
    setShowModal(false);
    setLoading(true);

    setTimeout(() => {
      if (onLogout) onLogout();
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    if (dontAsk) startLogout();
    else setShowModal(true);
  };

  return (
    <>
      {/* HEADER TOP BAR */}
      <header
        className={`
          fixed top-0 right-0 h-20 md:h-24
          bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500
          text-white shadow-2xl
          z-[900] flex items-center justify-between px-4 sm:px-6 md:px-8
          transition-all duration-500 ease-in-out
          ${isExpanded ? "lg:left-64" : "lg:left-20"}
          border-b-2 border-white/20 backdrop-blur-sm
        `}
      >
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 -right-32 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* TITLE */}
        <div className="relative z-10 flex items-center gap-3 sm:gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md"></div>
            <div className="relative bg-white/20 backdrop-blur-xl p-2 sm:p-3 rounded-2xl border-2 border-white/30 shadow-xl hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black tracking-tight drop-shadow-md bg-clip-text">
              Autism ABA Admin
            </h2>
            <p className="text-xs sm:text-sm text-orange-100 -mt-0.5 font-semibold drop-shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 bg-amber-300 rounded-full animate-pulse shadow-lg shadow-amber-300/50"></span>
              Management System
            </p>
          </div>
        </div>

        {/* PROFILE BUTTON */}
        <div className="relative z-10">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="group flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-xl px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-orange-300 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <FaUserCircle className="relative h-7 w-7 sm:h-8 sm:w-8 drop-shadow-lg" />
            </div>
            <div className="hidden sm:flex flex-col items-start">
              <span className="text-sm font-bold leading-tight">Admin</span>
              <span className="text-xs text-orange-100 leading-tight">Administrator</span>
            </div>
            <svg className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${showMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* DROPDOWN */}
          {showMenu && (
            <div className="absolute right-0 mt-4 w-64 bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden z-[999] animate-fadeInDropdown border-2 border-orange-100">
              <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 px-5 py-4 border-b-2 border-orange-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="relative flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-sm"></div>
                    <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center text-2xl font-black shadow-xl">
                      A
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base">Admin</p>
                    <p className="text-xs text-orange-700 font-semibold flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      System Administrator
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-5 py-4 text-sm text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300 font-bold group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-red-200 rounded-xl blur-sm opacity-0 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-red-100 p-2.5 rounded-xl group-hover:bg-red-200 transition-all duration-300 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 
                        102 0V4a1 1 0 00-1-1zm10.293 
                        9.293a1 1 0 001.414 1.414l3-3a1 
                        1 0 000-1.414l-3-3a1 1 0 
                        10-1.414 1.414L14.586 9H7a1 
                        1 0 100 2h7.586l-1.293 
                        1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Logout</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* PROGRESS BAR */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-100 to-amber-100 z-[999] shadow-xl overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 animate-progress relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
        </div>
      )}

      {/* LOGOUT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-orange-900/20 to-black/60 backdrop-blur-lg flex items-center justify-center z-[999] animate-fadeInBg p-4">
          <div className="relative bg-white rounded-[2rem] shadow-2xl p-6 sm:p-10 w-full max-w-md animate-fadeInScale border-2 border-orange-100 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full -mr-32 -mt-32 blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-100 to-orange-100 rounded-full -ml-24 -mb-24 blur-3xl opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl blur-xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-orange-100 via-red-50 to-orange-100 p-5 rounded-3xl border-2 border-orange-200 shadow-xl">
                    <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black mb-3 text-gray-900 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                Confirm Logout
              </h2>
              <p className="text-gray-600 mb-8 text-center font-medium text-sm sm:text-base">
                Are you sure you want to end your session?
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-5 mb-8 border-2 border-orange-200 shadow-inner">
                <label className="flex items-center justify-center cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="dontAsk"
                      checked={dontAsk}
                      onChange={() => setDontAsk(!dontAsk)}
                      className="sr-only peer"
                    />
                    <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all after:shadow-md peer-checked:bg-gradient-to-r peer-checked:from-orange-500 peer-checked:to-amber-500"></div>
                  </div>
                  <span className="ml-4 text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    Don't ask me again
                  </span>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 font-bold transition-all duration-300 hover:scale-105 border-2 border-gray-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={startLogout}
                  className="relative flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl overflow-hidden font-bold text-white transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 group-hover:from-red-600 group-hover:via-orange-600 group-hover:to-red-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
          .animate-progress {
            animation: progress 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 1.5s infinite;
          }

          @keyframes fadeInDropdown {
            from { opacity: 0; transform: translateY(-20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-fadeInDropdown {
            animation: fadeInDropdown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          @keyframes fadeInBg {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeInBg {
            animation: fadeInBg 0.4s ease-out;
          }

          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.85) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-fadeInScale {
            animation: fadeInScale 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }

          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>
    </>
  );
}