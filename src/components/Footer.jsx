import React, { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

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
    <div id="social" className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>Feel<span className="text-red-600">SK</span></h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon hover:text-black" />
            <FaInstagram className="icon hover:text-black" />
            <FaYoutube className="icon hover:text-black" />
            <FaTwitter className="icon hover:text-black" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex flex flex-col justify-start items-start">
            <Link to="/" className="p-4 hover:text-red-600">Home</Link>
            <Link className="p-4 hover:text-red-600" to="/reviews">Reviews</Link>
            <a className="p-4 hover:text-red-600" href="https://www.google.com/maps/d/embed?mid=1Jv8Y82r6RmRjjL7BCCcHpQtwNew&ie=UTF8&hl=en&t=h&msa=0&ll=42.00338699999999%2C21.45217899999999&spn=0.48984%2C0.878906&z=10&output=embed" target="_blank" rel="noreferrer">Map</a>
          </ul>
          <ul className="text-right lg:flex flex-col">
          <li className="hover:text-red-600 cursor-pointer">Contact</li>
          <li className="hover:text-red-600 cursor-pointer">Locations</li>
          </ul>
        </div>
      </div>

{/* Back to top Button */}

      {showTopBtn && (
        <BsArrowUpSquareFill
          size={70}
          className="fixed p-2 text-xl bottom-2 right-10 text-center bg-red text-red-600 cursor-pointer"
          onClick={goToTop}
        />
      )}
    </div>
  );
};

export default Footer;
