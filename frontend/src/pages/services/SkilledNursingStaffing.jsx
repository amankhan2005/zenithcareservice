 import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Hero Image
import heroImg from "../../assets/rn.jpg";

export default function SkilledNursingStaffing() {
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
              Professional Healthcare Staffing
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] mb-6">
              Skilled <br />
              Nursing <span className="font-serif italic font-medium">Staffing</span>
            </h1>


            <p className="text-gray-600 max-w-lg mb-8">
              Zenith Care Services provides highly trained and experienced
              skilled nursing professionals to post-acute and long-term
              care facilities, nursing homes, and hospitals.
            </p>


            <div className="flex gap-4">

              <Link
                to="/request-nurse"
                className="bg-pink-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Request Staff →
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
              alt="Skilled Nursing Staffing"
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>


        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">


          {/* Services */}
          <div className="bg-sky-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Staffing Services
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>✔ Skilled Nurses for Hospitals</li>
              <li>✔ Staffing for Nursing Homes</li>
              <li>✔ Post-Acute Care Support</li>
              <li>✔ Long-Term Care Facilities</li>
              <li>✔ Temporary & Permanent Placement</li>
              <li>✔ Emergency Staffing Solutions</li>
              <li>✔ 24/7 Professional Coverage</li>

            </ul>

          </div>


          {/* Who Needs Staffing */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Who Can Benefit from Our Services?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our skilled nursing staffing services are ideal for hospitals,
              post-acute care centers, long-term care facilities, and
              nursing homes that require reliable and qualified staff.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We ensure continuity of care, improved patient outcomes,
              and full compliance with healthcare standards.
            </p>

          </div>

        </div>


        {/* FAQ SECTION */}
        <div className="max-w-5xl mx-auto mb-24">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Skilled Nursing Staffing – FAQs
          </h2>


          <div className="space-y-4">


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                What facilities do you provide staffing for?
              </summary>
              <p className="mt-2 text-gray-600">
                We provide skilled nursing staff to hospitals, nursing homes,
                post-acute care centers, and long-term care facilities.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Are your nurses licensed and verified?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, all our nurses are licensed, background-checked,
                and professionally trained.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Do you offer short-term and long-term staffing?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we offer flexible short-term, long-term, and
                permanent staffing solutions.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Do you accept insurance and private pay?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we proudly accept all major insurance plans as well as
                private pay options. Our team will help you verify coverage
                and choose the best payment solution for your needs.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                How can I request skilled nursing staff?
              </summary>
              <p className="mt-2 text-gray-600">
                You can request staff through our website, by phone,
                or by contacting our support team.
              </p>
            </details>

          </div>

        </div>


        {/* CTA */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need Skilled Nursing Staff Today?
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Partner with Zenith Care Services for reliable, professional,
            and compassionate nursing staffing solutions.
          </p>


          <div className="flex justify-center gap-4">

            <Link
              to="/request-nurse"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Request Staff →
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
