import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { IMAGERY } from "../../constants/imagery";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { UserCheck, ShieldCheck, ArrowRight } from "lucide-react";

export function AboutSection({ onLearnMore }) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-surya-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Hospital Care Visual (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] sm:aspect-[4/4] rounded-2xl overflow-hidden shadow-lg border border-surya-slate-200">
                <img
                  src={IMAGERY.about.src}
                  alt={IMAGERY.about.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Regional Footnote Card */}
              <div className="mt-4 p-4 rounded-xl bg-surya-slate-50 border border-surya-slate-200 text-xs text-surya-slate-600 flex items-center justify-between">
                <span>Serving patients across {HOSPITAL_INFO.region}</span>
                <span className="font-semibold text-surya-teal-700">Dedicated Care</span>
              </div>
            </div>
          </div>

          {/* Right Column: Short Human Copy (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-700 bg-surya-teal-50 px-3 py-1 rounded-full">
                ABOUT SURYA HOSPITAL
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-surya-slate-900 leading-tight">
                Healthcare with expertise and empathy.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-surya-slate-600 leading-relaxed">
              Surya Hospital is committed to patient-centered care, combining experienced doctors with modern medical technology to provide trusted medical and surgical care for Anantapur and surrounding regions.
            </p>

            {/* Core Value Pillars - Concise 1-liners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surya-teal-50 flex items-center justify-center text-surya-teal-700 shrink-0 mt-0.5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-surya-slate-900">Patient-Centered Focus</h4>
                  <p className="text-xs text-surya-slate-500 mt-0.5 leading-relaxed">
                    Personalized attention tailored to individual recovery needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surya-navy-50 flex items-center justify-center text-surya-navy-800 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-surya-slate-900">Modern Technology</h4>
                  <p className="text-xs text-surya-slate-500 mt-0.5 leading-relaxed">
                    Equipped operating theatres and in-house diagnostics.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-4">
              <Button
                variant="outline"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                onClick={onLearnMore}
              >
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
