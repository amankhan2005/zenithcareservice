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

import compassionImg from "../../assets/services/culturally-responsive-care.jpg";

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

const howWePractice = [
  {
    icon: Home,
    title: "Emotionally Safe Environments",
    description:
      "We design therapy spaces—at home, school, or clinic—where children feel secure, respected, and understood.",
  },
  {
    icon: Smile,
    title: "Strength-Based Approach",
    description:
      "Instead of focusing only on challenges, we recognize each child’s strengths and celebrate progress at every stage.",
  },
  {
    icon: Users,
    title: "Collaborative Decision-Making",
    description:
      "Families are involved in goal-setting, progress reviews, and therapy adjustments throughout care.",
  },
];

const whoItsFor = [
  "Children who need emotionally supportive and respectful therapy",
  "Families seeking trust-based ABA services",
  "Caregivers who value collaboration and transparency",
  "Children who may struggle in rigid or high-pressure therapy models",
];

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
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Core Values</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Compassion &
                <span className="block text-blue-100">Respect in Every Step</span>
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

            {/* Image */}
            <div className="relative lg:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-[2.5rem] blur-3xl" />

              <img
                src={compassionImg}
                alt="Compassion and Respect in ABA Therapy"
                className="relative w-full h-[420px] lg:h-[520px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white/30"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built on Compassion & Respect
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              These values are embedded into how therapy is delivered every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1E63D9] hover:shadow-xl transition"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW WE PRACTICE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How We Practice Compassionate Care
            </h2>
            <p className="text-lg text-gray-600">
              Compassion is reflected not just in words, but in daily actions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howWePractice.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 bg-blue-100 text-[#1E63D9] rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     
    </main>
  );
}
