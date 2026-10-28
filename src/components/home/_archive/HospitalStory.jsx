import React from "react";
import { Container } from "../ui/Container";
import { Heart, Stethoscope, Cpu, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function HospitalStory() {
  const pillars = [
    {
      step: "01",
      title: "Patient-Centered Care",
      desc: "Compassionate bedside attention prioritizing your safety, dignity, and recovery comfort.",
      icon: Heart,
    },
    {
      step: "02",
      title: "Experienced Medical Team",
      desc: "Specialist doctors and attentive clinical staff managing complex health requirements.",
      icon: Stethoscope,
    },
    {
      step: "03",
      title: "Modern Medical Technology",
      desc: "Sterile surgical theatres, digital imaging, sonography, and reliable pathology testing.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Comprehensive Care in Anantapur",
      desc: "From outpatient consultation to planned surgeries and 24/7 emergency response.",
      icon: Layers,
    },
  ];

  return (
    <section id="hospital-story" className="py-20 sm:py-32 bg-surya-slate-50 border-t border-surya-slate-200/80 overflow-hidden">
      <Container>
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-surya-teal-700 bg-surya-teal-50 px-3.5 py-1.5 rounded-full inline-block"
          >
            OUR FOUNDATION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surya-slate-900 leading-[1.12]"
          >
            Healthcare built around people<span className="text-surya-teal-600">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-surya-slate-600 leading-relaxed font-normal"
          >
            Surya Hospital was established to deliver trustworthy medical care grounded in genuine empathy, modern clinical standards, and regional accessibility.
          </motion.p>
        </div>

        {/* 4 Sequential Pillars in Large Modern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-surya-slate-200/90 shadow-card hover:shadow-2xl hover:border-surya-teal-400/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-surya-teal-50 text-surya-teal-700 flex items-center justify-center transition-transform group-hover:scale-110 shadow-subtle">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-surya-slate-400">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-surya-slate-900 group-hover:text-surya-navy-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-surya-slate-600 mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-surya-slate-100 flex items-center justify-between text-xs font-semibold text-surya-teal-700">
                  <span>Core Principle</span>
                  <div className="w-2 h-2 rounded-full bg-surya-teal-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
