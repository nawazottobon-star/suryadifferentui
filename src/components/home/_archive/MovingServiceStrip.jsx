import React, { useState } from "react";
import { UserSearch, Stethoscope, Calendar, AlertCircle, Microscope, MapPin, ArrowRight } from "lucide-react";

export function MovingServiceStrip({
  onFindDoctor,
  onFindDepartment,
  onBookAppointment,
  onEmergencyCare,
  onDiagnostics,
  onLocation,
}) {
  const [isPaused, setIsPaused] = useState(false);

  const baseServices = [
    {
      id: "doc",
      title: "Find a Doctor",
      sub: "Specialists & Department Leads",
      icon: UserSearch,
      action: onFindDoctor,
      badge: "OPD Roster",
    },
    {
      id: "dept",
      title: "Find a Department",
      sub: "Medical & Surgical Services",
      icon: Stethoscope,
      action: onFindDepartment,
      badge: "Clinical Care",
    },
    {
      id: "appt",
      title: "Book Appointment",
      sub: "Schedule In-Person Consultation",
      icon: Calendar,
      action: onBookAppointment,
      badge: "Direct OPD",
      isPrimary: true,
    },
    {
      id: "emg",
      title: "24/7 Emergency Care",
      sub: "Immediate Acute Trauma Triage",
      icon: AlertCircle,
      action: onEmergencyCare,
      badge: "Always Open",
      isEmergency: true,
    },
    {
      id: "diag",
      title: "Diagnostics & Lab",
      sub: "Pathology, X-Ray, USG & ECG",
      icon: Microscope,
      action: onDiagnostics,
      badge: "In-House Lab",
    },
    {
      id: "loc",
      title: "Hospital Location",
      sub: "Anantapur Regional Hub",
      icon: MapPin,
      action: onLocation,
      badge: "Route & Map",
    },
  ];

  // Repeat items for seamless infinite horizontal scroll
  const items = [...baseServices, ...baseServices, ...baseServices];

  return (
    <section
      className="relative z-30 -mt-6 sm:-mt-10 overflow-hidden bg-white/95 backdrop-blur-xl border-y border-surya-slate-200/90 shadow-xl py-3.5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="flex items-center">
        {/* Infinite CSS Marquee Reel */}
        <div
          className={`flex gap-4 sm:gap-6 shrink-0 will-change-transform ${
            isPaused ? "animate-none" : "animate-[marquee_45s_linear_infinite]"
          }`}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={`${item.id}-${idx}`}
                type="button"
                onClick={item.action}
                className={`group flex items-center gap-4 px-5 py-3.5 rounded-2xl text-left transition-all duration-200 border whitespace-nowrap shrink-0 hover:scale-[1.02] shadow-sm ${
                  item.isEmergency
                    ? "bg-surya-emergency-50/90 border-surya-emergency-200 hover:border-surya-emergency-500 hover:shadow-emergency"
                    : item.isPrimary
                    ? "bg-surya-teal-50/90 border-surya-teal-300 hover:border-surya-teal-500"
                    : "bg-white border-surya-slate-200/90 hover:border-surya-navy-300 hover:bg-surya-slate-50"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                    item.isEmergency
                      ? "bg-surya-emergency-600 text-white shadow-emergency"
                      : item.isPrimary
                      ? "bg-surya-teal-600 text-white"
                      : "bg-surya-slate-100 text-surya-navy-900 group-hover:bg-surya-teal-50 group-hover:text-surya-teal-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-surya-slate-900 tracking-tight">
                      {item.title}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        item.isEmergency
                          ? "bg-surya-emergency-100 text-surya-emergency-800"
                          : "bg-surya-slate-100 text-surya-slate-600"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-surya-slate-500 mt-0.5">
                    {item.sub}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-surya-slate-400 group-hover:text-surya-navy-900 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
