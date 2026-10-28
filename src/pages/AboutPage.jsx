import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Award,
  Building2,
  Activity,
  Heart,
  Clock,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";
import { AnimateIn } from "../components/ui/AnimateIn";

export function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="ABOUT SURYA HOSPITAL"
        title="Comprehensive Healthcare with Compassionate Care"
        description="Serving the families of Sai Nagar, Anantapur, and neighboring regions with dedicated outpatient consultations, sterile surgical procedures, and 24/7 emergency response."
        breadcrumbs={[{ label: "About Us" }]}
        badge="Sai Nagar, Anantapur"
      >
        <Link to="/doctors">
          <Button variant="primary" size="sm" icon={Stethoscope} className="bg-[#E94B1C] hover:bg-[#A83218] text-white">
            Meet Doctors
          </Button>
        </Link>
        <Link to="/specialities">
          <Button variant="secondary" size="sm" className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6]">
            Clinical Specialities
          </Button>
        </Link>
      </PageHero>

      {/* Hospital Overview */}
      <section className="py-12 md:py-16 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#E9D8CE] shadow-md bg-white p-2.5">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FFF0E6]">
                  <img
                    src="/images/surya-reception.jpg"
                    alt="Surya Hospital Lobby and Reception in Sai Nagar Anantapur"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-wide">
                    Surya Hospital Campus • Sai Nagar, Anantapur
                  </div>
                </div>
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]">
                ABOUT SURYA HOSPITAL
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#C63D1B] tracking-tight leading-tight">
                Quality Healthcare Under One Roof
              </h2>
              <p className="text-sm sm:text-base text-[#262626] leading-relaxed">
                Located in Sai Nagar, Anantapur, Surya Hospital offers trusted comprehensive care, advanced surgical suites, modern diagnostics, and round-the-clock emergency casualty.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-[13px] text-[#262626] font-semibold">
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#E9D8CE] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                  <span>24/7 Emergency Casualty</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#E9D8CE] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                  <span>Modern Modular OTs</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#E9D8CE] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                  <span>Monitored Recovery Beds</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#E9D8CE] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                  <span>24/7 In-House Pharmacy</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Medical Leadership & Founder Section - Clean Card */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#F0E2D9]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FFF9F3] rounded-3xl border border-[#E9D8CE] p-6 sm:p-8 shadow-xs text-[#262626]">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                {/* Doctor Portrait */}
                <div className="relative w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden bg-[#FFF0E6] shrink-0 border-2 border-[#E9D8CE] shadow-xs">
                  <img
                    src="/images/dr-d-surya-prakash.png"
                    alt="Dr. D. Surya Prakash, M.D. Internal Medicine - Managing Director & Consultant Physician"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Leadership Bio */}
                <div className="space-y-3 text-left flex-1">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE] mb-1">
                      Founder &amp; Managing Director
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#C63D1B] tracking-tight">
                      Dr. D. Surya Prakash
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#E94B1C]">
                      M.D. Internal Medicine (Manipal) • Consultant Physician
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A403B] leading-relaxed">
                    With over 15 years of clinical practice, Dr. Surya Prakash oversees patient care standards, chronic metabolic care, diabetes, and inpatient treatment with a personalized, holistic approach.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#F0E2D9] text-xs">
                    <span className="text-[#756860]">
                      <strong className="text-[#262626]">OPD Timings:</strong> Mon – Sat: 09:30 AM – 01:30 PM &amp; 05:00 PM – 08:30 PM
                    </span>
                    <Link to="/doctors">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="text-xs font-bold border-[#E9D8CE] bg-white text-[#C63D1B] hover:bg-[#FFF0E6] rounded-full px-4 py-1.5"
                      >
                        View Doctor Directory
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values - 3 Quick Pillars */}
      <section className="py-12 sm:py-16 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]">
                OUR CORE VALUES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#C63D1B] tracking-tight">
                Patient-First Clinical Care
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {HOSPITAL_INFO.values.map((val) => (
                <div
                  key={val.title}
                  className="bg-white p-5 rounded-2xl border border-[#E9D8CE] shadow-2xs text-left space-y-2 hover:border-[#E94B1C] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center border border-[#E9D8CE]">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#C63D1B]">{val.title}</h3>
                  <p className="text-xs text-[#756860] leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Cross-page Navigation CTA */}
      <section className="py-14 bg-white border-b border-[#F0E2D9]">
        <Container>
          <AnimateIn animation="pop" delay={100} className="p-8 sm:p-12 rounded-3xl bg-[#FFF0E6] border border-[#E9D8CE] text-[#262626] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-[#C63D1B]">
                Have questions about our doctors or departments?
              </h3>
              <p className="text-xs sm:text-sm text-[#756860] font-normal">
                Explore our full specialist roster or contact our reception desk directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full md:w-auto">
              <Link to="/doctors" className="w-full sm:w-auto">
                <Button variant="primary" size="md" className="w-full sm:w-auto font-bold text-xs bg-[#E94B1C] hover:bg-[#A83218] text-white rounded-full">
                  View Doctor Directory
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="md" className="w-full sm:w-auto font-bold text-xs text-[#C63D1B] border-[#E9D8CE] hover:bg-[#FFF0E6] rounded-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </div>
  );
}
export default AboutPage;
