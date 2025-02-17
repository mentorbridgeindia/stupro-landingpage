import React from 'react'
import HeroSection from '../modules/HeroSection'
import AppNavbar from '../modules/Components/NavBar'
import MobileScreen from '../modules/Components/MobileScreen'
const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <HeroSection/>
      <MobileScreen/>
    </div>
  )
}

export default Home
