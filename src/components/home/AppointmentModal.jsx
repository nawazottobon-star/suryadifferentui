import React, { useState, useEffect } from "react";
import {
  X,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Phone,
  User,
  Clock,
  FileText,
  MessageCircle,
  Stethoscope,
} from "lucide-react";

export function AppointmentModal({ isOpen, onClose, defaultDepartment = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: defaultDepartment || "General Medicine (Physician)",
    date: "",
    timeSlot: "Morning (09:30 AM – 01:30 PM)",
    note: "",
  });

  // Update department if prop changes
  useEffect(() => {
    if (defaultDepartment) {
      setFormData((prev) => ({ ...prev, department: defaultDepartment }));
    }
  }, [defaultDepartment]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      department: "General Medicine (Physician)",
      date: "",
      timeSlot: "Morning (09:30 AM – 01:30 PM)",
      note: "",
    });
    onClose();
  };

  // WhatsApp quick confirmation link
  const whatsappUrl = `https://wa.me/918500904999?text=${encodeURIComponent(
    `Hello Surya Hospital, I would like to confirm my doctor consultation for ${formData.name || "Patient"}. Phone: ${formData.phone}, Department: ${formData.department}, Date: ${formData.date || "Next available"}.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-[#0a121e]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-[#D9E2EC] overflow-hidden relative animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#14233C] via-[#1A2E4C] to-[#14233C] text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#E94B1C] to-[#C63D1B] flex items-center justify-center text-white shadow-md shadow-[#E94B1C]/30 shrink-0">
              <Calendar className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black tracking-tight text-white leading-tight">
                Book Doctor Appointment
              </h3>
              <p className="text-xs text-white/70 font-medium">
                Surya Hospital • Sai Nagar, Anantapur
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 24/7 Casualty Notice */}
        <div className="bg-[#FFF5EC] border-b border-[#F5D8C3] py-2.5 px-5 sm:px-6 flex items-center justify-between text-xs text-[#7A3E1D] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Need immediate casualty or emergency help?</span>
          </div>
          <a
            href="tel:+918500904999"
            className="font-black text-[#E94B1C] hover:underline shrink-0 ml-2"
          >
            Call: +91 85009 04999
          </a>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-[#13233D] tracking-tight">
                  Appointment Request Sent!
                </h4>
                <p className="text-xs font-bold text-[#E94B1C] mt-1 uppercase tracking-wider">
                  Token ID: #{Math.floor(1000 + Math.random() * 9000)}
                </p>
              </div>

              <div className="bg-[#ECECE5] border border-[#E8EFF5] rounded-2xl p-4 text-left space-y-2 max-w-sm mx-auto text-xs text-[#5A5049]">
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Patient:</span>
                  <span className="font-bold text-[#13233D]">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Phone:</span>
                  <span className="font-bold text-[#13233D]">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Department:</span>
                  <span className="font-bold text-[#13233D]">{formData.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Preferred Slot:</span>
                  <span className="font-bold text-[#13233D]">
                    {formData.date ? `${formData.date} • ` : ""}
                    {formData.timeSlot.split(" ")[0]}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#6A6059] max-w-sm mx-auto leading-relaxed">
                Our hospital front desk team will call you within 15 minutes to confirm your appointment time.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-black text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-[#13233D] bg-[#EEF2FB] hover:bg-[#FFE0D0] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-[#13233D] mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#E94B1C]" />
                  <span>Patient Full Name <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-[#D9E2EC] bg-[#FFFDFC] text-[#13233D] placeholder:text-[#A0938A] focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 outline-none transition font-medium"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-[#13233D] mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#E94B1C]" />
                  <span>Phone Number <span className="text-red-500">*</span></span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-[#8C7A70]">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      setFormData({ ...formData, phone: val });
                    }}
                    className="w-full pl-12 pr-4 py-3 text-sm rounded-xl border border-[#D9E2EC] bg-[#FFFDFC] text-[#13233D] placeholder:text-[#A0938A] focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 outline-none transition font-medium tracking-wide"
                  />
                </div>
              </div>

              {/* Department & Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#13233D] mb-1.5 flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-[#E94B1C]" />
                    <span>Department</span>
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl border border-[#D9E2EC] bg-[#FFFDFC] text-[#13233D] focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 outline-none transition font-medium"
                  >
                    <option value="General Medicine (Physician)">General Medicine (Physician)</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Gastroenterology">Gastroenterology</option>
                    <option value="Nephrology">Nephrology</option>
                    <option value="Nephrology & Dialysis">Nephrology &amp; Dialysis</option>
                    <option value="Orthopedic">Orthopedics &amp; Spine</option>
                    <option value="Orthopedics & Joint Replacement">Orthopedics &amp; Joint Care</option>
                    <option value="E.N.T.">E.N.T. (Ear, Nose, Throat)</option>
                    <option value="Pulmonology">Pulmonology &amp; Chest</option>
                    <option value="Pulmonology & Chest Medicine">Pulmonology &amp; Chest Medicine</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Medical Oncology">Medical Oncology</option>
                    <option value="Oncology">Medical Oncology</option>
                    <option value="Psychiatry">Psychiatry</option>
                    <option value="Urology">Urology</option>
                    <option value="General Surgery">General &amp; Laparoscopic Surgery</option>
                    <option value="General & Laparoscopic Surgery">General &amp; Laparoscopic Surgery</option>
                    <option value="Anesthesia & Intensivist">Anesthesia &amp; Critical Care</option>
                    <option value="Anesthesia & Critical Care">Anesthesia &amp; Critical Care</option>
                    <option value="Diagnostic Lab & Imaging">Diagnostics &amp; Lab</option>
                    <option value="Physiotherapy & Rehab">Physiotherapy &amp; Rehab</option>
                    <option value="24/7 Casualty & Emergency">24/7 Emergency Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#13233D] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E94B1C]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl border border-[#D9E2EC] bg-[#FFFDFC] text-[#13233D] focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 outline-none transition font-medium"
                  />
                </div>
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-xs font-bold text-[#13233D] mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E94B1C]" />
                  <span>Preferred Visiting Slot</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    "Morning (09:30 AM – 01:30 PM)",
                    "Evening (05:00 PM – 08:30 PM)",
                  ].map((slot) => {
                    const isSelected = formData.timeSlot === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                          isSelected
                            ? "border-[#E94B1C] bg-[#EEF2FB] text-[#E94B1C] shadow-2xs"
                            : "border-[#D9E2EC] bg-white text-[#5A5049] hover:bg-[#ECECE5]"
                        }`}
                      >
                        <div className="leading-tight">{slot.split(" ")[0]}</div>
                        <div className="text-[10px] font-semibold opacity-75 mt-0.5">
                          {slot.substring(slot.indexOf("("))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brief Health Concern (Optional) */}
              <div>
                <label className="block text-xs font-bold text-[#13233D] mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#E94B1C]" />
                  <span>Brief Health Issue / Symptoms <span className="text-[#8C7A70] font-normal">(Optional)</span></span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Fever for 2 days, knee pain, routine consultation..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D9E2EC] bg-[#FFFDFC] text-[#13233D] placeholder:text-[#A0938A] focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 outline-none transition resize-none font-medium"
                />
              </div>

              {/* Bottom Submit Action */}
              <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#E8EFF5]">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-full text-xs font-bold text-[#5A5049] hover:text-[#13233D] hover:bg-[#EEF2FB]/50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#E94B1C] via-[#F26A21] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] shadow-[0_8px_20px_rgba(233,75,28,0.3)] hover:shadow-[0_12px_28px_rgba(233,75,28,0.45)] hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Confirm Appointment</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;
