import React from "react";
import { X, Phone, MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surya-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-surya-slate-200 overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-surya-navy-900 text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold tracking-tight">Contact Surya Hospital</h3>
            <p className="text-xs text-surya-slate-300">Anantapur & Surrounding Regions</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-surya-slate-400 hover:text-white hover:bg-surya-navy-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Emergency Line Card */}
          <div className="p-4 rounded-xl bg-surya-emergency-50 border border-surya-emergency-200">
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="emergency" size="sm" dot>24/7 Emergency Care</Badge>
            </div>
            <div className="text-base font-bold text-surya-slate-900 mt-2">
              {HOSPITAL_INFO.contactPlaceholders.emergencyHelpline}
            </div>
            <p className="text-xs text-surya-slate-600 mt-1">
              For trauma, cardiac emergencies, and critical patient triage.
            </p>
          </div>

          {/* General Reception */}
          <div className="p-4 rounded-xl bg-surya-slate-50 border border-surya-slate-200">
            <div className="flex items-center gap-2 mb-1.5">
              <Phone className="w-4 h-4 text-surya-teal-600" />
              <span className="text-xs font-semibold text-surya-slate-700">General OPD & Inquiries</span>
            </div>
            <div className="text-sm font-semibold text-surya-slate-900 mt-1">
              {HOSPITAL_INFO.contactPlaceholders.generalInquiryPhone}
            </div>
          </div>

          {/* Location */}
          <div className="p-4 rounded-xl bg-surya-slate-50 border border-surya-slate-200">
            <div className="flex items-center gap-2 mb-1.5">
              <MapPin className="w-4 h-4 text-surya-teal-600" />
              <span className="text-xs font-semibold text-surya-slate-700">Hospital Location</span>
            </div>
            <div className="text-sm text-surya-slate-800 mt-1">
              {HOSPITAL_INFO.region}
            </div>
            <p className="text-xs text-surya-slate-500 mt-1">
              {HOSPITAL_INFO.contactPlaceholders.address}
            </p>
          </div>

          <div className="pt-2">
            <Button variant="primary" fullWidth onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
