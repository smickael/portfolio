export const Header = () => {
  return (
    <div className="sticky top-0 justify-center z-20 bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <header className="mx-auto flex items-start justify-between max-w-7xl p-4 xl:items-center border-b border-slate-700">
        <div className="flex items-center gap-x-3">
          <img src="/logo_icon.svg" className="w-8 h-8" />
          <span className="text-lg font-medium">mickael k.</span>
        </div>
        <div className="flex gap-x-4 font-medium items-center">
          <a
            className="group w-10"
            href="https://www.malt.fr/profile/mickaelks"
            target="_blank"
            rel="noreferrer"
          >
            <div className="group-hover:hidden flex">
              <img src="malt.png" width={16} height={16} alt="malt" />
            </div>
            <p className="group-hover:flex hidden">malt</p>
          </a>
          <a
            className="group"
            href="https://www.linkedin.com/in/mickael-ks/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="group-hover:hidden flex">
              <p className="font-bold">in</p>
            </div>
            <p className="group-hover:flex hidden">linkedIn</p>
          </a>
        </div>
      </header>
    </div>
  );
};
