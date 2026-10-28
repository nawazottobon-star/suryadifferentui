import React, { useRef } from "react";
import { Container } from "../ui/Container";
import { IMAGERY } from "../../constants/imagery";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function SpecialtiesHorizontal({ onSelectSpecialty }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const specialties = IMAGERY.specialties;

  return (
    <section id="specialties" className="py-16 sm:py-24 bg-surya-slate-50 border-t border-surya-slate-200/80 overflow-hidden">
      <Container className="mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-700 bg-surya-teal-50 px-3 py-1 rounded-full">
              CLINICAL DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-surya-slate-900 leading-tight">
              Care across specialties<span className="text-surya-teal-600">.</span>
            </h2>
            <p className="text-base text-surya-slate-600 max-w-xl leading-relaxed">
              Explore our core medical, surgical, and diagnostic departments equipped with modern medical technology in Anantapur.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-surya-slate-300 bg-white hover:bg-surya-slate-100 flex items-center justify-center text-surya-slate-700 transition shadow-sm hover:scale-105 active:scale-95"
              aria-label="Scroll specialties left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-surya-navy-900 bg-surya-navy-900 hover:bg-surya-navy-800 flex items-center justify-center text-white transition shadow-sm hover:scale-105 active:scale-95"
              aria-label="Scroll specialties right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* Horizontal Flowing Reel */}
      <div className="w-full relative px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {specialties.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => onSelectSpecialty && onSelectSpecialty(item.id)}
              className="flex-shrink-0 w-[300px] sm:w-[380px] lg:w-[420px] snap-start group relative rounded-3xl overflow-hidden bg-surya-navy-950 text-white shadow-xl border border-surya-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Large Visual Photography Background */}
              <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.7] contrast-[1.05]"
                  loading="lazy"
                />

                {/* Dark Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950 via-surya-navy-950/40 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md ${
                      item.is24x7
                        ? "bg-surya-emergency-600/90 text-white border border-surya-emergency-400"
                        : "bg-white/20 text-white border border-white/25"
                    }`}
                  >
                    {item.category}
                  </span>
                  {item.is24x7 && (
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-surya-emergency-300 bg-surya-navy-950/80 px-2.5 py-1 rounded-full border border-surya-emergency-700/60">
                      <span className="w-2 h-2 rounded-full bg-surya-emergency-500 animate-ping" />
                      24/7 Service
                    </span>
                  )}
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight group-hover:text-surya-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-surya-slate-300 leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                  <div className="pt-3 flex items-center justify-between border-t border-white/15 text-xs font-semibold text-surya-teal-300 group-hover:text-white transition-colors">
                    <span>Explore Department</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-surya-teal-600 flex items-center justify-center transition">
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
