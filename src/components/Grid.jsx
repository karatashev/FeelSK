import React from "react";
import OldBazaar from "../assets/Carsija day.jpg";
import OldBazaar2 from "../assets/Carsija day2.jpg";
import Mariot from "../assets/Mariot day.jpg";
import MuseumClock from "../assets/Muzej clock.jpg";
import HolyTempleNight from "../assets/Soborna dron.jpg";
import SquareNight from "../assets/Plostad night2.jpg";
import GridImageCard from "./GridImageCard";

const Grid = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <GridImageCard bg={OldBazaar} text="Old Bazaar" />
      <GridImageCard bg={MuseumClock} text="Museum Clock" />
      <GridImageCard bg={HolyTempleNight} text="The Holy Tample" />
      <GridImageCard bg={OldBazaar2} text="Old Bazaar at night" />
      <GridImageCard bg={Mariot} text="Main square" />
      <GridImageCard bg={SquareNight} text="Main square at night" />
    </div>
  );
};

export default Grid;
