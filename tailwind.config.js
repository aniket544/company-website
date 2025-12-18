/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

         fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
     // 👇 YE NAYA HAI (Add this):
   
      colors: {
        // Tumhari branding ke hisaab se colors
        cyan: {
          DEFAULT: 'rgb(107, 211, 211)', // Ovin Main Cyan
          hover: 'rgb(16, 187, 173)',
          dim: 'rgba(107, 211, 211, 0.2)'
        },
     
        dark: {
          bg: '#000000',
          card: '#111717'
        }
      },
      animation: {
        // Aceternity UI ke liye zaroori animations
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },

       backgroundImage: {
      "grid-white": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      "grid-black": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
    },
    },
  },
  plugins: [],
}