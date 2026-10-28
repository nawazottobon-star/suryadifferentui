import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";

export function HomeFeaturedDoctors() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFF9F3] text-[#1A1D20] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 12-Column Grid matching Mockup (4 cols Left Heading, 8 cols Right Doctor Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4 text-left">
            <AnimateIn animation="slide-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A84328]">
                <span className="w-2 h-2 rounded-full bg-[#A84328]" />
                <span>OUR DOCTORS</span>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={100}>
              <h2 className="text-4xl sm:text-5xl font-serif-heading font-bold text-[#1A1D20] tracking-tight leading-tight">
                Experienced
                <br />
                Doctors.
                <br />
                Real Care. <span className="inline-block w-8 h-1 bg-[#A84328] align-middle ml-1 rounded-full" />
              </h2>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={200}>
              <p className="text-sm sm:text-base text-[#62666D] leading-relaxed font-normal">
                Meet our team of highly qualified and experienced medical specialists committed to your health and well-being.
              </p>
            </AnimateIn>

            <AnimateIn animation="pop" delay={300} className="pt-2">
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#C85235] to-[#A84328] hover:from-[#A84328] hover:to-[#8F371F] shadow-md transition-all active:scale-95"
              >
                <span>View All Doctors</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateIn>
          </div>

          {/* Featured Doctor Cards Grid (8 cols on lg screens, 4 columns of cards) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOSPITAL_INFO.doctors.slice(0, 4).map((doc, idx) => (
              <AnimateIn
                key={doc.id}
                animation="fade-up"
                delay={idx * 100}
                className="bg-white rounded-2xl border border-[#E2D9D0] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#A84328] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Doctor Headshot with soft warm studio background */}
                <div className="relative h-44 sm:h-48 md:h-52 bg-[#FFF9F3] overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = doc.fallbackImage || "/images/dr-d-surya-prakash.png";
                    }}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                </div>

                {/* Doctor Credentials */}
                <div className="p-3.5 text-left space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1A1D20] group-hover:text-[#A84328] transition-colors leading-snug">
                      {doc.name}
                    </h3>
                    <p className="text-[11px] text-[#A84328] font-semibold mt-0.5 leading-snug">
                      {doc.designation}
                    </p>
                    <p className="text-[10px] text-[#62666D] mt-0.5 leading-snug">
                      {doc.qualifications}
                    </p>
                  </div>

                  {/* Visiting Hours Pill */}
                  <div className="pt-2 border-t border-[#E2D9D0]/70 flex items-start gap-1.5 text-[10px] text-[#62666D]">
                    <Clock className="w-3.5 h-3.5 text-[#A84328] shrink-0 mt-0.5" />
                    <span className="leading-tight">{doc.opdTimings}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default HomeFeaturedDoctors;
