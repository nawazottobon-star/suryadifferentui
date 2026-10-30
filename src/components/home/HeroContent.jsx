import React from "react";
import { Calendar, PhoneCall } from "lucide-react";
import { GenerateButton } from "../ui/generate-button";

export function HeroContent({ onOpenAppointment }) {
  return (
    <div className="space-y-6 text-left">
      {/* ── SIMPLE CLEAN TAG ── */}
      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3A4F99]">
        Surya Hospital · Sai Nagar, Anantapur
      </span>

      {/* ── BOLD, PUNCHY MINIMAL HEADLINE ── */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#13233D] tracking-tight leading-[1.08]">
        Advanced Care. <br />
        <span className="text-[#3A4F99]">Compassionate Healing.</span>
      </h1>

      {/* ── ONE SIMPLE CRISP LINE ── */}
      <p className="text-base sm:text-lg text-[#556070] font-medium leading-relaxed max-w-lg">
        24/7 emergency casualty, ICU, and multi-specialty healthcare with seamless cashless support.
      </p>

      {/* ── CLEAN ACTION BUTTONS ── */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <GenerateButton
          onClick={onOpenAppointment}
          hue={222}
          icon={Calendar}
          className="px-6 py-3.5 text-sm sm:text-base font-bold shadow-md"
        >
          Book Appointment
        </GenerateButton>

        <a
          href="tel:8500904999"
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#EEF2FB] text-[#13233D] font-bold text-sm border border-[#B2CEE2] shadow-2xs hover:border-[#3A4F99] transition-all duration-200"
        >
          <PhoneCall className="w-4 h-4 text-[#3A4F99]" />
          <span>Call: 8500904999</span>
        </a>
      </div>
    </div>
  );
}

export default HeroContent;
