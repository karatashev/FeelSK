import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Booking = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Experience our city tours</h2>
          <p className="py-4">
          With all of its perfections and flaws, Skopje is a city like no other. We grew up here, we live here, we work here.. All of our memories with the people we care the most about are created on the streets of Skopje. We are proud of the city with inexhaustible energy. The city that almost never sleeps. The wonderful squares, the biggest monument on the Balkan Peninsula, the City Park, Vodno and Matka, the Vrelo caves, the way Vardar cuts it in half, the Millenium cross, the Old town bazaar, the Kale fortress .. all of these represent a certain period and tell a different story of the capital city of the land of the sun.
          </p>
        </div>
        {/* To narrow the layout to 2 cols on small screens */}
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50}/>
            </button>
            <div>
              <h3 className="py-2">CONTACT US</h3>
              <p className="py-1 px-2">OFFICIAL TOUR GUIDES</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50}/>
            </button>
            <div>
              <h3 className="py-2 px-4">LEADING SERVICE</h3>
              <p className="py-1 px-2">CHECK FOR TOURS</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">Get and additional 10 % off</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Matka</option>
              <option>Vodno</option>
              <option>Skopska Crna Gora</option>
              <option>Park</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-in</label>
            <input className="border rounded-md p-2" type="date"/>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-out</label>
            <input className="border rounded-md p-2" type="date"/>
          </div>
          <button className="w-full my-4 rates">Rates and availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
