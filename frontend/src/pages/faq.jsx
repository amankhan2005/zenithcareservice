 import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
 
export default function FAQ() {
  const faqs = [
    {
      q: "What is ABA?",
      a: "Applied Behavior Analysis (ABA) is a scientific, evidence-based approach that focuses on understanding and improving behavior. ABA uses positive reinforcement and structured strategies to help children develop communication, social, academic, and daily living skills."
    },
    {
      q: "What is the purpose of the ABA program?",
      a: "The purpose of the ABA program is to help children with autism build meaningful skills that increase independence, improve quality of life, and support successful participation in daily routines at home, school, and in the community."
    },
    {
      q: "What is telemedicine?",
      a: "Telemedicine is the delivery of healthcare services using secure video and digital platforms. It allows families to receive professional guidance, training, and support remotely when appropriate."
    },
    {
      q: "Which services may be provided via telemedicine?",
      a: "Telemedicine may be used for parent training, caregiver coaching, consultations, treatment planning, and certain follow-up services when clinically appropriate. In-person services are recommended when direct interaction is required."
    },
    {
      q: "What is ASD?",
      a: "Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, social interaction, behavior, and learning. ASD presents differently in every child, which is why individualized treatment is essential."
    },
    {
      q: "What ICD-10 codes are used for autism?",
      a: "Autism Spectrum Disorder is commonly identified under ICD-10 code F84.0 and related diagnostic classifications, depending on clinical evaluation and individual presentation."
    },
    {
      q: "What are common signs of autism?",
      a: "Common signs of autism may include limited eye contact, delayed speech or communication, repetitive behaviors, difficulty with social interaction, sensory sensitivities, and challenges adapting to changes in routine."
    },
    {
      q: "At what age can autism be diagnosed?",
      a: "Autism can often be identified as early as 18 to 24 months. Early diagnosis allows for early intervention services, which are associated with improved developmental outcomes."
    },
    {
      q: "Do you provide services in the child’s natural environment?",
      a: "Yes. DECODER Health provides home-based and community-based ABA services, allowing therapy to take place in environments where children naturally live, learn, and play."
    },
    {
      q: "How is DECODER Health’s approach different?",
      a: "Our approach combines evidence-based ABA with cultural sensitivity, family collaboration, and real-world application. We design programs around a family’s routines, values, and priorities to support meaningful progress."
    },
    {
      q: "Do parents and caregivers participate in therapy?",
      a: "Yes. Parents and caregivers are essential partners in therapy. We provide guidance, training, and collaboration to help families reinforce skills outside of therapy sessions."
    },
    {
      q: "How do I get started with services?",
      a: "You can contact DECODER Health directly to schedule an initial consultation. Our team will guide you through assessment, recommendations, and next steps with clarity and support."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-[#F5F9FF] to-white text-[#0A2540]">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#0B5ED7] via-[#1E6EEB] to-[#3B82F6] text-white text-center py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Learn more about our ABA services, approach, and how DECODER Health
            supports children and families.
          </p>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have Questions? We’re Here to Help.
          </h2>
          <p className="text-[#5B6B82] text-lg max-w-3xl mx-auto leading-relaxed">
            Below are answers to common questions about our services and
            approach. If you need more information, feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#0B5ED7] shadow-[0_20px_40px_-15px_rgba(11,94,215,0.35)]"
                    : "border-[#E5EEFF] hover:border-[#0B5ED7] hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-6 flex items-start justify-between text-left group"
                >
                  <h3
                    className={`text-lg font-semibold pr-4 transition-colors ${
                      isOpen
                        ? "text-[#0B5ED7]"
                        : "text-[#0A2540] group-hover:text-[#0B5ED7]"
                    }`}
                  >
                    {item.q}
                  </h3>

                  <span
                    className={`ml-2 mt-1 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown
                      className={`w-6 h-6 ${
                        isOpen
                          ? "text-[#0B5ED7]"
                          : "text-gray-400 group-hover:text-[#0B5ED7]"
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-[#EEF4FF]">
                    <p className="text-[#425466] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
  
    </div>
  );
}
