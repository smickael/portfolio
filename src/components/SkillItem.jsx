import { clsx } from "clsx";

export const SkillItem = ({ name, img, bgColor, description }) => {
  return (
    <div className="flex border border-gray-300 bg-gray-800 hover:bg-slate-700 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 items-center gap-y-2 p-4 rounded-xl gap-x-4">
      <div className={clsx(bgColor, "rounded-lg flex gap-x-4 w-10 h-10")}>
        <img className="h-6 w-6 m-auto" src={img} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium">{name}</p>
        <p className="font-light text-sm truncate">{description}</p>
      </div>
    </div>
  );
};
