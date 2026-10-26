import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Calendar,
  HeartHandshake,
  Activity,
  ShieldCheck,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import HeroTrustStrip from "./HeroTrustStrip";
import { useAppointmentModal } from "../../context/AppointmentModalContext";


/* ─── Vision Pillars (Simple, Clear & Relatable) ─── */
const VISION_TABS = [
  {
    id: "philosophy",
    label: "Doctor's Promise",
    icon: HeartHandshake,
    headline: "Healthcare That Truly Puts People First.",
    quote:
      "“We treat every patient like our own family. We take time to listen, explain clearly, and give you the best care possible.”",
    badge: "Caring for You",
    author: "Dr. D. Surya Prakash Chowdary",
    credentials: "MBBS, MD · 15+ Years Experience",
    linkText: "Read Doctor's Story",
  },
  {
    id: "infrastructure",
    label: "24/7 Emergency",
    icon: Activity,
    headline: "Always Here When You Need Urgent Help.",
    quote:
      "“Our emergency casualty and ICU doctors are on duty day and night. Whenever there is an emergency, you can count on us.”",
    badge: "Open 24/7",
    author: "Surya Emergency Team",
    credentials: "24/7 Doctors & Trained Nurses",
    linkText: "About Emergency Care",
  },
  {
    id: "clinical-excellence",
    label: "Complete Care",
    icon: Stethoscope,
    headline: "Experienced Doctors & Modern Hospital Facilities.",
    quote:
      "“From routine health checkups and lab tests to surgeries and recovery, you get trusted healthcare under one roof.”",
    badge: "Under One Roof",
    author: "Surya Hospital Doctors",
    credentials: "Senior Doctors & Lab Services",
    linkText: "Explore Our Care",
  },
];

