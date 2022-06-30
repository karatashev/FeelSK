import React, { useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"

const carouselData = [
{
  url: 'https://images.unsplash.com/photo-1612280171265-b3d6dd95f640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  id: 1,
},
{
  url: 'https://images.unsplash.com/photo-1612049101057-f796ad4df219?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  id: 2,
},
{
  url: 'https://images.unsplash.com/photo-1612280187911-a20a841ecbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&,auto=format&fit=crop&w=764&q=80',
  id: 3,
},
{
  url: 'https://images.unsplash.com/photo-1603444276462-3b71ff34959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  id: 4,
},
{
  url: 'https://images.unsplash.com/photo-1581590289958-0a34272868dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  id: 5,
},
{
  url: 'https://images.unsplash.com/photo-1633107115328-e4d53ac20245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  id: 6,
}
]

const Carousel = () => {

const [slide, setSlide] = useState(0)
const length = carouselData.length

const prevSlide = () => {
  setSlide(slide === length - 1 ? 0 : slide + 1)
}
const nextSlide = () => {
  setSlide(slide === 0 ? length - 1 : slide - 1 )
}
 
  return ( 
  <div>
    <h1 className='text-center text-5xl'>Feel the <span className="text-red-600">CITY</span></h1>
    <h1 className='text-center text-5xl py-2'>Feel the <span className="text-red-600">PEOPLE</span></h1>
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl sm:text-5xl sm:text-black  text-white cursor-pointer left-8" />
      <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl sm:text-5xl sm:text-black text-white cursor-pointer right-8" />

      {carouselData.map((item, index) => (
        <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
          {index === slide && (<img className='w-full rounded-md' src={item.url} alt="/" />)}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Carousel