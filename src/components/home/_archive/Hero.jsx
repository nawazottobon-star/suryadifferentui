import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { IMAGERY } from "../../constants/imagery";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { Calendar, PhoneCall, ShieldCheck, Clock, MapPin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

export function Hero({ onBookAppointment, onCallHospital }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="hero-section relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-surya-navy-950 text-white pt-24 pb-20"
    >
      {/* Background Image with Slow Subtle Cinematic Scale Pan */}
      <div className="hero-background-wrapper absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-full h-full"
        >
          <img
            src={IMAGERY.hero.src}
            alt={IMAGERY.hero.alt}
            className="hero-background-visual w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08]"
            loading="eager"
          />
        </motion.div>
        {/* Cinematic Multi-layered Vignette & Editorial Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-surya-navy-950/95 via-surya-navy-950/70 to-surya-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950 via-transparent to-surya-navy-950/40" />
      </div>

      <Container className="relative z-10 w-full py-10 sm:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-editorial-left max-w-3xl space-y-6 sm:space-y-8"
        >
          {/* Eyebrow / 24-7 Emergency Indicator */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-surya-emergency-600/90 text-white backdrop-blur-md shadow-emergency">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              24/7 Emergency & Critical Care Available
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/90 backdrop-blur-md border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-surya-teal-400" />
              Serving {HOSPITAL_INFO.region}
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="hero-headline text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Care that puts <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-surya-slate-100 to-surya-teal-300">
                you first
              </span>
              <span className="text-surya-teal-400">.</span>
            </h1>
          </motion.div>

          {/* Short Supporting Copy (2 sentences) */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-surya-slate-200/90 font-normal leading-relaxed max-w-2xl"
          >
            Surya Hospital provides comprehensive medical, surgical, and round-the-clock emergency care. We bring experienced doctors and modern medical technology together for the people of Anantapur and surrounding regions.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            variants={itemVariants}
            className="hero-cta-group flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <Button
              variant="accent"
              size="lg"
              icon={Calendar}
              onClick={onBookAppointment}
              className="shadow-xl font-semibold px-8 py-3.5 min-h-[44px]"
            >
              Book an Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={PhoneCall}
              onClick={onCallHospital}
              className="bg-white/10 text-white border-white/25 hover:bg-white/20 backdrop-blur-md px-7 py-3.5 min-h-[44px]"
            >
              Call Hospital
            </Button>
          </motion.div>

          {/* Campaign Trust Pillars */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs sm:text-sm text-surya-slate-300 font-medium"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-surya-teal-400 shrink-0" />
              <span>Modern Surgical Theatres</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-surya-teal-400 shrink-0" />
              <span>In-House Pharmacy & Diagnostics</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Gentle Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-xs text-white/60 pointer-events-none"
      >
        <span>Scroll to explore</span>
        <ChevronDown className="w-4 h-4 text-surya-teal-400" />
      </motion.div>
    </section>
  );
}

export default Hero;
