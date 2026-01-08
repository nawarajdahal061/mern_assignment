import React from 'react'
import Footer from '../footer/Footer'
import Hero from '../herosection/Hero'
import Upcommingappoin from '../upcomingappoin/Upcommingappoin'
import Booking from '../booking/Booking'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Upcommingappoin/>
      <Booking/>
      <Footer/>
      
    </div>
  )
}

export default Home
