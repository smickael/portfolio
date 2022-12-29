import React from "react";
import styles from "../styles";
import clsx from "clsx";

const missionsList = [
  {
    name: "Jumy",
    image: "jumy.svg",
    location: "Dubai, United Arab Emirates",
    languages: [
      { name: "React.JS", className: "bg-react" },
      {
        name: "TailwindCSS",
        className: "bg-gradient-to-r from-fuchsia-500 to-indigo-500",
      },
      {
        name: "WEB3",
        className: "bg-[#121212]",
        textClassName:
          "text-transparent bg-clip-text bg-gradient-to-br from-[#F77D8B] to-[#6648FC]",
      },
    ],
    website: "https://www.jumy.co/",
    description:
      "Based in Dubai, Jumy is an NFT marketplace and WEB3 advisory platform. Empowering Artists to unlock the value of NFTs. In this project, we collaborated with Jumy’s back-end  and Solidity developers in order to realize the front part. The fancy design was interesting and challenging to conceive. It is currently in beta testing mode gearing up towards a full launch. Jumy’s team is teaming up with top artists, celebrities, athletes and creators to make collection of limited editions, high quality NFT that will be exclusively available on their platform.",
  },
  {
    name: "Roomchazer",
    image: "roomchazer.svg",
    location: "California, United States",
    languages: [{ name: "React-Native", className: "bg-react" }],
    website: "https://www.roomchazer.com/",
    description:
      "RoomChazer makes off-campus housing easy for students, their parents, property managers, and schools. On one hand, we have created a safe, transparent, and reliable way for college students to rent a room off-campus. On the other hand, we help Property Managers lower their turn-over rate and increase their bottom line when renting to the student market.",
  },
  {
    name: "Wealthcome",
    image: "wealthcome.svg",
    location: "Bordeaux, France",
    languages: [
      { name: "React-Native", className: "bg-react" },
      { name: "React.JS", className: "bg-react" },
      { name: "Typescript", className: "bg-typescript" },
      {
        name: "TailwindCSS",
        className: "bg-gradient-to-r from-fuchsia-500 to-indigo-500",
      },
    ],
    website: "https://www.wealthcome.fr/",
    mobile: "https://apps.apple.com/fr/app/wealthcome/id1614281207",
    description:
      "Wealthcome is a multiple financial asset gestion app, it helps you manage and control your assets with ease and automation on a dashboard both web and mobile. You are able for example to register a real estate size and informations, in order to get an automatic value estimation that will be added to your total wealth. Using external apis like cityscan to automatically compute the values of real estate assets. The project uses kubernetes and docker for deployment and development purposes.",
  },
];

export const Missions = () => {
  return (
    <div
      className={`w-full relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 ${styles.paddingY}`}
    >
      <h2 className="mt-2 text-3xl font-cdSemiBold leading-8 tracking-tight text-slate-300 sm:text-4xl mb-10">
        Missions
      </h2>
      <div className="px-1 sm:px-10">
        {[...missionsList].reverse().map((mission) => (
          <div className="mb-10">
            <div className="flex md:items-center items-start md:flex-row flex-col left-0">
              <div className="flex items-center flex-1 md:mb-0 mb-4">
                <img src={mission.image} className="w-20 h-20 mr-4" alt="" />
                <p className="font-cdBold text-2xl text-slate-300 uppercase flex-1">
                  {mission.name}
                </p>
              </div>
              <div className="justify-end">
                <p className="font-bold md:text-right text-left">
                  {mission.location}
                </p>
                <a href={mission.website} target="_blank" rel="noreferrer">
                  <p className="md:text-right text-left">{mission.website}</p>
                </a>
                {mission.mobile && (
                  <a href={mission.mobile} target="_blank" rel="noreferrer">
                    <p className="md:text-right text-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-blue-500 hover:to-green-500">
                      Available on AppStore
                    </p>
                  </a>
                )}
              </div>
            </div>
            <p className="mt-10">{mission.description}</p>
            <div className="flex flex-wrap gap-x-2 mt-4">
              {mission.languages.map((language) => (
                <div
                  className={clsx(
                    "rounded-2xl px-4 py-1 break-normal mb-2",
                    language.className
                  )}
                >
                  <p className={clsx(language.textClassName, "font-bold")}>
                    {language.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
