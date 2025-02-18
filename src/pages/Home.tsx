import React from 'react'
import HeroSection from '../modules/HeroSection'
import AppNavbar from '../modules/Components/NavBar'
import MobileScreen from '../modules/Components/MobileScreen'
import GameChanger from '../modules/Components/GameChanger'
import Features from '../modules/Components/Features'
import ScrollPage from '../modules/Components/ScrollPage'

const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <HeroSection/>
      <MobileScreen/>
      <GameChanger/>
      <Features/>
      <ScrollPage/>
    </div>
  )
}

export default Home
