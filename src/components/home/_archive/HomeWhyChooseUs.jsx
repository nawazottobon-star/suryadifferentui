import React from "react";
import { Container } from "../ui/Container";
import { ShieldCheck, HeartHandshake, UserCheck, Clock, MapPin, CheckCircle } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";

const iconList = [HeartHandshake, MapPin, UserCheck, Clock, ShieldCheck];

export function HomeWhyChooseUs() {
  return (
    <section className="py-18 md:py-24 bg-[#FCFAF7] border-b border-[#DED7D7]">
      <Container>
        {/* Header */}
        <AnimateIn animation="fade-down" className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#E8D8D9] text-[#641D2D] border border-[#DED7D7]">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#29252A] tracking-tight">
            Healthcare Built on Trust, Respect & Clarity
          </h2>
          <p className="text-base text-[#6F686B] leading-relaxed font-normal">
            We believe good medical care starts with listening. Here is why families in Anantapur count on Surya Hospital for their health.
          </p>
        </AnimateIn>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOSPITAL_INFO.values.map((val, idx) => {
            const Icon = iconList[idx % iconList.length];
            const anim = idx % 2 === 0 ? "slide-left" : "slide-right";
            return (
              <AnimateIn
                key={val.title}
                animation={anim}
                delay={(idx % 3) * 120}
                className="bg-white p-6 rounded-2xl border border-[#DED7D7] shadow-2xs hover:shadow-card hover:border-[#641D2D] transition flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E8D8D9] text-[#641D2D] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 text-left">
                  <h3 className="text-base font-bold text-[#29252A]">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F686B] leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              </AnimateIn>
            );
          })}

          {/* Additional verified value card */}
          <AnimateIn
            animation="pop"
            delay={240}
            className="bg-white p-6 rounded-2xl border border-[#DED7D7] shadow-2xs hover:shadow-card hover:border-[#641D2D] transition flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-[#E8D8D9] text-[#641D2D] flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-left">
              <h3 className="text-base font-bold text-[#29252A]">
                24/7 Pharmacy & Inpatient Care
              </h3>
              <p className="text-xs sm:text-sm text-[#6F686B] leading-relaxed font-normal">
                Save time with an on-site 24/7 medical pharmacy and comfortable inpatient recovery rooms inside the hospital campus.
              </p>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
