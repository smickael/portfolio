/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'noise': "url('/public/noise.svg')",
      },
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
          1000: "var(--color-gray-1000)",
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
        bootstrap: "var(--color-bootstrap)",

        react_opacity: "var(--color-react-opacity)",
        vue_opacity: "var(--color-vue-opacity)",
        html_opacity: "var(--color-html-opacity)",
        css_opacity: "var(--color-css-opacity)",
        node_opacity: "var(--color-node-opacity)",
        typescript_opacity: "var(--color-typescript-opacity)",
        graphql_opacity: "var(--color-graphql-opacity)",
        api_opacity: "var(--color-api-opacity)",
        mysql_opacity: "var(--color-mysql-opacity)",
        javascript_opacity: "var(--color-javascript-opacity)",
        mongodb_opacity: "var(--color-mongodb-opacity)",
        storybook_opacity: "var(--color-storybook-opacity)",
        tailwind_opacity: "var(--color-tailwind-opacity)",
        bootstrap_opacity: "var(--color-bootstrap-opacity)",
      },
      fontFamily: {
        cdMedium: ["cdMedium"],
        cdRegular: ["cdRegular"],
        cdLight: ["cdLight"],
        cdSemiBold: ["cdSemiBold"],
        cdBold: ["cdBold"],
        cdExtraLight: ["cdExtraLight"],
        epiloque: ['"Epilogue"'],
      },
      screens: {
        xs_sm: "450px",
        sm_md: "768px",
        md_lg: "1250px",
        xl_2xl: "1300px",
        limit: "1700px",
      },
    },
  },
  plugins: [],
};
