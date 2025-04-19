import styled from "styled-components";
import BentoGrid from "../component/BentoGrid";
import ContactUs from "../component/ContactUs";
import { CutsSection } from "../component/CutsSection";
import DownloadCTA from "../component/DownloadCTA";
import FAQSection from "../component/FAQSection";
import FeatureGrid from "../component/FeatureGrid";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";
import USPSection from "../component/USPSection";
import TeamSection from "../component/TeamSection";
import MobileViewSection from "../component/MobileViewSection";
const PageWrapper = styled.div`
  overflow-x: hidden;
  background: linear-gradient(to bottom, #000000, #1a1a1a);
  color: #ffffff;
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

const Home = () => {
  return (
    <PageWrapper>
      <Navbar />
      <HeroSection />
      <CutsSection />
      <FeatureGrid />
      <USPSection />
      {/* <MobileViewSection /> */}
      <BentoGrid />
      <FAQSection />
      <TeamSection />
      <DownloadCTA />
      <ContactUs />
      <Footer />
   </PageWrapper>
  );
};

export default Home;
