import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Calendar, PhoneCall, Clock, MapPin } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function AppointmentCtaSection({ onBookAppointment, onContactHospital }) {
  return (
    <section id="appointment-cta" className="py-16 sm:py-20 bg-surya-slate-100 border-t border-surya-slate-200">
      <Container>
        <div className="bg-gradient-to-br from-surya-navy-900 to-surya-navy-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto border border-surya-navy-800">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-surya-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-surya-teal-900/60 text-surya-teal-300 border border-surya-teal-700/50">
              <Clock className="w-3.5 h-3.5" />
              24/7 Emergency Care • Outpatient OPD
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Need care? We're here to help.
            </h2>

            <p className="text-base sm:text-lg text-surya-slate-300 leading-relaxed">
              Connect with our medical team in Anantapur for expert consultations, surgical evaluations, or immediate emergency support.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="accent"
                size="lg"
                icon={Calendar}
                onClick={onBookAppointment}
                className="w-full sm:w-auto shadow-md"
              >
                Book an Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={PhoneCall}
                onClick={onContactHospital}
                className="w-full sm:w-auto bg-surya-navy-900/90 border-surya-navy-700 text-white hover:bg-surya-navy-800"
              >
                Contact Hospital
              </Button>
            </div>

            <div className="pt-6 border-t border-surya-navy-800/80 text-xs text-surya-slate-400 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-surya-teal-400" />
              <span>Surya Hospital • Serving {HOSPITAL_INFO.region}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
