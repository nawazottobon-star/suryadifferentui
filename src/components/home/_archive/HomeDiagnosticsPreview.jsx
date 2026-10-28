import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ArrowRight, CheckCircle2, FlaskConical, Scan, Layers, Activity } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";

const iconMap = {
  FlaskConical,
  Scan,
  Layers,
  Activity,
};

export function HomeDiagnosticsPreview() {
  return (
    <section className="py-16 md:py-20 bg-[#E8D5C0]/30 border-b border-[#E9D7C7]">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <AnimateIn animation="slide-left" className="space-y-2 max-w-2xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#F8E6DC] text-[#C65332] border border-[#E9D7C7]">
              LAB TESTS & SCANS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#292D32] tracking-tight">
              Fast, Reliable Lab Tests & Scans on Campus
            </h2>
            <p className="text-sm sm:text-base text-[#62666D] leading-relaxed">
              Get your blood tests, urine tests, ultrasound scans, digital X-rays, and ECG done right here in Sai Nagar, Anantapur, with timely results.
            </p>
          </AnimateIn>

          <AnimateIn animation="slide-right" className="w-full sm:w-auto shrink-0">
            <Link to="/diagnostics" className="w-full sm:w-auto shrink-0">
              <Button
                variant="outline"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="text-xs font-bold border-[#E9D7C7] bg-white hover:bg-[#F8E6DC] text-[#292D32] w-full sm:w-auto shadow-2xs"
              >
                View Tests & How to Prepare
              </Button>
            </Link>
          </AnimateIn>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOSPITAL_INFO.diagnostics.slice(0, 4).map((item, idx) => {
            const Icon = iconMap[item.iconName] || FlaskConical;
            return (
              <AnimateIn
                key={item.id}
                animation="fade-up"
                delay={idx * 120}
                className="group rounded-xl border border-[#E9D7C7] bg-white overflow-hidden shadow-2xs hover:shadow-card hover:border-[#C65332] transition flex flex-col justify-between"
              >
                {/* Visual */}
                <div className="relative aspect-[16/10] bg-[#F8E6DC] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292D32]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 text-white flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-[#F8E6DC]" />
                    <span className="text-xs font-bold">{item.name}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-[#62666D] leading-relaxed">
                    {item.shortDesc}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-[#E9D7C7]">
                    <span className="text-[10px] uppercase font-bold text-[#292D32] block">
                      Common Tests:
                    </span>
                    <ul className="text-[11px] text-[#62666D] space-y-0.5">
                      {item.testsIncluded.slice(0, 2).map((test, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3 h-3 text-[#C65332] shrink-0" />
                          <span className="truncate">{test}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/diagnostics"
                      className="text-xs font-bold text-[#C65332] hover:text-[#A84328] transition inline-flex items-center gap-1"
                    >
                      <span>Test Details & Preparation</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
