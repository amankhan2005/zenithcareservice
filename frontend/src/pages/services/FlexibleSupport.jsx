 import React from "react";
import {
  CheckCircle,
  Sparkles,
  Clock,
  Home,
  Laptop,
  Shuffle,
  Users,
} from "lucide-react";

import flexibleImg from "../../assets/services/home.png";

/* ================= BENEFITS ================= */
const benefits = [
  {
    icon: Clock,
    title: "Rapid Response Support",
    description:
      "We adapt quickly to changing needs, ensuring timely adjustments to therapy plans and schedules.",
  },
  {
    icon: Home,
    title: "Multiple Service Settings",
    description:
      "Services are available in-home, in-clinic, school-based, and through telehealth options.",
  },
  {
    icon: Laptop,
    title: "Hybrid Care Options",
    description:
      "Flexible combinations of in-person and virtual sessions to fit your family’s lifestyle.",
  },
  {
    icon: Shuffle,
    title: "Adaptive Scheduling",
    description:
      "Therapy schedules are customized to accommodate family routines and evolving priorities.",
  },
];

/* ================= DELIVERY ================= */
const deliveryMethods = [
  {
    icon: CheckCircle,
    title: "Personalized Care Planning",
    description:
      "Support plans evolve as your child grows, ensuring continuity and relevance over time.",
  },
  {
    icon: Users,
    title: "Family-Centered Flexibility",
    description:
      "Families actively participate in shaping schedules, formats, and therapy goals.",
  },
  {
    icon: Sparkles,
    title: "Responsive, Ethical Care",
    description:
      "Flexibility is delivered within evidence-based and ethical clinical frameworks.",
  },
];

/* ================= WHO ================= */
const whoItsFor = [
  "Families needing adaptable scheduling options",
  "Children benefiting from hybrid or multi-setting therapy",
  "Caregivers balancing work, school, and therapy commitments",
  "Families seeking responsive and personalized ABA services",
];

/* ================= IMPACT ================= */
const impactPoints = [
  "Reduced stress for families",
  "Consistent therapy engagement",
  "Improved accessibility to care",
  "Sustainable long-term support",
];

export default function FlexibleSupport() {
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
                <span className="text-sm font-semibold">Adaptive Care</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Speed &
                <span className="block text-blue-100">Agility</span>
              </h1>

              <p className="text-xl text-blue-50 leading-relaxed mb-6">
                At <strong>Decoder Health</strong>, we provide flexible ABA
                services that adapt quickly to your family’s changing needs.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed">
                Our adaptive support model ensures consistent care through
                in-home, clinic-based, school, and telehealth services.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E63D9] rounded-xl font-semibold hover:bg-blue-50 transition shadow-xl"
                >
                  Get Flexible Support
                  <CheckCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative lg:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-[2.5rem] blur-3xl" />

              <img
                src={flexibleImg}
                alt="Flexible ABA Support Services"
                className="relative w-full max-w-[720px] h-[420px] lg:h-[520px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white/30"
                loading="lazy"
              />

              {/* floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      Flexible
                    </div>
                    <div className="text-sm text-gray-600">
                      Care Options
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
              Why Flexibility Matters
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Support That Adapts With You
            </h2>
            <p className="text-lg text-gray-600">
              Flexible ABA services remove barriers and make consistent therapy
              accessible for families.
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
              Our Approach
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Deliver Flexible Support
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our service model is designed to respond quickly while maintaining
              clinical quality and consistency.
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
              Who Flexible Support Is For
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
              Why Flexible Care Matters
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
