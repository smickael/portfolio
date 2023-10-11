import { Button } from "./Button";
import { Widget } from "./Widget";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export const HeroSection = () => {
  return (
    <div className="relative max-w-7xl py-10 mb-10 md:mb-0 md:my-10 flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end gap-y-10">
        <h1 className="text-4xl font-medium">
          Building digital <br />
          products, brands <br />
          and experience.
        </h1>
        {/* <Button
          label="See more"
          icon={
            <ArrowLongRightIcon className="h-6 w-6 text-neutral-750 group-hover:text-neutral-300" />
          }
        /> */}
        <span className="flex items-center py-1 px-2 rounded-full  bg-gradient-to-r from-indigo-500 to-fuchsia-500 mb-3">
          <ArrowRightCircleIcon className="w-4 h-4 text-slate-100 mr-1" />
          <span className="uppercase text-xs font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-100">
            Open to contribute
          </span>
        </span>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/hero_test.svg"
          alt="Image de la Hero Section"
          className="w-full"
        />
      </div>
      <div className="mt-28 opacity-20 md:mt-0 absolute flex w-full justify-center items-center rotate-45 gap-x-20">
          <div className="rounded-full w-20 h-20 bg-neutral-100" />
          <div className="rounded-full w-10 h-10 bg-neutral-100" />
          <div className="rounded-full w-16 h-16 bg-neutral-100" />
          <div className="rounded-full w-12 h-12 bg-neutral-100" />
        </div>
    </div>
  );
};
