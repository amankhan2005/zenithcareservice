 import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Hero Image
import heroImg from "../../assets/cna.jpg";

export default function CNA() {
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
              Certified Personal Care Assistance
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] mb-6">

              Certified <br />
              Nursing{" "}
              <span className="font-serif italic font-medium">
                Assistance
              </span>

            </h1>


            <p className="text-gray-600 max-w-lg mb-8">
              Zenith Care Services provides trained and certified
              Nursing Assistants who support patients with personal
              care, daily activities, and emotional well-being at
              home and healthcare facilities.
            </p>


            <div className="flex gap-4">

              <Link
                to="/request-nurse"
                className="bg-pink-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Request a CNA →
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
              alt="Certified Nursing Assistant"
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>


        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">


          {/* Services */}
          <div className="bg-sky-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our CNA Services
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>✔ Bathing & Grooming Assistance</li>
              <li>✔ Feeding & Nutrition Support</li>
              <li>✔ Mobility & Transfer Help</li>
              <li>✔ Companionship & Emotional Support</li>
              <li>✔ Daily Activity Assistance</li>
              <li>✔ Personal Hygiene Care</li>
              <li>✔ Monitoring Patient Comfort</li>

            </ul>

          </div>


          {/* Who Needs CNA */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Who Can Benefit from Our CNAs?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our Certified Nursing Assistants are ideal for seniors,
              patients with limited mobility, and individuals who
              need daily personal assistance.
            </p>

            <p className="text-gray-700 leading-relaxed">
              They work closely with nurses and families to ensure
              comfort, dignity, and quality care.
            </p>

          </div>

        </div>


        {/* FAQ SECTION */}
        <div className="max-w-5xl mx-auto mb-24">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Certified Nursing Assistant (CNA) – FAQs
          </h2>


          <div className="space-y-4">


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                What services do your CNAs provide?
              </summary>
              <p className="mt-2 text-gray-600">
                Our CNAs assist with bathing, feeding, mobility,
                hygiene, companionship, and daily care.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Can I hire a CNA for home care?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we provide Certified Nursing Assistants for
                in-home personal care and long-term support.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Are your CNAs trained and verified?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, all our CNAs are certified, background-checked,
                and professionally trained.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Do you offer full-time and part-time CNA services?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we offer flexible full-time, part-time, and
                short-term care plans.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                How can I request a CNA?
              </summary>
              <p className="mt-2 text-gray-600">
                You can request a CNA through our website form or
                by contacting our support team.
              </p>
            </details>

          </div>

        </div>


        {/* CTA */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need a Certified Nursing Assistant Today?
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our compassionate CNAs are ready to provide daily care,
            comfort, and trusted support for your loved ones.
          </p>


          <div className="flex justify-center gap-4">

            <Link
              to="/request-nurse"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Request a CNA →
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
