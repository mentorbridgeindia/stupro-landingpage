import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import animationData from "../assets/Scene1.json"
import Lottie from "lottie-react";

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    background: linear-gradient(
      279.99deg,
      #9f5ff1 -1.19%,
      #ff54b0 50.96%,
      #ff9f5a 99.95%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled(motion.h6)`
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: 800;
  background: #ffffff;
  -webkit-background-clip: text;
  font-family: "Noto Serif", serif;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 2rem;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(120deg, #dcaa14, #dcaa14);
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const PhoneWrapper = styled(motion.div)`
  position: relative;
  min-width: 600px;
  height: auto;
  max-width: 100%;
  display: flex;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          From Student to Professional
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="app-text mt-5 mb-5"
        >
          Faster | Smarter | Better
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="app-text mb-5 mt-5"
        >
          StuPro is your career wingman, making sure you never miss an
          opportunity to learn, practice, and grow. It’s not another course
          platform—it’s a structured, action-based, no-fluff system to take you
          from student to job-ready professional.
        </Description>
        <CTAButton
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Now
        </CTAButton>
      </ContentWrapper>

      <Parallax translateY={["-50px", "50px"]}>
        <PhoneWrapper
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* <img
            src="https://wfkq0nguanh0273r.public.blob.vercel-storage.com/hero-mockup.png"
            alt="App Preview"
            style={{ width: "100%", height: "auto", minWidth: "900px" }}
          /> */}
          <div style={{ minWidth: "50%", maxWidth: "100%", height: "auto", position: "relative" }}>
          <Lottie animationData={animationData} loop={true} />
          </div>
        </PhoneWrapper>
      </Parallax>
    </HeroContainer>
  );
};

export default HeroSection;
