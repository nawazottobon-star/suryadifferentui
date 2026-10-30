/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surya: {
          /* Official Navy & Slate Blue Clinical Palette */
          navy: {
            DEFAULT: '#13233D',        // Deep Navy (Primary brand & headings)
            dark: '#0D1728',
            light: '#1C3256',
          },
          slate: {
            DEFAULT: '#3A4F99',        // Slate Blue (Interactive & secondary)
            hover: '#2E3E7A',
            light: '#EEF2FB',
          },
          ice: {
            DEFAULT: '#B2CEE2',        // Ice Blue (Borders & badge tints)
            soft: '#F0F6FA',
            border: '#D0E1EE',
          },
          ivory: '#ECECE5',            // Linen / Clean Canvas
          canvas: '#ECECE5',           // Clean page background
          dark: '#13233D',             // Primary Dark Text / Navy
          muted: '#5D6D82',            // Secondary Body Text
          border: '#D9E2EC',           // Cool clinical borders
          
          /* Preserved Surya Sun Emblem Accents (High-Contrast Pop) */
          orange: {
            DEFAULT: '#E94B1C',        // Brand Surya Orange (Logo & Primary CTA)
            secondary: '#F26A21',
            hover: '#C63D1B',
            soft: '#FFF0E6',
          },
          terracotta: {
            DEFAULT: '#E94B1C',
            secondary: '#F26A21',
            soft: '#EEF2FB',
            hover: '#C63D1B',
          },
          teal: {
            DEFAULT: '#3A4F99',
            dark: '#13233D',
            light: '#EEF2FB',
            muted: '#2E3E7A',
          },
          emergency: '#DC2626',        // Emergency Red
          
          /* Token Aliases for compatibility */
          pageBg: '#ECECE5',
          card: '#FFFFFF',
          heading: '#13233D',
          secondaryText: '#4F5E74',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'], // Remap legacy serif to clean authoritative sans
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(19, 35, 61, 0.04)',
        'card': '0 2px 12px -2px rgba(19, 35, 61, 0.06), 0 1px 4px -1px rgba(19, 35, 61, 0.04)',
        'card-hover': '0 14px 28px -4px rgba(19, 35, 61, 0.12), 0 4px 10px -2px rgba(58, 79, 153, 0.08)',
        'navy': '0 4px 16px 0 rgba(19, 35, 61, 0.25)',
        'emergency': '0 4px 16px 0 rgba(220, 38, 38, 0.25)',
      },
      borderRadius: {
        'card': '0.875rem',
        'card-lg': '1.25rem',
      },
    },
  },
  plugins: [],
};
