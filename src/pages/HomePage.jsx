import React, { useEffect } from "react";
import { HomeHero } from "../components/home/HomeHero";
import { FounderStorySection } from "../components/home/FounderStorySection";
import { ClinicalServicesBento } from "../components/home/ClinicalServicesBento";
import { SpecialtiesDoctorsPoster } from "../components/home/SpecialtiesDoctorsPoster";
import { TestimonialCarousel } from "../components/home/TestimonialCarousel";
import { InsuranceCashlessSection } from "../components/home/InsuranceCashlessSection";
import { HomeAppointmentCta } from "../components/home/HomeAppointmentCta";

export function HomePage() {
  useEffect(() => {
    document.title = "Surya Hospital | Sai Nagar, Anantapur | Comprehensive Healthcare";
  }, []);

  return (
    <div className="w-full bg-[#ECECE5]">
      {/* 1. Hero Section with Concise Founder Introduction & Building Video */}
      <HomeHero />

      {/* 1B. Dedicated Founder Story Section: "The Vision Behind Our Care" */}
      <FounderStorySection />

      {/* 2. Comprehensive Clinical Care Services & Diagnostics (Inline Expandable Bento) */}
      <ClinicalServicesBento />

      {/* 5. Complete 12 Specialties & 19 Doctors Section matching reference poster */}
      <SpecialtiesDoctorsPoster />

      {/* 6. Patient Stories & Testimonials 3-Card Carousel */}
      <TestimonialCarousel />

      {/* 7. Insurance & Cashless Facility Section (24 Partners Grid) */}
      <InsuranceCashlessSection />

      {/* 8. Take the First Step Appointment Booking CTA Section */}
      <HomeAppointmentCta />
    </div>
  );
}

export default HomePage;
