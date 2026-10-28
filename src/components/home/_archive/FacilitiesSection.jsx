import React from "react";
import { Container } from "../ui/Container";
import { IMAGERY } from "../../constants/imagery";
import { Building2, Camera } from "lucide-react";

export function FacilitiesSection() {
  const facilities = IMAGERY.facilities;

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-surya-slate-50 border-t border-surya-slate-200/80">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-700 bg-surya-teal-50 px-3 py-1 rounded-full">
              HOSPITAL INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-surya-slate-900 mt-2">
              Designed for healing and safety
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-surya-slate-500 bg-white px-3 py-1.5 rounded-lg border border-surya-slate-200">
            <Camera className="w-3.5 h-3.5 text-surya-teal-600" />
            <span>Actual hospital facility gallery</span>
          </div>
        </div>

        {/* Premium Visual Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-surya-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="aspect-[4/3] overflow-hidden bg-surya-slate-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Caption Overlay */}
              <div className="p-4 sm:p-5 flex items-center justify-between bg-white border-t border-surya-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-surya-teal-700 block">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-surya-slate-900 mt-0.5">
                    {item.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-surya-slate-50 group-hover:bg-surya-teal-50 flex items-center justify-center text-surya-slate-400 group-hover:text-surya-teal-600 transition">
                  <Building2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
