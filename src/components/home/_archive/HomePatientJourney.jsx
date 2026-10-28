import React from "react";
import { Container } from "../ui/Container";
import { Calendar, Search, UserCheck, CheckCircle2 } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";

const iconMap = [Search, UserCheck, Calendar, CheckCircle2];

export function HomePatientJourney() {
  return (
    <section className="py-18 md:py-24 bg-white border-b border-[#DED7D7]">
      <Container>
        {/* Section Header */}
        <AnimateIn animation="fade-down" className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#E8D8D9] text-[#641D2D] border border-[#DED7D7]">
            HOW VISITING WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#29252A] tracking-tight">
            Simple Steps to Get the Care You Need
          </h2>
          <p className="text-base text-[#6F686B] leading-relaxed font-normal">
            Visiting a hospital should feel simple and reassuring. Here is how our team helps you from your first enquiry to feeling better.
          </p>
        </AnimateIn>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOSPITAL_INFO.patientJourney.map((step, idx) => {
            const Icon = iconMap[idx] || CheckCircle2;
            return (
              <AnimateIn
                key={step.step}
                animation="fade-up"
                delay={idx * 130}
                className="relative p-6 rounded-2xl border border-[#DED7D7] bg-[#FCFAF7] shadow-2xs hover:shadow-card hover:border-[#641D2D] transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#641D2D]/30 tracking-tight">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#E8D8D9] text-[#641D2D] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#29252A] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#6F686B] leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DED7D7] text-xs font-bold text-[#641D2D]">
                  Step {idx + 1} of 4
                </div>
              </AnimateIn>
            );
          })}
        </div>

        {/* Backend transparency disclaimer */}
        <AnimateIn animation="pop" delay={300} className="mt-10 p-4 rounded-xl bg-[#FCFAF7] border border-[#DED7D7] text-center max-w-2xl mx-auto shadow-2xs">
          <p className="text-xs text-[#6F686B]">
            <strong className="text-[#29252A]">What to expect next:</strong> When you submit a booking request, our front desk team calls you back to confirm your doctor's visiting time and appointment number.
          </p>
        </AnimateIn>
      </Container>
    </section>
  );
}
