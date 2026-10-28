import React from "react";
import { Container } from "../ui/Container";
import {
  UserSearch,
  Stethoscope,
  Calendar,
  AlertCircle,
  Microscope,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export function PatientActionHub({
  onFindDoctor,
  onFindSpecialty,
  onBookAppointment,
  onEmergencyCare,
  onDiagnostics,
  onLocation,
}) {
  const actions = [
    {
      id: "doctor",
      title: "Find a Doctor",
      desc: "Specialists & clinical leads",
      icon: UserSearch,
      onClick: onFindDoctor,
      color: "group-hover:text-surya-teal-600",
      bgHover: "hover:border-surya-teal-300",
    },
    {
      id: "specialty",
      title: "Find a Specialty",
      desc: "Medical & surgical services",
      icon: Stethoscope,
      onClick: onFindSpecialty,
      color: "group-hover:text-surya-teal-600",
      bgHover: "hover:border-surya-teal-300",
    },
    {
      id: "appointment",
      title: "Book Appointment",
      desc: "OPD consultation schedule",
      icon: Calendar,
      onClick: onBookAppointment,
      color: "group-hover:text-surya-teal-600",
      bgHover: "hover:border-surya-teal-300",
    },
    {
      id: "emergency",
      title: "24/7 Emergency",
      desc: "Acute trauma & critical care",
      icon: AlertCircle,
      onClick: onEmergencyCare,
      isEmergency: true,
      color: "text-surya-emergency-600",
      bgHover: "border-surya-emergency-200 hover:border-surya-emergency-500 bg-surya-emergency-50/40",
    },
    {
      id: "diagnostics",
      title: "Diagnostics & Lab",
      desc: "Pathology, X-Ray, ECG, USG",
      icon: Microscope,
      onClick: onDiagnostics,
      color: "group-hover:text-surya-teal-600",
      bgHover: "hover:border-surya-teal-300",
    },
    {
      id: "location",
      title: "Hospital Location",
      desc: "Anantapur regional route",
      icon: MapPin,
      onClick: onLocation,
      color: "group-hover:text-surya-teal-600",
      bgHover: "hover:border-surya-teal-300",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 mb-16 sm:mb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-surya-slate-200/90 p-3 sm:p-5"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {actions.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.onClick}
                  className={`group relative p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border border-surya-slate-100 hover:shadow-card hover:-translate-y-1 flex flex-col justify-between ${
                    item.bgHover || "hover:border-surya-slate-300 hover:bg-surya-slate-50"
                  }`}
                >
                  <div>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${
                        item.isEmergency
                          ? "bg-surya-emergency-600 text-white shadow-emergency"
                          : "bg-surya-slate-50 text-surya-navy-900 group-hover:bg-surya-teal-50 group-hover:text-surya-teal-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-surya-slate-900 leading-snug flex items-center gap-1.5">
                      <span>{item.title}</span>
                      {item.isEmergency && (
                        <span className="w-2 h-2 rounded-full bg-surya-emergency-600 animate-pulse shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-surya-slate-500 mt-1 line-clamp-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-2 flex items-center justify-between text-[11px] font-semibold text-surya-slate-400 group-hover:text-surya-navy-900 transition-colors">
                    <span>Access</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
