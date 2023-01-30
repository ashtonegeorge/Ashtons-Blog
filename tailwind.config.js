/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // images: {
  //   dangerouslyAllowSVG: true,
  //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  // },
  theme: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
  },
  plugins: [],
}