import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Phone,
  CheckCircle2,
  HelpCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  User,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import { getSpecialityBySlug, APPROVED_SPECIALITIES } from "../constants/specialitiesData";
import { HOSPITAL_INFO } from "../constants/hospitalData";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { useAppointmentModal } from "../context/AppointmentModalContext";

export function SpecialityDetailPage() {
  const { openModal } = useAppointmentModal();
  const { slug } = useParams();
  const speciality = getSpecialityBySlug(slug);

  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    if (speciality) {
      document.title = `${speciality.name} | Surya Hospital, Sai Nagar, Anantapur`;
      window.scrollTo(0, 0);
    }
  }, [speciality]);

  if (!speciality) {
    return <Navigate to="/specialities" replace />;
  }

  const quickJumpLinks = [
    { label: "About", href: "#about-speciality" },
    { label: "Conditions Treated", href: "#conditions-treated" },
    { label: "Treatments", href: "#treatments-services" },
    { label: "Specialists", href: "#consultant-doctors" },
    { label: "FAQs", href: "#speciality-faqs" },
  ];

  return (
    <div className="w-full bg-[#ECECE5] text-[#262626]">
      {/* ── 1. HERO SECTION ── */}
      <PageHero
        eyebrow={speciality.departmentType.toUpperCase()}
        title={speciality.name}
        description={speciality.shortDescription}
        breadcrumbs={[
          { label: "Departments", path: "/specialities" },
          { label: speciality.name },
        ]}
        badge="Speciality Department"
      >
        <button
          type="button"
          onClick={() => openModal(speciality.name)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#3A4F99] hover:bg-[#2A3B7A] shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95 border-0"
        >
          <Calendar className="w-4 h-4" />
          <span>Book an Appointment</span>
        </button>
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#13233D] bg-white border border-[#D9E2EC] hover:bg-[#EEF2FB] transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#3A4F99] fill-current" />
            <span>Call 24/7: 85009 04999</span>
          </button>
        </a>
      </PageHero>

      {/* ── STICKY QUICK-JUMP SUB-NAVIGATION PILL ── */}
      <div className="sticky top-20 sm:top-24 z-30 w-full py-2.5 bg-white/95 backdrop-blur-md border-b border-[#D9E2EC] shadow-2xs">
        <Container>
          <div className="flex items-center justify-between gap-3 overflow-x-auto scrollbar-none py-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#756860] shrink-0 hidden sm:inline-flex items-center">
              Quick Jump:
            </span>
            <div className="flex items-center gap-2">
              {quickJumpLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 rounded-full text-xs font-bold text-[#262626] hover:text-[#3A4F99] hover:bg-[#EEF2FB] bg-[#ECECE5] border border-[#D9E2EC] transition whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => openModal(speciality.name)}
              className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#3A4F99] hover:bg-[#2A3B7A] transition shadow-xs hidden md:inline-block cursor-pointer border-0"
            >
              Book OPD Slot
            </button>
          </div>
        </Container>
      </div>

      {/* ── 2. ABOUT THIS SPECIALITY & HERO PHOTOGRAPH ── */}
      <section id="about-speciality" className="py-14 sm:py-20 bg-white border-b border-[#E8EFF5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FB] border border-[#D9E2EC] text-[#13233D] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#E94B1C]" />
                <span>About This Speciality</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#13233D] tracking-tight leading-tight">
                Dedicated Care for Your Health
              </h2>

              <p className="text-base sm:text-lg text-[#4A403B] leading-relaxed">
                {speciality.introduction}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-[#ECECE5] border border-[#D9E2EC] space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#13233D]">
                    Department Group
                  </div>
                  <div className="text-sm font-bold text-[#13233D]">
                    {speciality.departmentType}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#ECECE5] border border-[#D9E2EC] space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#13233D]">
                    Availability & Timing
                  </div>
                  <div className="text-sm font-bold text-[#13233D]">
                    OPD: Mon – Sat | 24/7 Casualty
                  </div>
                </div>
              </div>
            </div>

            {/* Right Relevant Department Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#D9E2EC] shadow-lg bg-[#EEF2FB] aspect-[4/3]">
                <img
                  src={speciality.heroImage}
                  alt={speciality.imageAlt || `${speciality.name} at Surya Hospital`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#E94B1C] px-2.5 py-1 rounded-md">
                    Surya Hospital
                  </span>
                  <p className="text-sm font-bold mt-1.5 drop-shadow-sm">
                    {speciality.name} Department
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. CONDITIONS WE TREAT & 4. TREATMENTS AND SERVICES ── */}
      <section id="conditions-treated" className="py-16 sm:py-20 bg-[#ECECE5] border-b border-[#E8EFF5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
            {/* Conditions We Treat */}
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-[#D9E2EC] shadow-xs text-left space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#13233D] block">
                  Diagnosis &amp; Care
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#13233D]">
                  Conditions We Treat
                </h3>
                <p className="text-xs sm:text-sm text-[#756860] leading-relaxed">
                  Our doctors provide accurate evaluations and treatment for a wide range of conditions, including:
                </p>
              </div>

              <ul className="space-y-3.5">
                {speciality.conditions.map((condition, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEF2FB] text-[#3A4F99] flex items-center justify-center shrink-0 mt-0.5 border border-[#D9E2EC]">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#262626] leading-relaxed">
                      {condition}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments and Services */}
            <div id="treatments-services" className="bg-white rounded-3xl p-6 sm:p-9 border border-[#D9E2EC] shadow-xs text-left space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#006677] block">
                  Clinical Services
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#13233D]">
                  Treatments and Services
                </h3>
                <p className="text-xs sm:text-sm text-[#756860] leading-relaxed">
                  We offer modern diagnostic tests, supportive medical care, and specialized procedures:
                </p>
              </div>

              <ul className="space-y-3.5">
                {speciality.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E6F4F7] text-[#006677] flex items-center justify-center shrink-0 mt-0.5 border border-[#BDE0E8]">
                      <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#262626] leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. WHEN TO CONSULT A DOCTOR (Streamlined Warning Signs Bar) ── */}
      <section className="py-12 sm:py-14 bg-white border-b border-[#E8EFF5]">
        <Container>
          <div className="max-w-4xl mx-auto text-left">
            <div className="bg-[#ECECE5] border border-[#D9E2EC] rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E8EFF5]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#13233D] block">
                    PATIENT ADVISORY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#13233D]">
                    When to Consult Our {speciality.name} Specialists
                  </h3>
                </div>
                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#3A4F99] hover:bg-[#2A3B7A] transition shrink-0 self-start sm:self-auto"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Call {HOSPITAL_INFO.phone}</span>
                </a>
              </div>

              {/* Compact Inline Pill Badges */}
              <div className="flex flex-wrap gap-2.5">
                {speciality.whenToConsult.map((point, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#D9E2EC] text-xs font-medium text-[#262626] shadow-2xs hover:border-[#3A4F99] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E94B1C] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 8. OUR SPECIALISTS ── */}
      <section id="consultant-doctors" className="py-16 sm:py-20 bg-[#ECECE5] border-b border-[#E8EFF5]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#13233D]">
                Experienced Medical Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#13233D]">
                Our {speciality.name} Specialists
              </h2>
              <p className="text-xs sm:text-sm text-[#756860]">
                Consult verified doctors providing inpatient care and outpatient consultations at Surya Hospital.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {speciality.doctors.map((doc, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-[#D9E2EC] p-6 text-left space-y-4 shadow-xs hover:border-[#3A4F99] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3.5">
                      <div className="w-13 h-13 rounded-2xl bg-[#EEF2FB] text-[#3A4F99] flex items-center justify-center shrink-0 border border-[#D9E2EC]">
                        <User className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-[#13233D] leading-tight">
                          {doc.name}
                        </h3>
                        <div className="text-xs font-bold text-[#FF8A3D] mt-0.5">
                          {doc.qualifications}
                        </div>
                        <div className="text-xs text-[#756860] mt-0.5">
                          {doc.designation}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#4A403B] leading-relaxed pt-2 border-t border-[#E8EFF5]">
                      {doc.experience}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8EFF5] space-y-3">
                    <div className="flex items-start gap-2 text-xs text-[#756860]">
                      <Clock className="w-3.5 h-3.5 text-[#FF8A3D] shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{doc.opdTimings}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openModal(speciality.name)}
                      className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-white bg-[#3A4F99] hover:bg-[#2A3B7A] transition-colors shadow-xs cursor-pointer active:scale-95 border-0"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 7. FREQUENTLY ASKED QUESTIONS ── */}
      <section id="speciality-faqs" className="py-16 sm:py-20 bg-[#ECECE5] border-b border-[#E8EFF5]">
        <Container>
          <div className="max-w-3xl mx-auto text-left space-y-6">
            <div className="text-center space-y-2 max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#13233D]">
                Clear Answers for Patients
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#13233D]">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-[#756860]">
                Common questions about {speciality.name} appointments and hospital care.
              </p>
            </div>

            <div className="space-y-3">
              {speciality.faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#D9E2EC] overflow-hidden transition-all shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-[#EEF2FB]/30 transition"
                      aria-expanded={isOpen}
                    >
                      <span className="text-xs sm:text-sm font-bold text-[#13233D] leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#13233D] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#4A403B] leading-relaxed border-t border-[#E8EFF5] bg-[#ECECE5]/50">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}

export default SpecialityDetailPage;
