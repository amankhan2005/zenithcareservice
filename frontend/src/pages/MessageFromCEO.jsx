import React from "react";

export default function MessageFromCEO() {
  return (
    <main className="bg-white">

      {/* ================= HERO / BREADCRUMB ================= */}
      <section className="relative bg-gradient-to-r from-[#1E63D9] to-[#3F7FEF] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* pill */}
          <span className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-white/20 rounded-full backdrop-blur-md">
            💬 Leadership Message
          </span>

          {/* heading */}
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold text-white">
            Message From the CEO
          </h1>

          <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full" />

          {/* subtitle */}
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
            A personal journey, a parent’s perspective, and a vision for empowering
            children with Autism through compassionate and individualized care.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          {/* intro */}
          <p className="text-lg text-gray-700 leading-8 mb-10">
            I recall taking my child to a routine wellness check with his pediatrician.
            What should have been a simple appointment became an emotionally
            overwhelming experience. A basic physical examination—checking his ear
            canal—triggered intense distress that lasted for hours.
          </p>

          <p className="text-gray-700 leading-8 mb-8">
            Doctor visits became something I dreaded as a parent. I often felt helpless
            and defeated, struggling to support my child through fears that extended
            far beyond the clinic. These challenges were not isolated—similar reactions
            occurred during haircuts, sports activities, and even birthday parties.
          </p>

          {/* highlight box */}
          <div className="bg-[#F5F9FF] border-l-4 border-[#1E63D9] p-6 rounded-xl mb-12">
            <p className="text-gray-800 leading-8 font-medium">
              When my child finally received a diagnosis, it brought clarity and relief.
              Naming the condition allowed us to understand it—and more importantly,
              to address it with purpose and direction.
            </p>
          </div>

          {/* vision */}
          <h2 className="text-2xl font-bold text-[#1E63D9] mb-4">
            A Vision Beyond Stigma
          </h2>

          <p className="text-gray-700 leading-8 mb-8">
            That moment reshaped my perspective—not only as a parent, but as a
            caregiver and advocate. I envisioned a future where Autism is no longer
            surrounded by stigma, but recognized as a condition that can be effectively
            managed through early, targeted, and compassionate intervention.
          </p>

          <p className="text-gray-700 leading-8 mb-12">
            Autism does not need to be a long, drawn-out struggle that limits children
            academically, socially, or personally during their most formative years.
            With the right support, children can thrive.
          </p>

          {/* DECODER section */}
          <h2 className="text-2xl font-bold text-[#1E63D9] mb-4">
            Our Philosophy at DECODER Health
          </h2>

          <p className="text-gray-700 leading-8 mb-8">
            At DECODER Health, we understand that no two children are alike. Each child
            is deeply influenced by their environment, culture, family, and community.
            Our approach integrates these influences to deliver truly individualized
            Applied Behavior Analysis (ABA) therapy.
          </p>

          <p className="text-gray-700 leading-8 mb-12">
            In every role a child plays—student, sibling, friend—we are committed to
            helping children with Autism become confident, capable, and victorious.
          </p>

          {/* parental instinct */}
          <h2 className="text-2xl font-bold text-[#1E63D9] mb-4">
            The Power of Parental Instincts
          </h2>

          <p className="text-gray-700 leading-8 mb-8">
            Parents possess powerful, innate instincts when it comes to their children.
            These instincts are often unexplainable—but profoundly accurate. Many
            parents simply *know* when something is not right.
          </p>

          <p className="text-gray-700 leading-8 mb-12">
            In Autism Spectrum Disorder, where each child’s needs and responses differ,
            parental insight is invaluable. A parent’s feedback can be the key to
            unlocking a child’s true potential.
          </p>

          {/* how section */}
          <h2 className="text-2xl font-bold text-[#1E63D9] mb-4">
            How Parents Can Make a Difference
          </h2>

          <ul className="space-y-6 text-gray-700 leading-8">
            <li>
              <strong>Be attentive.</strong> Learn your child deeply—their behaviors,
              preferences, and triggers. Listen intentionally.
            </li>
            <li>
              <strong>Be purposeful.</strong> Protect time for growth and improvement,
              even amidst life’s daily demands.
            </li>
            <li>
              <strong>Collaborate.</strong> Work closely with caregivers and therapists
              to maximize the effectiveness of care.
            </li>
          </ul>

          <p className="mt-12 text-gray-700 leading-8">
            We dedicate ourselves passionately to our careers and education. How much
            more should we invest in securing the success and well-being of our
            children?
          </p>

          {/* closing */}
          <div className="mt-14 bg-gradient-to-r from-[#1E63D9] to-[#3F7FEF] p-8 rounded-2xl text-white">
            <p className="leading-8 text-lg">
              With intention, consistency, and collaboration, progress will come.
              Little by little, inch by inch, our children will grow—and they will
              thrive.
            </p>

            <p className="mt-6 font-semibold">
              — CEO, DECODER Health
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
