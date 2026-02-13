 import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
  {
    q: "What services does Zenith Care Services provide?",
    a: "We provide skilled nursing staffing, home-based nursing care, pediatric nursing, geriatric care, and specialized nursing services for hospitals, facilities, and home patients.",
  },
  {
    q: "How can I request nursing or care services?",
    a: "You can request services through our website, by phone, or by contacting our support team for quick assistance.",
  },
  {
    q: "Are your nurses and caregivers licensed and certified?",
    a: "Yes, all our nurses and caregivers are licensed, professionally trained, and background-verified.",
  },
  {
    q: "Do you provide services for hospitals and nursing homes?",
    a: "Yes, we offer skilled nursing staffing for hospitals, post-acute centers, long-term care facilities, and nursing homes.",
  },
  {
    q: "Do you accept insurance and private pay?",
    a: "Yes, we accept all major insurance plans as well as private pay options for our nursing services.",
  },
 
];


  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#FFF3F7]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently{" "}
            <span className="italic font-serif font-medium">
              Asked Questions
            </span>
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            Find quick answers to common questions about our healthcare
            services and support.
          </p>

          <button className="px-6 py-3 rounded-full border border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white transition">
            Contact Us
          </button>
        </div>

        {/* Right Side */}
        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900"
              >
                {item.q}

                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-sky-500 text-white text-xs">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

 
 
