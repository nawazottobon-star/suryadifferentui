import React, { useRef } from "react";
import { Container } from "../ui/Container";
import { HOSPITAL_MEDIA } from "../../constants/hospitalMedia";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function HorizontalCareSlider({ onSelectCare }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const offset = direction === "left" ? -460 : 460;
      sliderRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const panels = HOSPITAL_MEDIA.comprehensiveCare;

  return (
    <section id="care-slider" className="py-20 sm:py-28 bg-surya-slate-900 text-white overflow-hidden">
      <Container className="mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-surya-teal-400 bg-surya-slate-800 px-3.5 py-1.5 rounded-full border border-surya-slate-700">
              INTEGRATED HEALTHCARE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Comprehensive Care<span className="text-surya-teal-400">.</span>
            </h2>
            <p className="text-base text-surya-slate-300 max-w-xl leading-relaxed">
              Explore specialized medical, surgical, diagnostic, and emergency disciplines designed around patient wellness.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-surya-slate-700 bg-surya-slate-800 hover:bg-surya-slate-700 flex items-center justify-center text-white transition shadow-sm hover:scale-105 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-surya-teal-500 bg-surya-teal-500 hover:bg-surya-teal-400 flex items-center justify-center text-surya-navy-950 transition shadow-sm hover:scale-105 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* Large Visual Panels Carousel */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1540px] mx-auto">
        <div
          ref={sliderRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {panels.map((panel, idx) => (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => onSelectCare && onSelectCare(panel.title)}
              className="flex-shrink-0 w-[310px] sm:w-[420px] lg:w-[480px] snap-start group relative rounded-3xl overflow-hidden bg-surya-slate-950 border border-surya-slate-800 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Large Image Frame */}
              <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden">
                <img
                  src={panel.image}
                  alt={panel.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/surya-reception.png";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.75] contrast-[1.05]"
                  loading="lazy"
                />

                {/* Dark Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950 via-surya-navy-950/40 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full backdrop-blur-md ${
                      panel.is24x7
                        ? "bg-surya-emergency-600 text-white shadow-emergency"
                        : "bg-white/20 text-white border border-white/25"
                    }`}
                  >
                    {panel.category}
                  </span>
                  {panel.is24x7 && (
                    <span className="text-[11px] font-bold text-surya-emergency-300 bg-surya-navy-950/80 px-2.5 py-1 rounded-full border border-surya-emergency-700/60 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-surya-emergency-500 animate-ping" />
                      Round-The-Clock
                    </span>
                  )}
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-2.5">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight group-hover:text-surya-teal-300 transition-colors">
                    {panel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-surya-slate-300 leading-relaxed line-clamp-2">
                    {panel.desc}
                  </p>
                  <div className="pt-3 flex items-center justify-between border-t border-white/15 text-xs font-semibold text-surya-teal-300 group-hover:text-white transition-colors">
                    <span>Explore Clinical Care</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-surya-teal-500 group-hover:text-surya-navy-950 flex items-center justify-center transition">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
