import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { IMAGERY } from "../../constants/imagery";
import { CheckCircle2, Calendar } from "lucide-react";

export function FeaturedCareSection({ onBookConsultation }) {
  const surgicalCapabilities = [
    {
      title: "Operation Theatres",
      detail: "Sterile surgical suites equipped for routine and complex interventions.",
    },
    {
      title: "Laparoscopic Surgery",
      detail: "Minimally invasive keyhole procedures for reduced recovery time.",
    },
    {
      title: "General & Orthopedic Surgery",
      detail: "Musculoskeletal trauma, joint care, and comprehensive surgical interventions.",
    },
    {
      title: "Day-Care Surgeries",
      detail: "Planned elective procedures enabling same-day home recovery.",
    },
  ];

  return (
    <section id="featured-care" className="py-16 sm:py-24 bg-surya-navy-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-surya-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Short Editorial Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-300 bg-surya-navy-800/80 px-3 py-1 rounded-full border border-surya-navy-700">
                SURGICAL EXCELLENCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Modern surgical suites. <br />
                <span className="text-surya-teal-400">Gentle, precise recovery.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-surya-slate-300 leading-relaxed max-w-xl">
              Equipped with sterile operation theatres, our surgical teams provide specialized general, laparoscopic, and orthopedic procedures centered around patient safety and comfort.
            </p>

            {/* Verified Capabilities Checklist */}
            <div className="space-y-4 pt-2">
              {surgicalCapabilities.map((item) => (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-surya-teal-500/20 text-surya-teal-400 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-surya-slate-400 mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button
                variant="accent"
                size="md"
                icon={Calendar}
                onClick={onBookConsultation}
              >
                Schedule Surgical Consultation
              </Button>
            </div>
          </div>

          {/* Right Column: Large High-Resolution OT Facility Visual (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-surya-navy-800 bg-surya-navy-900 group">
              <div className="aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={IMAGERY.featuredCare.src}
                  alt={IMAGERY.featuredCare.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Clean caption overlay bar */}
              <div className="p-4 bg-surya-navy-900/90 backdrop-blur-sm border-t border-surya-navy-800 flex items-center justify-between text-xs text-surya-slate-300">
                <span className="font-semibold text-white">Equipped Operation Theatres</span>
                <span className="text-surya-teal-400 font-medium">Sterile & Controlled Environment</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
