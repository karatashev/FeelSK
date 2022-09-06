import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 className={logo ? "hidden" : "block"}>
          Feel<span className="text-red-600">SK</span>
        </h1>
      </div>
      <ul className="hidden md:flex">
        <Link
          className="p-4 cursor-pointer hover:text-red-600"
          to="locations"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Locations
        </Link>

        <NavLink to="/reviews" className="p-4 hover:text-red-600 cursor-pointer">Reviews</NavLink>

        <Link
          className="p-4 cursor-pointer hover:text-red-600"
          to="social"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Social
        </Link>

      </ul>
      <div className="hidden md:flex">
        <Link
          className="bg-transparent p-3 border text-white border-white rounded-md list-none hover:bg-red-600 cursor-pointer"
          to="booking"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Book a tour
        </Link>
      </div>

      {/* Mobile hamburger menu */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Dropdown list*/}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-y flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>
            Feel<span className="text-red-600">SK</span>
          </h1>
          <li className="border-b">Home</li>
          <li className="border-b">Locations</li>
          <li className="border-b">Reviews</li>

          <div className="flex flex-col">
            <button className="my-6 hover:text-black">Search</button>
            <button className="hover:text-black">Book a tour</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon hover:text-black" />
            <FaInstagram className="icon hover:text-black" />
            <FaYoutube className="icon hover:text-black" />
            <FaTwitter className="icon hover:text-black" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
