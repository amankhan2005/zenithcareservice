 import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import WhyUs from "../components/home/About";
import HomeCareCTA from "../components/HomeCareCTA";
import FAQ from "../components/home/FAQ";

// Hero Image
import heroImg from "../assets/about-hero.jpg";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white overflow-hidden"
    >

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 pt-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">


          {/* Left Content */}
          <div className="relative">

            {/* Pink Glow */}
            <div className="absolute -left-20 top-20 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>


            {/* Tagline */}
            <p className="text-pink-500 font-semibold mb-4 relative z-10">
              Trusted Nursing, Staffing & Home Healthcare Services
            </p>


            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] mb-6">

              We are Committed <br />
              to Providing{" "}
              <span className="font-serif italic font-medium">
                Complete Care
              </span>

            </h1>


            {/* Description */}
            <p className="text-gray-600 max-w-lg mb-8 relative z-10">

              Zenith Care Services delivers skilled nursing staffing,
              home-based, pediatric, geriatric, and specialized healthcare
              services for hospitals and families. We accept major insurance
              plans and private pay options to ensure accessible,
              compassionate, and personalized care.

            </p>


            {/* CTA */}
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition relative z-10"
            >
              Contact Us →
            </Link>

          </div>


          {/* Right Image */}
          <div className="relative">

            <img
              src={heroImg}
              alt="Zenith Care Services Team"
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>

      </div>


      {/* OTHER SECTIONS */}
      <WhyUs />

      <HomeCareCTA />

      <FAQ />


    </motion.section>
  );
}
