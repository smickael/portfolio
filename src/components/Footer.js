import React from "react";

export const Footer = () => {
  return (
    <div className="justify-center z-20 w-screen bg-gradient-to-t from-gray-1000">
    <div className="mx-auto flex justify-center max-w-7xl px-4 py-20">
      <div className="flex items-center">
        <img src="./mk_grayLogo.svg" className="w-6 h-6 mr-2" alt="MK" />
        <span className="font-medium text-sm text-slate-300">
          -<span className="ml-2">mickael k. - 2022</span>
        </span>
      </div>
    </div>
    </div>
  );
};
