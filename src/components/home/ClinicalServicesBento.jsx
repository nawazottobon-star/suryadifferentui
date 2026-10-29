import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAppointmentModal } from '../../context/AppointmentModalContext';
import { Link } from 'react-router-dom';

const ACCENTS = [
  { bar: 'bg-[#E94B1C]', text: 'text-[#E94B1C]', bgChip: 'bg-[#FFF1EB]' },
  { bar: 'bg-[#0A6B6B]', text: 'text-[#0A6B6B]', bgChip: 'bg-[#EEF8F8]' },
  { bar: 'bg-[#B45309]', text: 'text-[#B45309]', bgChip: 'bg-[#FFFBEB]' },
  { bar: 'bg-[#4338CA]', text: 'text-[#4338CA]', bgChip: 'bg-[#EEF2FF]' },
  { bar: 'bg-[#14233C]', text: 'text-[#14233C]', bgChip: 'bg-[#F1F5F9]' },
];

const services = [
  {
    id: 'emergency',
    num: '01',
    title: 'Emergency & Acute Trauma Care',
    category: 'Critical Care · 24 Hours / 7 Days',
    tagline:
      'Immediate accident triage, acute cardiac care, road trauma management, and surgical stabilisation — around the clock, every day.',
    capabilities: [
      ['On-Duty Casualty Physicians', '24/7, round-the-clock availability'],
      ['Road Accident & Fracture Triage', 'Immediate assessment on arrival'],
      ['Acute Cardiac Stabilisation', 'ECG, O₂ support, instant IV access'],
      ['Resuscitation Bay', 'Defibrillators, multipara telemetry monitors'],
      ['On-Call Specialist Coordination', 'Ortho, Cardiology, Surgery standby'],
      ['Emergency Helpline', '+91 85009 04999'],
    ],
    action: { type: 'tel', label: 'Emergency: +91 85009 04999', value: 'tel:+918500904999' },
  },
  {
    id: 'opd',
    num: '02',
    title: 'Specialist OPD Consultations',
    category: 'Outpatient Services · 9 AM–2 PM & 5 PM–9 PM',
    tagline:
      '12 verified medical and surgical specialties. Direct access to experienced consultant physicians without referral delays — all under one address in Sai Nagar.',
    capabilities: [
      ['Internal Medicine', 'Diabetes, BP, Fevers, Infections'],
      ['Cardiology', 'Heart evaluations, ECG, 2D Echo'],
      ['Gastroenterology', 'Liver, stomach, digestive disorders'],
      ['Nephrology', 'Kidney function, dialysis coordination'],
      ['Neurology', 'Seizures, migraines, neuropathy'],
      ['E.N.T. & Pulmonology', 'Sinus, chest infections, asthma'],
      ['Orthopedics & Spine', 'Joints, fractures, spine pain'],
      ['General & Laparoscopy', 'Keyhole, hernia, appendix'],
    ],
    action: { type: 'modal', label: 'Book OPD Appointment', dept: '' },
  },
  {
    id: 'diagnostics',
    num: '03',
    title: 'In-House Diagnostics & Imaging',
    category: 'Laboratory & Radiology · Same-Day Reports',
    tagline:
      'Complete blood pathology, digital X-ray, ultrasound sonography, and 12-lead ECG — all performed and reported within the hospital campus.',
    capabilities: [
      ['Complete Blood Count (CBC)', 'Infection & blood disorder screening'],
      ['Blood Sugar Panel', 'Fasting, PP, HbA1c diabetes monitoring'],
      ['Lipid, LFT & KFT Profiles', 'Cholesterol, liver & kidney tests'],
      ['Thyroid Profile (TSH, T3, T4)', 'Complete hormone evaluation'],
      ['Digital X-Ray (Chest & Bone)', 'Low-radiation, immediate reports'],
      ['Ultrasound Sonography (USG)', 'Abdomen, pelvis, KUB scans'],
      ['12-Lead Resting ECG', 'Cardiac rhythm evaluation'],
      ['Full-Body Health Packages', 'Senior & executive health checkups'],
    ],
    preparationNote:
      'Fasting tests require 10–12 hours overnight fast. Plain water allowed. Arrive 8–10:30 AM.',
    action: { type: 'modal', label: 'Enquire About Tests', dept: 'Internal Medicine' },
  },
  {
    id: 'surgery',
    num: '04',
    title: 'Surgical Suites & Operative Care',
    category: 'Surgical Infrastructure · 24/7 OT Ready',
    tagline:
      'Sterile modular operation theatres for minimally invasive keyhole procedures, orthopaedic joint surgeries, spine care, and complex general surgeries.',
    capabilities: [
      ['Laparoscopic Surgery', 'Gallbladder, hernia, appendix, gastro'],
      ['Orthopaedic Joint Replacement', 'Knee & Hip arthroplasty, trauma'],
      ['Spine Surgery', 'Disc decompression, lumbar procedures'],
      ['Urological Procedures', 'Kidney stones, prostate, bladder'],
      ['General Surgery', 'Soft tissue, abdominal emergencies'],
      ['Post-Op ICU Observation', 'Step-down monitored recovery beds'],
    ],
    action: { type: 'modal', label: 'Consult Surgeon', dept: 'General Surgery' },
  },
  {
    id: 'support',
    num: '05',
    title: 'Inpatient Care, Pharmacy & Cashless',
    category: 'Support Services · 24/7 Desk',
    tagline:
      'Clean monitored inpatient wards, round-the-clock on-campus pharmacy, and direct cashless hospital admission with 24+ empaneled insurance TPAs.',
    capabilities: [
      ['AC Private Recovery Rooms', 'Dedicated attendant accommodation'],
      ['Semi-Private & General Wards', 'Hygienic nursing-supervised beds'],
      ['24/7 On-Campus Pharmacy', 'Authentic medicines & surgical supplies'],
      ['Cashless Insurance Desk', 'Star Health, Medi Assist, ICICI Lombard'],
      ['TPA Pre-Authorisation Support', 'FHPL, HDFC ERGO, Vidal Health & more'],
      ['Physiotherapy Guidance', 'Post-surgery mobility recovery'],
    ],
    action: { type: 'link', label: 'View 24+ Insurance Partners', value: '/insurance-partners' },
  },
];

