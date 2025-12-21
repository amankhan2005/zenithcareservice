 import React from "react";

/* ================= IMAGES (MANUAL UPLOAD) ================= */
import einstein from "../assets/famous/albert-einstein.webp";
import hopkins from "../assets/famous/anthony-hopkins.webp";
import aykroyd from "../assets/famous/dan-aykroyd.webp";
import hannah from "../assets/famous/daryl-hannah.webp";
import burton from "../assets/famous/tim-burton.webp";
import tesla from "../assets/famous/nikola-tesla.webp";
import newton from "../assets/famous/isaac-newton.webp";
import darwin from "../assets/famous/charles-darwin.webp";
import dickinson from "../assets/famous/emily-dickinson.webp";
import seinfeld from "../assets/famous/jerry-seinfeld.webp";
import musk from "../assets/famous/elon-musk.webp";
import tajiri from "../assets/famous/satoshi-tajiri.webp";

const famousPeople = [
  { name: "Albert Einstein", role: "Scientist & Mathematician", img: einstein },
  { name: "Anthony Hopkins", role: "Actor", img: hopkins },
  { name: "Dan Aykroyd", role: "Actor & Writer", img: aykroyd },
  { name: "Daryl Hannah", role: "Actress & Activist", img: hannah },
  { name: "Tim Burton", role: "Film Director", img: burton },
  { name: "Nikola Tesla", role: "Inventor", img: tesla },
  { name: "Isaac Newton", role: "Physicist", img: newton },
  { name: "Charles Darwin", role: "Naturalist", img: darwin },
  { name: "Emily Dickinson", role: "Poet", img: dickinson },
  { name: "Jerry Seinfeld", role: "Comedian", img: seinfeld },
  { name: "Elon Musk", role: "Entrepreneur", img: musk },
  { name: "Satoshi Tajiri", role: "Creator of Pokémon", img: tajiri },
];

export default function AutismIsCool() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-r from-[#1E63D9] to-[#3F7FEF] py-26">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold text-white bg-white/20 rounded-full backdrop-blur-md">
            🌈 Autism Awareness
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Autism Is Cool
          </h1>

          <div className="w-20 h-1.5 bg-white mx-auto mt-6 rounded-full" />

          <p className="mt-8 max-w-4xl mx-auto text-xl lg:text-2xl text-white/90 leading-relaxed">
            Celebrating neurodiversity, powerful strengths, and the extraordinary
            potential of individuals with Autism Spectrum Disorder.
          </p>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 space-y-32">

          {/* INTRO */}
          <div className="max-w-4xl">
            <span className="uppercase tracking-widest text-sm font-semibold text-[#1E63D9]">
              Understanding Autism
            </span>

            <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              ASD Traits Can Lead to Extraordinary Achievements
            </h2>

            <p className="mt-6 text-lg lg:text-xl text-gray-700 leading-relaxed">
              Every individual on the autism spectrum possesses unique strengths.
              Across history, many individuals with Autism Spectrum Disorder (ASD)
              have used their abilities to achieve innovation, success, and
              life-changing accomplishments.
            </p>
          </div>

          {/* STRONG INTERESTS */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="uppercase tracking-widest text-sm font-semibold text-[#1E63D9]">
                Strength Through Focus
              </span>

              <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-900">
                Strong Interests Support Lifelong Success
              </h3>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                One defining trait of autism is deep, sustained focus. While many
                people divide attention across interests, individuals with ASD
                often develop powerful passions that last for years.
              </p>

              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                This ability to concentrate intensely enables mastery and
                exceptional achievements in science, art, sports, and innovation.
              </p>
            </div>

            <div className="bg-[#F5F9FF] p-12 rounded-3xl border border-[#E1ECFF]">
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                Focus is not a limitation — when nurtured, it becomes a superpower.
              </p>
            </div>
          </div>

          {/* SOCIAL WAY */}
          <div className="max-w-4xl">
            <span className="uppercase tracking-widest text-sm font-semibold text-[#1E63D9]">
              Social Perspective
            </span>

            <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-900">
              A Different Social Way of Being
            </h3>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Individuals with autism often experience social interaction
              differently — preferring meaningful connections, direct
              communication, and time for reflection.
            </p>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              This approach can support emotional balance, mental clarity, and
              long-term satisfaction in both personal and professional life.
            </p>
          </div>

          {/* FAMOUS PEOPLE */}
          <div>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="uppercase tracking-widest text-sm font-semibold text-[#1E63D9]">
                Inspiration
              </span>
              <h2 className="mt-4 text-3xl lg:text-3xl font-extrabold text-gray-900">
                Famous Individuals on the Autism Spectrum
              </h2>
              <p className="mt-6 text-lg text-gray-700">
                History is filled with innovators, creators, and leaders whose
                autistic traits shaped the world we live in today.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {famousPeople.map((person, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#E6EEFF] hover:shadow-xl transition"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="bg-gradient-to-r from-[#1E63D9] to-[#3F7FEF] rounded-[2.5rem] p-16 text-white">
            <h2 className="text-3xl lg:text-4xl font-extrabold">
              Embracing Neurodiversity
            </h2>
            <p className="mt-6 text-xl text-white/95 leading-relaxed max-w-3xl">
              Autism Spectrum Disorder is not a limitation — it is a different
              way of thinking, learning, and creating. With acceptance,
              understanding, and evidence-based care, individuals with autism
              can thrive and live deeply fulfilling lives.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
