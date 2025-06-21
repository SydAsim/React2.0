# HOW TO CONFIG TAILWIND CSS
npm install -D tailwindcss postcss autoprefixer
npm install -D tailwindcss@3.4.17
npx tailwindcss init -p

# in tailwind.config.js 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
---

# in index.css  write

@tailwind base;
@tailwind components;
@tailwind utilities;
