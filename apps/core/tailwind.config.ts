import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: {
    relative: true,
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
    ]
  },
  prefix: "",

  theme: {
    fontSize: {
      "3xl": ["28px", {
        fontWeight: "600"
      }],

      "2sm": ["10px", {
        fontWeight: "400"
      }],

      "1s": ["12px", {
        fontWeight: "400"
      }],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    gridTemplateColumns: {
      "1fr": 'repeat(auto-fill, minmax(100px, 1fr))'
    },

    plugins: [require("tailwindcss-animate")],
  }
}
export default config
