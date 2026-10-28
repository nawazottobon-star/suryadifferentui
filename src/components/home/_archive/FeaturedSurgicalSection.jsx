import React, { useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { IMAGERY } from "../../constants/imagery";
import { Calendar, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturedSurgicalSection({ onBookConsultation }) {
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilities = [
    {
      title: "Operation Theatres",
      category: "Sterile Infrastructure",
      desc: "Modern operation theatres engineered for zero infection risk, positive pressure ventilation, and high-precision lighting.",
    },
    {
      title: "Laparoscopic Surgery",
      category: "Minimally Invasive",
      desc: "Keyhole surgical techniques that reduce tissue trauma, bleeding, and post-operative pain, enabling swift hospital discharge.",
    },
    {
      title: "Orthopaedic Surgery",
      category: "Musculoskeletal & Trauma",
      desc: "Fracture management, joint reconstruction, and trauma interventions executed with contemporary clinical equipment.",
    },
    {
      title: "General & Day-Care Surgeries",
      category: "Planned Elective Care",
      desc: "Planned procedures allowing same-day discharge so patients recover peacefully in the comfort of their home.",
    },
  ];

  return (
    <section id="surgical-care" className="py-20 sm:py-28 bg-surya-navy-950 text-white relative overflow-hidden">
      {/* Cinematic subtle ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-surya-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Sequential Capability List & Editorial Text (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-surya-teal-300 bg-surya-navy-900/80 px-3.5 py-1.5 rounded-full border border-surya-navy-700">
                <ShieldCheck className="w-3.5 h-3.5 text-surya-teal-400" />
                SURGICAL EXCELLENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Modern surgical suites. <br />
                <span className="text-surya-teal-400">Precision and gentle recovery.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-surya-slate-300 leading-relaxed">
              Equipped with sterile operation theatres, our surgical teams provide specialized general, laparoscopic, and orthopedic procedures centered around patient safety and comfort.
            </p>

            {/* Sequential Interactive Capabilities */}
            <div className="space-y-3 pt-3">
              {capabilities.map((cap, index) => {
                const isActive = activeCapability === index;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setActiveCapability(index)}
                    className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isActive
                        ? "bg-surya-navy-900/90 border-surya-teal-400/80 shadow-lg"
                        : "bg-surya-navy-900/40 border-surya-navy-800 hover:border-surya-navy-700 hover:bg-surya-navy-900/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                            isActive
                              ? "bg-surya-teal-500 text-surya-navy-950"
                              : "bg-surya-navy-800 text-surya-slate-400"
                          }`}
                        >
                          0{index + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-white">{cap.title}</h3>
                            <span className="text-[10px] uppercase font-semibold text-surya-teal-400 tracking-wider">
                              {cap.category}
                            </span>
                          </div>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="text-xs sm:text-sm text-surya-slate-300 mt-2 leading-relaxed"
                            >
                              {cap.desc}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-4">
              <Button
                variant="accent"
                size="lg"
                icon={Calendar}
                onClick={onBookConsultation}
                className="shadow-xl"
              >
                Schedule Surgical Evaluation
              </Button>
            </div>
          </motion.div>

          {/* Right: Large Editorial Visual with Subtle Parallax Reveal (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-surya-navy-800 bg-surya-navy-900 group relative aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={IMAGERY.surgical.src}
                alt={IMAGERY.surgical.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9] contrast-[1.05]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-surya-navy-950/80 backdrop-blur-md border-t border-surya-navy-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-surya-teal-400 tracking-widest block">
                    SURYA HOSPITAL INFRASTRUCTURE
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                    Equipped Surgical Theatres
                  </h4>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surya-teal-500/20 text-surya-teal-300 border border-surya-teal-500/30">
                  Sterile Standard
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
