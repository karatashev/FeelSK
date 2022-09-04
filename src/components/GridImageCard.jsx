import React from "react";

const GridImageCard = ({imgSrc, title, desc, getData}) => {
  return (
    <div onClick={() => getData(imgSrc, title, desc)} className="relative mx-auto my-3">
      <img className="w-[365px] h-[365px] object-fit" src={imgSrc} alt="/" />
      <div className=" absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
          {title}
        </p>
      </div>
    </div>
  );
};

export default GridImageCard;



