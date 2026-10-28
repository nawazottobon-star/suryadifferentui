import React from "react";
import { Container } from "../ui/Container";
import { Ambulance, Stethoscope, Building2, HeartHandshake } from "lucide-react";

export function HomeTrustStrip() {
  const trustItems = [
    {
      title: "24/7 Emergency Care",
      desc: "Immediate assistance when you need it.",
      icon: Ambulance,
    },
    {
      title: "Experienced Doctors",
      desc: "Skilled and trusted medical professionals.",
      icon: Stethoscope,
    },
    {
      title: "Modern Facilities",
      desc: "Advanced equipment and comfortable care.",
      icon: Building2,
    },
    {
      title: "Patient-First Approach",
      desc: "Compassionate care for every patient.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="w-full bg-[#FFF8F2] border-b border-[#F0D9CB]" aria-label="Hospital Trust Indicators">
      <Container className="py-3.5 sm:py-4">
        {/* Compact trust container */}
        <div className="w-full bg-white rounded-2xl border border-[#F0D9CB] shadow-xs px-3.5 py-3.5 sm:px-5 sm:py-4 lg:py-4.5 lg:px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-[#F0D9CB]">
            {trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 px-1 sm:px-2 lg:px-4 xl:px-5 first:pl-1 lg:first:pl-2 last:pr-1 lg:last:pr-2"
                >
                  {/* Pale-peach circular icon container */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FCECE2] border border-[#F0D9CB] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#C65332]" strokeWidth={2} />
                  </div>

                  {/* Heading & description */}
                  <div className="min-w-0">
                    <h3 className="text-[14px] sm:text-[15px] lg:text-[15.5px] font-semibold text-[#252B33] tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11.5px] sm:text-[12px] lg:text-[12.5px] text-[#59616B] leading-tight sm:leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeTrustStrip;
