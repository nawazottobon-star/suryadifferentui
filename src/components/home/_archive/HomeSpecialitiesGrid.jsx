import React from "react";
import { Link } from "react-router-dom";
import { AnimateIn } from "../ui/AnimateIn";
import {
  Clock,
  HeartPulse,
  ClipboardCheck,
  Stethoscope,
  TestTube,
  Activity,
  Pill,
  Scissors,
  Scan,
  Droplets,
  Brain,
  Bone,
  Wind,
  ChevronRight,
} from "lucide-react";

export function HomeSpecialitiesGrid() {
  // Exact 15 services in specified order with relevant outline icons
  const specialties = [
    { name: "24 Hour Care", icon: Clock },
    { name: "Health Care Service", icon: HeartPulse },
    { name: "Diagnosis Service", icon: ClipboardCheck },
    { name: "Specialist Doctors", icon: Stethoscope },
    { name: "Blood Test", icon: TestTube },
    { name: "Physicals", icon: Activity },
    { name: "General Medicine", icon: Pill },
    { name: "General Surgery", icon: Scissors },
    { name: "Gastroenterology", icon: Activity },
    { name: "Dermatology", icon: Scan },
    { name: "Nephrology", icon: Droplets },
    { name: "Neurology", icon: Brain },
    { name: "Orthopedic", icon: Bone },
    { name: "Pulmonology", icon: Wind },
    { name: "Urology", icon: Scan },
  ];

  return (
    <section id="specialties" className="relative py-20 sm:py-28 bg-[#FFF0E6]/50 text-[#262626] overflow-hidden">
      {/* Decorative Subtle Dot accents matching orange theme */}
      <div className="absolute top-12 left-6 sm:left-12 opacity-35 pointer-events-none select-none text-[#FF8A3D]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
        </div>
      </div>
      <div className="absolute bottom-12 right-6 sm:right-12 opacity-35 pointer-events-none select-none text-[#FF8A3D]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Centered Description */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimateIn animation="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#C63D1B] leading-tight">
              OUR EXPERT SPECIALTIES
            </h2>
          </AnimateIn>

          {/* Thin horizontal orange underline */}
          <AnimateIn animation="fade-up" delay={100}>
            <div className="w-24 sm:w-32 h-[3px] bg-[#E94B1C] mx-auto mt-4 mb-5 rounded-full" />
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-[#4A403B] font-medium leading-relaxed max-w-2xl mx-auto">
              Our hospital provides complete medical consultations, diagnostic services, and advanced surgical care under one roof.
            </p>
          </AnimateIn>
        </div>

        {/* Refined 15 Specialty Cards: 3 columns Desktop, 2-3 columns Tablet, 1-2 columns Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {specialties.map((item, idx) => {
            const Icon = item.icon;

            return (
              <AnimateIn
                key={item.name}
                animation="fade-up"
                delay={Math.min(idx * 25, 300)}
                className="w-full"
              >
                <Link
                  to="/specialities"
                  className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-[#E9D8CE] shadow-xs hover:shadow-lg hover:border-[#E94B1C] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E94B1C]/40"
                  aria-label={`${item.name} department details`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    {/* Outline Icon in subtle themed container */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#FF8A3D]/30 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5 text-[#E94B1C]" strokeWidth={2.2} />
                    </div>

                    {/* Specialty Name */}
                    <span className="text-sm sm:text-base font-bold text-[#262626] group-hover:text-[#E94B1C] transition-colors leading-snug truncate">
                      {item.name}
                    </span>
                  </div>

                  {/* Subtle navigation cue arrow */}
                  <ChevronRight className="w-4 h-4 text-[#FF8A3D] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </Link>
              </AnimateIn>
            );
          })}
        </div>

        {/* Explore All Specialties Tab Button */}
        <AnimateIn animation="fade-up" delay={250}>
          <div className="mt-12 text-center">
            <Link
              to="/specialities"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#E94B1C]/50"
            >
              <span>Explore All Specialties</span>
              <span className="text-[#FFF0E6]">→</span>
            </Link>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}

export default HomeSpecialitiesGrid;
