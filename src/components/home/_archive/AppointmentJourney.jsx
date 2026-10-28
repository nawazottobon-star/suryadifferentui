import React, { useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AppointmentJourney() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    department: "General Medicine",
    doctor: "First Available Senior Specialist",
    date: "",
    timeSlot: "Morning (09:00 AM - 01:00 PM)",
    patientName: "",
    patientPhone: "",
    note: "",
  });

  const [confirmed, setConfirmed] = useState(false);

  const departments = [
    "General Medicine",
    "General & Laparoscopic Surgery",
    "Orthopaedic Surgery",
    "Day-Care Surgeries",
    "Physiotherapy & Rehabilitation",
    "Diagnostic Lab & Imaging",
  ];

  const doctorsList = [
    "First Available Senior Department Specialist",
    "Department Lead Consultant (Planned OPD)",
    "Surgical Pre-Operative Assessment Team",
  ];

  const timeSlots = [
    "Morning (09:00 AM - 01:00 PM)",
    "Afternoon (02:00 PM - 05:00 PM)",
    "Evening (05:00 PM - 08:00 PM)",
  ];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleComplete = (e) => {
    e.preventDefault();
    if (!bookingData.patientName || !bookingData.patientPhone) return;
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setCurrentStep(1);
    setBookingData({
      department: "General Medicine",
      doctor: "First Available Senior Specialist",
      date: "",
      timeSlot: "Morning (09:00 AM - 01:00 PM)",
      patientName: "",
      patientPhone: "",
      note: "",
    });
  };

  return (
    <section id="appointment-journey" className="py-20 sm:py-32 bg-white border-t border-surya-slate-200/80">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-surya-teal-700 bg-surya-teal-50 px-3.5 py-1.5 rounded-full inline-block">
            INTERACTIVE PATIENT JOURNEY
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-surya-slate-900 leading-tight">
            Book an Appointment<span className="text-surya-teal-600">.</span>
          </h2>
          <p className="text-base text-surya-slate-600 leading-relaxed font-normal">
            A guided 4-step consultation request routed to the Surya Hospital front-desk coordination desk in Anantapur.
          </p>
        </div>

        {/* Stepper Card */}
        <div className="max-w-3xl mx-auto bg-surya-slate-50 rounded-3xl shadow-2xl border border-surya-slate-200/90 overflow-hidden">
          {/* Top Progress Tracker */}
          <div className="bg-surya-navy-950 p-5 sm:p-6 text-white border-b border-surya-navy-800">
            <div className="flex items-center justify-between">
              {[
                { num: 1, label: "01 Choose Department" },
                { num: 2, label: "02 Choose Doctor" },
                { num: 3, label: "03 Choose Date" },
                { num: 4, label: "04 Confirm" },
              ].map((stepItem) => {
                const isCompleted = stepItem.num < currentStep;
                const isCurrent = stepItem.num === currentStep;

                return (
                  <div key={stepItem.num} className="flex items-center gap-2 flex-1 justify-center first:justify-start last:justify-end">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isCompleted
                          ? "bg-surya-teal-500 text-surya-navy-950"
                          : isCurrent
                          ? "bg-white text-surya-navy-950 ring-4 ring-surya-teal-400/30"
                          : "bg-surya-navy-800 text-surya-slate-400"
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : stepItem.num}
                    </div>
                    <span className="hidden sm:inline text-xs font-semibold text-surya-slate-300">
                      {stepItem.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stepped Interactive Panel */}
          <div className="p-6 sm:p-10 min-h-[380px] flex flex-col justify-between">
            {confirmed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4 my-auto"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-surya-slate-900">
                  Appointment Inquiry Received
                </h3>
                <p className="text-sm text-surya-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{bookingData.patientName}</strong>. Your consultation request for <strong>{bookingData.department}</strong> on <strong>{bookingData.date || "Next Available OPD"}</strong> has been recorded. Our reception coordinator will contact you at <strong>{bookingData.patientPhone}</strong> to confirm token schedule.
                </p>
                <div className="pt-3">
                  <Button variant="primary" onClick={handleReset}>
                    Start Another Booking
                  </Button>
                </div>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                {/* Step 1: Choose Department */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-700 block">
                        STEP 01
                      </span>
                      <h3 className="text-2xl font-bold text-surya-slate-900 mt-0.5">
                        Choose Department
                      </h3>
                      <p className="text-xs text-surya-slate-500 mt-1">
                        Select the primary clinical department for your consultation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {departments.map((dept) => (
                        <button
                          key={dept}
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, department: dept })}
                          className={`p-4 rounded-2xl text-left border text-sm font-semibold transition-all ${
                            bookingData.department === dept
                              ? "bg-surya-teal-50 border-surya-teal-500 text-surya-navy-950 ring-2 ring-surya-teal-500/20"
                              : "bg-white border-surya-slate-200 text-surya-slate-700 hover:border-surya-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{dept}</span>
                            {bookingData.department === dept && (
                              <CheckCircle2 className="w-4 h-4 text-surya-teal-600 shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Choose Doctor */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-700 block">
                        STEP 02
                      </span>
                      <h3 className="text-2xl font-bold text-surya-slate-900 mt-0.5">
                        Choose Doctor / Mode
                      </h3>
                      <p className="text-xs text-surya-slate-500 mt-1">
                        Selected: <strong className="text-surya-navy-900">{bookingData.department}</strong>
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      {doctorsList.map((docOption) => (
                        <button
                          key={docOption}
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, doctor: docOption })}
                          className={`w-full p-4 rounded-2xl text-left border text-sm font-semibold transition-all ${
                            bookingData.doctor === docOption
                              ? "bg-surya-teal-50 border-surya-teal-500 text-surya-navy-950 ring-2 ring-surya-teal-500/20"
                              : "bg-white border-surya-slate-200 text-surya-slate-700 hover:border-surya-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{docOption}</span>
                            {bookingData.doctor === docOption && (
                              <CheckCircle2 className="w-4 h-4 text-surya-teal-600 shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Choose Date */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-700 block">
                        STEP 03
                      </span>
                      <h3 className="text-2xl font-bold text-surya-slate-900 mt-0.5">
                        Choose Date & Slot
                      </h3>
                      <p className="text-xs text-surya-slate-500 mt-1">
                        Select preferred appointment day and time window.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div>
                        <label className="block text-xs font-semibold text-surya-slate-700 uppercase mb-1.5">
                          Consultation Date
                        </label>
                        <input
                          type="date"
                          value={bookingData.date}
                          onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border border-surya-slate-300 text-sm bg-white focus:border-surya-teal-600 focus:ring-2 focus:ring-surya-teal-500/20 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-surya-slate-700 uppercase mb-2">
                          Preferred Time Window
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setBookingData({ ...bookingData, timeSlot: slot })}
                              className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                                bookingData.timeSlot === slot
                                  ? "bg-surya-teal-50 border-surya-teal-500 text-surya-navy-950 ring-2 ring-surya-teal-500/20"
                                  : "bg-white border-surya-slate-200 text-surya-slate-700 hover:border-surya-slate-300"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Confirm */}
                {currentStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-surya-teal-700 block">
                        STEP 04
                      </span>
                      <h3 className="text-2xl font-bold text-surya-slate-900 mt-0.5">
                        Confirm Patient Details
                      </h3>
                      <p className="text-xs text-surya-slate-500 mt-1">
                        Enter patient information to receive confirmation.
                      </p>
                    </div>

                    <form onSubmit={handleComplete} id="booking-stepper-form" className="space-y-3 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-surya-slate-700 uppercase mb-1">
                            Patient Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Patient name"
                            value={bookingData.patientName}
                            onChange={(e) => setBookingData({ ...bookingData, patientName: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-surya-slate-300 text-sm bg-white focus:border-surya-teal-600 focus:ring-2 focus:ring-surya-teal-500/20 outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-surya-slate-700 uppercase mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="10-digit mobile number"
                            value={bookingData.patientPhone}
                            onChange={(e) => setBookingData({ ...bookingData, patientPhone: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-surya-slate-300 text-sm bg-white focus:border-surya-teal-600 focus:ring-2 focus:ring-surya-teal-500/20 outline-none"
                          />
                        </div>
                      </div>

                      {/* Summary Box */}
                      <div className="p-4 rounded-2xl bg-white border border-surya-slate-200 text-xs text-surya-slate-700 space-y-1.5 shadow-sm">
                        <div className="font-semibold text-surya-navy-900 border-b border-surya-slate-100 pb-1">
                          Consultation Summary:
                        </div>
                        <div><strong>Department:</strong> {bookingData.department}</div>
                        <div><strong>Doctor:</strong> {bookingData.doctor}</div>
                        <div><strong>Scheduled Window:</strong> {bookingData.date || "Next Available"} • {bookingData.timeSlot}</div>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            {/* Stepper Navigation Buttons */}
            {!confirmed && (
              <div className="pt-6 mt-6 border-t border-surya-slate-200 flex items-center justify-between">
                {currentStep > 1 ? (
                  <Button variant="ghost" size="md" icon={ArrowLeft} onClick={handleBack}>
                    Previous Step
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right" onClick={handleNext}>
                    Proceed to Step 0{currentStep + 1}
                  </Button>
                ) : (
                  <Button
                    variant="accent"
                    size="md"
                    type="submit"
                    form="booking-stepper-form"
                  >
                    Confirm Consultation Request
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
