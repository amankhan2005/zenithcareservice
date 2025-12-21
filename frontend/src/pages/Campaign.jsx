 import React from "react";
import { Heart, Target, Users, Award, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";

/* ================= BOARD IMAGES ================= */
import annie from "../assets/board/dr-annie-lasway.avif";
import anganile from "../assets/board/anganile-mwakyanjala.avif";
import christine from "../assets/board/christine-marrero.avif";
import eric from "../assets/board/eric-lasway.avif";
import lulu from "../assets/board/dr-lulu-kavishe.avif";
import humphrey from "../assets/board/humphrey-semiti.avif";
import eunice from "../assets/board/eunice-msuya.avif";
import esiday from "../assets/board/esiday-ligate.avif";
import erickMsuya from "../assets/board/erick-msuya.avif";

/* ================= CAMPAIGN IMAGE ================= */
import tanzaniaChildren from "../assets/campaign/tanzania-children.jpg";

/* ================= BOARD DATA ================= */
const boardMembers = [
  { name: "Dr. Annie Lasway", role: "Board Member", img: annie },
  { name: "Anganile Mwakyanjala", role: "Board Member", img: anganile },
  { name: "Christine Marrero", role: "Board Member", img: christine },
  { name: "Eric Lasway", role: "Board Member", img: eric },
  { name: "Dr. Lulu Kavishe", role: "Board Member", img: lulu },
  { name: "Humphrey Semiti", role: "Board Member", img: humphrey },
  { name: "Eunice Msuya", role: "Board Member", img: eunice },
  { name: "Esiday Ligate", role: "Board Member", img: esiday },
  { name: "Erick Msuya", role: "Board Member", img: erickMsuya },
];

const impactStats = [
  { number: "500+", label: "Families Supported", icon: Users },
  { number: "95%", label: "Success Rate", icon: Award },
  { number: "24/7", label: "Support Available", icon: Heart },
  { number: "15+", label: "Partner Organizations", icon: Target },
];

const serviceAreas = [
  {
    title: "Early Intervention",
    description: "Comprehensive screening and early support programs for children showing signs of autism",
    icon: Target
  },
  {
    title: "Behavioral Therapy",
    description: "Evidence-based ABA therapy customized to each individual's unique developmental needs",
    icon: Heart
  },
  {
    title: "Family Support",
    description: "Training, counseling, and resources to help families navigate their autism journey",
    icon: Users
  },
  {
    title: "Community Awareness",
    description: "Educational workshops and campaigns promoting understanding and inclusion",
    icon: Award
  }
];

export default function Campaign() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#0B4F9F] via-[#1E63D9] to-[#3F7FEF] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/15 rounded-full backdrop-blur-sm border border-white/20">
              <Heart className="w-4 h-4" />
              <span>Transforming Lives Through Care</span>
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              Our Projects &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
                Community Impact
              </span>
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-xl lg:text-2xl text-blue-50 leading-relaxed">
              Delivering autism awareness, evidence-based behavioral therapy, and
              lifelong community support to empower individuals and families across Tanzania.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
  <a
  href="https://mail.google.com/mail/?view=cm&to=info@decoderhealth.com&su=Support%20Our%20Mission&body=Hello%20Decoder%20Health%20Team,"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E63D9] rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
>
  <FaEnvelope />
  Support Our Mission
</a>
              <a
                href="/about-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition backdrop-blur-sm border border-white/20"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-2xl mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 text-[#1E63D9] rounded-full text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Care Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide holistic support through evidence-based interventions and community engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceAreas.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#1E63D9]">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1E63D9] to-[#3F7FEF] rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECT ================= */}
      <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
              
              {/* Image */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={tanzaniaChildren}
                  alt="Children in Tanzania supported through autism awareness and behavioral therapy initiatives"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-10 lg:p-14">
                <span className="inline-block px-4 py-2 bg-blue-50 text-[#1E63D9] rounded-full text-sm font-semibold mb-6">
                  Featured Project
                </span>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  DECODER Behavioral Health Center of Excellence – Tanzania
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Join us in transforming lives by supporting our campaign to fund
                  a dedicated autism awareness and behavioral therapy center in
                  Tanzania, where access to autism services remains critically limited.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      Creating a welcoming space that empowers children with autism and their families
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      Providing evidence-based behavioral therapy and early intervention programs
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      Building community awareness and reducing stigma across Tanzania
                    </p>
                  </div>
                </div>

  <a
  href="https://mail.google.com/mail/?view=cm&to=info@decoderhealth.com&su=Support%20This%20Project&body=Hello%20Decoder%20Health%20Team,%0D%0A%0D%0AI%20would%20like%20to%20support%20this%20project.%20Please%20share%20more%20details%20about%20how%20I%20can%20contribute.%0D%0A%0D%0AThank%20you."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1E63D9] to-[#3F7FEF] text-white rounded-xl font-semibold hover:shadow-lg transition"
>
  Support This Project
  <ArrowRight className="w-5 h-5" />
</a>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= MISSION STATEMENT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="inline-block px-4 py-2 bg-blue-50 text-[#1E63D9] rounded-full text-sm font-semibold mb-6">
                Our Approach
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Support for Every Journey
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We aim to deliver comprehensive support and raise awareness for
                individuals with autism and their families through early
                intervention, personalized education, social skills training,
                and vocational support.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By collaborating with healthcare professionals, educators, and
                community organizations, we ensure our services are evidence-based
                and responsive to each individual's unique needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h3>
              <div className="space-y-4">
                {[
                  "Evidence-based therapeutic interventions",
                  "Family-centered care and support",
                  "Community awareness and education",
                  "Long-term inclusion and acceptance",
                  "Collaborative healthcare approach"
                ].map((value, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#1E63D9] rounded-full"></div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>                                       
      </section>

      {/* ================= DONATE CTA ================= */}
      {/* <section id="contact" className="py-24 bg-gradient-to-br from-[#0B4F9F] via-[#1E63D9] to-[#3F7FEF] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm mb-8 border border-white/20">
            <Heart className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Make a Difference Today
          </h2>

          <p className="text-xl text-blue-50 leading-relaxed mb-10">
            Your generosity helps us expand autism awareness, provide
            evidence-based behavioral therapy, and support families in
            underserved communities. Every contribution brings us closer to
            creating lasting change.
          </p>

          <a
            href="mailto:info@decoderhealth.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1E63D9] rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-2xl hover:shadow-3xl hover:scale-105 transform"
          >
            <Mail className="w-6 h-6" />
            Contact Us to Support
          </a>

          <p className="mt-6 text-blue-100 text-sm">
            Email: info@decoderhealth.com
          </p>
        </div>
      </section> */}                                 

      {/* ================= BOARD SECTION ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-2 bg-blue-50 text-[#1E63D9] rounded-full text-sm font-semibold mb-4">
              Leadership Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Board
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experienced leaders guiding Decoder Health's mission with integrity,
              vision, and unwavering commitment to community-focused care.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {boardMembers.map((member, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-[#1E63D9] transition-all duration-300"
              >
                <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <img
                    src={member.img}
                    alt={`${member.name} – Decoder Health Board Member`}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 text-center border-t border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}