import React from "react";

export default function EvidenceBasedABA() {
  return (
    <section className="relative bg-gradient-to-br from-[#F5F9FF] via-white to-[#EEF4FF] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <span className="inline-block mb-4 px-5 py-2 text-sm font-semibold text-[#0B5ED7] bg-[#E7F0FF] rounded-full">
            Science-Driven Care
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#0A2540]">
            Evidence-Based <span className="text-[#0B5ED7]">ABA</span>
          </h1>

          <p className="mt-6 text-lg text-[#425466]">
            Decoder Health delivers research-backed ABA therapy using proven
            methodologies to achieve meaningful, measurable progress.
          </p>

          <ul className="mt-8 space-y-4 text-[#425466]">
            <li>✔ Data-driven treatment plans</li>
            <li>✔ Continuous progress monitoring</li>
            <li>✔ BCBA-led clinical excellence</li>
          </ul>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1581092160613-f6aa4c29c3e8"
            alt="Evidence Based ABA Therapy"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
