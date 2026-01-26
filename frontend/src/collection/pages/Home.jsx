import React from 'react'
import Footer from '../footer/Footer'
import Hero from '../herosection/Hero'
import Upcommingappoin from '../upcomingappoin/Upcommingappoin'
import Booking from '../booking/Booking'
import Navbar from '../navbar/navbar'
import AboutUs from '../../component/Aboutus'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Upcommingappoin/>
      <Booking/>
      <AboutUs/>
      <Footer/>
      
    </div>
  )
}

export default Home
