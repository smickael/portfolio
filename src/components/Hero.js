import React from "react";
import styles from "../styles";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <section
      className={`items-center flex md:flex-row flex-col max-w-7xl mx-auto ${styles.paddingY}`}
    >
      <div
        className={`md:w-1/2 w-full flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10`}
      >
        <span class="flex items-center py-1 px-2 rounded-full  bg-gradient-to-r from-indigo-500 to-fuchsia-500 mb-3">
          <ArrowRightCircleIcon className="w-[10px] h-[10px] text-slate-100 mr-1" />
          <span className="uppercase text-[8px] font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-100">
            Open to contribute
          </span>
        </span>
        <div className="flex justify-between items-center w-full">
          <h1 className="font-cdSemiBold text-4xl ">
            <span>
              The{" "}
              <TypeAnimation
                sequence={[
                  "developer",
                  3000, // Waits 1s
                  "problem solver",
                  3000, // Waits 2s
                  "freelancer",
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "36px", fontFamily: "cdSemiBold" }}
              />{" "}
              who{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600">
              enlightens
            </span>{" "}
            your project
          </h1>
        </div>
      </div>
      <div className="w-fit relative p-4">
        {/* <Image src="/hero.svg" width={1730} height={1300} /> */}
        <img
          src="hero3.png"
          className="w-[100%] h-[100%] relative z-[5]"
          alt="hero"
        />
        <div className="absolute z-[1] w-[30%] h-[30%] left-20 top-48 pink__gradient" />
        <div className="absolute z-0 w-[30%] h-[30%] left-36 top-64 tutti__gradient" />
      </div>
    </section>
  );
};
