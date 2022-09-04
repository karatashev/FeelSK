import React, { useEffect, useState } from "react";
import {
  BsArrowLeftSquareFill,
  BsArrowRightSquareFill,
  BsArrowUpSquareFill,
} from "react-icons/bs";
import carouselData from "./carouselData";

const Carousel = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [slide, setSlide] = useState(0);
  const length = carouselData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <h1 className="text-center text-5xl">
        Feel the <span className="text-red-600">CITY</span>
      </h1>
      <h1 className="text-center text-5xl py-2">
        Feel the <span className="text-red-600">PEOPLE</span>
      </h1>
      <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
        <BsArrowLeftSquareFill
          onClick={prevSlide}
          className="absolute top-[50%] text-3xl sm:text-5xl sm:text-black  text-white cursor-pointer left-8 lg:left-72 sm:left-2"
        />

        {carouselData.map((item, index) => (
          <div
            key={index}
            className={index === slide ? "opacity-100" : "opacity-0"}
          >
            {index === slide && (
              <img
                className="w-[500px] h-[450px] rounded-md"
                src={item.url}
                alt="/"
              />
            )}
          </div>
        ))}
        <BsArrowRightSquareFill
          onClick={nextSlide}
          className="absolute top-[50%] text-3xl sm:text-5xl sm:text-black text-white cursor-pointer right-8 lg:right-72 sm:right-2"
        />
      </div>

      {showTopBtn && (
        <BsArrowUpSquareFill
          size={70}
          className="fixed p-2 text-xl bottom-2 right-10 text-center bg-red text-red-600"
          onClick={goToTop}
        />
      )}
    </div>
  );
};

export default Carousel;
