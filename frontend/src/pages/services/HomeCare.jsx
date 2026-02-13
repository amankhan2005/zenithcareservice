import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Hero Image
import heroImg from "../../assets/gna.jpg";

export default function HomeCare() {
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
              Personalized In-Home Nursing Services
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] mb-6">
              Home-Based <br />
              Nursing <span className="font-serif italic font-medium">Care</span>
            </h1>

            <p className="text-gray-600 max-w-lg mb-8">
              Zenith Care Services provides professional and compassionate
              home-based nursing care for patients who need medical support,
              recovery assistance, and daily health monitoring in the comfort
              of their own homes.
            </p>

            <div className="flex gap-4">

              <Link
                to="/request-nurse"
                className="bg-pink-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Request Home Care →
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
              alt="Home Based Nursing Care"
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">

          {/* Services */}
          <div className="bg-sky-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Home Care Services
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>✔ Medication Administration</li>
              <li>✔ Wound Care & Dressing</li>
              <li>✔ Vital Signs Monitoring</li>
              <li>✔ Post-Surgery Recovery Care</li>
              <li>✔ Chronic Disease Management</li>
              <li>✔ Elderly & Disability Support</li>
              <li>✔ Personal Hygiene Assistance</li>

            </ul>

          </div>

          {/* Who Needs Home Care */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Who Can Benefit from Home Nursing Care?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our home-based nursing care services are ideal for seniors,
              post-surgery patients, individuals with chronic illnesses,
              and those who prefer receiving care at home.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We focus on comfort, safety, and personalized treatment plans
              to ensure faster recovery and improved quality of life.
            </p>

          </div>

        </div>

        {/* FAQ SECTION */}
        <div className="max-w-5xl mx-auto mb-24">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Home-Based Nursing Care – FAQs
          </h2>

          <div className="space-y-4">

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                What services are included in home nursing care?
              </summary>
              <p className="mt-2 text-gray-600">
                Our home nursing services include medication management,
                wound care, health monitoring, recovery support,
                and daily assistance.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Can I get full-time or part-time home nursing care?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we offer flexible full-time, part-time, and
                short-term home care plans.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Are your nurses licensed and trained?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, all our home care nurses are licensed,
                background-verified, and professionally trained.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Do you accept insurance and private pay?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we accept all major insurance plans as well as
                private pay options for home-based nursing care.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                How can I request home nursing care?
              </summary>
              <p className="mt-2 text-gray-600">
                You can request home care services through our website
                form, by phone, or by contacting our support team.
              </p>
            </details>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need Professional Home Nursing Care?
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our experienced home care nurses are ready to provide
            compassionate, reliable, and personalized healthcare
            services at your doorstep.
          </p>

          <div className="flex justify-center gap-4">

            <Link
              to="/request-nurse"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Request Home Care →
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
