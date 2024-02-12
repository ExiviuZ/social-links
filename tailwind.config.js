/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-app-green": "hsl(75, 94%, 57%)",
        "neutral-app-white": "hsl(0, 0%, 100%)",
        "neutral-app-grey": "hsl(0, 0%, 20%)",
        "neutral-app-dark-grey": "hsl(0, 0%, 12%)",
        "neutral-app-off-black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
