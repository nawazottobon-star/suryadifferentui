import React from "react";
import { Container } from "../ui/Container";
import { Heart, Stethoscope, Cpu, Layers } from "lucide-react";

export function WhySuryaSection() {
  const principles = [
    {
      title: "Patient-First Care",
      description: "Compassionate, attentive healthcare with your safety and comfort as the primary priority.",
      icon: Heart,
    },
    {
      title: "Experienced Medical Team",
      description: "Dedicated doctors and nursing staff skilled across medical, surgical, and emergency care.",
      icon: Stethoscope,
    },
    {
      title: "Modern Medical Technology",
      description: "Equipped operation theatres, digital imaging, ultrasound, and reliable pathology diagnostics.",
      icon: Cpu,
    },
    {
      title: "Comprehensive Care in Anantapur",
      description: "From outpatient consultation and same-day day-care surgeries to 24/7 emergency response.",
      icon: Layers,
    },
  ];

  return (
    <section id="why-surya" className="py-16 sm:py-24 bg-white border-t border-surya-slate-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-700 bg-surya-teal-50 px-3 py-1 rounded-full">
            OUR COMMITMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-surya-slate-900 mt-2">
            Why patients trust Surya Hospital
          </h2>
          <p className="text-base text-surya-slate-600 mt-2 leading-relaxed">
            Founded on clinical integrity, patient compassion, and dedicated healthcare service for Anantapur and surrounding regions.
          </p>
        </div>

        {/* 4 Core Principles in a Calm, Elegant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-surya-slate-50 border border-surya-slate-200/80 hover:border-surya-teal-300 transition-all duration-200 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-surya-slate-200 flex items-center justify-center text-surya-navy-900 mb-5 shadow-subtle">
                  <Icon className="w-6 h-6 text-surya-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-surya-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-surya-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
