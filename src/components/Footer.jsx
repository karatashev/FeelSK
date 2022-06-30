import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>Feel<span className="text-red-600">SK</span></h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>History</li>
            <li>Advertising</li>
            <li>Groups</li>
            <li>Reviews</li>
            <li>Map</li>
          </ul>
          <ul className="text-right lg:flex">
          <li>Home</li>
          <li>Locations</li>
          <li>Acomodations</li>
          <li>Reviews</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