// Normalized strictly increasing ranges [0, 1]
const CARD_RANGES = [
  { enter: [0.00, 0.01], exit: [0.08, 0.25] },
  { enter: [0.08, 0.25], exit: [0.28, 0.48] },
  { enter: [0.28, 0.48], exit: [0.51, 0.71] },
  { enter: [0.51, 0.71], exit: [0.74, 0.94] },
  { enter: [0.74, 0.94], exit: [0.98, 1.00] },
];

function ParallaxDeckCard({ svc, index, total, scrollYProgress }) {
  const accent = ACCENTS[index % ACCENTS.length];
  const { openModal } = useAppointmentModal();
  const range = CARD_RANGES[index];

  // Y-translation: Cards 1..4 rise from 550px below and land at 0px
  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0.0, 1.0] : range.enter,
    index === 0 ? [0, 0] : [550, 0]
  );

  // Scale down when next card covers this card
  const scale = useTransform(
    scrollYProgress,
    index === total - 1 ? [0.0, 1.0] : range.exit,
    index === total - 1 ? [1, 1] : [1, 0.95]
  );

  // Smooth opacity as card rises
  const opacity = useTransform(
    scrollYProgress,
    index === 0 ? [0.0, 1.0] : [Math.max(0.01, range.enter[0] - 0.04), range.enter[0]],
    index === 0 ? [1, 1] : [0, 1]
  );

  // Z-index ensures later cards stack cleanly over previous ones
  const zIndex = 10 + index * 5;

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex,
        top: `${index * 12}px`,
      }}
      className="absolute inset-x-0 w-full bg-white border border-[#E8DDD2] rounded-3xl overflow-hidden shadow-[0_-8px_30px_rgba(20,35,60,0.08),0_20px_50px_rgba(20,35,60,0.14)] origin-top"
    >
      {/* Top accent bar */}
      <div className={`h-1.5 w-full ${accent.bar}`} />

      <div className="p-5 sm:p-7 lg:p-9">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          
          {/* LEFT: Identity */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-baseline justify-between sm:justify-start sm:gap-4">
              <span
                className={`font-serif font-black leading-none select-none ${accent.text}`}
                style={{ fontSize: 'clamp(2.8rem, 4.5vw, 3.8rem)' }}
              >
                {svc.num}
              </span>
              <div className="text-right sm:text-left">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${accent.bgChip} ${accent.text}`}>
                  Stack {index + 1} of {total}
                </span>
                <div className="text-[11px] font-semibold text-[#8C7E77] mt-0.5 tracking-wide">
                  {svc.category}
                </div>
              </div>
            </div>

            <h3
              className="font-serif font-bold text-[#14233C] leading-snug"
              style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.7rem)' }}
            >
              {svc.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#62554E] leading-relaxed">
              {svc.tagline}
            </p>

            {/* Action CTA */}
            <div className="pt-1">
              {svc.action.type === 'tel' && (
                <a
                  href={svc.action.value}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14233C] text-white font-bold text-xs hover:bg-[#E94B1C] transition-colors shadow-sm"
                >
                  <span>{svc.action.label}</span>
                </a>
              )}

              {svc.action.type === 'modal' && (
                <button
                  type="button"
                  onClick={() => openModal(svc.action.dept || '')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14233C] text-white font-bold text-xs hover:bg-[#E94B1C] transition-colors cursor-pointer shadow-sm"
                >
                  <span>{svc.action.label}</span>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}

              {svc.action.type === 'link' && (
                <Link
                  to={svc.action.value}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14233C] text-white font-bold text-xs hover:bg-[#E94B1C] transition-colors shadow-sm"
                >
                  <span>{svc.action.label}</span>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT: Capabilities */}
          <div className="lg:col-span-7 bg-[#FCF8F5] rounded-2xl p-4 sm:p-5 border border-[#EFE4DC]">
            <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#9A8880] mb-3 pb-2 border-b border-[#EBDCD3]">
              Clinical Capabilities & Highlights
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {svc.capabilities.map(([name, detail], i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${accent.bar}`} />
                  <div>
                    <span className="block text-[12px] sm:text-[13px] font-bold text-[#14233C] leading-tight">
                      {name}
                    </span>
                    <span className="block text-[10px] sm:text-[11px] text-[#7E6F68] font-medium">
                      {detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {svc.preparationNote && (
              <div className="mt-3 pt-2 border-t border-[#EBDCD3]">
                <span className="text-[10px] font-bold text-[#E94B1C] mr-1.5 uppercase">Note:</span>
                <span className="text-[11px] text-[#62554E] leading-normal">{svc.preparationNote}</span>
              </div>
            )}
          </div>

        </div>
      </div>

      <div className="px-5 sm:px-8 py-2.5 bg-[#FAF3EC] border-t border-[#EFE5DB] flex items-center justify-between text-[11px] text-[#8C7E77] font-medium">
        <span>Surya Hospital · Sai Nagar 9th Cross</span>
        <span className="font-semibold text-[#14233C]">Card 0{index + 1} / 0{total}</span>
      </div>
    </motion.div>
  );
}

