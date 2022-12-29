import React from "react";
import clsx from "clsx";

export const SkillItem = ({ name, description, img, bgColor, initials }) => {
  return (
    <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-gray-800 hover:bg-slate-700 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
      <div className={clsx(bgColor," rounded-xl w-10 h-10")}>
        <img className="h-6 w-6 m-auto mt-2" src={img} alt="" />
      </div>
      <div className="min-w-0 flex-1">
        {/* <span className="absolute inset-0" aria-hidden="true"></span> */}
        <p className="text-sm font-medium text-slate-200">{name}</p>
        <p className="truncate text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
};
