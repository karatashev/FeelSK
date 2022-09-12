import React from 'react'
import Vardar from '../assets/Vardar night.jpg';
import Kale from '../assets/kale.jpg';
import Plostad from '../assets/Plostad night.jpg'
import Park from '../assets/Park day.jpg'
import Matka from '../assets/matka.jpg'




function Locations() {
  return (
    <div className='max-w-[1240px] mx-auto py-10 px-4 text-center '>
      {/* <h1>Urban places & Nature</h1> */}
      <h2 className='py-3 max-w-[1240px] text-[35px]'>History & Nature of <span className="text-red-600">Macedonia's capital</span></h2>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Plostad} alt="/" />
        <img className='w-full h-full object-cover' src={Kale} alt="/" />
        <img className='w-full h-full object-cover' src={Vardar} alt="/" />
        <img className='w-full h-full object-cover' src={Park} alt="/" />
        <img className='w-full h-full object-cover' src={Matka} alt="/" />
      </div>
    </div>
  )
}

export default Locations