import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ArrowRight, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SpecialtyCarousel({ onSelectSpecialty, onBookAppointment }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const specialties = [
    {
      id: "general-medicine",
      title: "General Medicine",
      tagline: "Primary & Inpatient Adult Healthcare",
      desc: "Diagnosis and comprehensive medical treatment for acute adult illnesses, metabolic disorders, and chronic conditions.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
      badge: "Medical Specialties",
    },
    {
      id: "laparoscopic-surgery",
      title: "Laparoscopic Surgery",
      tagline: "Minimally Invasive Keyhole Precision",
      desc: "Advanced laparoscopic procedures performed through tiny incisions for reduced blood loss, less pain, and rapid hospital discharge.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=85",
      badge: "Surgical Care",
    },
    {
      id: "orthopedic-surgery",
      title: "Orthopaedic Surgery",
      tagline: "Musculoskeletal & Trauma Stabilization",
      desc: "Dedicated bone and joint care managing acute fractures, dislocations, and orthopedic trauma in sterile surgical suites.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=85",
      badge: "Surgical Care",
    },
    {
      id: "general-surgery",
      title: "General Surgery",
      tagline: "Routine & Emergency Surgical Procedures",
      desc: "Experienced surgical consultants performing planned elective operations and acute emergency surgical repairs.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1400&q=85",
      badge: "Surgical Care",
    },
    {
      id: "emergency-care",
      title: "Emergency & Critical Care",
      tagline: "24/7 Acute Triage & Trauma Resuscitation",
      desc: "Round-the-clock emergency medical staff ready for cardiac emergencies, acute trauma, and critical patient triage.",
      image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1400&q=85",
      badge: "24/7 Active",
      is24x7: true,
    },
    {
      id: "diagnostics",
      title: "Diagnostics & Imaging",
      tagline: "Pathology, Digital X-Ray, USG & ECG",
      desc: "Timely and reliable clinical results supported by an in-house laboratory and diagnostic imaging equipment.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=85",
      badge: "In-House Lab",
    },
    {
      id: "rehab",
      title: "Rehabilitation & Physiotherapy",
      tagline: "Restorative Functional Conditioning",
      desc: "Targeted physical therapy programs to recover mobility, relieve muscular pain, and condition post-surgical patients.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85",
      badge: "Recovery Care",
    },
    {
      id: "pharmacy",
      title: "Pharmacy & Support",
      tagline: "24/7 In-House Dispensing",
      desc: "Direct access to authentic prescription medications and surgical consumables on hospital premises.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1400&q=85",
      badge: "24/7 Pharmacy",
    },
  ];

  const total = specialties.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  const current = specialties[activeIndex];

  return (
    <section id="specialties" className="py-20 sm:py-32 bg-white border-t border-surya-slate-200/80 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-surya-teal-700 bg-surya-teal-50 px-3.5 py-1.5 rounded-full inline-block">
              SPECIALIZED CLINICAL CARE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-surya-slate-900 mt-2 leading-tight">
              Care across specialties<span className="text-surya-teal-600">.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + total) % total)}
              className="w-11 h-11 rounded-full border border-surya-slate-300 bg-white hover:bg-surya-slate-100 flex items-center justify-center text-surya-slate-700 transition active:scale-95 shadow-sm"
              aria-label="Previous specialty"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % total)}
              className="w-11 h-11 rounded-full border border-surya-navy-900 bg-surya-navy-900 hover:bg-surya-navy-800 flex items-center justify-center text-white transition active:scale-95 shadow-sm"
              aria-label="Next specialty"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Large Stage: Image Slider + Synchronized Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surya-slate-50 p-6 sm:p-10 lg:p-12 rounded-3xl border border-surya-slate-200/90 shadow-xl">
          {/* Left: Large Visual Photography (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-surya-navy-950 relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/surya-reception.png";
                  }}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.04]"
                />
              </AnimatePresence>

              <div className="absolute top-4 left-4">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md ${
                    current.is24x7
                      ? "bg-surya-emergency-600 text-white shadow-emergency"
                      : "bg-surya-navy-900/90 text-white border border-surya-navy-700"
                  }`}
                >
                  {current.badge}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Information & Action (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-700 block">
                    {current.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-surya-slate-900 mt-1">
                    {current.title}
                  </h3>
                </div>

                <p className="text-base text-surya-slate-600 leading-relaxed">
                  {current.desc}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    icon={Calendar}
                    onClick={() => onBookAppointment && onBookAppointment(current.title)}
                  >
                    Book Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    icon={ArrowRight}
                    iconPosition="right"
                    onClick={() => onSelectSpecialty && onSelectSpecialty(current.id)}
                  >
                    Explore Department
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Indicator Tabs */}
            <div className="pt-6 border-t border-surya-slate-200/80 flex flex-wrap gap-2">
              {specialties.map((spec, idx) => (
                <button
                  key={spec.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeIndex === idx
                      ? "bg-surya-navy-900 text-white shadow-sm"
                      : "bg-white text-surya-slate-600 hover:bg-surya-slate-200"
                  }`}
                >
                  {spec.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
