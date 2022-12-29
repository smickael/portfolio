import React from "react";
import { TypeAnimation } from "react-type-animation";
import { SkillItem } from "./SkillItem";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const webSkillsList = [
  {
    name: "React",
    img: "react_icon.png",
    initials: "R",
    bgColor: "bg-react_opacity",
    description: "UI JavaScript library",
  },
  {
    name: "Vue",
    img: "vuejs_icon.png",
    initials: "V",
    bgColor: "bg-vue_opacity",
    description: "UI JavaScript library",
  },
  {
    name: "Node",
    img: "nodejs_icon.png",
    initials: "N",
    bgColor: "bg-node_opacity",
    description: "Server environment",
  },
  {
    name: "TypeScript",
    img: "typescript_icon.png",
    initials: "T",
    bgColor: "bg-typescript_opacity",
    description: "Typed JavaScript library",
  },
  {
    name: "REST API",
    img: "api_icon.png",
    initials: "R",
    bgColor: "bg-api_opacity",
    description: "Architectural web system",
  },
  {
    name: "GraphQL",
    img: "graphql_icon.png",
    initials: "G",
    bgColor: "bg-graphql_opacity",
    description: "API language",
  },
  {
    name: "MongoDB",
    img: "mongodb_icon.png",
    initials: "M",
    bgColor: "bg-mongodb_opacity",
    description: "NoSQL database",
  },
  {
    name: "MySQL",
    img: "mysql_icon.png",
    initials: "N",
    bgColor: "bg-mysql_opacity",
    description: "Database system",
  },
  {
    name: "Storybook",
    img: "storybook_icon.png",
    initials: "S",
    bgColor: "bg-storybook_opacity",
    description: "UI workshop",
  },
  {
    name: "Next.JS",
    img: "nextjs_icon.png",
    initials: "N",
    bgColor: "bg-slate-600/50",
    description: "React JS framework",
  },
  {
    name: "HTML",
    img: "html_icon.png",
    initials: "H",
    bgColor: "bg-html_opacity",
    description: "Standard web language",
  },
  {
    name: "Javascript",
    img: "javascript_icon.png",
    initials: "J",
    bgColor: "bg-javascript_opacity",
    description: "Scripting language",
  },
  {
    name: "CSS",
    img: "css_icon.png",
    initials: "C",
    bgColor: "bg-css_opacity",
    description: "Standard styling language",
  },
];

const mobileSkillsList = [
  {
    name: "React Native",
    img: "react_icon.png",
    initials: "R",
    bgColor: "bg-react_opacity",
    description: "Multi-OS development",
  },
];

const designSystem = [
  { img: "./designsystem.svg" },
  { img: "./iphone14.png" },
  { img: "./iphone14.2.png" },
];

export const Skills = () => {
  let [isOpen, setIsOpen] = useState(true);
  let [image, setImage] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  const openImage = (src) => {
    setIsOpen(true);
    setImage(src);
  };

  return (
    <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
      <div className="flex flex-wrap overflow-hidden md:-mx-4 lg:-mx-4 xl:-mx-1 mb-10">
        <div className="w-full overflow-hidden md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
          <p className="text-lg font-medium">
            Years later, I had the chance to join the 42 school from the United
            States, and was able to extend my skills on current front-end
            technologies.
          </p>
        </div>
        <div className="w-full overflow-hidden md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"></div>
        <div className="w-full overflow-hidden md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"></div>
        <div className="w-full overflow-hidden md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
          <p className="text-lg text-right font-medium">
            I focused in web programming more particularly on languages
            <br /> such as{" "}
            <span className="font-bold">
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
      <h2 className="mt-2 text-3xl font-cdSemiBold leading-8 tracking-tight text-slate-300 sm:text-4xl mb-10 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500">
        Web Skills
      </h2>
      <div className="hidden mt-3 sm_md:grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {webSkillsList.map((skill, i) => (
          <SkillItem
            name={skill.name}
            description={skill.description}
            img={skill.img}
            bgColor={skill.bgColor}
            initials={skill.initials}
          />
        ))}
      </div>
      <div className="overflow-y-auto relative p-4 h-80 grid sm_md:hidden grid-cols-1 gap-5 mb-6 masked-overflow">
        {webSkillsList.map((skill, i) => (
          <SkillItem
            name={skill.name}
            description={skill.description}
            img={skill.img}
            bgColor={skill.bgColor}
            initials={skill.initials}
          />
        ))}
      </div>
      <p className="text-lg mb-10">
        So far, I have been able to contribute to various{" "}
        <span className="font-bold">website </span>
        projects (web3, showcase site, e-commerce) or even{" "}
        <span className="font-bold">mobile applications</span> developed in{" "}
        <span className="font-bold">React-Native</span> deployable on{" "}
        <span className="font-bold">
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
      <h2 className="mt-2 text-3xl font-cdSemiBold leading-8 tracking-tight text-slate-300 sm:text-4xl mb-10 text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-blue-500">
        Mobile Skills
      </h2>
      <div className="hidden mt-3 sm_md:grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10 ">
        {mobileSkillsList.map((skill, i) => (
          <SkillItem
            name={skill.name}
            description={skill.description}
            img={skill.img}
            bgColor={skill.bgColor}
            initials={skill.initials}
          />
        ))}
      </div>
      <div className="overflow-y-auto relative p-4 max-h-80 grid sm_md:hidden grid-cols-1 gap-5 mb-10">
        {mobileSkillsList.map((skill, i) => (
          <SkillItem
            name={skill.name}
            description={skill.description}
            img={skill.img}
            bgColor={skill.bgColor}
            initials={skill.initials}
          />
        ))}
      </div>
      <h2 className="mt-2 text-3xl font-cdSemiBold leading-8 tracking-tight text-slate-300 sm:text-4xl mb-10 text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-green-500">
        UI/UX Design
      </h2>
      <div>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {designSystem.map((file) => (
            <li
              key={file.img}
              className="relative"
              onClick={() => openImage(file.img)}
            >
              <div className="group aspect-w-10 h-40 block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img
                  src={file.img}
                  alt=""
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {file.img}</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
        {image && (
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-30" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                      <img src={image} alt="" />
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        )}
      </div>
    </div>
  );
};
