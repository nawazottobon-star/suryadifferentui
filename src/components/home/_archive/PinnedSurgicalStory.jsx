import React, { useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { HOSPITAL_MEDIA } from "../../constants/hospitalMedia";
import { Calendar, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PinnedSurgicalStory({ onBookSurgicalConsultation }) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = HOSPITAL_MEDIA.surgicalStorySteps;
  const current = steps[activeStep];

  return (
    <section id="surgical-story" className="py-20 sm:py-32 bg-surya-navy-950 text-white relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-surya-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="max-w-2xl mb-14 sm:mb-20 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-surya-teal-400 bg-surya-navy-900/90 px-3.5 py-1.5 rounded-full border border-surya-navy-700 inline-block">
            ADVANCED SURGICAL CARE
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Precision surgical suites. <br />
            <span className="text-surya-teal-400">Gentle, patient-first recovery.</span>
          </h2>
          <p className="text-base text-surya-slate-300 leading-relaxed">
            Equipped with sterile operation theatres, our surgical consultants provide specialized general, laparoscopic, and orthopedic care in Anantapur.
          </p>
        </div>

        {/* Scroll Pinned Architecture: Sticky Left Visual + Interactive Stepped Right Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Sticky Visual on Desktop (7 cols) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-surya-navy-800 bg-surya-navy-900 relative aspect-[4/3] sm:aspect-[16/10]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05]"
                />
              </AnimatePresence>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950 via-transparent to-transparent opacity-80" />

              {/* Status Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-surya-navy-900/90 backdrop-blur-md border border-surya-navy-700/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-surya-teal-400 block">
                    STAGE {current.step} OF 04
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {current.title}
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-surya-teal-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-surya-teal-400" />
                  <span>{current.highlight}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stepped Interactive Story Panels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((stepItem, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={stepItem.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 sm:p-7 rounded-3xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-surya-navy-900 border-surya-teal-400/90 shadow-2xl scale-[1.02]"
                      : "bg-surya-navy-900/40 border-surya-navy-800 hover:border-surya-navy-700 hover:bg-surya-navy-900/60"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full ${
                        isActive
                          ? "bg-surya-teal-500 text-surya-navy-950"
                          : "bg-surya-navy-800 text-surya-slate-400"
                      }`}
                    >
                      {stepItem.step}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-surya-teal-300 font-semibold">
                      {stepItem.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stepItem.title}
                  </h3>

                  <p className="text-sm text-surya-slate-300 mt-2 leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              );
            })}

            <div className="pt-4">
              <Button
                variant="accent"
                size="lg"
                icon={Calendar}
                onClick={onBookSurgicalConsultation}
                className="w-full shadow-xl"
              >
                Schedule Surgical Evaluation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
