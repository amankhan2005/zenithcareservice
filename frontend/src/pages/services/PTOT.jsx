 import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Hero Image
import heroImg from "../../assets/pt.jpg";

export default function PTOT() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 py-24">


        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">


          {/* Left Content */}
          <div>

            <p className="text-pink-500 font-semibold mb-4">
              Professional Rehabilitation & Therapy Services
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] mb-6">

              Physical & <br />
              Occupational{" "}
              <span className="font-serif italic font-medium">
                Therapy
              </span>

            </h1>


            <p className="text-gray-600 max-w-lg mb-8">
              Zenith Care Services provides licensed Physical and
              Occupational Therapists to help patients regain
              strength, mobility, and independence after injury,
              surgery, or illness.
            </p>


            <div className="flex gap-4">

              <Link
                to="/request-nurse"
                className="bg-pink-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Request Therapy →
              </Link>

              <Link
                to="/contact-us"
                className="border border-pink-500 text-pink-500 px-7 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition"
              >
                Contact Us
              </Link>

            </div>

          </div>


          {/* Right Image */}
          <div>

            <img
              src={heroImg}
              alt="Physical and Occupational Therapy"
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>


        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">


          {/* Services */}
          <div className="bg-sky-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our PT / OT Services
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>✔ Physical Rehabilitation Programs</li>
              <li>✔ Mobility & Balance Training</li>
              <li>✔ Pain Management Therapy</li>
              <li>✔ Post-Surgical Recovery Exercises</li>
              <li>✔ Stroke & Neurological Rehabilitation</li>
              <li>✔ Strength & Endurance Training</li>
              <li>✔ Daily Activity Relearning</li>

            </ul>

          </div>


          {/* Who Needs PT/OT */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Who Can Benefit from PT / OT?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our therapy services are ideal for patients recovering
              from surgery, injury, stroke, or mobility limitations.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We design customized rehabilitation plans to help
              patients regain independence and improve quality of life.
            </p>

          </div>

        </div>


        {/* FAQ SECTION */}
        <div className="max-w-5xl mx-auto mb-24">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Physical & Occupational Therapy – FAQs
          </h2>


          <div className="space-y-4">


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                What is the difference between PT and OT?
              </summary>
              <p className="mt-2 text-gray-600">
                Physical Therapy focuses on improving movement and
                strength, while Occupational Therapy helps patients
                perform daily activities independently.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Can I receive therapy at home?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we provide in-home Physical and Occupational
                Therapy services for convenient recovery.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Are your therapists licensed?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, all our therapists are fully licensed,
                experienced, and professionally trained.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                How long does therapy usually take?
              </summary>
              <p className="mt-2 text-gray-600">
                The duration depends on the patient’s condition and
                recovery goals. Our therapists create personalized
                treatment plans.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                How can I request therapy services?
              </summary>
              <p className="mt-2 text-gray-600">
                You can request therapy by filling out our online
                form or contacting our support team.
              </p>
            </details>

          </div>

        </div>


        {/* CTA */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Start Your Recovery with Professional Therapy
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our experienced therapists are ready to help you regain
            strength, mobility, and confidence.
          </p>


          <div className="flex justify-center gap-4">

            <Link
              to="/request-nurse"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Request Therapy →
            </Link>

            <Link
              to="/contact-us"
              className="border border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition"
            >
              Contact Us
            </Link>

          </div>

        </div>


      </div>
    </motion.section>
  );
}
