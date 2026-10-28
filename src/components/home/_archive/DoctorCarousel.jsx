import React, { useRef, useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { HOSPITAL_MEDIA } from "../../constants/hospitalMedia";
import { ChevronLeft, ChevronRight, Calendar, AlertCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function DoctorCarousel({ onBookConsultation }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const doctors = HOSPITAL_MEDIA.doctors;

  // Gentle auto-scroll effect when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="doctors"
      className="py-20 sm:py-32 bg-white border-t border-surya-slate-200/80 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Container className="mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-surya-teal-700 bg-surya-teal-50 px-3.5 py-1.5 rounded-full inline-block">
              MEDICAL CONSULTANTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-surya-slate-900 leading-tight">
              Meet Our Specialists<span className="text-surya-teal-600">.</span>
            </h2>
            <p className="text-base text-surya-slate-600 max-w-xl leading-relaxed">
              Clinical department consultants delivering dedicated outpatient, inpatient, and surgical care in Anantapur.
            </p>
          </div>

          {/* Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-surya-slate-300 bg-white hover:bg-surya-slate-100 flex items-center justify-center text-surya-slate-700 transition shadow-sm hover:scale-105 active:scale-95"
              aria-label="Previous specialist"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-surya-navy-900 bg-surya-navy-900 hover:bg-surya-navy-800 flex items-center justify-center text-white transition shadow-sm hover:scale-105 active:scale-95"
              aria-label="Next specialist"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Data Integrity Transparency Box */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex items-start sm:items-center gap-3 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong>Certified Roster Verification:</strong> Doctor profiles below demonstrate our clinical departments. Individual doctor rosters, credentials, and OPD timings will be updated as certified by Surya Hospital administration.
          </span>
        </div>
      </Container>

      {/* Horizontal Draggable Moving Carousel */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1540px] mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {doctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start bg-white rounded-3xl overflow-hidden border border-surya-slate-200/90 shadow-card hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Doctor Visual Portrait */}
              <div className="aspect-[4/5] relative overflow-hidden bg-surya-slate-100">
                <img
                  src={doc.image}
                  alt={doc.role}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/surya-doctor-portrait.png";
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950/85 via-transparent to-transparent opacity-70" />

                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-surya-navy-900 shadow-sm border border-surya-slate-200">
                  {doc.badge}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-surya-teal-300 block">
                    {doc.department}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5 leading-snug">
                    {doc.role}
                  </h3>
                </div>
              </div>

              {/* Information Body */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-surya-teal-700">
                    {doc.qualification}
                  </div>
                  <p className="text-xs text-surya-slate-500 leading-relaxed">
                    {doc.experienceNote}
                  </p>
                </div>

                <div className="pt-2 border-t border-surya-slate-100">
                  <button
                    type="button"
                    onClick={() => onBookConsultation && onBookConsultation(doc.department)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-surya-slate-100 hover:bg-surya-navy-900 hover:text-white text-surya-slate-800 transition flex items-center justify-center gap-2 group-hover:bg-surya-navy-900 group-hover:text-white shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Request OPD Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
