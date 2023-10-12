import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const designSystem = [
  {
    img: "./app.png",
  },
  {
    img: "./design_system.svg",
  },
  {
    img: "./phone.svg",
  },
];

export const Showcase = () => {
  const [open, setOpen] = useState(true);
  const [img, setImg] = useState("");

  function closeImage() {
    setOpen(false);
  }

  const openImage = (src) => {
    setOpen(true);
    setImg(src);
  };

  return (
    <div className="flex gap-4 mx-4 md:mx-20 flex-col mt-10">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6">
        {designSystem.map((file) => (
          <li
            className="relative cursor-pointer hover:opacity-50"
            key={file.img}
            onClick={() => openImage(file.img)}
          >
            <div className="h-40 group aspect-w-10 block w-full overflow-hidden rounded-xl focus-within:ring-2 focus-within:ring-violet-700">
              <img src={file.img} />
            </div>
          </li>
        ))}
      </ul>
      {img && (
        <Transition appear show={open} as={Fragment}>
          <Dialog as="div" className="relative z-30" onClose={closeImage}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/50" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <img src={img} alt="" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
};
