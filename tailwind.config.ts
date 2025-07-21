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
        // Primary colors from requirements
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          500: '#0b3d9b',
          600: '#1657d9',
          700: '#0d4bb8',
        },
        accent: {
          yellow: '#FFC700',
        },
        secondary: {
          text: '#F2F6FF',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #0b3d9b, #1657d9)',
      },
    },
  },
  plugins: [],
};
export default config; 