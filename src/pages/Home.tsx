import styled from "styled-components";
import BentoGrid from "../components/BentoGrid";
import ContactUs from "../components/ContactUs";
import { CutsSection } from "../components/CutsSection";
import DownloadCTA from "../components/DownloadCTA";
import FAQSection from "../components/FAQSection";
import FeatureGrid from "../components/FeatureGrid";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import USPSection from "../components/USPSection";
import TeamSection from "../components/TeamSection";

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
