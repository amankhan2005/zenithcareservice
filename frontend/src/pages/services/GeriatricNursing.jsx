 import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Hero Image
import heroImg from "../../assets/pt.jpg";

export default function GeriatricNursing() {
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
              Compassionate Senior Nursing Care
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] mb-6">
              Geriatric <br />
              Nursing <span className="font-serif italic font-medium">Care</span>
            </h1>

            <p className="text-gray-600 max-w-lg mb-8">
              Zenith Care Services provides professional geriatric nursing
              care for seniors who need medical assistance, daily support,
              and compassionate supervision in home and healthcare settings.
            </p>

            <div className="flex gap-4">

              <Link
                to="/request-nurse"
                className="bg-pink-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Request Geriatric Care →
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
              alt="Geriatric Nursing Care"
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">

          {/* Services */}
          <div className="bg-sky-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Geriatric Nursing Services
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>✔ Medication Management</li>
              <li>✔ Chronic Disease Monitoring</li>
              <li>✔ Mobility & Fall Prevention</li>
              <li>✔ Personal Hygiene Assistance</li>
              <li>✔ Post-Hospital Recovery Care</li>
              <li>✔ Nutrition & Feeding Support</li>
              <li>✔ Emotional & Companionship Care</li>

            </ul>

          </div>

          {/* Who Needs Geriatric Care */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Who Can Benefit from Geriatric Nursing?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our geriatric nursing services are ideal for seniors with
              age-related health conditions, limited mobility, memory
              disorders, and long-term medical needs.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We focus on dignity, safety, and comfort while supporting
              independent and healthy living.
            </p>

          </div>

        </div>

        {/* FAQ SECTION */}
        <div className="max-w-5xl mx-auto mb-24">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Geriatric Nursing Care – FAQs
          </h2>

          <div className="space-y-4">

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                What services are included in geriatric nursing care?
              </summary>
              <p className="mt-2 text-gray-600">
                Our services include medication support, health monitoring,
                personal care, recovery assistance, and companionship.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Can geriatric care be provided at home?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we provide professional geriatric nursing care at home
                as well as in assisted living facilities.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Are your nurses trained in elderly care?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, all our nurses are trained in senior healthcare,
                dementia care, and age-related medical support.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Do you accept insurance and private pay?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we accept all major insurance plans and private
                pay options for geriatric nursing services.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                How can I request geriatric nursing care?
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
            Need Professional Geriatric Nursing Care?
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our experienced nurses are ready to provide respectful,
            reliable, and compassionate care for your loved ones.
          </p>

          <div className="flex justify-center gap-4">

            <Link
              to="/request-nurse"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Request Geriatric Care →
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
