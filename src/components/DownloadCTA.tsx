import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as PlayStoreSvg } from "../assets/play.svg";

const CTAContainer = styled.section`
  padding: 8rem 5%;
  background: linear-gradient(45deg, #000000, #1a1a1a);
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(120deg, #dcaa14, #dcaa14);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #e0e0e0;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const StoreButton = styled(motion.a)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  text-decoration: none;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .store-icon {
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .store-text {
    text-align: left;

    small {
      font-size: 0.8rem;
      opacity: 0.8;
    }

    strong {
      font-size: 1.1rem;
      display: block;
      margin-top: 2px;
    }
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(78, 205, 196, 0.1) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  pointer-events: none;
`;

const DownloadCTA = () => {
  return (
    <CTAContainer id="download">
      <BackgroundGradient />
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Get Started?
        </Title>
        <Description
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Join millions of users who have already transformed their mobile
          experience. Download our app today and start your journey.
        </Description>
        <ButtonGroup
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <StoreButton
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="store-icon">
              <PlayStoreSvg />
            </div>
          </StoreButton>
        </ButtonGroup>
      </ContentWrapper>
    </CTAContainer>
  );
};

export default DownloadCTA;
