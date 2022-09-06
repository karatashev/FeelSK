import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { useState } from "react";

const Booking = () => {
  const [tour, setTour] = useState();
  const [date, setDate] = useState()
  const [time, setTime] = useState();


  const handleBooking = (e) => {
    e.preventDefault()
    alert(`You have booked Tour: ${tour} from ${time}h on ${date}`)
    setTour('')
    setDate('')
    setTime('')
  }



  return (
    <div id="booking" className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
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
        <div className="border text-center bg-gray-800 text-white">
          <p className="pt-2">Get and additional 10 % off</p>
          <p className="py-4">ON THE FIRST TOUR</p>
          {/* <p className="bg-gray-800 text-gray-200 py-2">Select below</p> */}
        </div>
        <form className="w-full">


          {/* Select Tour */}
          <div className="flex flex-col my-2">
            <label>Select tour</label>
            <select onChange={(e) => setTour(e.target.value)} value={tour} className="border rounded-md p-2">
            {console.log(tour)}
              <option>City Tour</option>
              <option>Matka</option>
              <option>Vodno</option>
              <option>Skopska Crna Gora</option>
              <option>Park</option>
            </select>
          </div>

          {/* Date picker*/}
          <div className="flex flex-col my-4">
            <label>Date</label>
            <input onChange={(e) => setDate(e.target.value)} className="border rounded-md p-2" type="date" value={date}/>
            {console.log(date)}
          </div>

          {/* Time */}
          <div className="flex flex-col my-2">
            <label>Time</label>
            <select onChange={(e) => setTime(e.target.value)} value={time} className="border rounded-md p-2">
              {console.log(time)}
              <option>07:00-08:00</option>
              <option>08:00-09:00</option>
              <option>09:00-10:00</option>
              <option>10:00-11:00</option>
              <option>11:00-12:00</option>
              <option>12:00-13:00</option>
              <option>13:00-14:00</option>
              <option>19:00-20:00</option>
              <option>20:00-21:00</option>
              <option>21:00-22:00</option>
              <option>22:00-23:00</option>
            </select>
          </div>
          <button onClick={handleBooking} type="submit" className="w-full my-4 rates">Book tour</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
