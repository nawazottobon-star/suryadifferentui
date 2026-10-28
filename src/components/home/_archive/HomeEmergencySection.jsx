import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { PhoneCall, MapPin, Clock } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function HomeEmergencySection() {
  return (
    <section className="py-16 md:py-20 bg-[#252B33] text-white border-b border-[#373F4A] relative overflow-hidden">
      {/* Subtle warm accent gradient in background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C65332]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto bg-[#1D2229] border border-[#373F4A] rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Left Content */}
            <div className="space-y-4 text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C65332]/20 text-[#F6D8C5] border border-[#C65332]/40">
                <span className="w-2 h-2 rounded-full bg-[#C65332] animate-ping" />
                <span>24/7 CASUALTY & TRAUMA TRIAGE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Immediate Emergency & Critical Medical Response
              </h2>

              <p className="text-sm sm:text-base text-[#A0A8B4] leading-relaxed">
                Surya Hospital operates round-the-clock emergency casualty and trauma stabilization in Sai Nagar, Anantapur. On-duty physicians, emergency nurses, and critical care infrastructure are available 365 days a year.
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#808A96] pt-1">
                <div className="flex items-center gap-1.5 text-white">
                  <Clock className="w-4 h-4 text-[#C65332]" />
                  <span>24 Hours / 7 Days a Week</span>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <MapPin className="w-4 h-4 text-[#D98A62]" />
                  <span>Sai Nagar, Anantapur</span>
                </div>
              </div>
            </div>

            {/* Right Action Block */}
            <div className="flex flex-col gap-3 shrink-0 sm:min-w-[240px]">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#C65332] hover:bg-[#A84328] text-white shadow-sm transition text-center"
              >
                <PhoneCall className="w-4 h-4 animate-pulse" />
                <span>Call: {HOSPITAL_INFO.phone}</span>
              </a>

              <Link to="/emergency" className="w-full">
                <Button
                  variant="outline"
                  size="md"
                  fullWidth
                  className="bg-transparent hover:bg-white/10 text-white border-[#D98A62] text-xs font-semibold"
                >
                  Emergency Guidelines & 112 Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
