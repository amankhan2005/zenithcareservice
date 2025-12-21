 import React from "react";
import { Heart, Users, Globe, CheckCircle, Sparkles, BookOpen, Home, School } from "lucide-react";
 import careImg from "../../assets/services/culturally-responsive-care.jpg";

const benefits = [
  {
    icon: Users,
    title: "Family-Centered Care",
    description: "We partner with families to understand their unique values and create personalized therapy plans"
  },
  {
    icon: Globe,
    title: "Multicultural Sensitivity",
    description: "Respect for diverse traditions, languages, and cultural backgrounds in every interaction"
  },
  {
    icon: Heart,
    title: "Individualized Programs",
    description: "ABA therapy tailored to each child's cultural context and family environment"
  },
  {
    icon: BookOpen,
    title: "Collaborative Approach",
    description: "Working closely with caregivers, educators, and communities for holistic support"
  }
];

const deliveryMethods = [
  {
    icon: CheckCircle,
    title: "Family-Aligned Goals",
    description: "Therapy objectives that reflect what truly matters to your family, beyond standardized benchmarks"
  },
  {
    icon: Home,
    title: "Environment-Adapted Strategies",
    description: "Interventions designed to fit seamlessly into home, school, and community settings"
  },
  {
    icon: Sparkles,
    title: "Cultural Humility",
    description: "Clinicians committed to ongoing learning and bias-aware, respectful care practices"
  }
];

const targetGroups = [
  "Multilingual or immigrant families",
  "Families seeking culturally respectful ABA therapy",
  "Children who struggle with engagement in traditional models",
  "Caregivers who value collaboration and shared decision-making"
];

const impactPoints = [
  "Increased child engagement and participation",
  "Stronger family relationships and trust",
  "More sustainable long-term outcomes",
  "Better integration across all life environments"
];

export default function CulturallyResponsiveCare() {
  return (
    <main className="bg-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B4F9F] via-[#1E63D9] to-[#3F7FEF]">
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Expertise</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Culturally Competent
                <span className="block text-blue-100">Care That Honors You</span>
              </h1>

              <p className="text-xl text-blue-50 leading-relaxed mb-6">
                At <strong>Decoder Health</strong>, we understand that culture plays a
                critical role in how children learn, communicate, and interact with
                their environment.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed">
                Our culturally responsive ABA services respect each family's values, 
                traditions, language, and lived experiences—building trust and creating 
                therapy that feels natural and effective.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/about-us"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E63D9] rounded-xl font-semibold hover:bg-blue-50 transition shadow-xl"
                >
                  Learn More
                  <CheckCircle className="w-5 h-5" />
                </a>
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition border border-white/20"
                >
                  Get Started
                </a>
              </div>
            </div>

             {/* Image */}
<div className="relative lg:scale-110">
  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-[2.5rem] blur-3xl"></div>

  <img
    src={careImg}
    alt="Culturally Responsive Care - Decoder Health"
    className="
      relative 
      w-full 
      max-w-[620px] 
      lg:max-w-[720px] 
      h-[420px] 
      lg:h-[520px]
      object-cover
      rounded-[2.5rem] 
      shadow-2xl 
      border-4 
      border-white/30
    "
    loading="lazy"
  />

  {/* Floating badge */}
  <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-xl flex items-center justify-center">
        <Heart className="w-7 h-7 text-white" />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">95%</div>
        <div className="text-sm text-gray-600">Family Satisfaction</div>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* ================= CORE BENEFITS ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 text-[#1E63D9] rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Care That Respects Your Identity
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We honor cultural identity to build trust and create therapy plans that feel 
              natural, respectful, and effective in real-world settings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1E63D9] hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= HOW WE DELIVER ================= */}
      <section id="learn-more" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="inline-block px-4 py-2 bg-blue-50 text-[#1E63D9] rounded-full text-sm font-semibold mb-6">
                Our Approach
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                How We Deliver Culturally Responsive Care
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our approach goes beyond traditional therapy models. We actively
                partner with families to understand cultural expectations, parenting
                styles, communication preferences, and daily routines before
                designing intervention plans.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Principles
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#1E63D9] rounded-full mt-2 flex-shrink-0"></div>
                    <p>Therapy goals aligned with family priorities, not just standardized benchmarks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#1E63D9] rounded-full mt-2 flex-shrink-0"></div>
                    <p>Strategies adapted to fit home, school, and community environments</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#1E63D9] rounded-full mt-2 flex-shrink-0"></div>
                    <p>Clinicians practicing cultural humility and ongoing learning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {deliveryMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ================= WHO & WHY ================= */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Who This Is For */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-2xl mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Who This Service Is For
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Culturally responsive care is especially beneficial for families
                from diverse cultural, ethnic, and linguistic backgrounds who want
                therapy that aligns with their values and beliefs.
              </p>

              <div className="space-y-4">
                {targetGroups.map((group, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{group}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why It Matters */}
            <div className="bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-3xl p-10 text-white shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Culturally Responsive Care Matters
              </h2>

              <p className="text-xl text-blue-50 leading-relaxed mb-6">
                When therapy reflects a child's cultural world, learning becomes
                more meaningful. Children are more engaged, families feel respected,
                and progress is more sustainable over time.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                Research shows that culturally aligned care improves participation,
                strengthens family relationships, and supports long-term outcomes
                across home, school, and community environments.
              </p>

              <div className="space-y-3">
                {impactPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-50 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    

    </main>
  );
}