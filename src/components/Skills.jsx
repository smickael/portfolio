import { SkillItem } from "./SkillItem";
import { clsx } from "clsx";

const webSkillsList = [
  {
    name: "React",
    img: "./react_icon.png",
    initials: "R",
    bgColor: "bg-react_opacity",
    description: "UI JavaScript library",
  },
  {
    name: "TypeScript",
    img: "./typescript_icon.png",
    initials: "T",
    bgColor: "bg-typescript_opacity",
    description: "Typed JavaScript library",
  },
  {
    name: "REST API",
    img: "./api_icon.png",
    initials: "R",
    bgColor: "bg-api_opacity",
    description: "Architectural web system",
  },
  {
    name: "GraphQL",
    img: "./graphql_icon.png",
    initials: "G",
    bgColor: "bg-graphql_opacity",
    description: "API language",
  },
  {
    name: "MySQL",
    img: "./mysql_icon.png",
    initials: "N",
    bgColor: "bg-mysql_opacity",
    description: "Database system",
  },
  {
    name: "Storybook",
    img: "./storybook_icon.png",
    initials: "S",
    bgColor: "bg-storybook_opacity",
    description: "UI workshop",
  },
  {
    name: "Next.JS",
    img: "./nextjs_icon.png",
    initials: "N",
    bgColor: "bg-slate-600/50",
    description: "React JS framework",
  },
  {
    name: "HTML",
    img: "./html_icon.png",
    initials: "H",
    bgColor: "bg-html_opacity",
    description: "Standard web language",
  },
  {
    name: "Vue",
    img: "./vuejs_icon.png",
    initials: "V",
    bgColor: "bg-vue_opacity",
    description: "UI JavaScript library",
  },
  {
    name: "Javascript",
    img: "./javascript_icon.png",
    initials: "J",
    bgColor: "bg-javascript_opacity",
    description: "Scripting language",
  },
  {
    name: "CSS",
    img: "./css_icon.png",
    initials: "C",
    bgColor: "bg-css_opacity",
    description: "Standard styling language",
  },
];

const mobileSkillsList = [
  {
    name: "React Native",
    img: "./react_icon.png",
    initials: "R",
    bgColor: "bg-react_opacity",
    description: "Multi-OS development",
  },
];

export const Skills = () => {
  return (
    <div className="flex gap-4 mx-4 md:mx-20 flex-col">
      <h2 className="mt-2 text-3xl font-medium tracking-tight text-slate-300 sm:text-4xl mb-10">
        Skills
      </h2>
      <p className="text-lg font-normal mb-10">
        Years later, I had the chance to join the 42 school from the United
        States, and was able to extend my skills on current front-end
        technologies.
        <br />
        <br />I focused in web programming more particularly on languages in
        order to carry out web projects.
      </p>
      <h3 className="text-2xl font-medium mb-4">Web Skills</h3>
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {webSkillsList.map((skill, i) => (
          <SkillItem
            key={i}
            name={skill.name}
            img={skill.img}
            bgColor={skill.bgColor}
            description={skill.description}
          />
        ))}
      </div>
      <div className="overflow-y-auto relative p-4 h-80 grid sm:hidden grid-cols-1 gap-5 mb-6 masked-overflow">
        {webSkillsList.map((skill, i) => (
          <SkillItem
            key={i}
            name={skill.name}
            description={skill.description}
            img={skill.img}
            bgColor={skill.bgColor}
            initials={skill.initials}
          />
        ))}
      </div>
      <h3 className="text-2xl font-medium my-4">Mobile Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mobileSkillsList.map((skill, i) => (
          <SkillItem
            key={i}
            name={skill.name}
            img={skill.img}
            bgColor={skill.bgColor}
            description={skill.description}
          />
        ))}
      </div>
      <h3 className="text-2xl font-medium my-4">Design UI/UX</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          className={clsx(
            "overflow-hidden relative flex border border-gray-300 figma_bg px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 items-center gap-y-2 p-4 rounded-xl gap-x-4"
          )}
        >
          <div className="opacity-30 -ml-6 absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-white/0" />
          <div className="z-10 bg-neutral-800 rounded-lg flex gap-x-4 w-10 h-10">
            <img className="h-6 w-6 m-auto" src="./figma_icon.svg" />
          </div>
          <div className="z-10 min-w-0 flex-1">
            <p className="font-medium">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};
