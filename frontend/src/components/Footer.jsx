 import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegEnvelope,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

import defaultLogo from "../assets/logo.jpeg";
import { useSettings } from "../context/SettingsContext";

export default function Footer() {
  const { settings } = useSettings();

  // -------- LOGO --------
  const logoUrl = defaultLogo;

  // -------- DEFAULT VALUES --------
  const defaultEmail = "info@gentleheartshha.com";
  const defaultPhone = "+1 (508) 873-5711";
  const defaultAddress =
    "231 Main Street, Cherry Valley, MA 01611, United States";

  // -------- SOCIAL LINKS (FORCED) --------
  const instagram =
    "https://www.instagram.com/gentleheartshomecareagency/";
  const twitter = "https://x.com/gentle_hom33244";

  const facebook = settings?.facebook || "";
  const tiktok = settings?.tiktok || "";

  const address = settings?.address || defaultAddress;
  const addressLink = `https://maps.google.com/?q=${encodeURIComponent(
    address
  )}`;

  const phone = settings?.phone || defaultPhone;
  const phoneHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;

  const email = settings?.email || defaultEmail;
  const cleanedEmail = email.replace(/(<([^>]+)>)/gi, "").trim();

  return (
    <footer className="bg-[#AF3059] text-white relative pt-24 pb-10">
      <div className="absolute top-0 left-0 w-full h-1 bg-white/80" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-16">
        {/* LOGO */}
        <div>
          <img
            src={logoUrl}
            alt="Gentle Hearts Logo"
            className="w-32 rounded-2xl mb-4"
          />
          <p className="text-sm text-white/85">
            Providing compassionate, private-pay in-home health care focused on
            dignity, trust, and clinical excellence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li><a href="/services/stroke-recovery-neuro-rehab">Stroke Recovery & Neuro-Rehab</a></li>
            <li><a href="/services/dementia-alzheimers-care">Dementia & Alzheimer’s Care</a></li>
            <li><a href="/services/post-surgical-recovery">Post-Surgical Recovery</a></li>
            <li><a href="/services/comprehensive-care-coordination">Care Coordination</a></li>
            <li><a href="/services/concierge-add-ons">Concierge & White-Glove Care</a></li>
            <li><a href="/services/private-pay-model">Private-Pay Model</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-sm text-white/85">
            <li className="flex gap-3">
              <FaMapMarkerAlt />
              <a href={addressLink} target="_blank" rel="noreferrer">
                {address}
              </a>
            </li>
            <li className="flex gap-3">
              <FaPhone className="scale-x-[-1]" />
              <a href={phoneHref}>{phone}</a>
            </li>
            <li className="flex gap-3">
              <FaRegEnvelope />
              <a href={`mailto:${cleanedEmail}`}>{cleanedEmail}</a>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-3">
            {facebook && (
              <a href={facebook} target="_blank" rel="noreferrer"
                className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059]">
                <FaFacebookF />
              </a>
            )}
            <a href={instagram} target="_blank" rel="noreferrer"
              className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059]">
              <FaInstagram />
            </a>
            <a href={twitter} target="_blank" rel="noreferrer"
              className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059]">
              <FaTwitter />
            </a>
            {tiktok && (
              <a href={tiktok} target="_blank" rel="noreferrer"
                className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059]">
                <SiTiktok />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-16 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Gentle Hearts Home Health Care Agency.  
        Developed by{" "}
        <a
          href="https://www.webieapp.com/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          WebieApp
        </a>
      </div>
    </footer>
  );
}
