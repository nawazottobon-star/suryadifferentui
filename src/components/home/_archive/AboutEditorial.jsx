import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { IMAGERY } from "../../constants/imagery";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { ArrowRight, ShieldCheck, HeartHandshake, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

export function AboutEditorial({ onBookConsultation }) {
  const pillars = [
    {
      title: "Patient-Centered Care",
      desc: "Care plans designed around individual patient dignity, comfort, and informed recovery.",
      icon: HeartHandshake,
    },
    {
      title: "Experienced Doctors",
      desc: "Specialist consultants across medical and surgical disciplines.",
      icon: Stethoscope,
    },
    {
      title: "Modern Medical Technology",
      desc: "Sterile surgical theatres, digital radiography, sonography, and pathology.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-white border-t border-surya-slate-100 overflow-hidden">
      <Container>
        {/* Large Editorial Eyebrow & Headline */}
        <div className="max-w-4xl space-y-4 mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-surya-teal-700 bg-surya-teal-50 px-3.5 py-1.5 rounded-full inline-block"
          >
            ABOUT SURYA HOSPITAL
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surya-slate-900 leading-[1.12]"
          >
            Healthcare with institutional expertise and human empathy<span className="text-surya-teal-600">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-surya-slate-600 leading-relaxed max-w-3xl"
          >
            Surya Hospital serves Anantapur and surrounding regions with high-caliber medical and surgical care, blending clinical precision with attentive bedside compassion.
          </motion.p>
        </div>

        {/* Large Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Large Editorial Image (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-surya-slate-200 relative group">
              <img
                src={IMAGERY.about.src}
                alt={IMAGERY.about.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs sm:text-sm font-medium">
                Serving communities across {HOSPITAL_INFO.region}
              </div>
            </div>
          </motion.div>

          {/* Right: Pillars & CTAs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-surya-slate-50 border border-surya-slate-200/80 hover:border-surya-teal-300 transition-all flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-surya-slate-200 flex items-center justify-center text-surya-teal-700 shrink-0 shadow-subtle">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-surya-slate-900">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-surya-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                onClick={onBookConsultation}
              >
                Consult With Our Team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
