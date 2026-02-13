import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Hero Image
import heroImg from "../../assets/lpn.jpg";

export default function PediatricNursing() {
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
              Specialized Pediatric Nursing Care
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] mb-6">
              Pediatric <br />
              Nursing <span className="font-serif italic font-medium">Care</span>
            </h1>

            <p className="text-gray-600 max-w-lg mb-8">
              Zenith Care Services provides compassionate and highly trained
              pediatric nurses who specialize in caring for infants, children,
              and adolescents with medical needs in home and healthcare settings.
            </p>

            <div className="flex gap-4">

              <Link
                to="/request-nurse"
                className="bg-pink-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Request Pediatric Care →
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
              alt="Pediatric Nursing Care"
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">

          {/* Services */}
          <div className="bg-sky-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Pediatric Nursing Services
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>✔ Tracheostomy Care</li>
              <li>✔ G-Tube Feeding Support</li>
              <li>✔ Ventilator Assistance</li>
              <li>✔ Medication Administration</li>
              <li>✔ Vital Signs Monitoring</li>
              <li>✔ Developmental Support</li>
              <li>✔ Family Education & Training</li>

            </ul>

          </div>

          {/* Who Needs Pediatric Care */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Who Can Benefit from Pediatric Nursing?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our pediatric nursing services are ideal for children with
              chronic illnesses, developmental conditions, post-surgical
              recovery needs, and special medical requirements.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We work closely with families and physicians to ensure
              safe, nurturing, and personalized care for every child.
            </p>

          </div>

        </div>

        {/* FAQ SECTION */}
        <div className="max-w-5xl mx-auto mb-24">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Pediatric Nursing Care – FAQs
          </h2>

          <div className="space-y-4">

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                What conditions do your pediatric nurses handle?
              </summary>
              <p className="mt-2 text-gray-600">
                Our nurses care for children with respiratory conditions,
                feeding challenges, neurological disorders, and other
                complex medical needs.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Can pediatric nursing be provided at home?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we provide pediatric nursing services in the comfort
                of your home as well as in medical facilities.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Are your pediatric nurses certified and trained?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, all our pediatric nurses are licensed, background-checked,
                and specially trained in child healthcare.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Do you accept insurance and private pay?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we accept all major insurance plans as well as
                private pay options for pediatric nursing care.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                How can I request pediatric nursing care?
              </summary>
              <p className="mt-2 text-gray-600">
                You can request pediatric services through our website,
                by phone, or by contacting our support team.
              </p>
            </details>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need Pediatric Nursing Support Today?
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our dedicated pediatric nurses are ready to provide
            gentle, reliable, and expert care for your child.
          </p>

          <div className="flex justify-center gap-4">

            <Link
              to="/request-nurse"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Request Pediatric Care →
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
