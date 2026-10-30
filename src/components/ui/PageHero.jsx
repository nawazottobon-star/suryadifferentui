import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { ChevronRight, HeartPulse } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

export function PageHero({
  eyebrow = "SURYA HOSPITAL • ANANTAPUR",
  title,
  description,
  breadcrumbs = [],
  children,
  badge,
}) {
  return (
    <div className="relative bg-[#ECECE5] border-b border-[#D9E2EC] pt-36 sm:pt-40 md:pt-44 pb-14 sm:pb-18 md:pb-24 overflow-hidden">
      {/* Brand warm peach background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B2CEE2]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#3A4F99]/10 rounded-full blur-2xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5D6D82] mb-5">
          <Link to="/" className="hover:text-[#13233D] transition flex items-center gap-1 font-bold">
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label || idx}>
              <ChevronRight className="w-3.5 h-3.5 text-[#F26A21]" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-[#13233D] transition">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#13233D] font-bold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Content */}
        <AnimateIn animation="slide-left" className="max-w-4xl space-y-4 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#13233D] text-white shadow-xs">
              <HeartPulse className="w-3.5 h-3.5 text-white" />
              <span>{eyebrow}</span>
            </span>

            {badge && (
              <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#EEF2FB] text-[#3A4F99] border border-[#B2CEE2]">
                {badge}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C63D1B] tracking-tight leading-snug">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-base text-[#4A403B] leading-relaxed max-w-2xl pt-0.5 font-normal">
              {description}
            </p>
          )}

          {children && <div className="pt-6 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5">{children}</div>}
        </AnimateIn>
      </Container>

      {/* Gentle organic flowing wave curve in warm cream & soft peach */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg className="relative block w-full h-[36px] sm:h-[50px] md:h-[65px]" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pageRibbon1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EEF2FB" stopOpacity="0.5" />
              <stop offset="40%" stopColor="#D9E2EC" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EEF2FB" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="pageRibbon2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EEF2FB" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#EEF2FB" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#EEF2FB" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path d="M0,100 C340,150 680,80 1020,110 C1220,128 1360,75 1440,55 L1440,180 L0,180 Z" fill="url(#pageRibbon1)" />
          <path d="M0,125 C300,85 620,150 960,115 C1180,92 1340,135 1440,105 L1440,180 L0,180 Z" fill="url(#pageRibbon2)" />
          <path d="M0,140 C320,165 620,125 940,145 C1160,158 1320,120 1440,110 L1440,180 L0,180 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
}

export default PageHero;
