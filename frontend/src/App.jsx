 import React from "react";
import { Routes, Route } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/faq"; // filename case-sensitive
import Contact from "./pages/Contact";
import CareerPage from "./pages/Career";
import TeamPage from "./pages/TeamPage";
import Messagefromceo from "./pages/MessageFromCEO";
import Autismiscool from "./pages/AutismIsCool";
import Campaign from "./pages/Campaign";




// ✅ Services Pages
import CulturallyResponsiveCare from "./pages/services/CulturallyResponsiveCare";
import CompassionRespect from "./pages/services/CompassionRespect";
import EvidenceBasedABA from "./pages/services/EvidenceBasedABA";
import FlexibleSupport from "./pages/services/FlexibleSupport";

export default function App() {
  return (
    <>
      <TopNavbar />
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/message-from-ceo" element={<Messagefromceo />} />
        <Route path="/autism-is-cool" element={<Autismiscool />} />
        <Route path="/campaigns" element={<Campaign />} />

        {/* ✅ Services Pages */}
        <Route
          path="/services/culturally-responsive-care"
          element={<CulturallyResponsiveCare />}
        />
        <Route
          path="/services/compassion-respect"
          element={<CompassionRespect />}
        />
        <Route
          path="/services/evidence-based-aba"
          element={<EvidenceBasedABA />}
        />
        <Route
          path="/services/flexible-support"
          element={<FlexibleSupport />}
        />
      </Routes>

      <Footer />

      {/* ✅ Scroll to top button */}
      <ScrollToTop />
    </>
  );
}
