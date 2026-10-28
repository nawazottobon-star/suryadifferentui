import React from "react";
import { Container } from "../ui/Container";
import { HOSPITAL_MEDIA } from "../../constants/hospitalMedia";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { HeartHandshake, ShieldCheck, Stethoscope, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ImageRevealIntro({ onExploreCare }) {
  const points = [
    {
      title: "Patient-Centered Focus",
      desc: "Attentive bedside care and personalized treatment planning.",
      icon: HeartHandshake,
    },
    {
      title: "Experienced Doctors",
      desc: "Specialist consultants across medical and surgical disciplines.",
      icon: Stethoscope,
    },
    {
      title: "Modern Medical Technology",
      desc: "Sterile operating theatres, digital diagnostics, and in-house laboratory.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-white border-t border-surya-slate-100 overflow-hidden">
      <Container>
        {/* Large Editorial Headline */}
        <div className="max-w-4xl space-y-4 mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-surya-teal-700 bg-surya-teal-50 px-3.5 py-1.5 rounded-full border border-surya-teal-200/80">
              ABOUT SURYA HOSPITAL
            </span>
            <span className="text-xs font-medium text-surya-slate-500">
              Institutional Care
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surya-slate-900 leading-[1.12]"
          >
            Healthcare with expertise and empathy<span className="text-surya-teal-600">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-surya-slate-600 leading-relaxed max-w-2xl font-normal"
          >
            Surya Hospital provides patient-centered healthcare with medical and surgical care, experienced doctors, modern medical technology, and compassionate support serving Anantapur and surrounding regions.
          </motion.p>
        </div>

        {/* Cinematic Image Reveal + Sequential Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Large Visual with Cinematic Reveal (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-surya-slate-200 bg-surya-slate-100 relative group">
              <img
                src={HOSPITAL_MEDIA.reception.src}
                alt="Surya Hospital reception and consultation desk"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9] contrast-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs sm:text-sm font-semibold">
                <span>Surya Hospital Campus • {HOSPITAL_INFO.region}</span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-xs font-bold">
                  Clinical Excellence
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Sequential Supporting Points (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              const isHighlighted = idx === 1; // "Experienced Doctors" is highlighted with teal border in reference
              return (
                <motion.div
                  key={pt.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className={`p-6 sm:p-7 rounded-2xl bg-white transition-all flex items-start gap-5 ${
                    isHighlighted
                      ? "border-2 border-teal-400 shadow-sm"
                      : "border border-slate-200/80 shadow-xs"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-center text-teal-600 shrink-0">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{pt.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                      {pt.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <div className="pt-3">
              <button
                type="button"
                onClick={onExploreCare}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-teal-600 group transition-colors"
              >
                <span>Learn About Our Care Standards</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
