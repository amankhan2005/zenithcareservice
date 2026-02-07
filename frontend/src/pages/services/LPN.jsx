 import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Hero Image
import heroImg from "../../assets/lpn.jpg";

export default function LPN() {
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
              Professional Practical Nursing Services
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] mb-6">

              Licensed <br />
              Practical{" "}
              <span className="font-serif italic font-medium">
                Nursing Care
              </span>

            </h1>


            <p className="text-gray-600 max-w-lg mb-8">
              Zenith Care Services provides qualified and experienced
              Licensed Practical Nurses for home and hospital care.
              Our LPNs deliver reliable daily medical support and
              personalized patient assistance.
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
              alt="Licensed Practical Nurse"
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>


        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">


          {/* Services */}
          <div className="bg-sky-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our LPN Services
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>✔ Vital Signs Monitoring</li>
              <li>✔ Daily Medical Assistance</li>
              <li>✔ Medication Support</li>
              <li>✔ Basic Treatments & Procedures</li>
              <li>✔ Patient Mobility Support</li>
              <li>✔ Personal Care Assistance</li>
              <li>✔ Health Reporting to RNs & Doctors</li>

            </ul>

          </div>


          {/* Who Needs LPN */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Who Can Benefit from Our LPNs?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our Licensed Practical Nurses are ideal for patients
              who require regular medical monitoring, daily support,
              and routine nursing care.
            </p>

            <p className="text-gray-700 leading-relaxed">
              They work under the supervision of Registered Nurses
              and physicians to ensure safe and effective care.
            </p>

          </div>

        </div>


        {/* FAQ SECTION */}
        <div className="max-w-5xl mx-auto mb-24">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Licensed Practical Nurse (LPN) – FAQs
          </h2>


          <div className="space-y-4">


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                What services do your LPNs provide?
              </summary>
              <p className="mt-2 text-gray-600">
                Our LPNs assist with medication support, vital signs
                monitoring, basic treatments, daily care, and patient
                assistance.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Can I hire an LPN for home care?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we provide Licensed Practical Nurses for in-home
                medical support and routine healthcare services.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Are your LPNs certified and verified?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, all our LPNs are licensed, background-checked,
                and professionally trained.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Do you offer short-term and long-term LPN care?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we provide flexible care plans for recovery,
                rehabilitation, and long-term patient support.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                How can I request an LPN?
              </summary>
              <p className="mt-2 text-gray-600">
                You can request an LPN through our website form or
                by contacting our support team.
              </p>
            </details>

          </div>

        </div>


        {/* CTA */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need a Licensed Practical Nurse Today?
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our skilled LPNs are ready to provide safe, reliable,
            and compassionate care for your loved ones.
          </p>


          <div className="flex justify-center gap-4">

            <Link
              to="/request-nurse"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Request an LPN →
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
