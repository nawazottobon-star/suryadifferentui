import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { MapPin, Phone, Clock, ExternalLink, Mail, ArrowRight } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";

export function HomeContactPreview() {
  return (
    <section className="py-16 bg-white border-b border-[#E9D7C7]">
      <Container>
        <div className="bg-[#FFF9F3] rounded-2xl border border-[#E9D7C7] p-4 sm:p-8 md:p-10 shadow-2xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Contact Details (7 cols) */}
            <AnimateIn animation="slide-left" className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#F8E6DC] text-[#C65332] border border-[#E9D7C7]">
                  LOCATION & CONTACT
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D32] tracking-tight">
                  Find Us in Sai Nagar, Anantapur
                </h2>
                <p className="text-xs sm:text-sm text-[#62666D] leading-relaxed">
                  Located right behind Ambedkar Bhavan on 9th Cross Road. Our reception team is always available to help you consult a doctor, check visiting hours, or assist with inpatient admissions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-[#E9D7C7] space-y-1">
                  <div className="flex items-center gap-2 text-[#292D32] font-bold">
                    <MapPin className="w-4 h-4 text-[#C65332] shrink-0" />
                    <span>Hospital Location</span>
                  </div>
                  <p className="text-[#62666D] leading-relaxed pt-1">
                    {HOSPITAL_INFO.fullAddress}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E9D7C7] space-y-1">
                  <div className="flex items-center gap-2 text-[#292D32] font-bold">
                    <Phone className="w-4 h-4 text-[#C65332] shrink-0" />
                    <span>Call Our Desk</span>
                  </div>
                  <div className="pt-1 space-y-1 text-[#62666D]">
                    <div>
                      Emergency & Appointments:{" "}
                      <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="font-bold text-[#292D32] hover:text-[#C65332]">
                        {HOSPITAL_INFO.phone}
                      </a>
                    </div>
                    <div className="text-[11px] text-[#8A929C]">
                      Doctor Visits, Admissions & Reports
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E9D7C7] space-y-1">
                  <div className="flex items-center gap-2 text-[#292D32] font-bold">
                    <Clock className="w-4 h-4 text-[#C65332] shrink-0" />
                    <span>Visiting Timings</span>
                  </div>
                  <p className="text-[#62666D] leading-relaxed pt-1">
                    Emergency & Casualty: <strong>Open 24/7</strong>
                    <br />
                    Doctor Clinic: 9:00 AM – 2:00 PM & 5:00 PM – 9:00 PM
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="p-4 rounded-xl bg-white border border-[#E9D7C7] space-y-1 block hover:border-[#C65332] hover:shadow-xs transition group cursor-pointer"
                >
                  <div className="flex items-center justify-between text-[#292D32] font-bold">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#C65332] shrink-0" />
                      <span>Send a Message</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C65332] group-hover:translate-x-1 transition" />
                  </div>
                  <p className="text-[#62666D] leading-relaxed pt-1">
                    Have a general question? Fill our short contact form and we will call you back.
                  </p>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="text-xs font-bold bg-[#C65332] hover:bg-[#A84328] text-white shadow-sm w-full sm:w-auto justify-center"
                  >
                    Contact Us
                  </Button>
                </Link>

                <a
                  href={HOSPITAL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#292D32] hover:bg-[#1E2227] transition shadow-sm w-full sm:w-auto text-center"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#E8D5C0] shrink-0" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />
                </a>
              </div>
            </AnimateIn>

            {/* Right Map Embed Preview (5 cols) */}
            <AnimateIn animation="slide-right" delay={150} className="lg:col-span-5 h-72 sm:h-80 rounded-xl overflow-hidden border border-[#E9D7C7] relative bg-[#E8D5C0]/40 shadow-2xs">
              <iframe
                title="Surya Hospital Sai Nagar Anantapur Location Map"
                src={HOSPITAL_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
