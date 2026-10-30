import React from "react";
import { PhoneCall, MapPin, Clock } from "lucide-react";
import { Container } from "../ui/Container";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function TopEmergencyBar() {
  return (
    <aside aria-label="Emergency Care Bar" className="bg-[#13233D] text-slate-200 text-xs border-b border-[#1C3256] select-none">
      <Container>
        <div className="flex items-center justify-between py-1.5 sm:py-2 gap-2 text-[11px] sm:text-xs">
          {/* Left: 24/7 Emergency indicator & Location */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E94B1C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E94B1C]"></span>
            </span>
            <span className="font-bold text-red-400 text-[11px] sm:text-xs tracking-tight">
              24/7 Emergency
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-300 hidden sm:inline-flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-[#E94B1C] inline" />
              <span>{HOSPITAL_INFO.locationShort}</span>
            </span>
          </div>

          {/* Right: Phone Call Action & OPD */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-300 shrink-0">
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3 h-3 text-[#E94B1C]" />
              <span>OPD: 9:00 AM – 2:00 PM & 5:00 PM – 9:00 PM</span>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="flex items-center gap-1 sm:gap-1.5 text-slate-200 hover:text-white font-semibold transition text-[11px] sm:text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#E94B1C]" />
              <span className="hidden xs:inline sm:inline">Reception:</span>
              <span className="tracking-wide text-[#B2CEE2] font-bold underline underline-offset-2 decoration-[#3A4F99]">
                {HOSPITAL_INFO.phone}
              </span>
            </a>
          </div>
        </div>
      </Container>
    </aside>
  );
}
export default TopEmergencyBar;
