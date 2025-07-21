import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary color tokens from UX spec
        blue: {
          start: '#0B3D9B',
          end: '#1657D9',
        },
        yellow: {
          accent: '#FFC700',
        },
        surface: {
          translucent: 'rgba(255,255,255,0.10)',
        },
        text: {
          base: '#FFFFFF',
        },
        // Extended color palette
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          500: '#0b3d9b',
          600: '#1657d9',
          700: '#134cc7',
        },
        accent: {
          yellow: '#FFC700',
        },
        secondary: {
          text: '#F2F6FF',
        },
        workspace: {
          bg: '#F8FAFC',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero-desktop': '3.75rem',
        'hero-mobile': '2.5rem',
      },
      fontWeight: {
        'black': '900',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #0B3D9B, #1657D9)',
      },
      spacing: {
        '11': '2.75rem', // 44px for button hit areas
      },
      borderRadius: {
        'xl': '12px',
      },
    },
  },
  plugins: [],
};
export default config; 