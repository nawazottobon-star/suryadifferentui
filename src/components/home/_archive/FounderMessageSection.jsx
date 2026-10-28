import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, HeartPulse, Building2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function FounderMessageSection() {
  return (
    <section
      id="founder-vision"
      className="relative w-full py-20 sm:py-28 bg-[#FFF9F3] text-slate-800 overflow-hidden border-t border-[#F0E4D8]/70"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-amber-200/15 blur-[100px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-orange-200/20 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Founder Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative w-full max-w-[380px] rounded-3xl p-6 sm:p-7 bg-white/95 backdrop-blur-xl border border-[#EFE5DC] shadow-[0_16px_40px_rgba(200,90,40,0.06)]">
              {/* Doctor Real Portrait */}
              <div className="relative w-full aspect-[4/4.5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFF0E6] to-[#FFE3D0] border border-[#F0DFD3] shadow-inner mb-5">
                <img
                  src="/images/dr-d-surya-prakash.png"
                  alt="Dr. Surya Prakash Chowdary - Founder, Surya Hospital"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-[#E94B1C] text-white shadow-xs">
                    Managing Director &amp; Founder
                  </span>
                </div>
              </div>

              {/* Identity details */}
              <h3 className="text-xl sm:text-2xl font-black text-[#14233C] tracking-tight">
                Dr. Surya Prakash Chowdary
              </h3>
              <p className="text-xs sm:text-[13px] font-semibold text-[#D9771E] mt-0.5">
                MBBS, MD · Manipal Academy of Higher Education
              </p>
              <p className="text-xs text-[#717171] font-medium mt-0.5">
                Founder &amp; Chief Physician, Surya Hospital
              </p>

              {/* Quote pill */}
              <div className="mt-4 pt-4 border-t border-[#F0E4D8] flex items-start gap-2.5 text-left">
                <Quote className="w-5 h-5 text-[#E94B1C] shrink-0 mt-0.5 rotate-180" />
                <p className="text-xs text-[#4A403B] italic leading-relaxed font-serif">
                  “Healthcare begins with understanding the person, not just the condition.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Story & Vision (Exact Approved Copy) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D9771E]">
              <span className="w-6 h-[2px] bg-[#D9771E] rounded-full" />
              <span>THE FOUNDER'S JOURNEY &amp; VISION</span>
            </div>

            {/* Section Heading */}
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#14233C] tracking-tight leading-tight">
              A Life Dedicated to Healing, <br className="hidden sm:inline" />
              <span className="text-[#D9771E]">A Vision for Community Wellness.</span>
            </h2>

            {/* Story Paragraphs — Exact Draft Copy Required by Prompt */}
            <div className="space-y-4 text-base sm:text-[17px] text-[#4A5568] leading-relaxed font-normal">
              <p>
                Dr. Surya Prakash Chowdary brings over 15 years of experience in patient care and holds an MBBS and MD from Manipal Academy of Higher Education. Having cared for approximately one lakh patients, he believes in a holistic approach that combines medical expertise, empathy, and an understanding of each patient's individual needs.
              </p>

              <p>
                During the COVID-19 pandemic, he took the initiative to care for patients at his clinic despite limited facilities. This commitment to patient care inspired the establishment of Surya Hospital in 2024, with a vision to bring multiple medical specialities and facilities together under one roof.
              </p>

              <p className="font-medium text-[#14233C]">
                His vision is to make healthcare more accessible, compassionate, and comprehensive for every patient.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 w-full">
              <div className="p-4 rounded-2xl bg-white border border-[#EFE5DC] shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-[#FFF5EC] text-[#D9771E] flex items-center justify-center mb-2 font-bold text-xs">
                  01
                </div>
                <div className="text-sm font-bold text-[#14233C]">Clinical Rigor</div>
                <div className="text-xs text-[#717171] mt-0.5">Manipal medical standards and evidence-based diagnosis</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EFE5DC] shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-[#FFF5EC] text-[#D9771E] flex items-center justify-center mb-2 font-bold text-xs">
                  02
                </div>
                <div className="text-sm font-bold text-[#14233C]">Compassion First</div>
                <div className="text-xs text-[#717171] mt-0.5">Treating every individual with dignity and active listening</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EFE5DC] shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-[#FFF5EC] text-[#D9771E] flex items-center justify-center mb-2 font-bold text-xs">
                  03
                </div>
                <div className="text-sm font-bold text-[#14233C]">One-Roof Care</div>
                <div className="text-xs text-[#717171] mt-0.5">Comprehensive departments, diagnostics &amp; 24/7 emergency</div>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#D9771E] hover:text-[#A83218] transition-colors group"
              >
                <span>Read Full Hospital Background &amp; Leadership</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FounderMessageSection;
