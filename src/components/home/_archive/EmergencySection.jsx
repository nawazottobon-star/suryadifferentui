import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { HOSPITAL_MEDIA } from "../../constants/hospitalMedia";
import { PhoneCall, MapPin, Clock, HeartPulse, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export function EmergencySection({ onCallEmergency, onGetDirections }) {
  return (
    <section id="emergency" className="relative py-24 sm:py-36 bg-surya-navy-950 text-white overflow-hidden">
      {/* Subtle Moving Background Trauma Visual */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-full h-full"
        >
          <img
            src={HOSPITAL_MEDIA.emergency.src}
            alt={HOSPITAL_MEDIA.emergency.alt}
            className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
            loading="lazy"
          />
        </motion.div>
        {/* Deep Emergency Navy Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950 via-surya-navy-950/90 to-surya-navy-950/70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-surya-emergency-600/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-b from-surya-navy-900/90 to-surya-navy-950/95 border border-surya-emergency-500/40 shadow-2xl text-center space-y-7 backdrop-blur-md"
        >
          {/* Pulsing Emergency Beacon */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold bg-surya-emergency-600 text-white shadow-emergency tracking-wide">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            24/7 EMERGENCY & CRITICAL CARE
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Immediate trauma care. <br />
            <span className="text-surya-emergency-400">Always active. Always ready.</span>
          </h2>

          <p className="text-base sm:text-lg text-surya-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Surya Hospital's emergency department operates round-the-clock for acute trauma, cardiac distress, and critical medical triage serving Anantapur and neighboring regions.
          </p>

          {/* Emergency Helpline Highlight */}
          <div className="p-5 sm:p-6 rounded-2xl bg-surya-navy-950/90 border border-surya-navy-800 max-w-md mx-auto shadow-inner space-y-1">
            <span className="text-xs font-bold text-surya-slate-400 uppercase tracking-widest block">
              Emergency Desk Helpline
            </span>
            <div className="text-xl sm:text-2xl font-mono font-bold text-surya-emergency-300">
              {HOSPITAL_INFO.contactPlaceholders.emergencyHelpline}
            </div>
            <span className="text-[11px] text-surya-slate-400 block pt-1">
              Direct connection to front-line trauma triage coordinator
            </span>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="emergency"
              size="lg"
              icon={PhoneCall}
              onClick={onCallEmergency}
              className="w-full sm:w-auto px-8 py-4 shadow-emergency text-base font-bold"
            >
              Call Emergency
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={MapPin}
              onClick={onGetDirections}
              className="w-full sm:w-auto bg-white/10 border-white/25 text-white hover:bg-white/20 px-8 py-4 text-base backdrop-blur-md"
            >
              Get Directions
            </Button>
          </div>

          <div className="pt-6 border-t border-surya-navy-800/80 text-xs text-surya-slate-400 flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-surya-emergency-400" />
              <span>Open 24 Hours / 365 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-surya-teal-400" />
              <span>Immediate Physician Triage</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-surya-teal-400" />
              <span>In-House Pharmacy & Lab Access</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
