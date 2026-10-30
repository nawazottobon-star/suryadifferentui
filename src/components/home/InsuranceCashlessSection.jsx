import React from "react";
import { Link } from "react-router-dom";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";
import { ShieldCheck, ArrowRight, Phone } from "lucide-react";
import TiltedGridHero from "../ui/tilted-grid-hero";

export function InsuranceCashlessSection() {
  const partners = HOSPITAL_INFO.insurancePartners;

  // Prepare images array for 3D curved cylinder stream
  const insuranceImages = partners.map((p) => ({
    src: p.logo,
    alt: p.name,
  }));

  return (
    <section id="insurance" className="py-12 sm:py-16 bg-gradient-to-b from-[#ECECE5] via-[#EEF2FB]/40 to-[#ECECE5] text-[#262626] relative overflow-hidden border-b border-[#D9E2EC]">
      {/* Ambient glows */}
      <div className="absolute top-10 right-20 w-[400px] h-[400px] rounded-full bg-[#3A4F99]/[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[#B2CEE2]/[0.12] blur-[80px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <AnimateIn animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF2FB] text-[#3A4F99] text-[11px] font-extrabold uppercase tracking-[0.14em] mb-4 border border-[#B2CEE2] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TRUSTED PARTNERSHIPS</span>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={80}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-[#13233D] tracking-tight leading-tight">
              Insurance &{" "}
              <span className="text-[#3A4F99]">
                Cashless Facility
              </span>
            </h2>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#5A6578] font-medium leading-relaxed max-w-2xl mx-auto">
              We are empaneled with major insurance companies to provide cashless medical services for your convenience.
            </p>
          </AnimateIn>
        </div>

        {/* ── 3D Cylindrical Curved Row of 24 Insurance Partners ── */}
        <AnimateIn animation="fade-up" delay={200}>
          <div className="relative py-2 my-2 overflow-hidden">
            <TiltedGridHero
              images={insuranceImages}
              speed={3.6}
              tileHeight={64}
              aspectRatio={2.15}
              gap={7}
              axis={50}
              curve={74}
              fade={16}
              cardBackground="bg-white"
              cardBorder="border-[#B2CEE2]/70"
              className="h-[210px] sm:h-[250px] md:h-[270px] w-full"
            />
          </div>
        </AnimateIn>

        {/* View All Button */}
        <AnimateIn animation="fade-up" delay={280}>
          <div className="mt-6 sm:mt-8 text-center">
            <Link
              to="/insurance-partners"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#3A4F99] hover:bg-[#2A3B7A] transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] border border-[#3A4F99]"
            >
              <span>View All 24+ Insurance Partners</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>

        {/* Help Note */}
        <AnimateIn animation="fade-up" delay={340}>
          <div className="mt-8 sm:mt-10 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#B2CEE2] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#3A4F99] flex items-center justify-center shrink-0 border border-[#B2CEE2] shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-[#13233D] block">Need assistance with Cashless Pre-Authorization?</span>
                <span className="text-[#62666D]">Contact our Hospital Insurance Desk directly at 8500904999</span>
              </div>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="shrink-0 px-4 py-2 rounded-full text-xs font-bold text-[#13233D] bg-[#EEF2FB] hover:bg-[#3A4F99] hover:text-white border border-[#B2CEE2] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Insurance Desk</span>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export default InsuranceCashlessSection;
