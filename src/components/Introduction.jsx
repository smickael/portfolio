import { useState } from "react";
import { clsx } from "clsx";
import {
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
  MapPinIcon as SolidMapIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowUpOnSquareIcon,
  LinkIcon,
  MapPinIcon,
  PlusCircleIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Themes = {
  DEFAULT: "Default",
  INSTAGRAM: "Instagram",
  TWITTER: "X",
  JUMY: "Jumy",
  WEALTHCOME: "Wealthcome",
};

export const Introduction = () => {
  const [theme, setTheme] = useState(Themes.DEFAULT);
  const [showFullText, setShowFullText] = useState(false);

  const MAX_LENGTH = 140;

  const text =
    "Passionate about IT and web development in particular from an early age, I immediately knew in what way I was going to be able to mix pleasure and professionalism. Years later, I had the chance to join the 42 school from the United States, and I was able to extend my skills on current front-end technologies. Having a sensitivity for the visual part of a site, I also make complete models via Figma with the different pages of the project as well as the design system in order to respond to the visual identity of the client.";
  const truncatedText = text.slice(0, MAX_LENGTH);
  const isTruncated = text.length > MAX_LENGTH;

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="z-50 flex gap-4 mx-4 md:mx-20 md:flex-row flex-col-reverse">
      <div
        className={clsx(
          "flex flex-col w-full md:w-1/2 gap-x-10 items-start rounded-3xl overflow-hidden",
          theme === Themes.TWITTER
            ? "bg-black helvetica"
            : theme === Themes.INSTAGRAM
            ? "bg-white helvetica"
            : theme === Themes.JUMY
            ? "bg-white rounded-none p-2 raleway"
            : theme === Themes.WEALTHCOME
            ? "bg-[#04182B] p-4 dm"
            : "fresh_bg p-4 text-neutral-950"
        )}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {(theme === Themes.TWITTER || theme === Themes.JUMY) && (
          <img src="https://pbs.twimg.com/profile_banners/1641791291288682498/1680270709/1080x360" />
        )}
        {theme === Themes.INSTAGRAM && (
          <div className="w-full flex justify-between items-center p-2">
            <ChevronLeftIcon className="w-8 h-8 text-neutral-950" />
            <p className="text-neutral-950">frontendmickael</p>
            <EllipsisHorizontalIcon className="w-8 h-8 text-neutral-950" />
          </div>
        )}
        <div
          className={clsx(
            "flex w-full",
            theme === Themes.INSTAGRAM && "mt-4 justify-start",
            (theme === Themes.TWITTER || theme === Themes.JUMY) &&
              "justify-between",
            theme === Themes.DEFAULT && "items-center gap-x-4",
            theme === Themes.WEALTHCOME && "flex w-full justify-between"
          )}
        >
          <div
            className={clsx(
              "relative shrink-0",
              theme === Themes.TWITTER
                ? "-mt-12 ml-4 w-24 h-24"
                : theme === Themes.INSTAGRAM
                ? "md:mx-6 mx-0 ml-6 mr-4"
                : theme === Themes.JUMY
                ? "-mt-16 ml-6 w-32 h-32"
                : "w-40"
            )}
          >
            <img
              src={
                theme !== Themes.JUMY
                  ? "./logo_icon.svg"
                  : "./blackLogo_icon.svg"
              }
              className={clsx(
                "rounded-full",
                theme === Themes.TWITTER
                  ? " border-4 border-black"
                  : theme === Themes.INSTAGRAM
                  ? "border-2 w-24 h-24 md:w-28 md:h-28"
                  : theme === Themes.JUMY
                  ? "border-8 border-white"
                  : theme === Themes.WEALTHCOME
                  ? "border-8 rounded-2xl"
                  : "border-8  border-neutral-800"
              )}
            />
          </div>
          {(theme === Themes.TWITTER || theme === Themes.JUMY || theme === Themes.WEALTHCOME) && (
            <a
              href="https://twitter.com/FrontendMickael"
              className={clsx(
                "cursor-pointer w-fit h-fit ",
                theme === Themes.TWITTER
                  ? "py-1 px-3 mt-3 mr-5 border-2 border-[#536471] bg-none hover:bg-[#ecf3f4]/10 rounded-full"
                  : theme === Themes.JUMY
                  ? "mt-3 mr-3"
                  : theme === Themes.WEALTHCOME
                  ? "py-0 px-0"
                  : ""
              )}
            >
              {theme === Themes.TWITTER && (
                <p className="font-bold">Edit profile</p>
              )}
              {theme === Themes.JUMY && (
                <ArrowUpOnSquareIcon className="text-neutral-400 w-4 h-4" />
              )}
              {theme === Themes.WEALTHCOME && (
                <div>
                  <PlusCircleIcon className="w-16 h-16 text-white"/>
                </div>
              )}
            </a>
          )}
          {theme === Themes.INSTAGRAM && (
            <div className="w-auto flex flex-1 items-center text-neutral-950 justify-around mr-10 gap-x-4">
              <div className="flex flex-col items-center">
                <p>42</p>
                <p className="font-normal -mt-1">Posts</p>
              </div>
              <div className="flex flex-col items-center">
                <p>42</p>
                <p className="font-normal -mt-1">Followers</p>
              </div>
              <div className="flex flex-col items-center">
                <p>42</p>
                <p className="font-normal -mt-1">Following</p>
              </div>
            </div>
          )}
          {theme === Themes.DEFAULT && (
            <div>
              <p className="text-4xl font-medium tracking-tighter">Mickael K.</p>
              <p className="text-xl font-normal text-neutral-700 tracking-tighter">
                Designer who codes
              </p>
            </div>
          )}
        </div>
        <div
          className={clsx(
            "m-4",
            theme === Themes.INSTAGRAM
              ? "mx-7"
              : theme === Themes.TWITTER
              ? "mt-0"
              : ""
          )}
        >
          <p
            className={clsx(
              "text-2xl font-extrabold",
              theme === Themes.INSTAGRAM
                ? "text-base text-neutral-950"
                : theme === Themes.TWITTER
                ? "text-lg"
                : theme === Themes.JUMY
                ? "mb-2 text-neutral-950 text-3xl font-bold tracking-tighter"
                : theme === Themes.WEALTHCOME
                ? "mb-2 text-neutral-100 text-3xl font-semibold tracking-tight"
                : "hidden"
            )}
          >
            Mickael K.
          </p>
          {(theme === Themes.TWITTER || theme === Themes.JUMY) && (
            <p
              className={clsx(
                theme === Themes.TWITTER
                  ? "text-[#71767b] mb-3 font-normal nunito text-sm"
                  : theme === Themes.JUMY
                  ? "text-neutral-400 font-medium text-lg mb-2"
                  : ""
              )}
            >
              @FrontendMickael
            </p>
          )}
          {theme === Themes.JUMY && (
            <div className="flex flex-col gap-y-6 mb-6">
              <div className="flex gap-x-1">
                <SolidMapIcon className="w-6 h-6 text-neutral-950" />
                <span className="font-semibold text-base text-neutral-950">
                  Paris, France
                </span>
              </div>
              <div className="relative flex justify-around rounded-full w-full py-1 px-2 bg-neutral-950 h-fit">
                <span className="font-medium text-base">
                  0x67ad170266...1245edc89049
                </span>
                <Square2StackIcon className="absolute right-2 text-white w-6 h-6" />
              </div>
            </div>
          )}
          <p
            className={clsx(
              "tracking-tight font-light",
              theme === Themes.INSTAGRAM
                ? "text-neutral-950 font-normal text-base"
                : theme === Themes.TWITTER
                ? "text-sm tracking-normal font-normal"
                : theme === Themes.JUMY
                ? "text-[13px] text-neutral-600 tracking-normal font-normal"
                : "font-medium"
            )}
          >
            {theme !== Themes.DEFAULT && isTruncated ? (
              <AnimatePresence>
                {showFullText ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {text}
                    <span
                      onClick={handleClick}
                      className="cursor-pointer text-neutral-400"
                    >
                      {" "}
                      see less
                    </span>
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {truncatedText}
                    <span
                      onClick={handleClick}
                      className="cursor-pointer text-neutral-400"
                    >
                      ... more
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            ) : (
              text
            )}
          </p>
          {theme === Themes.INSTAGRAM && (
            <div className="w-full flex items-center gap-x-3 mt-4">
              <div className="isolate flex -space-x-3">
                <img
                  className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://pbs.twimg.com/media/FskNdX5WYAkmETe?format=jpg&name=medium"
                />
                <img
                  className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://pbs.twimg.com/profile_images/1617494138148081665/d5YdSd-w_400x400.jpg"
                  alt=""
                />
                <img
                  className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://static1.purepeople.com/articles/2/37/44/32/@/5408000-emily-ratajkowski-a-la-soiree-vanity-fa-300x300-2.jpg"
                  alt=""
                />
              </div>
              <p className="ml-10 text-neutral-950 text-sm">
                <span className="font-normal">Followed by</span> elonmusk,
                davidguetta, emrata <span className="font-normal">and</span> 14
                others
              </p>
            </div>
          )}
          {theme === Themes.TWITTER && (
            <div className="flex flex-col mt-3 gap-y-3">
              <div className="flex gap-x-3">
                <div className="flex gap-1">
                  <MapPinIcon className="w-4 h-4 text-[#71767b]" />
                  <p className="text-[#71767b] font-normal text-sm">
                    Paris, France
                  </p>
                </div>
                <div className="flex gap-1">
                  <LinkIcon className="w-4 h-4 text-[#71767b]" />
                  <a
                    className="text-[#71767b] font-normal text-sm"
                    href="https://smickael.github.io/portfolio/"
                  >
                    smickael.github.io/portfolio/
                  </a>
                </div>
              </div>
              <div className="flex gap-x-4 text-sm">
                <span className="flex gap-x-1 items-center">
                  <p className="text-white font-bold">29</p>
                  <p className="text-[#71767b] font-normal">Followers</p>
                </span>
                <span className="flex gap-x-1 items-center">
                  <p className="text-white font-bold">8</p>
                  <p className="text-[#71767b] font-normal">Followers</p>
                </span>
              </div>
            </div>
          )}
          {theme === Themes.JUMY && (
            <div className="flex flex-col">
              <div className="flex justify-evenly w-full my-10">
                <div className="flex flex-col items-center">
                  <p className="text-3xl text-neutral-950 font-semibold">10</p>
                  <p className="text-neutral-400 font-normal">Following</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-3xl text-neutral-950 font-semibold">10</p>
                  <p className="text-neutral-400 font-normal">Followers</p>
                </div>
              </div>
              <a
                href="#"
                className="cursor-pointer bg-neutral-950 py-4 flex justify-center items-center"
              >
                <p className="">Follow</p>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center h-full justify-center md:justify-start">
        <div className="flex md:flex-col gap-4 md:w-full w-fit">
          {Object.values(Themes).map((theme) => (
            <div
              key={theme}
              className="hover:bg-zinc-700 bg-zinc-900 w-full flex items-center gap-x-4 p-2 rounded-3xl cursor-pointer text-neutral-950"
              onClick={() => setTheme(theme)}
            >
              <img src={`./${theme}_icon.svg`} className="w-16 h-16" />
              <span className="hidden md:flex text-neutral-50 font-medium text-lg mr-2">
                {theme} theme
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
