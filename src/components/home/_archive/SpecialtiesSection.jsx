import React from "react";
import { Container } from "../ui/Container";
import {
  Stethoscope,
  Scissors,
  Bone,
  Clock,
  Activity,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";

export function SpecialtiesSection({ onSelectSpecialty }) {
  const specialties = [
    {
      id: "emergency",
      title: "Emergency & Critical Care",
      category: "24/7 Immediate Care",
      description: "Immediate triage, trauma care, and critical patient stabilization around the clock.",
      icon: ShieldAlert,
      isEmergency: true,
      featured: true,
    },
    {
      id: "general-medicine",
      title: "General Medicine",
      category: "Primary & Inpatient",
      description: "Diagnosis and comprehensive management of acute and chronic adult health conditions.",
      icon: Stethoscope,
    },
    {
      id: "laparoscopic-surgery",
      title: "General & Laparoscopic Surgery",
      category: "Minimally Invasive",
      description: "Keyhole and open surgical procedures with reduced incisions and faster patient healing.",
      icon: Scissors,
      featured: true,
    },
    {
      id: "orthopedic-surgery",
      title: "Orthopedic Surgery",
      category: "Bone & Joint Care",
      description: "Dedicated surgical and medical management for fractures, joints, and musculoskeletal trauma.",
      icon: Bone,
    },
    {
      id: "daycare-surgeries",
      title: "Day-Care Surgeries",
      category: "Same-Day Discharge",
      description: "Planned minor surgical procedures allowing patients safe recovery in the comfort of home.",
      icon: Clock,
    },
    {
      id: "rehabilitation-wellness",
      title: "Rehabilitation & Physiotherapy",
      category: "Recovery & Mobility",
      description: "Guided physical therapies to restore movement, strength, and post-surgical wellness.",
      icon: Activity,
    },
  ];

  return (
    <section id="specialties" className="py-16 sm:py-24 bg-surya-slate-50 border-t border-surya-slate-200/80">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-700 bg-surya-teal-50 px-3 py-1 rounded-full">
              CLINICAL DEPARTMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-surya-slate-900 mt-2">
              Care across specialties
            </h2>
          </div>
          <p className="text-sm sm:text-base text-surya-slate-600 max-w-md leading-relaxed">
            Focused clinical disciplines supported by modern surgical infrastructure and experienced doctors in Anantapur.
          </p>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectSpecialty && onSelectSpecialty(item.id)}
                className={`group cursor-pointer rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 border ${
                  item.isEmergency
                    ? "bg-white border-surya-emergency-200/90 shadow-card hover:border-surya-emergency-400 hover:shadow-card-hover"
                    : item.featured
                    ? "bg-white border-surya-slate-200/90 shadow-card hover:border-surya-teal-300 hover:shadow-card-hover"
                    : "bg-white border-surya-slate-200/80 shadow-subtle hover:border-surya-navy-200 hover:shadow-card"
                } hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        item.isEmergency
                          ? "bg-surya-emergency-50 text-surya-emergency-600"
                          : "bg-surya-teal-50 text-surya-teal-700"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        item.isEmergency
                          ? "bg-surya-emergency-100 text-surya-emergency-800"
                          : "bg-surya-slate-100 text-surya-slate-700"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-surya-slate-900 group-hover:text-surya-navy-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-surya-slate-600 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-surya-slate-100 flex items-center justify-between text-xs font-semibold text-surya-slate-500 group-hover:text-surya-navy-900 transition-colors">
                  <span>Explore Department</span>
                  <div className="w-7 h-7 rounded-full bg-surya-slate-50 group-hover:bg-surya-teal-50 flex items-center justify-center text-surya-slate-400 group-hover:text-surya-teal-700 transition">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
