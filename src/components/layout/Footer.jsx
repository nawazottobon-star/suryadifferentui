import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowRight, ArrowUp, QrCode } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import suryaLogo from "../../../Surya Hospital Logo.png";
import HalftoneWordmarkFooter from "../ui/halftone-wordmark-footer";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/specialities" },
    { name: "Our Doctors", path: "/doctors" },
    { name: "Insurance Partners", path: "/insurance-partners" },
    { name: "Contact Us", path: "/contact" },
  ];

  const googleProfileUrl = "https://local.google.com/place?placeid=ChIJX_LA_t1KsTsRC3UMXOmIBcw&utm_medium=noren&utm_source=gbp&utm_campaign=2026";

  return (
    <footer className="relative bg-[#13233D] text-white pt-12 sm:pt-16 pb-0 m-0 border-none overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-4 sm:pb-5 border-none">
          
          {/* Column 1: Hospital Logo, Tagline & Address (4 Cols) */}
          <div className="lg:col-span-4 space-y-3.5 text-left">
            <Link to="/" className="inline-block focus:outline-none">
              <img
                src={suryaLogo}
                alt="Surya Hospital Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-[#B2CEE2]/90 font-medium leading-relaxed">
              Comprehensive Healthcare. Compassionate Care.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-[#B2CEE2]/90 pt-1">
              <MapPin className="w-4 h-4 text-[#B2CEE2] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                #12-3-367, 9th Cross, Sai Nagar, Ananthapuramu - 515004
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-[#B2CEE2]/90">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#EEF2FB] hover:translate-x-1 transition-transform transition-colors"
                  >
                    • {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>

            <div className="space-y-2 text-xs text-[#B2CEE2]/90">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#B2CEE2] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="font-bold text-white hover:text-[#EEF2FB] hover:translate-x-1 transition-transform">
                    8500904999
                  </a>
                  <p className="text-[11px] text-[#B2CEE2]/90">24 Hours / 7 Days (Emergency)</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#B2CEE2] shrink-0 mt-0.5" />
                <a href="mailto:insurancedesksuryahospital@gmail.com" className="hover:text-[#EEF2FB] hover:translate-x-1 transition-transform break-all">
                  insurancedesksuryahospital@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#B2CEE2] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Hospital Open 24 Hours / 7 Days
                  </span>
                  <p className="text-[11px] text-[#B2CEE2]/90">Casualty, Inpatient, Dialysis & Pharmacy: 24/7</p>
                  <p className="text-[11px] text-[#B2CEE2]/90">Doctor OPD: 09:00 AM – 02:00 PM & 05:00 PM – 09:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Our Location Card with Direct Directions CTA & Google QR Code (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Location
            </h4>

            <div className="rounded-2xl border bg-[#1C3256] p-3 shadow-card space-y-2.5 border-2 border-[#B2CEE2]/40">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#13233D]/60 border border-[#3A4F99]/40">
                <div className="w-7 h-7 rounded-full bg-[#D9E6F5] text-[#13233D] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Surya Hospital</div>
                  <div className="text-[10px] text-[#B2CEE2]/90">Sai Nagar / Behind Ambedkar Bhavan</div>
                </div>
              </div>

              {/* Verified Official Google QR Code from Google Business Profile */}
              <div className="p-3 rounded-2xl bg-white border border-[#B2CEE2]/70 shadow-sm flex items-center gap-3.5">
                <a
                  href={googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-lg overflow-hidden bg-white p-1 border border-slate-200/90 shadow-2xs hover:scale-105 transition-transform cursor-pointer block"
                  title="Scan or click to open Google Profile"
                >
                  <img
                    src="/images/surya-google-qr.png"
                    alt="Surya Hospital Google QR Code"
                    className="w-full h-full object-contain"
                  />
                </a>
                <div className="min-w-0 flex-1 text-left">
                  <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#EEF2FB] text-[#3A4F99] text-[9px] font-black uppercase tracking-wider border border-[#B2CEE2]">
                    <QrCode className="w-2.5 h-2.5" />
                    <span>Scan with Phone</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#13233D] mt-1 leading-tight">
                    Google Business
                  </div>
                  <a
                    href={googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-[#3A4F99] hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>View Map & Reviews</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <a
                href={HOSPITAL_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-white bg-[#3A4F99] hover:bg-[#2A3B7A] flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Halftone Wordmark Canvas Banner: "surya hospital" */}
      <div className="w-full relative border-t border-[#1C3256]/40 overflow-hidden bg-[#0D1728]">
        <HalftoneWordmarkFooter
          wordmark="surya hospital"
          height="clamp(90px, 10.5vw, 150px)"
          dotGap={6}
          radius={85}
          crop={0.2}
          grain={0.4}
          interactive={true}
          palette={{
            background: "#0D1728",
            ink: "#B2CEE2",
            warm: "#E9762B",
          }}
          showTopColumns={false}
        />
      </div>

      {/* Bottom Copyright & Legal Strip with Back-to-Top Button */}
      <div className="bg-[#090F1B] text-slate-400 border-t border-[#1C3256]/40 py-4 w-full m-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 Surya Hospital. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-xs text-[#B2CEE2]/80">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-[#1C3256] text-[#B2CEE2] hover:bg-[#3A4F99] hover:text-white hover:scale-105 transition-all flex items-center justify-center shadow-md cursor-pointer border border-[#3A4F99]/60"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
