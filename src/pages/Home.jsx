import React from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Grid from '../components/Grid'
import Hero from '../components/Hero'
import Locations from '../components/Locations'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Locations />
      <Booking />
      <Grid />
      <Carousel />
      <Footer />
    </div>
  )
}

export default Home