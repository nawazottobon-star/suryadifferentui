import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { HOSPITAL_MEDIA } from "../../constants/hospitalMedia";
import { Calendar, UserSearch, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HeroCarousel({ onBookAppointment, onFindDoctor }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = HOSPITAL_MEDIA.heroSlides;
  const slideCount = slides.length;

  // Auto transition every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 6500);
    return () => clearInterval(timer);
  }, [slideCount]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      id="hero"
      className="relative w-full max-w-full min-h-screen min-h-[100vh] min-h-[100dvh] flex items-center overflow-hidden bg-surya-navy-950 text-white"
    >
      {/* Background Slides with Slow Ken Burns Scale & Pan - edge-to-edge cover */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.alt}
              className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignette Overlays for AAA Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-surya-navy-950/95 via-surya-navy-950/75 to-surya-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950 via-transparent to-surya-navy-950/50" />
      </div>

      {/* Anchored Editorial Hero Content */}
      <Container className="relative z-10 w-full pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Eyebrow & 24/7 Emergency Indicator */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-surya-emergency-600 text-white shadow-emergency">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              24/7 Emergency Care
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/90 backdrop-blur-md border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-surya-teal-400" />
              Anantapur & Regional Communities
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-surya-teal-300 block">
              SURYA HOSPITAL
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Where medical expertise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-surya-slate-100 to-surya-teal-300">
                meets human care.
              </span>
            </h1>
          </div>

          {/* Short Supporting Copy */}
          <p className="text-base sm:text-xl text-surya-slate-200/90 leading-relaxed max-w-2xl font-normal">
            Surya Hospital brings experienced doctors, modern medical technology, and round-the-clock emergency care together for Anantapur and surrounding regions.
          </p>

          {/* Dual Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <Button
              variant="accent"
              size="lg"
              icon={Calendar}
              onClick={onBookAppointment}
              className="shadow-2xl font-bold px-8 py-4 text-base"
            >
              Book an Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={UserSearch}
              onClick={onFindDoctor}
              className="bg-white/10 text-white border-white/25 hover:bg-white/20 backdrop-blur-md px-7 py-4 text-base"
            >
              Find a Doctor
            </Button>
          </div>

          {/* Slide Indicator 01 / 05 with Animated Progress Bar & Navigation */}
          <div className="pt-8 border-t border-white/15 flex items-center justify-between gap-6 max-w-lg">
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm font-bold text-white tracking-widest">
                0{currentSlide + 1} <span className="text-white/40">/ 0{slideCount}</span>
              </span>

              {/* Animated Progress Bar */}
              <div className="w-28 sm:w-36 h-1.5 rounded-full bg-white/20 overflow-hidden relative">
                <motion.div
                  key={currentSlide}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6.5, ease: "linear" }}
                  className="h-full bg-surya-teal-400 rounded-full"
                />
              </div>

              <span className="text-xs font-semibold text-surya-teal-300 hidden sm:inline truncate max-w-[140px]">
                {activeSlide.category}
              </span>
            </div>

            {/* Manual Slide Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
