import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import {
  Calendar,
  Phone,
  Clock,
  ShieldCheck,
  ChevronRight,
  Stethoscope,
  Scissors,
  Activity,
  Heart,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { useAppointmentModal } from "../../context/AppointmentModalContext";
import "./PinterestPinboard.css";

export function PinterestPinboard() {
  const { openModal } = useAppointmentModal();
  const [activeCategory, setActiveCategory] = useState("all");

  const chips = [
    { id: "all", label: "✨ All Care Highlights" },
    { id: "doctors", label: "👨‍⚕️ Specialist Doctors" },
    { id: "services", label: "🏥 Surgical & Clinical Care" },
    { id: "emergency", label: "⚡ 24/7 Casualty & Triage" },
    { id: "facilities", label: "🔬 Diagnostics & Pharmacy" },
  ];

  // Verified pin items derived from hospital manifest
  const pinData = [
    {
      id: "dr-k-vamsi-krishna",
      category: "doctors",
      badge: "Cardiology",
      badgeDot: "green",
      title: "Dr. K. Vamsi Krishna",
      subtitle: "MD, DM (OSM)",
      desc: "Consultant Cardiologist specializing in coronary angiography, angioplasty, heart attack management, and preventive cardiac care.",
      meta: "OPD: 10:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-[4/5]",
      link: "/doctors",
      actionText: "Book Visit",
      actionLink: "/appointment?dept=Cardiology&doctor=Dr.%20K.%20Vamsi%20Krishna",
      features: [
        "Coronary Angiography & Angioplasty",
        "Heart Attack & Emergency Care",
        "Hypertension & Heart Failure Management",
      ],
    },
    {
      id: "service-laparoscopy",
      category: "services",
      badge: "Minimally Invasive",
      badgeDot: "green",
      title: "Keyhole (Laparoscopic) Surgery",
      subtitle: "Dr. Sai Swaroop, MS General Surgery",
      desc: "Advanced surgeries performed through tiny keyhole cuts for appendix, hernia, and gallbladder stones. Faster recovery with minimal pain and smaller scars.",
      meta: "Sterile OT Suite",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/11]",
      link: "/specialities",
      actionText: "Surgical Info",
      actionLink: "/specialities",
      features: [
        "Keyhole Gallbladder Stone Removal",
        "Keyhole Appendix Surgery",
        "Modern Mesh Hernia Repair",
      ],
    },
    {
      id: "emergency-casualty",
      category: "emergency",
      badge: "Open 24 Hours / 7 Days",
      badgeDot: "red",
      title: "24/7 Emergency & Casualty Wing",
      subtitle: "Immediate Physician Triage",
      desc: "Instant stabilization for chest pain, sudden breathlessness, road accidental trauma, deep cuts, and high fevers in Sai Nagar, Anantapur.",
      meta: "Helpline: +91 85009 04999",
      image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/10]",
      link: "/emergency",
      actionText: "Call ER",
      actionLink: `tel:${HOSPITAL_INFO.phoneRaw}`,
      features: [
        "Cardiac & Breathing Stabilization",
        "Accidental Bone Fracture First-Aid",
        "Direct Oxygen & Critical Observation",
      ],
    },
    {
      id: "dr-s-t-rajaneesh-reddy",
      category: "doctors",
      badge: "Gastroenterology",
      badgeDot: "green",
      title: "Dr. S.T. Rajaneesh Reddy",
      subtitle: "DM Gastro",
      desc: "Consultant Medical Gastroenterologist specializing in endoscopy, colonoscopy, liver disorders, acid reflux, and chronic digestive diseases.",
      meta: "OPD: 10:00 AM – 2:00 PM & 5:00 PM – 8:30 PM",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-[4/5]",
      link: "/doctors",
      actionText: "Book Visit",
      actionLink: "/appointment?dept=Gastroenterology&doctor=Dr.%20S.T.%20Rajaneesh%20Reddy",
      features: [
        "Endoscopy & Colonoscopy Procedures",
        "Liver Health, Jaundice & Cirrhosis",
        "Acid Reflux (GERD) & Gastritis Care",
      ],
    },
    {
      id: "dr-m-diwakar",
      category: "doctors",
      badge: "Orthopedic & Spine",
      badgeDot: "green",
      title: "Dr. M. Diwakar",
      subtitle: "MS Ortho & Spine",
      desc: "Specialist in spine decompression, disc surgery, fracture setting, and trauma stabilization to help patients walk and move comfortably again.",
      meta: "OPD: 10:00 AM – 1:30 PM & 5:00 PM – 8:30 PM",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-[4/5]",
      link: "/doctors",
      actionText: "Book Visit",
      actionLink: "/appointment?dept=Orthopedic&doctor=Dr.%20M.%20Diwakar",
      features: [
        "Spine Decompression & Disc Care",
        "Trauma & Fracture Plaster Setting",
        "Chronic Back & Sciatica Relief",
      ],
    },
    {
      id: "facility-pharmacy",
      category: "facilities",
      badge: "Campus Support",
      badgeDot: "green",
      title: "24/7 In-House Medical Pharmacy",
      subtitle: "Genuine Medicines & Surgical Supplies",
      desc: "Located directly inside the hospital campus so patients and relatives can collect prescribed medications round the clock without leaving.",
      meta: "Open 24/7 All 365 Days",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/10]",
      link: "/contact",
      actionText: "View Desk",
      actionLink: "/contact",
      features: [
        "100% Genuine Prescription Drugs",
        "Surgical Dressing & Ortho Support",
        "Emergency Injections Available",
      ],
    },
    {
      id: "facility-diagnostics",
      category: "facilities",
      badge: "Diagnostic Wing",
      badgeDot: "green",
      title: "Digital X-Ray & Ultrasound Diagnostics",
      subtitle: "Pathology, ECG & Sonography",
      desc: "Rapid blood testing, 12-lead cardiac ECG, digital radiographs, and abdominal ultrasound scans providing accurate clinical answers.",
      meta: "Reporting: 8:00 AM – 9:00 PM",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/11]",
      link: "/specialities",
      actionText: "Explore Tests",
      actionLink: "/specialities",
      features: [
        "Complete Blood & Urine Pathology",
        "Low-Radiation Bone Fracture X-Rays",
        "Pelvic & Abdominal Sonography (USG)",
      ],
    },
    {
      id: "dr-v-gowtham",
      category: "doctors",
      badge: "Intensivist & ICU",
      badgeDot: "red",
      title: "Dr. V. Gowtham",
      subtitle: "MD (Anesthesia & Intensivist)",
      desc: "Specializes in intensive care unit (ICU) management, emergency resuscitation, and critical perioperative life support.",
      meta: "Available 24/7 in Critical Care Wing",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-[4/5]",
      link: "/doctors",
      actionText: "Emergency Desk",
      actionLink: "/emergency",
      features: [
        "Intensive Care Unit (ICU) Management",
        "Acute & Chronic Pain Management",
        "Emergency Resuscitation & Airway Support",
      ],
    },
  ];

  const filteredPins = useMemo(() => {
    if (activeCategory === "all") return pinData;
    return pinData.filter((pin) => pin.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="pinterest-board-section">
      <Container size="wide">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]">
              <Sparkles className="w-3.5 h-3.5 text-[#E94B1C]" />
              HEALTHCARE DISCOVERY PINBOARD
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#C63D1B] tracking-tight">
              Explore Surya Hospital at a Glance
            </h2>
            <p className="text-base text-[#756860] leading-relaxed font-normal">
              Browse our verified medical specialists, advanced operating suites, diagnostic facilities, and 24/7 casualty desk in Sai Nagar, Anantapur.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openModal()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#E94B1C] hover:bg-[#A83218] text-white shadow-md transition shrink-0 cursor-pointer border-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Doctor Consultation</span>
          </button>
        </div>

        {/* Pinterest Style Filter Chips Bar */}
        <div className="pinterest-chips-scroll mb-8">
          {chips.map((chip) => (
            <button
              key={chip.id}
              type="button"
              onClick={() => setActiveCategory(chip.id)}
              className={`pinterest-chip ${activeCategory === chip.id ? "active" : ""}`}
            >
              <span>{chip.label}</span>
            </button>
          ))}
        </div>

        {/* Masonry Pinboard Grid */}
        <div className="pinterest-masonry-grid">
          {filteredPins.map((pin) => (
            <div key={pin.id} className="pinterest-pin group">
              
              {/* Media Card with Floating Status Pill & Pinterest Hover Save Button */}
              <div className={`pin-media-box ${pin.aspect}`}>
                <img
                  src={pin.image}
                  alt={pin.title}
                  loading="lazy"
                />

                {/* Floating Status Pill */}
                <div className="pin-status-badge">
                  <span className={`pin-status-dot ${pin.badgeDot === "red" ? "red" : ""}`} />
                  <span>{pin.badge}</span>
                </div>

                {/* Hover Save / Fast Action Overlay (Pinterest Signature Pattern) */}
                <div className="pin-hover-action-bar">
                  {pin.actionLink?.startsWith("/appointment") ? (
                    <button
                      type="button"
                      onClick={() => {
                        const urlParams = new URLSearchParams(pin.actionLink.split("?")[1] || "");
                        openModal(urlParams.get("dept") || undefined);
                      }}
                      className="pin-save-btn cursor-pointer border-0"
                      title={pin.actionText}
                    >
                      <span>{pin.actionText}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <Link
                      to={pin.actionLink}
                      className="pin-save-btn"
                      title={pin.actionText}
                    >
                      <span>{pin.actionText}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Pin Body Content */}
              <div className="pin-body">
                <span className="pin-type-tag">{pin.subtitle}</span>
                <h3 className="pin-title">{pin.title}</h3>
                <p className="pin-description">{pin.desc}</p>

                {/* Bulleted Highlights */}
                {pin.features && pin.features.length > 0 && (
                  <ul className="pin-feature-list pt-1">
                    {pin.features.map((feat, idx) => (
                      <li key={idx} className="pin-feature-item">
                        <span className="pin-bullet-dot" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer Note and Link */}
                <div className="pin-footer">
                  <div className="pin-meta-note">
                    <Clock className="w-3.5 h-3.5 text-[#FF8A3D]" />
                    <span>{pin.meta}</span>
                  </div>

                  <Link to={pin.link} className="pin-btn-text">
                    <span>View</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default PinterestPinboard;
