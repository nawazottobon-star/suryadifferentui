import React from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left", // 'left' | 'center'
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-8 sm:mb-12 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#3A4F99] bg-[#EEF2FB] border border-[#B2CEE2] px-3 py-1 rounded-full mb-3 shadow-2xs">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#13233D] leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#5D6D82] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
