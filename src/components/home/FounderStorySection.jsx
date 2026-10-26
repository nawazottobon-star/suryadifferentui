import React from "react";
import { motion, useInView } from "framer-motion";
import { Award, Heart, Sparkles, ChevronRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

/**
 * FounderStorySection Component
 * Dedicated section immediately below the Hero: "The Vision Behind Our Care"
 * Features authentic founder portrait, complete narrative, and 3 story milestones.
 */
export function FounderStorySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const milestones = [
    {
      num: "01",
      title: "15+ Years",
      desc: "Of patient-care experience across general medicine and dedicated clinical practice.",
      icon: <Award className="w-4 h-4" />,
    },
    {
      num: "02",
      title: "Patient First",
      desc: "A holistic approach grounded in empathy, individual needs, and compassionate listening.",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      num: "03",
      title: "Est. 2024",
      desc: "The establishment of Surya Hospital at Sai Nagar, Anantapur.",
      icon: <Calendar className="w-4 h-4" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="founder-story"
      className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-[#FFFDFB] via-[#FFF9F3] to-[#FFF5EC] border-t border-[#F0E4D8] overflow-hidden scroll-mt-20"
    >
      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#E94B1C]/[0.03] blur-[100px] animate-aurora" />
        <div className="absolute bottom-20 left-1/6 w-[400px] h-[400px] rounded-full bg-[#FF8A3D]/[0.04] blur-[90px] animate-aurora" style={{ animationDelay: "4s" }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Eyebrow & Main Heading */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFF0E6] to-[#FFE8D6] text-[#E94B1C] text-[11px] font-extrabold uppercase tracking-[0.14em] mb-4 border border-[#FADCCB]/80 shadow-[0_2px_8px_rgba(233,75,28,0.06)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE STORY BEHIND OUR CARE</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#14233C] tracking-tight leading-tight">
            The Vision Behind{" "}
            <span className="bg-gradient-to-r from-[#E94B1C] to-[#F26A21] bg-clip-text text-transparent">
              Our Care
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A5568] font-medium leading-relaxed max-w-2xl mx-auto">
            Built on years of patient-care experience, a belief in compassionate medicine, and a commitment to seeing every patient as an individual.
          </p>
        </motion.div>

        {/* Editorial Story Layout */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-14 border border-[#EFE5DC] shadow-[0_16px_60px_rgba(200,90,40,0.05)] hover:shadow-[0_20px_70px_rgba(200,90,40,0.08)] transition-shadow duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: Founder Portrait Card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col items-center text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#FFF9F3] via-[#FFF0E6]/50 to-[#FFE8D6]/30 border border-[#F2DECE]/80 shadow-inner relative overflow-hidden"
            >
              {/* Decorative ring behind portrait */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-[#E94B1C]/10 pointer-events-none animate-[spin_30s_linear_infinite]" />

              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 bg-white shrink-0 ring-2 ring-[#E94B1C]/10 ring-offset-4 ring-offset-[#FFF9F3]">
                <img
                  src="/images/dr-d-surya-prakash.png"
                  alt="Dr. Surya Prakash Chowdary"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#14233C] tracking-tight">
                Dr. Surya Prakash Chowdary
              </h3>
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#E94B1C] mt-1.5">
                Founder, Surya Hospital
              </p>
              <p className="text-xs text-[#616B76] font-medium mt-1">
                MBBS, MD · Manipal Academy of Higher Education
              </p>

              {/* Credibility badges */}
              <div className="w-full grid grid-cols-2 gap-3 mt-7 pt-6 border-t border-[#E8D4C4]/60">
                <div className="p-3.5 rounded-2xl bg-white/90 text-center border border-[#F0E2D9] shadow-xs magnetic-card">
                  <div className="text-xl font-black text-[#14233C]">15+</div>
                  <div className="text-[10px] font-bold text-[#616B76] uppercase tracking-wider mt-0.5">Years Experience</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/90 text-center border border-[#F0E2D9] shadow-xs magnetic-card">
                  <div className="text-xl font-black text-[#E94B1C]">~1 Lakh</div>
                  <div className="text-[10px] font-bold text-[#616B76] uppercase tracking-wider mt-0.5">Patients Cared</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Narrative + Milestones */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 flex flex-col space-y-5 text-[#3A4556] text-[14.5px] sm:text-[15.5px] leading-[1.75] text-left"
            >
              <p>
                <span className="text-xl sm:text-2xl font-serif-heading font-black text-[#E94B1C] mr-1 inline align-baseline">
                  Dr.
                </span>{" "}
                Surya Prakash Chowdary has 15 years of experience in patient care and holds an MBBS and an MD from Manipal Academy of Higher Education. Having cared for approximately one lakh patients, he believes in a holistic approach to healthcare that considers modern lifestyles, individual needs, and the concerns of every patient.
              </p>

              <p>
                During the COVID-19 pandemic, he began treating patients at his clinic despite limited facilities. This commitment to caring for patients during a challenging period helped shape his vision for a more comprehensive healthcare setup.
              </p>

              <p>
                In 2024, that vision took shape with the establishment of Surya Hospital, bringing modern clinical facilities, diagnostics, and 24/7 emergency care together under one roof, helping patients access high-quality treatment in one place.
              </p>

              {/* Milestones */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {milestones.map((m) => (
                  <div
                    key={m.num}
                    className="p-4 rounded-2xl bg-gradient-to-br from-[#FFF9F3] to-[#FFF0E6]/50 border border-[#F0E2D9] text-left magnetic-card card-shine-effect group"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E94B1C] to-[#C63D1B] text-white text-[10px] font-black flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        {m.num}
                      </span>
                      <span className="text-base font-black text-[#14233C]">{m.title}</span>
                    </div>
                    <p className="text-xs text-[#616B76] leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/specialities"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] sm:text-sm font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-[0_4px_16px_rgba(233,75,28,0.3)] hover:shadow-[0_6px_20px_rgba(233,75,28,0.4)]"
                >
                  <span>Explore Specialities</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/doctors"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] sm:text-sm font-bold text-[#14233C] hover:text-[#E94B1C] bg-white hover:bg-[#FFF0E6] border border-[#E9D8CE] hover:border-[#E94B1C]/30 transition-all shadow-sm"
                >
                  <span>Meet Our Specialists</span>
                  <ChevronRight className="w-4 h-4 text-[#E94B1C] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FounderStorySection;
