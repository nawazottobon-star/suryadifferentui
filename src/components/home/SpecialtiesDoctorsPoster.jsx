import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { useAppointmentModal } from "../../context/AppointmentModalContext";

// Department tabs configuration
const TABS = [
  { id: "All", label: "All Specialists", count: 21 },
  { id: "Cardiology", label: "Cardiology", count: 2 },
  { id: "Gastroenterology", label: "Gastroenterology", count: 1 },
  { id: "Nephrology", label: "Nephrology", count: 2 },
  { id: "Orthopedic", label: "Orthopedic & Spine", count: 3 },
  { id: "E.N.T.", label: "E.N.T.", count: 2 },
  { id: "Pulmonology", label: "Pulmonology", count: 2 },
  { id: "Neurology", label: "Neurology", count: 1 },
  { id: "Urology", label: "Urology", count: 2 },
  { id: "General Surgery", label: "General Surgery", count: 2 },
  { id: "Oncology", label: "Oncology", count: 1 },
  { id: "Psychiatry", label: "Psychiatry", count: 1 },
  { id: "Anesthesia & Intensivist", label: "Critical Care", count: 1 },
  { id: "Internal Medicine", label: "General Medicine", count: 1 },
];

export function SpecialtiesDoctorsPoster() {
  const { openModal } = useAppointmentModal();
  const [activeTab, setActiveTab] = useState("All");

  // Filter doctors based on active tab
  const filteredDoctors = useMemo(() => {
    if (activeTab === "All") {
      return HOSPITAL_INFO.doctors;
    }
    return HOSPITAL_INFO.doctors.filter(
      (doc) => doc.department.toLowerCase() === activeTab.toLowerCase()
    );
  }, [activeTab]);

  // For seamless infinite auto-scroll, duplicate list when showing "All" or more than 3 doctors
  const displayDoctors = useMemo(() => {
    if (activeTab === "All" || filteredDoctors.length >= 4) {
      return [...filteredDoctors, ...filteredDoctors];
    }
    return filteredDoctors;
  }, [filteredDoctors, activeTab]);

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

        {/* 1. Compact Header Block (Takes minimal vertical space) */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFF0E6] text-[#E94B1C] text-[10px] font-extrabold uppercase tracking-wider mb-2 border border-[#FADCCB]">
            <span>Expert Medical Team</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#14233C] tracking-tight leading-tight">
            Meet Our Doctors &{" "}
            <span className="bg-gradient-to-r from-[#E94B1C] to-[#F26A21] bg-clip-text text-transparent">
              Specialists
            </span>
          </h2>

          <p className="mt-1 text-xs sm:text-[13px] text-[#666] font-medium leading-relaxed max-w-lg mx-auto">
            Experienced specialists across 12 approved departments. Continuous directory.
          </p>
        </div>

        {/* 2. Compact Department Filter Tabs */}
        <div className="relative mb-5">
          <div
            className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 px-1 scrollbar-none justify-start md:justify-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] text-white shadow-xs"
                      : "text-[#555] bg-white/90 hover:bg-white hover:text-[#14233C] border border-[#EFE5DC]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`ml-1 text-[9.5px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#FFF0E6] text-[#C63D1B]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Auto-Scroll Loop Carousel Container (Shortened Card Height) */}
        <div
          className="relative overflow-x-auto scrollbar-none py-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {activeTab === "All" ? (
            /* Continuous Infinite Right-to-Left Marquee Track */
            <div className="animate-doctor-loop">
              {displayDoctors.map((doctor, idx) => (
                <DoctorCard
                  key={`${doctor.id || doctor.name}-${idx}`}
                  doctor={doctor}
                  onBookOpd={(e) => handleBookOpd(e, doctor.department)}
                />
              ))}
            </div>
          ) : (
            /* Filtered Cards Grid or Row */
            <div className="flex items-center gap-4 flex-wrap justify-center py-1">
              {filteredDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id || doctor.name}
                  doctor={doctor}
                  onBookOpd={(e) => handleBookOpd(e, doctor.department)}
                />
              ))}
            </div>
          )}
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
