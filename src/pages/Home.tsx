import React from 'react'
import HeroSection from '../modules/HeroSection'
import AppNavbar from '../modules/Components/NavBar'
import MobileScreen from '../modules/Components/MobileScreen'
<<<<<<< HEAD
import GameChanger from '../modules/Components/GameChanger'
import Features from '../modules/Components/Features'
import ScrollPage from '../modules/Components/ScrollPage'
=======
import FeatureSections from '../modules/FeatureSections'
import MoreFeaturesSection from '../modules/MoreFeaturesSection'
import DownloadSection from '../modules/DownloadSection'
import FooterSection from '../modules/FooterSection'
>>>>>>> ee20be088d5aed594f0a490184b49e26f727f97e

const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <HeroSection/>
      <MobileScreen/>
<<<<<<< HEAD
      <GameChanger/>
      <Features/>
      <ScrollPage/>
=======
     <FeatureSections/>
     <MoreFeaturesSection/>
     <DownloadSection/>
     <FooterSection/>
>>>>>>> ee20be088d5aed594f0a490184b49e26f727f97e
    </div>
  )
}

export default Home
