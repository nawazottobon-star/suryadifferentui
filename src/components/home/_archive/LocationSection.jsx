import React from "react";
import { Container } from "../ui/Container";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { HOSPITAL_MEDIA } from "../../constants/hospitalMedia";
import { MapPin, Phone, Clock, Navigation, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function LocationSection({ onCallHospital, onGetDirections }) {
  return (
    <section id="location" className="py-20 sm:py-32 bg-white border-t border-surya-slate-200/80 overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-surya-teal-700 bg-surya-teal-50 px-3.5 py-1.5 rounded-full inline-block">
            CAMPUS & ACCESSIBILITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-surya-slate-900 leading-tight">
            Accessible care in Anantapur<span className="text-surya-teal-600">.</span>
          </h2>
          <p className="text-base text-surya-slate-600 leading-relaxed font-normal">
            Centrally situated to serve patients and families from Anantapur and neighboring regional areas with direct emergency drop-off.
          </p>
        </div>

        {/* 2-Column Composition: Details & Image + Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Campus Image + Address & Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 rounded-3xl bg-surya-slate-50 border border-surya-slate-200/90 overflow-hidden shadow-xl flex flex-col justify-between"
          >
            {/* Real Hospital Exterior Visual */}
            <div className="aspect-[16/10] relative overflow-hidden bg-surya-slate-100">
              <img
                src={HOSPITAL_MEDIA.exterior.src}
                alt={HOSPITAL_MEDIA.exterior.alt}
                className="w-full h-full object-cover filter contrast-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-xs font-bold">
                Surya Hospital Campus • Anantapur
              </div>
            </div>

            {/* Information Grid */}
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-surya-slate-200 flex items-center justify-center text-surya-teal-700 shrink-0 shadow-subtle">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-surya-slate-500 tracking-wider">
                    Campus Address
                  </span>
                  <h4 className="text-base font-bold text-surya-slate-900 mt-0.5">Surya Hospital</h4>
                  <p className="text-xs text-surya-slate-600 mt-0.5 leading-relaxed">
                    {HOSPITAL_INFO.region}
                  </p>
                  <p className="text-[11px] text-surya-slate-400 mt-0.5 italic">
                    {HOSPITAL_INFO.contactPlaceholders.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-surya-slate-200 flex items-center justify-center text-surya-teal-700 shrink-0 shadow-subtle">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-surya-slate-500 tracking-wider">
                    Contact & Reception
                  </span>
                  <div className="text-sm font-semibold text-surya-slate-900 mt-0.5">
                    {HOSPITAL_INFO.contactPlaceholders.generalInquiryPhone}
                  </div>
                  <span className="text-xs text-surya-slate-500 block">
                    OPD desk & patient coordination line
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-surya-emergency-50 border border-surya-emergency-200 flex items-center justify-center text-surya-emergency-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-surya-emergency-700 tracking-wider">
                    Operational Timings
                  </span>
                  <div className="text-sm font-bold text-surya-slate-900 mt-0.5">
                    24 Hours / 7 Days Active (Emergency & Pharmacy)
                  </div>
                  <span className="text-xs text-surya-slate-500 block">
                    OPD: {HOSPITAL_INFO.contactPlaceholders.opdTimings}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={onCallHospital}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider bg-surya-navy-900 hover:bg-surya-navy-800 text-white transition text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Contact Hospital Desk</span>
                <ArrowUpRight className="w-4 h-4 opacity-75" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Large Styled Map View (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-surya-slate-200/90 bg-surya-slate-100 relative shadow-xl min-h-[420px] flex items-center justify-center group"
          >
            {/* Styled Map Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />

            {/* Stylized Vector Roads Network */}
            <svg
              className="absolute inset-0 w-full h-full stroke-surya-slate-300 fill-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0 120 Q 250 80 500 140 T 1000 130" strokeWidth="8" />
              <path d="M 220 0 Q 240 220 400 500" strokeWidth="5" />
              <path d="M 0 320 L 1000 360" strokeWidth="4" strokeDasharray="8 8" />
              <path d="M 520 0 L 520 700" strokeWidth="6" />
            </svg>

            {/* Central Animated Pin Card */}
            <div className="relative z-10 text-center p-8 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-surya-slate-200 max-w-sm mx-4">
              <div className="w-14 h-14 rounded-2xl bg-surya-navy-900 text-surya-teal-400 flex items-center justify-center mx-auto mb-4 ring-4 ring-surya-teal-500/25 shadow-lg">
                <Navigation className="w-7 h-7 animate-pulse" />
              </div>
              <h4 className="text-lg font-bold text-surya-slate-900">
                Surya Hospital Landmark
              </h4>
              <p className="text-xs text-surya-slate-600 mt-1.5 leading-relaxed">
                Anantapur Regional Hub. Direct ambulance and patient drop-off access.
              </p>
              <div className="mt-4 pt-4 border-t border-surya-slate-100">
                <button
                  type="button"
                  onClick={onGetDirections}
                  className="px-5 py-2.5 rounded-xl bg-surya-teal-600 hover:bg-surya-teal-500 text-white text-xs font-bold transition shadow-sm"
                >
                  Get Driving Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
