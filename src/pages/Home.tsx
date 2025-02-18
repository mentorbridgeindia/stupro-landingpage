import React from 'react'
import HeroSection from '../modules/HeroSection'
import AppNavbar from '../modules/Components/NavBar'
import MobileScreen from '../modules/Components/MobileScreen'
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
     <FeatureSections/>
     <MoreFeaturesSection/>
     <DownloadSection/>
     <FooterSection/>
    </div>
  )
}

export default Home
