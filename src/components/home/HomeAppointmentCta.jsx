import React, { useState } from "react";
import { Calendar, Clock, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { AnimateIn } from "../ui/AnimateIn";

export function HomeAppointmentCta() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[#1A1D20] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/surya-hospital-building-hero.jpg"
          alt="Surya Hospital"
          className="w-full h-full object-cover object-center filter brightness-[0.18] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D20]/95 via-[#1A1D20]/90 to-[#1A1D20]/75" />
      </div>

      {/* Aurora ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E94B1C]/10 rounded-full blur-[150px] pointer-events-none animate-aurora" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C63D1B]/10 rounded-full blur-[120px] pointer-events-none animate-aurora" style={{ animationDelay: "4s" }} />

      {/* Top Wave */}
      <div className="organic-divider-top">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,32 C1280,24 1060,52 820,78 C580,105 320,100 0,70 Z" fill="#FFF0E6" />
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="organic-divider-bottom">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,70 C320,100 580,105 820,78 C1060,52 1280,24 1440,32 L1440,120 L0,120 Z" fill="#FFF9F3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Heading & Features */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <AnimateIn animation="slide-left">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF8A3D]">
                <span>BOOK APPOINTMENT</span>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif-heading font-bold text-white tracking-tight leading-[1.1]">
                Take the First Step
                <br />
                Towards a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A3D] to-[#E94B1C]">
                  Healthier Tomorrow.
                </span>
              </h2>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={200}>
              <p className="text-base sm:text-lg text-white/85 max-w-xl leading-relaxed font-normal">
                Get expert medical consultation at your convenient time. Fill in the form or call our hospital desk directly.
              </p>
            </AnimateIn>

            {/* Feature badges */}
            <AnimateIn animation="fade-up" delay={300}>
              <div className="flex flex-wrap items-center gap-3 pt-3">
                {[
                  { icon: Calendar, label: "Quick & Easy Booking" },
                  { icon: Clock, label: "Flexible Time Slots" },
                  { icon: UserCheck, label: "Consult with Expert Doctors" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/8 backdrop-blur-md border border-white/12 text-xs text-white/90 font-medium hover:bg-white/15 hover:border-white/25 transition-all cursor-default"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#FF8A3D]" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-5">
            <AnimateIn animation="slide-right" delay={200}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/20 text-[#262626]">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FFF0E6] to-[#FFE3D0] text-[#E94B1C] rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#14233C]">
                      Appointment Request Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#756860] max-w-xs mx-auto">
                      Our hospital desk will call you back shortly at <strong>{formData.phone}</strong> to confirm your doctor visiting slot.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-[#C63D1B] bg-[#FFF0E6] hover:bg-[#FFE4D3] transition-colors"
                    >
                      Book Another Slot
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#14233C] mb-1.5">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FFF9F3] border border-[#EFE5DC] text-sm text-[#262626] placeholder-[#756860]/40 focus:outline-none focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#14233C] mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FFF9F3] border border-[#EFE5DC] text-sm text-[#262626] placeholder-[#756860]/40 focus:outline-none focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#14233C] mb-1.5">Select Department</label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FFF9F3] border border-[#EFE5DC] text-sm text-[#262626] focus:outline-none focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 transition-all"
                        >
                          <option value="">Choose department</option>
                          <option value="general-medicine">General Medicine (Physician)</option>
                          <option value="general-surgery">General & Laparoscopic Surgery</option>
                          <option value="orthopedics">Orthopedics & Joint Care</option>
                          <option value="emergency">24/7 Emergency & Casualty</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#14233C] mb-1.5">Preferred Date</label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FFF9F3] border border-[#EFE5DC] text-sm text-[#262626] focus:outline-none focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="animate-cta-blink w-full py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(233,75,28,0.35)]"
                      >
                        <span>Book Appointment</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAppointmentCta;
