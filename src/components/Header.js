import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-4 xl:items-center">
      <div>
        <span className="font-regular font-cdSemiBold">
          mickael <span className="font-bold italic cdRegular">k.</span>
        </span>
      </div>
      <div className="flex gap-x-2 items-center">
        <div className="group w-10">
          <div className="group-hover:hidden flex">
            <img src="malt.png" width={20} height={20} alt="malt" />
          </div>
          <p className="group-hover:flex hidden font-cdMedium italic text-base">
            malt
          </p>
        </div>
        <div className="group">
          <div className="group-hover:hidden flex">
            <p className="font-bold">in</p>
          </div>
          <p className="group-hover:flex hidden font-cdMedium italic">
            linkedIn
          </p>
        </div>
      </div>
    </header>
  );
};
