import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Stethoscope, Layers, FlaskConical, AlertTriangle, ArrowRight } from "lucide-react";

export function QuickAccessSection() {
  const cards = [
    {
      title: "Find a Doctor",
      desc: "Browse verified specialists across surgery, internal medicine, and emergency care.",
      icon: Stethoscope,
      path: "/doctors",
      badge: "Clinical Specialists",
      iconColor: "text-[#B96645]",
    },
    {
      title: "Medical Specialities",
      desc: "Explore departments from general surgery and orthopedics to daycare and rehab.",
      icon: Layers,
      path: "/specialities",
      badge: "Verified Departments",
      iconColor: "text-[#D98A62]",
    },
    {
      title: "Diagnostic Services",
      desc: "Pathology lab, ultrasound sonography, digital X-Ray, and 12-lead ECG under one roof.",
      icon: FlaskConical,
      path: "/diagnostics",
      badge: "In-House Lab & Imaging",
      iconColor: "text-[#B96645]",
    },
    {
      title: "Emergency Care",
      desc: "24/7 casualty triage, trauma stabilization, and critical care in Sai Nagar, Anantapur.",
      icon: AlertTriangle,
      path: "/emergency",
      badge: "24/7 Casualty",
      iconColor: "text-[#C65332]",
    },
  ];

  return (
    <section className="py-10 sm:py-12 bg-[#FFF8F2] border-b border-[#F0D9CB]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                to={card.path}
                className="group relative p-6 rounded-xl border border-[#F0D9CB] bg-white transition-all duration-200 shadow-2xs hover:shadow-card hover:border-[#D98A62] hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#FCECE2] border border-[#F0D9CB] group-hover:bg-[#F6D8C5] transition">
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FFF8F2] text-[#59616B] border border-[#F0D9CB]">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#252B33] group-hover:text-[#C65332] transition mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-[#59616B] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0D9CB]/60 flex items-center justify-between text-xs font-bold text-[#B96645] group-hover:text-[#C65332] transition">
                  <span>Explore Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
export default QuickAccessSection;
