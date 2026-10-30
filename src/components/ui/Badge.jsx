import React from "react";

export function Badge({
  children,
  variant = "default",
  size = "md",
  dot = false,
  className = "",
}) {
  const baseStyles = "inline-flex items-center font-medium rounded-full";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
    lg: "px-3.5 py-1.5 text-sm gap-2",
  };

  const variantStyles = {
    default: "bg-[#F0F6FA] text-[#13233D] border border-[#B2CEE2]",
    navy: "bg-[#13233D] text-white border border-[#13233D]",
    slate: "bg-[#EEF2FB] text-[#3A4F99] border border-[#B2CEE2]",
    ice: "bg-[#E5EFF6] text-[#13233D] border border-[#B2CEE2]",
    orange: "bg-[#FFF0E6] text-[#E94B1C] border border-[#FF8A3D]/30",
    teal: "bg-[#EEF2FB] text-[#3A4F99] border border-[#B2CEE2]",
    emergency: "bg-red-50 text-red-700 border border-red-200",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    outline: "bg-transparent text-[#5D6D82] border border-[#D9E2EC]",
  };

  const dotColor = {
    default: "bg-[#3A4F99]",
    navy: "bg-white",
    slate: "bg-[#3A4F99]",
    ice: "bg-[#3A4F99]",
    orange: "bg-[#E94B1C]",
    teal: "bg-[#3A4F99]",
    emergency: "bg-red-600 animate-pulse",
    success: "bg-emerald-500",
    outline: "bg-[#3A4F99]",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
        variantStyles[variant] || variantStyles.default
      } ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            dotColor[variant] || dotColor.default
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
