/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url('/noise.svg')",
      },
      colors: {
        neutral: {
          750: "var(--neutral-750)",
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
      },
    },
  },
  plugins: [],
};
