import React from 'react'
import HeroSection from '../modules/HeroSection'
import AppNavbar from '../modules/Components/NavBar'
import MobileScreen from '../modules/Components/MobileScreen'
import GameChanger from '../modules/Components/GameChanger'
import Features from '../modules/Components/Features'
import ScrollPage from '../modules/Components/ScrollPage'
import FeatureSections from '../modules/FeatureSections'
import MoreFeaturesSection from '../modules/MoreFeaturesSection'
import DownloadSection from '../modules/DownloadSection'
import FooterSection from '../modules/FooterSection'

const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <HeroSection/>
      <MobileScreen/>
      <GameChanger/>
      <Features/>
      <ScrollPage/>
      <FeatureSections/>
      <MoreFeaturesSection/>
      <DownloadSection/>
      <FooterSection/>
    </div>
  )
}

export default Home;
