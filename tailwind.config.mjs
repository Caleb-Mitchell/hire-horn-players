/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        acumin: ["Acumin Pro", "sans-serif"],
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        marquee2: "marquee2 60s linear infinite",
        slide_in: "slide_in .6s ease-in-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slide_in: {
          "0%": { transform: "translateY(20%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
