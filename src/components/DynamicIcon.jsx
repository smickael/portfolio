import * as HIcons from "@heroicons/react"
import clsx from "clsx";

export const DynamicIcon = ({ icon, className }) => {
  const { ...icons } = HIcons;
  const Icon = icons[icon];

  return (
    <>
      <Icon
        className={clsx("h-6 w-6 text-white", className)}
        aria-hidden="true"
      />
    </>
  );
};
