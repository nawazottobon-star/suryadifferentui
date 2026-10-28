import React from "react";
import { Container } from "../ui/Container";
import { AlertCircle, Calendar, Pill, Microscope, ArrowUpRight } from "lucide-react";

export function QuickAccessStrip({ onSelectAction }) {
  const items = [
    {
      id: "emergency",
      icon: AlertCircle,
      title: "24/7 Emergency Care",
      subtitle: "Immediate trauma & critical response",
      isEmergency: true,
      action: "emergency",
    },
    {
      id: "appointment",
      icon: Calendar,
      title: "Book Consultation",
      subtitle: "Doctor OPD & surgical assessment",
      action: "appointment",
    },
    {
      id: "pharmacy",
      icon: Pill,
      title: "In-House Pharmacy",
      subtitle: "24/7 genuine prescription medicines",
      action: "pharmacy",
    },
    {
      id: "diagnostics",
      icon: Microscope,
      title: "Diagnostics & Lab",
      subtitle: "X-ray, ultrasound, ECG & clinical lab",
      action: "diagnostics",
    },
  ];

  return (
    <div className="relative z-20 -mt-6 sm:-mt-8 mb-16">
      <Container>
        <div className="bg-white rounded-2xl shadow-xl border border-surya-slate-200/90 p-2 sm:p-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-1.5 divide-y sm:divide-y-0 lg:divide-x divide-surya-slate-100">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectAction && onSelectAction(item.action)}
                  className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 group ${
                    item.isEmergency
                      ? "hover:bg-surya-emergency-50/70"
                      : "hover:bg-surya-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                        item.isEmergency
                          ? "bg-surya-emergency-100 text-surya-emergency-700"
                          : "bg-surya-teal-50 text-surya-teal-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-surya-slate-900 truncate flex items-center gap-1.5">
                        {item.title}
                        {item.isEmergency && (
                          <span className="w-1.5 h-1.5 rounded-full bg-surya-emergency-600 animate-pulse" />
                        )}
                      </div>
                      <div className="text-xs text-surya-slate-500 truncate mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-surya-slate-400 group-hover:text-surya-slate-700 shrink-0 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
