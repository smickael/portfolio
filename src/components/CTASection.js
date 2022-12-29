import React from "react";

export const CTASection = () => {
  return (
    <div className="relative">
      <div className="absolute z-0 w-[30%] limit:w-[20%] h-[30%] left-20 limit:left-[15%] bottom-10 nonBlurred_darkblue__gradient" />
      <div className="absolute z-0 w-[10%] h-[10%] right-[20%] bottom-56 nonBlurred_tutti__gradient" />

      <div className="mx-auto z-10 max-w-6xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8 bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 bg-blend-overlay bg-noise rounded-3xl">
        <h2 className="text-3xl font-cdBold tracking-wide text-slate-200 sm:text-4xl">
          <span className="block">Ready to start your project?</span>
          <span className="block">Contact me!</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://www.linkedin.com/in/mickael-ks/"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-5 py-3 text-base font-medium text-white hover:bg-gray-800"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="https://www.malt.fr/profile/mickaelks"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-gray-700 hover:text-gray-100 hover:bg-slate-500"
              target="_blank"
              rel="noreferrer"
            >
              Malt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
