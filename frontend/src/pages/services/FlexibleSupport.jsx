import React from "react";

export default function FlexibleSupport() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Flexible ABA Support Services"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>
          <span className="inline-block mb-4 px-5 py-2 text-sm font-semibold text-[#0B5ED7] bg-[#E7F0FF] rounded-full">
            Adaptive Care
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#0A2540]">
            Speed & <span className="text-[#0B5ED7]">Agility</span>
          </h1>

          <p className="mt-6 text-lg text-[#425466]">
            We respond quickly to evolving needs with flexible scheduling,
            hybrid care options, and adaptive therapy strategies.
          </p>

          <ul className="mt-8 space-y-4 text-[#425466]">
            <li>✔ Rapid response support</li>
            <li>✔ In-home, clinic & telehealth options</li>
            <li>✔ Family-focused flexibility</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
