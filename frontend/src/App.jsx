 import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Scroll
import RouteScrollTop from "./components/RouteScrollTop";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/faq";

// ✅ New Services Pages
import SkilledNursingStaffing from "./pages/services/SkilledNursingStaffing";
import HomeCare from "./pages/services/HomeCare";
import PediatricNursing from "./pages/services/PediatricNursing";
import GeriatricNursing from "./pages/services/GeriatricNursing";
import SpecializedCare from "./pages/services/SpecializedCare";

// Forms
import RequestNurse from "./forms/RequestNurse";
import ApplyNurse from "./forms/ApplyNurse";

export default function App() {
  return (
    <>
      {/* Auto scroll on route change */}
      <RouteScrollTop />

      {/* Header */}
      <Header />

      {/* Routes */}
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        {/* Career Page */}
        <Route path="/careers" element={<ApplyNurse />} />

        {/* ✅ New Service Pages */}
        <Route
          path="/services/staffing"
          element={<SkilledNursingStaffing />}
        />

        <Route
          path="/services/home-care"
          element={<HomeCare />}
        />

        <Route
          path="/services/pediatric"
          element={<PediatricNursing />}
        />

        <Route
          path="/services/geriatric"
          element={<GeriatricNursing />}
        />

        <Route
          path="/services/specialized"
          element={<SpecializedCare />}
        />

        {/* Client Form */}
        <Route path="/request-nurse" element={<RequestNurse />} />

      </Routes>

      {/* Footer */}
      <Footer />

      {/* Scroll Button */}
      <ScrollToTop />
    </>
  );
}
