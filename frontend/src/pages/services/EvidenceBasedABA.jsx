 import React from "react";
import {
  CheckCircle,
  Sparkles,
  Brain,
  BarChart3,
  ClipboardCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

import abaImg from "../../assets/services/evidence-based-aba.jpg";

/* ================= BENEFITS ================= */
const benefits = [
  {
    icon: Brain,
    title: "Scientifically Proven Methods",
    description:
      "Our ABA programs are grounded in decades of behavioral science research and validated clinical practices.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Every therapy plan is guided by real-time data collection and measurable progress tracking.",
  },
  {
    icon: ClipboardCheck,
    title: "Individualized Treatment Plans",
    description:
      "Programs are tailored to each child’s unique strengths, needs, and developmental goals.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Excellence",
    description:
      "All services are supervised by Board-Certified Behavior Analysts (BCBAs).",
  },
];

/* ================= DELIVERY ================= */
const deliveryMethods = [
  {
    icon: CheckCircle,
    title: "Ongoing Assessment",
    description:
      "We continuously evaluate progress and refine strategies to ensure meaningful outcomes.",
  },
  {
    icon: Users,
    title: "Family Collaboration",
    description:
      "Families are involved in goal-setting, reviews, and skill generalization beyond therapy sessions.",
  },
  {
    icon: Sparkles,
    title: "Ethical, Evidence-Based Care",
    description:
      "We follow best-practice standards aligned with BACB ethical and clinical guidelines.",
  },
];

/* ================= WHO ================= */
const whoItsFor = [
  "Children who benefit from structured, research-backed intervention",
  "Families seeking measurable and transparent progress",
  "Caregivers who value data-driven therapy decisions",
  "Children needing consistency across home, school, and community",
];

/* ================= IMPACT ================= */
const impactPoints = [
  "Clear, measurable developmental progress",
  "Improved communication and adaptive skills",
  "Consistent outcomes across environments",
  "Long-term, sustainable skill development",
];

export default function EvidenceBasedABA() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B4F9F] via-[#1E63D9] to-[#3F7FEF]">
        {/* glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* CONTENT */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  Science-Driven Care
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Evidence-Based
                <span className="block text-blue-100">ABA Therapy</span>
              </h1>

              <p className="text-xl text-blue-50 leading-relaxed mb-6">
                At <strong>Decoder Health</strong>, we deliver ABA therapy rooted
                in science — ensuring every intervention is purposeful,
                measurable, and effective.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed">
                Our evidence-based approach focuses on meaningful outcomes that
                improve communication, behavior, and daily living skills.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E63D9] rounded-xl font-semibold hover:bg-blue-50 transition shadow-xl"
                >
                  Get Started
                  <CheckCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative lg:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-[2.5rem] blur-3xl" />

              <img
                src={abaImg}
                alt="Evidence Based ABA Therapy"
                className="relative w-full max-w-[720px] h-[420px] lg:h-[520px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white/30"
                loading="lazy"
              />

              {/* floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      Data-Led
                    </div>
                    <div className="text-sm text-gray-600">
                      Measurable Outcomes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 text-[#1E63D9] rounded-full text-sm font-semibold mb-4">
              Why Evidence Matters
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Therapy Backed by Science
            </h2>
            <p className="text-lg text-gray-600">
              Evidence-based ABA ensures consistent progress using proven,
              ethical, and research-supported methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1E63D9] hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW WE DELIVER ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-blue-50 text-[#1E63D9] rounded-full text-sm font-semibold mb-6">
              Our Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Deliver Evidence-Based ABA
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our clinical process ensures accountability, transparency, and
              consistent improvement throughout therapy.
            </p>
          </div>

          <div className="space-y-6">
            {deliveryMethods.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHO & WHY ================= */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* WHO */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <Users className="w-12 h-12 text-[#1E63D9] mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Who Evidence-Based ABA Is For
            </h2>
            <div className="space-y-4">
              {whoItsFor.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#1E63D9]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WHY */}
          <div className="bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-3xl p-10 text-white shadow-xl">
            <Sparkles className="w-12 h-12 mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Why Evidence-Based Care Matters
            </h2>
            <div className="space-y-3">
              {impactPoints.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
