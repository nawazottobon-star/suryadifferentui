import React from "react";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import {
  Microscope,
  FileText,
  Activity,
  Scan,
  Pill,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-react";

export function DiagnosticsSection({ onBookTest, onPharmacyInquiry }) {
  const diagnosticServices = [
    {
      title: "Diagnostic Laboratory",
      description: "Routine and specialized clinical pathology and biochemistry tests.",
      icon: Microscope,
    },
    {
      title: "Ultrasound Sonography",
      description: "High-resolution non-invasive imaging for abdomen, pelvis, and soft tissue.",
      icon: Activity,
    },
    {
      title: "Digital X-Ray",
      description: "Fast digital radiography for chest, trauma, and orthopedic evaluations.",
      icon: Scan,
    },
    {
      title: "ECG (Electrocardiogram)",
      description: "Accurate cardiac rhythm and electrical activity monitoring.",
      icon: FileText,
    },
  ];

  return (
    <section id="diagnostics" className="py-16 sm:py-24 bg-white border-t border-surya-slate-100">
      <Container>
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-700 bg-surya-teal-50 px-3 py-1 rounded-full">
            ON-PREMISE DIAGNOSTICS & SUPPORT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-surya-slate-900 mt-2">
            Diagnostics, Imaging & Pharmacy
          </h2>
          <p className="text-base text-surya-slate-600 mt-2 leading-relaxed">
            Fast, accurate test results and round-the-clock pharmacy support located directly within Surya Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: 4 Diagnostic Services in Clean Visual Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {diagnosticServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-5 rounded-2xl bg-surya-slate-50 border border-surya-slate-200/80 hover:border-surya-teal-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-surya-slate-200 flex items-center justify-center text-surya-teal-700 mb-3 shadow-subtle">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-surya-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-xs text-surya-slate-500 mt-1.5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-surya-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-surya-teal-700">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>In-House Facility</span>
                    </span>
                    <button
                      type="button"
                      onClick={onBookTest}
                      className="text-surya-navy-900 hover:text-surya-teal-700 flex items-center gap-1 font-medium transition"
                    >
                      Book Test
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: 24/7 In-House Pharmacy Highlight Card (5 cols) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl bg-gradient-to-br from-surya-navy-900 to-surya-navy-950 text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-surya-navy-800 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-surya-teal-500/20 text-surya-teal-400 flex items-center justify-center">
                    <Pill className="w-6 h-6" />
                  </div>
                  <Badge variant="teal" size="sm" dot>
                    24/7 OPEN
                  </Badge>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    In-House Pharmacy
                  </h3>
                  <p className="text-sm text-surya-slate-300 mt-2 leading-relaxed">
                    Reliable on-premise dispensing of genuine prescription medicines and emergency medical supplies whenever you need them.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 text-xs text-surya-slate-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-surya-teal-400 shrink-0" />
                    <span>Always open alongside emergency care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-surya-teal-400 shrink-0" />
                    <span>Verified, authentic pharmaceutical stock</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-surya-navy-800">
                <button
                  type="button"
                  onClick={onPharmacyInquiry}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-surya-teal-600 hover:bg-surya-teal-500 text-white transition text-center shadow-sm"
                >
                  Contact Pharmacy Desk
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
