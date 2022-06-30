import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

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
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          Feel<span className="text-red-600">SK</span>
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Locations</li>
        <li>Acomodations</li>
        <li>Reviews</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" />
        <BsPerson />
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
          <li className="border-b">Acomodations</li>
          <li className="border-b">Reviews</li>

          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaTwitter className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
