import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { useAppointmentModal } from "../../context/AppointmentModalContext";

export function SpecialtiesDoctorsPoster() {
  const { openModal } = useAppointmentModal();

  // Seamless infinite loop duplicating 21 doctors for unbroken marquee
  const displayDoctors = useMemo(() => {
    return [...HOSPITAL_INFO.doctors, ...HOSPITAL_INFO.doctors];
  }, []);

  const handleBookOpd = (e, deptName) => {
    e.preventDefault();
    e.stopPropagation();
    openModal(deptName);
  };

  return (
    <section
      id="doctors-specialists"
      className="relative py-8 sm:py-10 bg-gradient-to-b from-[#FFF9F3] via-[#FFF5ED] to-[#FFF9F3] text-[#262626] overflow-hidden"
    >
      {/* Dynamic Keyframes for smooth Right-to-Left Infinite Loop */}
      <style>{`
        @keyframes doctorMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-doctor-loop {
          display: flex;
          width: max-content;
          animation: doctorMarquee 95s linear infinite;
        }
        .animate-doctor-loop:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-gradient-to-b from-[#E94B1C]/[0.035] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 relative z-10">

        {/* 1. Compact Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFF0E6] text-[#E94B1C] text-[10px] font-extrabold uppercase tracking-wider mb-2 border border-[#FADCCB]">
            <span>21 Verified Specialists • 12 Clinical Departments</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#14233C] tracking-tight leading-tight">
            Meet Our Doctors &{" "}
            <span className="bg-gradient-to-r from-[#E94B1C] to-[#F26A21] bg-clip-text text-transparent">
              Specialists
            </span>
          </h2>

          <p className="mt-1 text-xs sm:text-[13px] text-[#666] font-medium leading-relaxed max-w-lg mx-auto">
            Experienced medical leadership providing compassionate consultations and 24/7 inpatient care.
          </p>
        </div>

        {/* 2. Auto-Scroll Loop Carousel Container (Shortened Card Height) */}
        <div
          className="relative overflow-x-auto scrollbar-none py-1 mb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="animate-doctor-loop">
            {displayDoctors.map((doctor, idx) => (
              <DoctorCard
                key={`${doctor.id || doctor.name}-${idx}`}
                doctor={doctor}
                onBookOpd={(e) => handleBookOpd(e, doctor.department)}
              />
            ))}
          </div>
        </div>


        {/* 5. Minimalist Bottom Strip: Quick Emergency Help & Directory Link */}
        <div className="mt-4 pt-3 border-t border-[#F0E4DA] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2 text-[#666]">
            <Phone className="w-3.5 h-3.5 text-[#E94B1C]" />
            <span>24/7 OPD & Emergency Desk:</span>
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="font-bold text-[#C63D1B] hover:underline"
            >
              {HOSPITAL_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/doctors"
              className="font-bold text-[#14233C] hover:text-[#E94B1C] transition-colors inline-flex items-center gap-1"
            >
              <span>View Full Directory (21 Doctors)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

// Compact, Ultra-Premium Doctor Card without sloppy icons
function DoctorCard({ doctor, onBookOpd }) {
  const initials = doctor.name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  // Clean, single-line focus text
  const primaryFocus = doctor.specialties && doctor.specialties.length > 0
    ? doctor.specialties[0]
    : doctor.experience || "Comprehensive Specialist Care";

  // Clean, formatted short timing string
  const timingShort = doctor.opdTimings
    ? doctor.opdTimings.split("&")[0].trim()
    : "Mon – Sat OPD Available";

  return (
    <div className="w-[305px] sm:w-[325px] h-[235px] shrink-0 mx-2 bg-white rounded-2xl p-4 border border-[#EFE5DC] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(233,75,28,0.12)] hover:border-[#E94B1C]/40 transition-all duration-300 flex flex-col justify-between group">
      
      {/* Top Header: Department & Subtle OPD Tag (NO messy icons) */}
      <div className="flex items-center justify-between pb-2 border-b border-[#F7EFE8]">
        <span className="text-[10px] font-black uppercase tracking-wider text-[#C63D1B]">
          {doctor.department}
        </span>
        <span className="text-[9.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
          OPD Active
        </span>
      </div>

      {/* Middle: Doctor Initials + Clean Typography */}
      <div className="flex items-start gap-3 my-1">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF0E6] to-[#FFE3D0] text-[#E94B1C] font-black text-sm flex items-center justify-center border border-[#FADCCB] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
          {initials || "DR"}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[14px] font-bold text-[#14233C] group-hover:text-[#E94B1C] transition-colors leading-tight truncate">
            {doctor.name}
          </h3>
          <p className="text-[10.5px] font-bold text-[#C63D1B] leading-tight mt-0.5 truncate">
            {doctor.qualifications}
          </p>
          <p className="text-[10px] text-[#666] font-medium leading-tight mt-0.5 truncate">
            {doctor.designation}
          </p>
        </div>
      </div>

      {/* Focus Area Pill */}
      <div className="bg-[#FAF5F0] rounded-lg px-2.5 py-1 border border-[#EFE5DC]">
        <p className="text-[10.5px] text-[#4A5568] font-medium truncate">
          {primaryFocus}
        </p>
      </div>

      {/* OPD Schedule Line (Clean, no messy clock icon) */}
      <div className="flex items-center justify-between text-[10px] text-[#777] px-0.5">
        <span className="font-semibold text-[#888] uppercase tracking-wide text-[9px]">
          Schedule
        </span>
        <span className="font-bold text-[#14233C] truncate max-w-[210px]">
          {timingShort}
        </span>
      </div>

      {/* Clean Full-Width Button: Book OPD (Directly Opens Appointment Modal) */}
      <button
        type="button"
        onClick={onBookOpd}
        className="w-full py-2 px-3 rounded-xl text-[11px] font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-2xs hover:shadow-xs cursor-pointer text-center active:scale-98"
      >
        Book OPD Consultation
      </button>

    </div>
  );
}

export default SpecialtiesDoctorsPoster;
