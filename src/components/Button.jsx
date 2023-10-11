import clsx from "clsx";
import { DynamicIcon } from "./DynamicIcon";

export const Button = ({ label, className, icon }) => {
  return (
    <div
      className={clsx(
        "cursor-pointer group rounded-full py-1 px-4 bg-neutral-300 hover:bg-[#1C1C38] flex gap-x-2 w-fit",
        className
      )}
    >
      <p className="text-neutral-750 font-medium group-hover:text-neutral-300">{label}</p>
      {icon}
    </div>
  );
};
