import React from "react";

const GridModal = ({ title, imgSrc, desc, closeModal }) => {
  return (
    <>
      <div className="fixed z-40 w-screen h-screen inset-0 bg-slate-300 bg-opacity-40"></div>

      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md px-6 py-6 drop-shadow-lg ">
        <h1 className=" text-center text-2xl font-semibold">{title}</h1>
        <div className="py-5">
          <img className="md:w-[350px] md:h-[320px] sm:w-[250px] sm:h-[250px] mx-auto"  src={imgSrc} alt="" />
        </div>
        <div className="py-1 border-b border-gray-300 overflow-hide">
          <p className="">{desc}</p>
        </div>
        <div className="flex justify-end">
          <button onClick={closeModal} className="px-5 py-2 mt-4 text-white cursor-pointer rounded-md">
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default GridModal;
