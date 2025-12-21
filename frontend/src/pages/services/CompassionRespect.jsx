 import React from "react";
import {
  Heart,
  Users,
  CheckCircle,
  Sparkles,
  HandHeart,
  ShieldCheck,
  Home,
  Smile,
} from "lucide-react";

import compassionImg from "../../assets/services/parent.jpg";

/* ================= CORE VALUES ================= */
const coreValues = [
  {
    icon: Heart,
    title: "Empathy-Led Care",
    description:
      "We prioritize understanding each child’s emotions, experiences, and needs to create a safe and nurturing therapy environment.",
  },
  {
    icon: Users,
    title: "Family Partnership",
    description:
      "Families are active partners in care, ensuring transparency, trust, and shared decision-making throughout therapy.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Practice",
    description:
      "Our clinicians follow the highest ethical standards, honoring dignity, consent, and respect at every step.",
  },
  {
    icon: HandHeart,
    title: "Respectful Communication",
    description:
      "We listen without judgment and communicate with compassion, clarity, and cultural awareness.",
  },
];

/* ================= HOW WE PRACTICE ================= */
const howWePractice = [
  {
    icon: Home,
    title: "Emotionally Safe Environments",
    description:
      "Therapy spaces—home, school, or clinic—are designed to help children feel secure, respected, and understood.",
  },
  {
    icon: Smile,
    title: "Strength-Based Approach",
    description:
      "We focus on each child’s abilities and progress, celebrating strengths rather than emphasizing limitations.",
  },
  {
    icon: Users,
    title: "Collaborative Decision-Making",
    description:
      "Families are involved in goal-setting, progress reviews, and therapy adjustments throughout care.",
  },
];

/* ================= WHO IT’S FOR ================= */
const whoItsFor = [
  "Children who need emotionally supportive and respectful therapy",
  "Families seeking trust-based ABA services",
  "Caregivers who value collaboration and transparency",
  "Children who struggle in rigid or high-pressure therapy models",
];

/* ================= IMPACT ================= */
const impactPoints = [
  "Stronger trust between families and therapists",
  "Improved emotional safety for children",
  "More positive therapy engagement",
  "Long-term, respectful therapeutic relationships",
];

export default function CompassionRespect() {
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
                <span className="text-sm font-semibold">Our Core Values</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Compassion &
                <span className="block text-blue-100">
                  Respect in Every Step
                </span>
              </h1>

              <p className="text-xl text-blue-50 leading-relaxed mb-6">
                At <strong>Decoder Health</strong>, compassion and respect guide
                every interaction — shaping how we support children, families,
                and therapists.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed">
                We believe meaningful progress happens when children feel safe,
                families feel heard, and therapy is built on dignity and trust.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E63D9] rounded-xl font-semibold hover:bg-blue-50 transition shadow-xl"
                >
                  Start Your Journey
                  <CheckCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative lg:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-[2.5rem] blur-3xl" />

              <img
                src={compassionImg}
                alt="Compassionate and Respectful ABA Therapy"
                className="relative w-full max-w-[720px] h-[420px] lg:h-[520px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white/30"
                loading="lazy"
              />

              {/* floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-xl flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Trust</div>
                    <div className="text-sm text-gray-600">
                      Built Through Care
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 text-[#1E63D9] rounded-full text-sm font-semibold mb-4">
              Our Foundation
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built on Compassion & Respect
            </h2>
            <p className="text-lg text-gray-600">
              These values are embedded into every interaction and therapy
              decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((item, i) => {
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

      {/* ================= HOW WE PRACTICE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-blue-50 text-[#1E63D9] rounded-full text-sm font-semibold mb-6">
              Our Approach
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Practice Compassionate Care
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Compassion is reflected not only in words, but in everyday actions,
              decisions, and relationships.
            </p>
          </div>

          <div className="space-y-6">
            {howWePractice.map((item, i) => {
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
              Who This Approach Is For
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
              Why Compassion & Respect Matter
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
