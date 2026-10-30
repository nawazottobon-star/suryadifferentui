"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";

export function GenerateButton({
  hue = 220,
  isGenerating: controlledIsGenerating,
  className = "",
  children,
  onClick,
  icon: Icon,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const isGenerating = controlledIsGenerating !== undefined ? controlledIsGenerating : isFocused;

  return (
    <div className="relative inline-block group">
      <style>{`
        .gen-btn {
          --border-radius: 9999px;
          --padding: 3px;
          --transition: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          --button-color: #13233D;
          --highlight-color-hue: ${hue}deg;

          user-select: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.62em 1.45em;
          font-family: "Plus Jakarta Sans", "Inter", sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          color: #ffffff;
          position: relative;

          background-color: var(--button-color);

          box-shadow:
            inset 0px 1px 1px rgba(255, 255, 255, 0.28),
            inset 0px 2px 2px rgba(255, 255, 255, 0.18),
            inset 0px 4px 6px rgba(255, 255, 255, 0.08),
            0px 2px 6px rgba(19, 35, 61, 0.12),
            0px 8px 24px -2px hsla(var(--highlight-color-hue), 85%, 58%, 0.32);

          border: solid 1px rgba(255, 255, 255, 0.2);
          border-radius: var(--border-radius);
          cursor: pointer;

          transition: box-shadow var(--transition), border var(--transition), background-color var(--transition), transform 0.2s ease;
        }
        
        .gen-btn::before {
          content: "";
          position: absolute;
          top: calc(0px - var(--padding));
          left: calc(0px - var(--padding));
          width: calc(100% + var(--padding) * 2);
          height: calc(100% + var(--padding) * 2);
          border-radius: calc(var(--border-radius) + var(--padding));
          pointer-events: none;
          background-image: linear-gradient(0deg, rgba(19,35,61,0.5), rgba(58,79,153,0.75));

          z-index: -1;
          transition: box-shadow var(--transition), filter var(--transition), opacity var(--transition);
          box-shadow: 0 -8px 8px -6px rgba(255,255,255,0) inset, 
            0 -16px 16px -8px rgba(0,0,0,0) inset,
            1px 1px 2px rgba(255,255,255,0.22), 
            2px 2px 4px rgba(58,79,153,0.28), 
            -1px -1px 2px rgba(0,0,0,0.15);
        }
        
        .gen-btn::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          pointer-events: none;
          background-image: linear-gradient(
            0deg,
            #fff,
            hsl(var(--highlight-color-hue), 100%, 75%),
            hsla(var(--highlight-color-hue), 100%, 70%, 50%),
            12%,
            transparent
          );
          background-position: 0 0;
          opacity: 0;
          transition: opacity var(--transition), filter var(--transition);
        }

        .gen-btn:hover {
          border: solid 1px hsla(var(--highlight-color-hue), 100%, 85%, 65%);
          background-color: #1A2F50;
          transform: translateY(-1.5px);
          box-shadow:
            inset 0px 1px 1px rgba(255, 255, 255, 0.38),
            inset 0px 2px 2px rgba(255, 255, 255, 0.22),
            0px 4px 14px rgba(19, 35, 61, 0.2),
            0px 14px 32px -2px hsla(var(--highlight-color-hue), 95%, 62%, 0.52);
        }

        .gen-btn:hover::before {
          box-shadow: 0 -8px 10px -6px rgba(255,255,255,0.75) inset,
            0 -16px 18px -8px hsla(var(--highlight-color-hue), 100%, 70%, 50%) inset,
            1px 1px 3px rgba(255,255,255,0.35), 
            2px 2px 8px hsla(var(--highlight-color-hue), 95%, 62%, 0.45);
        }

        .gen-btn:hover::after {
          opacity: 0.95;
          mask-image: linear-gradient(0deg, #fff, transparent);
        }

        .gen-btn:active {
          transform: translateY(0px) scale(0.97);
          border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 70%);
          background-color: hsla(var(--highlight-color-hue), 50%, 20%, 0.85);
        }

        .gen-btn-letter {
          position: relative;
          display: inline-block;
          animation: gen-letter-anim 2.4s ease-in-out infinite;
          transition: color var(--transition), text-shadow var(--transition);
        }

        @keyframes gen-letter-anim {
          0%, 100% {
            color: rgba(255,255,255,0.92);
            text-shadow: none;
          }
          50% {
            text-shadow: 0 0 8px rgba(255,255,255,0.85), 0 0 16px hsla(var(--highlight-color-hue), 100%, 75%, 0.65);
            color: #fff;
          }
        }
      `}</style>

      <button
        type="button"
        className={cn("gen-btn", className)}
        data-generating={isGenerating}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={(e) => {
          setIsFocused(true);
          onClick?.(e);
        }}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />}
        {typeof children === "string" ? (
          <span className="inline-flex">
            {children.split("").map((char, i) => (
              <span
                key={i}
                className="gen-btn-letter"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        ) : (
          children || <span>Book Appointment</span>
        )}
      </button>
    </div>
  );
}

export default GenerateButton;