export function ClinicalServicesBento() {
  const containerRef = useRef(null);
  const { openModal } = useAppointmentModal();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Dynamic parallax transforms for background depth layers
  const bgBuildingY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const bgBuildingScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const bgBuildingOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.24, 0.18]);

  return (
    <section
      id="hospital-services"
      ref={containerRef}
      className="relative w-full"
      style={{
        height: '380vh',
        background: 'radial-gradient(ellipse at 50% 10%, #FFF9F3 0%, #FAF2EA 40%, #F5E8DC 80%, #EDE0D2 100%)',
      }}
    >
      {/* ── BACKGROUND AMBIENT GLOWS & WARM ARCHITECTURAL MISTS ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#E94B1C]/[0.07] via-amber-200/[0.05] to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#0A6B6B]/[0.06] via-amber-100/[0.05] to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full bg-[#E94B1C]/[0.03] blur-[140px]" />
      </div>

      {/* ── SUBTLE CLINICAL / ARCHITECTURAL ISOMETRIC GRID ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #14233C 1px, transparent 1px), linear-gradient(to bottom, #14233C 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)',
        }}
      />

      {/* STICKY SCREEN: Pinned to viewport while scrolling through the 380vh section */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden z-20">
        
        {/* ── IMMERSIVE ARCHITECTURAL LAYER 1: SURYA HOSPITAL BUILDING ELEVATION BACKDROP ── */}
        <motion.div
          style={{ y: bgBuildingY, scale: bgBuildingScale, opacity: bgBuildingOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        >
          <div
            className="w-full max-w-[1280px] h-[640px] sm:h-[720px] bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/images/surya-hospital-building-hero.jpg')",
              maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 25%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 25%, transparent 75%)',
              filter: 'sepia(0.2) saturate(0.9) contrast(1.1) brightness(1.02)',
            }}
          />
        </motion.div>

        {/* ── IMMERSIVE ARCHITECTURAL LAYER 2: GIANT WATERMARK TYPOGRAPHY ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] pointer-events-none select-none z-0 text-center">
          <span className="font-serif font-black text-[clamp(4.5rem,11vw,9.5rem)] text-[#14233C]/[0.035] tracking-tight uppercase whitespace-nowrap block drop-shadow-xs">
            SURYA HOSPITAL
          </span>
        </div>

        {/* ── IMMERSIVE ARCHITECTURAL LAYER 3: LEFT FLANKING CAMPUS TELEMETRY (Desktop) ── */}
        <div className="hidden xl:flex flex-col items-center gap-4 absolute left-6 2xl:left-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none">
          <div className="flex flex-col items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E94B1C] animate-ping" />
            <span className="w-px h-16 bg-gradient-to-b from-[#E94B1C] via-[#E94B1C]/40 to-transparent" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#8C7A70] [writing-mode:vertical-lr] rotate-180">
            SURYA HOSPITAL · SAI NAGAR CAMPUS
          </span>
          <div className="p-2.5 rounded-2xl bg-white/75 backdrop-blur-md border border-[#E8DDD2] shadow-sm text-center space-y-0.5">
            <div className="text-[9.5px] font-mono font-bold text-[#E94B1C]">14.68° N</div>
            <div className="text-[9.5px] font-mono font-bold text-[#14233C]">77.60° E</div>
            <div className="text-[8px] font-extrabold text-[#8C7A70] uppercase tracking-wider pt-0.5 border-t border-[#EFE5DB]">
              ANANTAPUR
            </div>
          </div>
        </div>

        {/* ── IMMERSIVE ARCHITECTURAL LAYER 4: RIGHT FLANKING CAPACITY BADGE (Desktop) ── */}
        <div className="hidden xl:flex flex-col items-center gap-4 absolute right-6 2xl:right-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none">
          <div className="p-3 rounded-2xl bg-white/75 backdrop-blur-md border border-[#E8DDD2] shadow-sm text-left space-y-1.5 max-w-[145px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-extrabold text-emerald-800 uppercase tracking-wider">
                24/7 ACTIVE
              </span>
            </div>
            <div className="text-[11px] font-bold text-[#14233C] leading-snug">
              Casualty &amp; Modular OTs
            </div>
            <div className="text-[9px] text-[#7E6F68] leading-tight">
              Sai Nagar 9th Cross, Anantapur
            </div>
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#8C7A70] [writing-mode:vertical-lr]">
            INFRASTRUCTURE · EST. 2024
          </span>
          <span className="w-px h-16 bg-gradient-to-t from-[#14233C]/35 to-transparent" />
        </div>

        {/* ── MAIN CONTENT (Cards Deck + Header) ── */}
        <div className="max-w-5xl w-full mx-auto relative z-10">

          {/* Section Header */}
          <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#14233C]/15 pb-4">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#E94B1C] mb-1">
                Clinical Services & Infrastructure
              </div>
              <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#14233C] tracking-tight">
                What We Provide.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#8C7E77] font-medium hidden sm:inline">
                Scroll to stack cards
              </span>
              <button
                type="button"
                onClick={() => openModal()}
                className="px-4 py-1.5 rounded-full border border-[#14233C] text-[#14233C] hover:bg-[#14233C] hover:text-white transition-colors text-xs font-bold cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* PARALLAX CARD DECK VIEWPORT */}
          <div className="relative w-full h-[470px] sm:h-[430px] lg:h-[400px]">
            {services.map((svc, i) => (
              <ParallaxDeckCard
                key={svc.id}
                svc={svc}
                index={i}
                total={services.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Visual indicator of 5 cards */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {services.map((svc, i) => (
              <div key={svc.id} className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-[#8C7E77]">0{i + 1}</span>
                {i < services.length - 1 && <span className="text-[#D8CDC4]">·</span>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesBento;
