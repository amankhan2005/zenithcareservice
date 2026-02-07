 import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Hero Image
import heroImg from "../../assets/rn.jpg";

export default function RN() {
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
              Trusted Registered Nursing Services
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] mb-6">

              Professional <br />
              Registered{" "}
              <span className="font-serif italic font-medium">
                Nursing Care
              </span>

            </h1>


            <p className="text-gray-600 max-w-lg mb-8">
              Zenith Care Services provides licensed and experienced
              Registered Nurses for home and hospital care. Our nurses
              deliver safe, compassionate, and personalized medical
              support to patients of all ages.
            </p>


            <div className="flex gap-4">

              <Link
                to="/request-nurse"
                className="bg-pink-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Request a Nurse →
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
              alt="Registered Nurse Team"
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>


        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">


          {/* Services */}
          <div className="bg-sky-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Registered Nursing Services
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>✔ Medication Administration & Monitoring</li>
              <li>✔ Wound & Post-Surgical Care</li>
              <li>✔ Vital Signs & Health Assessment</li>
              <li>✔ IV Therapy & Injections</li>
              <li>✔ Chronic Disease Management</li>
              <li>✔ Pain & Symptom Management</li>
              <li>✔ Patient & Family Education</li>

            </ul>

          </div>


          {/* Who Needs RN */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Who Can Benefit from Our RNs?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our Registered Nurses are ideal for patients who need
              advanced medical supervision, recovery support, or
              long-term healthcare management.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We collaborate with physicians and families to create
              customized care plans that ensure safety, comfort,
              and long-term wellness.
            </p>

          </div>

        </div>


        {/* FAQ SECTION */}
        <div className="max-w-5xl mx-auto mb-24">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Registered Nurse (RN) – Frequently Asked Questions
          </h2>


          <div className="space-y-4">


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                What services do your Registered Nurses provide?
              </summary>
              <p className="mt-2 text-gray-600">
                Our RNs provide medication management, wound care,
                IV therapy, post-surgery care, chronic disease
                management, and ongoing health monitoring.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Can I hire an RN for home care?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we provide professional Registered Nurses for
                in-home medical care, recovery support, and long-term
                health management.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Are your nurses licensed and verified?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, all our Registered Nurses are fully licensed,
                background-checked, and professionally trained.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Do you provide short-term and long-term nursing care?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we offer flexible care plans for short-term
                recovery as well as long-term medical support.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                How do I request a Registered Nurse?
              </summary>
              <p className="mt-2 text-gray-600">
                You can request a nurse by filling out our online
                form or contacting our support team directly.
              </p>
            </details>

          </div>

        </div>


        {/* CTA */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need a Trusted Registered Nurse Today?
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our experienced nursing team is ready to provide safe,
            compassionate, and professional care for your loved ones.
          </p>


          <div className="flex justify-center gap-4">

            <Link
              to="/request-nurse"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Request a Nurse →
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
