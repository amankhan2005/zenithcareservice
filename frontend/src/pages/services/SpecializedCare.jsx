 import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Hero Image
import heroImg from "../../assets/rn.jpg";

export default function SpecializedCare() {
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
              Advanced & Specialized Medical Care
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] mb-6">
              Specialized <br />
              Nursing <span className="font-serif italic font-medium">Care</span>
            </h1>

            <p className="text-gray-600 max-w-lg mb-8">
              Zenith Care Services provides highly specialized nursing
              services for patients with complex medical conditions,
              critical care needs, and long-term treatment requirements
              in both home and healthcare settings.
            </p>

            <div className="flex gap-4">

              <Link
                to="/request-nurse"
                className="bg-pink-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Request Specialized Care →
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
              alt="Specialized Nursing Care"
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">

          {/* Services */}
          <div className="bg-sky-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Specialized Nursing Services
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>✔ Ventilator & Respiratory Care</li>
              <li>✔ Tracheostomy Management</li>
              <li>✔ IV Therapy & Central Line Care</li>
              <li>✔ Critical Care Monitoring</li>
              <li>✔ Neurological & Stroke Care</li>
              <li>✔ Cardiac & Post-ICU Support</li>
              <li>✔ Palliative & End-of-Life Care</li>

            </ul>

          </div>

          {/* Who Needs Specialized Care */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Who Can Benefit from Specialized Nursing Care?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our specialized care services are ideal for patients with
              complex medical conditions, chronic illnesses, post-ICU
              recovery needs, and advanced treatment requirements.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We provide personalized, physician-coordinated care plans
              to ensure safety, comfort, and clinical excellence.
            </p>

          </div>

        </div>

        {/* FAQ SECTION */}
        <div className="max-w-5xl mx-auto mb-24">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Specialized Nursing Care – FAQs
          </h2>

          <div className="space-y-4">

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                What conditions require specialized nursing care?
              </summary>
              <p className="mt-2 text-gray-600">
                Specialized care is required for patients with ventilator
                support, neurological disorders, cardiac conditions,
                critical illnesses, and complex medical needs.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Can specialized nursing care be provided at home?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we provide advanced nursing services at home as well
                as in hospitals and long-term care facilities.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Are your nurses trained for critical care?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, all our specialized nurses are trained in ICU-level
                care, advanced life support, and emergency protocols.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Do you accept insurance and private pay?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we accept all major insurance plans and private
                pay options for specialized nursing services.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                How can I request specialized nursing care?
              </summary>
              <p className="mt-2 text-gray-600">
                You can request services through our website, by phone,
                or by contacting our support team.
              </p>
            </details>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need Advanced Specialized Nursing Care?
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our expert nurses are ready to provide high-level medical
            support with compassion, precision, and professionalism.
          </p>

          <div className="flex justify-center gap-4">

            <Link
              to="/request-nurse"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Request Specialized Care →
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
