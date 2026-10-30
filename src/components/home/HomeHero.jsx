import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroBuildingVideo } from "./HeroBuildingVideo";
import HeroTrustStrip from "./HeroTrustStrip";
import { useAppointmentModal } from "../../context/AppointmentModalContext";

export function HomeHero() {
  const { openModal } = useAppointmentModal();

  return (
    <section
      className="relative w-full overflow-hidden pt-28 lg:pt-36 pb-8 lg:pb-10 border-b border-[#D9E2EC]"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 75% 35%, #DCE6F0 0%, #E6EFF6 30%, #EEF4F9 60%, #ECECE5 100%)",
      }}
    >
      {/* ── AMBIENT ARCHITECTURAL GLOWS ── */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#3A4F99]/12 via-[#B2CEE2]/18 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#B2CEE2]/15 blur-3xl pointer-events-none" />

      {/* ── MAIN HERO LAYOUT CONTAINER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[500px]">
          
          {/* Left Column: Minimal, Bold, Pure Text (5.5 Cols) */}
          <div className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1">
            <HeroContent onOpenAppointment={() => openModal()} />
          </div>

          {/* Right Column: Clean 3D Architectural Building Video (6.5 Cols) */}
          <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2 flex items-center justify-center">
            <div className="w-full relative">
              <HeroBuildingVideo />
            </div>
          </div>

        </div>
      </div>

      {/* ── INTEGRATED HERO TRUST STRIP ── */}
      <div className="mt-6 sm:mt-8 relative z-20">
        <HeroTrustStrip />
      </div>
    </section>
  );
}

export default HomeHero;