export function HomeHero() {
  const { openModal } = useAppointmentModal();
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState(VISION_TABS[0]);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const scrollToFounder = (e) => {
    e.preventDefault();
    const el = document.getElementById("founder-story");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home-hero"
      className="relative w-full min-h-[94vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#FFF9F3] text-slate-800"
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          RIGHT-SIDE VISUAL AREA (HOSPITAL VIDEO)
          Occupies the right half of the hero section, anchored to the right edge.
          Does not extend over or interfere with the left-side content.
         ═══════════════════════════════════════════════════════════════════════ */}
      <div
        className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 xl:w-[50%] 2xl:w-[52%] overflow-hidden select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className={`w-full h-full object-cover object-[48%_center] select-none transition-opacity duration-700 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => setVideoLoaded(true)}
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src="/videos/gemini_generated_video_95b1a674.mp4" type="video/mp4" />
          </video>

          {/* ── Soft cream gradient boundary between left content and right video ── */}
          <div
            className="absolute inset-y-0 left-0 w-32 xl:w-48 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #FFF9F3 0%, rgba(255, 249, 243, 0.95) 20%, rgba(255, 249, 243, 0.55) 55%, rgba(255, 249, 243, 0.12) 80%, transparent 100%)",
            }}
          />

          {/* ── Soft bottom seam gradient blending with trust strip ── */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #FFF9F3 0%, rgba(255, 249, 243, 0.85) 40%, transparent 100%)",
            }}
          />

          {/* ── Soft top seam gradient beneath navbar ── */}
          <div
            className="absolute inset-x-0 top-0 h-24 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, #FFF9F3 0%, rgba(255, 249, 243, 0.5) 40%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO CONTENT (FOREGROUND LAYER: z-10)
          Clear two-column structure: Left column holds all content, Right column
          holds the video area. Left content is 100% untouched.
         ═══════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-24 pb-20 lg:pb-28 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── LEFT COLUMN: EDITORIAL FOUNDER MESSAGE & CTAs (6 Cols on Desktop) ── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left space-y-6 max-w-xl lg:max-w-[560px] xl:max-w-[620px]">

            {/* 1. Small Trust Indicators / Vision Tabs */}
            <div className="inline-flex p-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E9D8CE] shadow-sm gap-1">
              {VISION_TABS.map((tab) => {
                const IconComponent = tab.icon;
                const isSelected = activeTab.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={`relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "text-white shadow-xs"
                        : "text-[#5A5049] hover:text-[#14233C] hover:bg-[#FFF0E6]/60"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeTabBadge"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E94B1C] to-[#C63D1B]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 2 & 3. Introductory Label + Dynamic Headline */}
            <div className="min-h-[120px] sm:min-h-[135px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#E94B1C] uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#E94B1C]" />
                    <span>{activeTab.badge}</span>
                  </div>

                  <h1 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.15rem] lg:text-[3.35rem] font-black tracking-tight leading-[1.1] text-[#14233C]">
                    {activeTab.headline.split(" ").slice(0, -2).join(" ")}{" "}
                    <span className="bg-gradient-to-r from-[#E94B1C] via-[#F26A21] to-[#C63D1B] bg-clip-text text-transparent">
                      {activeTab.headline.split(" ").slice(-2).join(" ")}
                    </span>
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 4. Founder's Message Card */}
            <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E9D8CE] shadow-[0_10px_30px_-5px_rgba(233,75,28,0.1)] relative overflow-hidden transition-all hover:shadow-[0_14px_38px_-5px_rgba(233,75,28,0.15)] group">
              {/* Subtle ECG Heartbeat Pulse Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-[#FFF0E6] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-transparent via-[#E94B1C] to-transparent w-44"
                  animate={{ x: ["-100%", "500%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                {/* Doctor Avatar */}
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFF0E6] to-[#FFE0D0] border-2 border-[#E94B1C]/30 shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/dr-d-surya-prakash.png"
                    alt="Dr. Surya Prakash Chowdary"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <span
                    className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white"
                    title="Active Physician"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 text-left space-y-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab.id}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs sm:text-[13.5px] text-[#4A403B] italic leading-relaxed font-serif">
                        {activeTab.quote}
                      </p>

                      <div className="mt-2.5 pt-2 border-t border-[#F0E4D8] flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <div className="text-xs sm:text-sm font-black text-[#14233C] tracking-tight">
                            {activeTab.author}
                          </div>
                          <div className="text-[11px] text-[#E94B1C] font-bold">
                            {activeTab.credentials}
                          </div>
                        </div>

                        <a
                          href="#founder-story"
                          onClick={scrollToFounder}
                          className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#14233C] hover:text-[#E94B1C] transition group/link"
                        >
                          <span>{activeTab.linkText || "Read Doctor's Story"}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#E94B1C] group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* 5. Book Appointment and About Our Founder Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3.5 w-full">
              <button
                type="button"
                onClick={() => openModal()}
                id="hero-book-cta"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#E94B1C] via-[#F26A21] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-[0_8px_25px_rgba(233,75,28,0.32)] hover:shadow-[0_12px_32px_rgba(233,75,28,0.45)] hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </button>

              <a
                href="#founder-story"
                id="hero-about-founder-cta"
                onClick={scrollToFounder}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#14233C] bg-white border border-[#E9D8CE] hover:border-[#E94B1C] hover:bg-[#FFF0E6] transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer"
              >
                <span>About Our Founder</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E94B1C]" />
              </a>
            </div>

          </div>

          {/* ── MOBILE / TABLET DEDICATED VIDEO CONTAINER (BELOW CONTENT, NEVER OBSCURING TEXT) ── */}
          <div className="lg:hidden w-full mt-2 sm:mt-4">
            <div className="relative w-full h-[260px] sm:h-[340px] rounded-2xl overflow-hidden border border-[#E9D8CE] shadow-[0_8px_24px_rgba(40,20,10,0.06)] bg-[#FFF0E6]">
              <video
                className={`w-full h-full object-cover object-[48%_center] select-none transition-opacity duration-700 ${
                  videoLoaded ? "opacity-100" : "opacity-0"
                }`}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onPlaying={() => setVideoLoaded(true)}
                onLoadedData={() => setVideoLoaded(true)}
              >
                <source src="/videos/gemini_generated_video_95b1a674.mp4" type="video/mp4" />
              </video>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20, 35, 60, 0.4) 0%, transparent 40%)",
                }}
              />
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full bg-[#14233C]/75 backdrop-blur-sm border border-white/20">
                Surya Hospital Main Campus
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: OPEN VIEWPORT FOR HOSPITAL BUILDING (Desktop) ── */}
          <div className="lg:col-span-6 xl:col-span-6 relative hidden lg:block min-h-[420px] pointer-events-none select-none" />

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          MODERN GLASSMORPHIC MEDICAL TRUST STRIP (FLOATING RIBBON)
         ═══════════════════════════════════════════════════════════════════════ */}
      <HeroTrustStrip />
    </section>
  );
}

export default HomeHero;
