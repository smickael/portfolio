/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
        tertiary: {
          400: "var(--color-tertiary-400)",
          500: "var(--color-tertiary-500)",
          DEFAULT: "var(--color-tertiary)",
        },
        neutral: {
          DEFAULT: "#F2F2F2",
        },
        gray: {
          DEFAULT: "var(--color-gray)",
          100: "var(--color-gray-100)",
          150: "#b5b5b5",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          700: "var(--color-gray-700)",
        },
        maron: {
          DEFAULT: "var(--color-maron)",
        },
        red: {
          DEFAULT: "var(--color-red)",
        },
        green: {
          DEFAULT: "var(--color-green)",
          600: "var(--color-green-600)",
        },
        dark: {
          100: "var(--color-black-100)",
          200: "var(--color-black-200)",
        },
        react: "var(--color-react)",
        vue: "var(--color-vue)",
        html: "var(--color-html)",
        css: "var(--color-css)",
        node: "var(--color-node)",
        typescript: "var(--color-typescript)",
        graphql: "var(--color-graphql)",
        api: "var(--color-api)",
        mysql: "var(--color-mysql)",
        javascript: "var(--color-javascript)",
        mongodb: "var(--color-mongodb)",
        storybook: "var(--color-storybook)",
        tailwind: "var(--color-tailwind)",
      },
      fontFamily: {
        cdMedium: ["cdMedium"],
        cdRegular: ["cdRegular"],
        cdLight: ["cdLight"],
        cdSemiBold: ["cdSemiBold"],
        cdBold: ["cdBold"],
        cdExtraLight: ["cdExtraLight"],
      },
    },
  },
  plugins: [],
};
