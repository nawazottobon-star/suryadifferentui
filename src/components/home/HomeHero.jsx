import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroBuildingVideo } from "./HeroBuildingVideo";
import HeroTrustStrip from "./HeroTrustStrip";
import { useAppointmentModal } from "../../context/AppointmentModalContext";

export function HomeHero() {
  const { openModal } = useAppointmentModal();

  const scrollToFounder = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById("founder-story");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden pt-28 lg:pt-32 pb-10 lg:pb-12 border-b border-amber-900/10"
      style={{
        background:
          "radial-gradient(ellipse 95% 85% at 75% 45%, #EADBCA 0%, #F1E6D8 28%, #F7EFE6 58%, #FDFBF8 100%)",
      }}
    >
      {/* ── AMBIENT WARM ARCHITECTURAL CANVAS GLOWS ── */}
      <div className="absolute top-0 right-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-orange-200/20 via-amber-200/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-amber-100/25 blur-3xl pointer-events-none" />

      {/* ── MAIN HERO CONTAINER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[560px]">
          {/* Left Column (5 Cols on Desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <HeroContent
              onOpenAppointment={() => openModal()}
              onScrollToFounder={scrollToFounder}
            />
          </div>

          {/* Right Column (7 Cols on Desktop) - Seamless 3D Architectural Building Video */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center">
            <HeroBuildingVideo />
          </div>
        </div>
      </div>

      {/* ── INTEGRATED HERO TRUST STRIP ── */}
      <div className="mt-8 relative z-20">
        <HeroTrustStrip />
      </div>
    </section>
  );
}

export default HomeHero;
