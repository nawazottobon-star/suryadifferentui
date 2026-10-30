import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  disabled = false,
  type = "button",
  onClick,
  href,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3A4F99] disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer transform-gpu hover:-translate-y-0.5 active:translate-y-0 active:scale-97";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs rounded-full gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-full gap-2",
    lg: "px-7 py-3.5 text-base rounded-full gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#3A4F99] hover:bg-[#2A3B7A] text-white shadow-md hover:shadow-lg focus:ring-[#3A4F99]",
    navy:
      "bg-[#13233D] hover:bg-[#0D1728] text-white shadow-md hover:shadow-lg focus:ring-[#13233D]",
    slate:
      "bg-[#3A4F99] hover:bg-[#2A3B7A] text-white shadow-md hover:shadow-lg focus:ring-[#3A4F99]",
    ice:
      "bg-[#B2CEE2] hover:bg-[#9CBED8] text-[#13233D] font-bold shadow-xs focus:ring-[#3A4F99]",
    secondary:
      "bg-white border-2 border-[#B2CEE2] text-[#13233D] hover:bg-[#EEF2FB] hover:border-[#3A4F99] shadow-xs focus:ring-[#3A4F99]",
    outline:
      "border-2 border-[#3A4F99] bg-transparent text-[#3A4F99] hover:bg-[#3A4F99] hover:text-white focus:ring-[#3A4F99]",
    ghost:
      "text-[#13233D] hover:bg-[#EEF2FB] hover:text-[#3A4F99] focus:ring-[#3A4F99]",
    emergency:
      "bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-lg focus:ring-[#DC2626]",
    accent:
      "bg-[#3A4F99] hover:bg-[#13233D] text-white shadow-md hover:shadow-lg focus:ring-[#3A4F99]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${fullWidth ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
export default Button;
