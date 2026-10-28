import React from "react";
import {
  Calendar,
  PhoneCall,
  ShieldCheck,
  ArrowRight,
  Award,
  Users,
  Quote,
} from "lucide-react";

export function HeroContent({ onOpenAppointment, onScrollToFounder }) {
  return (
    <div className="flex flex-col justify-center space-y-5 lg:space-y-6">
      {/* ── EYEBROW PILL ── */}
      <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#E94B1C]/10 border border-[#E94B1C]/25 text-[#E94B1C] text-xs sm:text-sm font-bold tracking-wider w-fit">
        <span>BUILT ON TRUST, DRIVEN BY CARE</span>
      </div>

      {/* ── MAIN HEADLINE (Harmonized with Founder's Story & Vision) ── */}
      <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-slate-900 tracking-tight leading-[1.22] font-serif">
        Advanced Care,{" "}
        <span className="block mt-1 bg-gradient-to-r from-[#E94B1C] via-[#F26A21] to-[#C93B10] bg-clip-text text-transparent pb-1.5">
          Driven by a Deeper Purpose.
        </span>
      </h1>

      {/* ── FOUNDER DOCTOR SPOTLIGHT CARD (Ultra-Premium Architectural Glassmorphism) ── */}
      <div 
        onClick={onScrollToFounder}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 via-[#FFFDF9]/95 to-[#FFF6EB]/90 backdrop-blur-xl border border-amber-900/10 ring-1 ring-white/90 shadow-[0_18px_42px_-12px_rgba(233,75,28,0.18),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_50px_-10px_rgba(233,75,28,0.26)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer p-4 sm:p-5"
      >
        {/* Top Architectural Accent Gradient Strip */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E94B1C] via-[#F59E0B] to-[#E94B1C]/25" />

        {/* Ambient Warm Golden Watermark Glow */}
        <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-br from-[#E94B1C]/15 to-amber-300/15 blur-2xl pointer-events-none" />
        
        {/* Subtle Surya Sunburst Seal Watermark */}
        <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-[0.04] pointer-events-none text-[#E94B1C]">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="22" />
            <path d="M50 8 L54 22 L46 22 Z M50 92 L54 78 L46 78 Z M8 50 L22 46 L22 54 Z M92 50 L78 46 L78 54 Z M20 20 L32 26 L26 32 Z M80 80 L68 74 L74 68 Z M20 80 L26 68 L32 74 Z M80 20 L74 32 L68 26 Z" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Authentic Doctor Photo in Luxury Bezel Frame */}
          <div className="relative shrink-0">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-amber-400/40 via-[#E94B1C]/30 to-amber-200/50 shadow-md ring-1 ring-white/80">
              <img
                src="/images/dr-surya-prakash-clinic.jpg"
                alt="Dr. D. Surya Prakash Chowdary"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-top filter brightness-[1.02] contrast-[1.02]"
              />
            </div>
            {/* Verified Doctor Badge */}
            <div 
              className="absolute -bottom-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-tr from-[#E94B1C] to-[#F59E0B] text-white shadow-md ring-2 ring-white"
              title="Verified Founding Medical Director"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Doctor Header, Credentials & Full Story CTA */}
          <div className="flex-1 space-y-1.5 min-w-0">
            {/* Top Row: Eyebrow + Full Story CTA */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#C93B10]">
                Founding Medical Director
              </span>

              {/* Eye-catching Magnetic Full Story Pill Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onScrollToFounder(e);
                }}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#E94B1C] to-[#D43F14] hover:from-[#D43F14] hover:to-[#B8320B] text-white font-bold text-xs shadow-md shadow-[#E94B1C]/25 hover:shadow-lg hover:shadow-[#E94B1C]/40 hover:scale-105 active:scale-95 transition-all duration-200"
                title="Read Founder Story"
              >
                <span>Full Story</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Doctor Name in ONE STRAIGHT LINE */}
            <h2 className="text-base sm:text-lg lg:text-[1.18rem] font-serif font-extrabold text-slate-900 leading-tight tracking-tight whitespace-nowrap">
              Dr. D. Surya Prakash Chowdary
            </h2>

            {/* Credential Micro-Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/90 text-slate-700 text-[11px] font-semibold border border-amber-900/10 shadow-xs whitespace-nowrap">
                MBBS, MD (Manipal)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100/70 text-amber-900 text-[11px] font-bold border border-amber-300/40 shadow-xs whitespace-nowrap">
                <Award className="w-3 h-3 text-[#E94B1C]" />
                15+ Yrs Exp
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-100/70 text-[#C93B10] text-[11px] font-bold border border-[#E94B1C]/25 shadow-xs whitespace-nowrap">
                <Users className="w-3 h-3 text-[#E94B1C]" />
                ~1 Lakh+ Cared
              </span>
            </div>

            {/* Editorial Quote Treatment with Subtle Left Accent Ribbon */}
            <div className="relative mt-2 pl-3 pr-2.5 py-2 rounded-r-xl bg-amber-50/60 border-l-[3px] border-[#E94B1C] border-y border-r border-amber-900/5">
              <p className="text-xs sm:text-[13px] text-slate-700 italic leading-snug">
                <Quote className="w-3 h-3 text-[#E94B1C] inline mr-1 -mt-1 opacity-70" />
                "We built Surya Hospital with one promise: to treat every patient with the <span className="font-semibold text-slate-900 not-italic">precision, empathy, and wholistic care</span> we would give our own family."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CALL TO ACTION BUTTONS ── */}
      <div className="flex flex-wrap items-center gap-3.5 pt-0.5">
        <button
          onClick={onOpenAppointment}
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#E94B1C] hover:bg-[#D43F14] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#E94B1C]/25 hover:shadow-xl hover:shadow-[#E94B1C]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>

        <a
          href="tel:+918500904999"
          className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white/95 hover:bg-white text-slate-800 font-semibold text-sm sm:text-base border border-slate-200 shadow-sm hover:border-[#E94B1C]/40 hover:text-[#E94B1C] transition-all duration-200"
        >
          <PhoneCall className="w-4 h-4 text-[#E94B1C]" />
          <span>24/7 Helpline: 085009 04999</span>
        </a>
      </div>
    </div>
  );
}

export default HeroContent;
