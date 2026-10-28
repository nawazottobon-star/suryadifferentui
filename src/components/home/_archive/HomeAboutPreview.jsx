import React from "react";
import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";
import { useAppointmentModal } from "../../context/AppointmentModalContext";

export function HomeAboutPreview() {
  const { openModal } = useAppointmentModal();
  // Six facility images matching the exact prompt specifications:
  // 1. Hospital building — front view
  // 2. Hospital building — alternate exterior view
  // 3. Hospital reception
  // 4. Operation theatre
  // 5. Patient room or inpatient ward
  // 6. Hospital corridor
  const facilityImages = [
    {
      title: "Hospital Building — Front View",
      src: "/images/modern-surya-hospital-facade.png",
      alt: "Surya Hospital building front exterior view with official signage in Sai Nagar, Anantapur",
    },
    {
      title: "Hospital Building — Alternate Exterior View",
      src: "/images/modern-surya-hospital-exterior.png",
      alt: "Surya Hospital modern campus facade and multi-level clinical infrastructure",
    },
    {
      title: "Hospital Reception",
      src: "/images/surya-reception.png",
      alt: "Surya Hospital reception, patient coordination desk and consultation waiting lobby",
    },
    {
      title: "Operation Theatre",
      src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=85",
      alt: "Sterile modular operation theatre equipped for surgical and laparoscopic procedures",
    },
    {
      title: "Patient Room & Inpatient Ward",
      src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=85",
      alt: "Comfortable inpatient room with medical monitoring and dedicated nursing support",
    },
    {
      title: "Hospital Corridor",
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
      alt: "Clean, well-lit hospital corridors and consultation wing at Surya Hospital",
    },
  ];

  return (
    <section
      id="about-us"
      className="relative py-20 sm:py-28 bg-[#FFF9F3] text-[#262626] overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 12% 15%, rgba(233, 75, 28, 0.05) 0%, transparent 48%), radial-gradient(circle at 88% 85%, rgba(242, 106, 33, 0.06) 0%, transparent 48%)",
      }}
    >
      {/* Decorative Subtle Warm Plus & Dot accents */}
      <div className="absolute top-10 left-6 sm:left-12 opacity-40 pointer-events-none select-none text-[#FF8A3D]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
        </div>
      </div>
      <div className="absolute top-20 right-8 sm:right-16 opacity-30 pointer-events-none select-none text-[#FF8A3D]">
        <svg className="w-8 h-8 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-6 sm:right-12 opacity-40 pointer-events-none select-none text-[#FF8A3D]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Introduction */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <AnimateIn animation="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#C63D1B] leading-tight">
              YOUR HEALTH, OUR COMMITMENT
            </h2>
          </AnimateIn>

          {/* Thin horizontal divider beneath heading */}
          <AnimateIn animation="fade-up" delay={100}>
            <div className="w-28 sm:w-36 h-[3px] bg-[#E94B1C] mx-auto mt-4 mb-5 rounded-full" />
          </AnimateIn>

          {/* About Us Description with emphasized phrases in primary orange */}
          <AnimateIn animation="fade-up" delay={150}>
            <p className="text-base sm:text-lg md:text-xl text-[#262626] font-normal leading-relaxed max-w-3xl mx-auto">
              At <strong className="font-bold text-[#E94B1C]">Surya Hospital</strong>, we deliver compassionate expert medical care across all major specialties. Our facility is equipped with <strong className="font-bold text-[#E94B1C]">modern infrastructure</strong> and a <strong className="font-bold text-[#E94B1C]">dedicated team</strong> to provide <strong className="font-bold text-[#E94B1C]">world-class treatment 24/7</strong>.
            </p>
          </AnimateIn>
        </div>

        {/* Hospital Facility Gallery (6 Images: 3 cols desktop, 2 cols tablet, 1-2 cols mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mb-16 sm:mb-20">
          {facilityImages.map((item, idx) => (
            <AnimateIn
              key={item.title}
              animation="fade-up"
              delay={Math.min(idx * 60, 360)}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white border border-[#E9D8CE] shadow-[0_4px_20px_rgba(233,75,28,0.04)] hover:shadow-[0_8px_30px_rgba(233,75,28,0.1)] hover:border-[#E94B1C] transition-all duration-300">
                <div className="relative aspect-[16/11] overflow-hidden bg-[#FFF0E6]/30">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-3.5 sm:p-4 text-center bg-white/95 backdrop-blur-xs">
                  <h3 className="text-sm sm:text-base font-bold text-[#C63D1B] tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Hospital Lead Doctor Profile Section */}
        <AnimateIn animation="fade-up" delay={200}>
          <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-10 border border-[#E9D8CE] shadow-[0_6px_25px_rgba(233,75,28,0.06)]">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10">
              
              {/* Doctor Portrait Container */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 border-4 border-[#FF8A3D] shadow-lg bg-[#FFF0E6]">
                <img
                  src="/images/dr-d-surya-prakash.png"
                  alt="Dr D.Surya Prakash Chowdary - Consultant Physician at Surya Hospital"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Doctor Details */}
              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE] mb-1">
                  Lead Physician & Director
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-[#C63D1B] tracking-tight leading-snug">
                  Dr D.Surya Prakash Chowdary
                </h3>

                <p className="text-base sm:text-lg font-bold text-[#262626]">
                  M.D Internal Medicine (Manipal)
                </p>

                <p className="text-sm sm:text-base font-semibold text-[#756860]">
                  Consultant Physician
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <button
                    type="button"
                    onClick={() => openModal("General Medicine")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] transition-colors shadow-sm cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consultation</span>
                  </button>

                  <a
                    href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#C63D1B] bg-[#FFF0E6] hover:bg-[#FFE4D3] border border-[#E9D8CE] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}

export default HomeAboutPreview;

