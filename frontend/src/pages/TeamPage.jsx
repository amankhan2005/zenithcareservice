 import React from "react";
import { Heart } from "lucide-react";

import amirImg from "../assets/team/amir.png";
import aadhyaImg from "../assets/team/aadhya.png";
import zaynahImg from "../assets/team/zaynah.png";

export default function TeamPage() {
  return (
    <div className="bg-white">

      {/* ================= HERO / BREADCRUMB ================= */}
      <section className="bg-gradient-to-r from-[#0B5ED7] to-[#3B82F6]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-white text-center">

          {/* Breadcrumb like reference */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            <span>Our Team</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet the Team
          </h1>

          <div className="w-20 h-[3px] bg-white mx-auto mb-6 rounded-full" />

          <p className="max-w-7xl mx-auto text-lg text-white/90">
            Compassionate ABA professionals supporting children and families
            throughout Northern Virginia.
          </p>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-28">

          {/* ========== MEMBER 1 (IMG LEFT | CONTENT RIGHT) ========== */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={amirImg}
              alt="Amir Ansari"
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
            />

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B5ED7]">
                Amir Ansari
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                MS, BCBA, LBA · Clinical Director
              </p>

              <div className="w-20 h-[2px] bg-[#0B5ED7] mb-6" />

              <p className="text-gray-700 leading-7">
                Amir Ansari, MS., BCBA, LBA, is a licensed and board-certified
                behavior analyst who has been working with individuals with
                Autism Spectrum Disorder since 2008 in Canada. He has completed
                both undergraduate and graduate degrees in Applied Behavior
                Analysis and has supported individuals from early childhood to
                adulthood across home, clinic, school, university, group homes,
                and community settings.
                <br /><br />
                With more than 15 years of experience, Amir brings a compassionate,
                client-centered approach to care. He is bilingual (English and
                Farsi) and is deeply committed to supporting families facing
                language barriers. As Clinical Director at Decoder Health, his
                goal is to empower families and staff to improve quality of life
                through meaningful and lasting behavioral change.
              </p>
            </div>
          </div>

          {/* ========== MEMBER 2 (CONTENT LEFT | IMG RIGHT) ========== */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B5ED7]">
                Aadhya Mysore
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Behavior Technician
              </p>

              <div className="w-20 h-[2px] bg-[#0B5ED7] mb-6" />

              <p className="text-gray-700 leading-7">
                Aadhya Mysore is currently a senior at The George Washington
                University pursuing a Bachelor of Science in Psychological and
                Brain Studies with minors in Statistics and Criminal Justice.
                <br /><br />
                With a strong academic foundation and hands-on experience through
                research and internships, Aadhya is passionate about contributing
                to Decoder Health as a Behavior Technician and supporting children
                and families through evidence-based ABA care.
              </p>
            </div>

            <img
              src={aadhyaImg}
              alt="Aadhya Mysore"
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
            />
          </div>

          {/* ========== MEMBER 3 (IMG LEFT | CONTENT RIGHT) ========== */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={zaynahImg}
              alt="Zaynah Vaidya Shaikh"
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
            />

            <div>
              <h2 className="text-3xl font-bold text-[#0B5ED7]">
                Zaynah Vaidya Shaikh
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Strategic Engagement Specialist
              </p>

              <div className="w-20 h-[2px] bg-[#0B5ED7] mb-6" />

              <p className="text-gray-700 leading-7">
                Zaynah Vaidya Shaikh is a graduate of McGill University with a
                Bachelor of Arts in Psychology. She has supported autistic
                adolescents in academic settings and developed a strong
                understanding of culturally sensitive care.
                <br /><br />
                Through leadership roles and community engagement, Zaynah has
                built strong external partnerships and is excited to expand
                access to ABA services throughout Northern Virginia—helping
                families create meaningful progress in their child’s journey.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
