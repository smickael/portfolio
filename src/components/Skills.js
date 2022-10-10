import React from "react";
import clsx from "clsx";
import { TypeAnimation } from "react-type-animation";
import styles from "../styles";

const webSkillsList = [
  {
    name: "React",
    img: "react_icon.png",
    initials: "R",
    bgColor: "bg-react",
  },
  {
    name: "Vue",
    img: "vuejs_icon.png",
    initials: "V",
    bgColor: "bg-vue",
  },
  {
    name: "Node",
    img: "nodejs_icon.png",
    initials: "N",
    bgColor: "bg-node",
  },
  {
    name: "TypeScript",
    img: "typescript_icon.png",
    initials: "T",
    bgColor: "bg-typescript",
  },
  {
    name: "REST API",
    img: "api_icon.png",
    initials: "R",
    bgColor: "bg-api",
  },
  {
    name: "GraphQL",
    img: "graphql_icon.png",
    initials: "G",
    bgColor: "bg-graphql",
  },
  {
    name: "MongoDB",
    img: "mongodb_icon.png",
    initials: "M",
    bgColor: "bg-mongodb",
  },
  {
    name: "MySQL",
    img: "mysql_icon.png",
    initials: "N",
    bgColor: "bg-mysql",
  },
  {
    name: "Storybook",
    img: "storybook_icon.png",
    initials: "S",
    bgColor: "bg-storybook",
  },
  {
    name: "Next.JS",
    img: "nextjs_icon.png",
    initials: "N",
    bgColor: "bg-white",
  },
  {
    name: "HTML",
    img: "html_icon.png",
    initials: "H",
    bgColor: "bg-html",
  },
  {
    name: "Javascript",
    img: "javascript_icon.png",
    initials: "J",
    bgColor: "bg-javascript",
  },
  {
    name: "CSS",
    img: "css_icon.png",
    initials: "C",
    bgColor: "bg-css",
  },
];

const mobileSkillsList = [
  {
    name: "React Native",
    img: "react_icon.png",
    initials: "R",
    bgColor: "bg-react",
  },
];

export const Skills = () => {
  return (
    <div
      className={`relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 ${styles.paddingY}`}
    >
      <div class="flex flex-wrap overflow-hidden md:-mx-4 lg:-mx-4 xl:-mx-1 mb-10">
        <div class="w-full overflow-hidden md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
          <p className="text-lg">
            Years later, I had the chance to join the 42 school from the United
            States, and was able to extend my skills on current front-end
            technologies.
          </p>
        </div>
        <div class="w-full overflow-hidden md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"></div>
        <div class="w-full overflow-hidden md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"></div>
        <div class="w-full overflow-hidden md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
          <p className="text-lg text-right">
            I focused in web programming more particularly on languages
            <br /> such as{" "}
            <span class="font-bold">
              <TypeAnimation
                sequence={[
                  "React JS",
                  3000, // Waits 1s
                  "Node JS",
                  3000, // Waits 2s
                  "Vue JS",
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>{" "}
            in order to carry out web projects.
          </p>
        </div>
      </div>
      <h2 className="mt-2 text-3xl font-cdSemiBold leading-8 tracking-tight text-slate-300 sm:text-4xl mb-6">
        Web Skills
      </h2>
      <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {webSkillsList.map((skill, i) => (
          <div
            class="col-span-1 flex rounded-md shadow-sm overflow-hidden relative max-w-sm mx-auto bg-white ring-1 ring-black/5  items-center gap-3 dark:bg-slate-800 dark:highlight-white/5"
            key={i}
          >
            <div
              className={clsx(
                skill.bgColor,
                skill.bgColor === "bg-white" ? "text-black" : "text-white",
                "flex-shrink-0 flex items-center justify-center w-20 h-20 mr-2 text-base font-bold rounded-l-md"
              )}
            >
              {skill.initials}
            </div>
            <div class="flex flex-col py-5 w-48">
              <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">
                {skill.name}
              </strong>
              <span class="text-slate-500 text-sm font-medium dark:text-slate-400">
                Technical advisor
              </span>
            </div>
            <img class="absolute -right-12 w-24 shadow-lg" src={skill.img} />
          </div>
        ))}
      </div>
      <p className="text-lg mb-10">
        So far, I have been able to contribute to various{" "}
        <span class="font-bold">website </span>
        projects (web3, showcase site, e-commerce) or even{" "}
        <span class="font-bold">mobile applications</span> developed in{" "}
        <span class="font-bold">React-Native</span> deployable on{" "}
        <span class="font-bold">
          <TypeAnimation
            sequence={[
              "iOS",
              3000, // Waits 1s
              "Android",
              3000, // Waits 2s
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </span>{" "}
        devices.
      </p>
      <h2 className="mt-2 text-3xl font-cdSemiBold leading-8 tracking-tight text-slate-300 sm:text-4xl mb-6">
        Mobile Skills
      </h2>
      <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {mobileSkillsList.map((skill, i) => (
          <div
            class="col-span-1 flex rounded-md shadow-sm overflow-hidden relative max-w-sm mx-auto bg-white ring-1 ring-black/5  items-center gap-3 dark:bg-slate-800 dark:highlight-white/5"
            key={i}
          >
            <div
              className={clsx(
                skill.bgColor,
                skill.bgColor === "bg-white" ? "text-black" : "text-white",
                "flex-shrink-0 flex items-center justify-center w-20 h-20 mr-2 text-base font-bold rounded-l-md"
              )}
            >
              {skill.initials}
            </div>
            <div class="flex flex-col py-5 w-48">
              <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">
                {skill.name}
              </strong>
              <span class="text-slate-500 text-sm font-medium dark:text-slate-400">
                Technical advisor
              </span>
            </div>
            <img class="absolute -right-12 w-24 shadow-lg" src={skill.img} />
          </div>
        ))}
      </div>
    </div>
  );
};
