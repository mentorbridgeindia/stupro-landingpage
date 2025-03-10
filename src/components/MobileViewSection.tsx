import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import home from "../assets/screenshots/home.png";
import repositories from "../assets/screenshots/repositories.png";
import products from "../assets/screenshots/products.png";
import profile from "../assets/screenshots/profile.png";

const SectionContainer = styled.section`
  padding: 8rem 5%;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
  position: relative;
  overflow: hidden;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(78, 205, 196, 0.15) 0%,
    rgba(255, 107, 107, 0.1) 30%,
    transparent 70%
  );
  filter: blur(80px);
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(120deg, #dcaa14, #dcaa14);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #e0e0e0;
  max-width: 600px;
  margin: 0 auto 4rem;
  line-height: 1.8;
`;

const CarouselContainer = styled.div`
  position: relative;
  height: 700px;
  perspective: 2000px;
  transform-style: preserve-3d;
`;

const PhoneMockup = styled(motion.div)<{ $rotation: number }>`
  position: absolute;
  width: 300px;
  height: 600px;
  left: 50%;
  top: 50%;
  transform-origin: center;
  cursor: pointer;
  transform: translate(-50%, -50%) rotateY(${(props) => props.$rotation}deg)
    translateZ(400px);
`;

const MockupFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background: #1a1a1a;
  padding: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.1);
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NotchArea = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 30px;
  background: #1a1a1a;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 2;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Dot = styled(motion.button)<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.$isActive
      ? "linear-gradient(120deg, #DCAA14, #dcaa14)"
      : "rgba(255, 255, 255, 0.2)"};
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const screens = [
  {
    id: 1,
    image: home,
    title: "Home",
  },
  {
    id: 2,
    image: repositories,
    title: "Repositories",
  },
  {
    id: 3,
    image: products,
    title: "Products",
  },
  {
    id: 4,
    image: profile,
    title: "Profile",
  },
];

const MobileViewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <SectionContainer>
      <BackgroundGlow />
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience the Future
        </Title>
        <Description
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Discover our beautifully crafted interface and seamless user
          experience. Every detail has been carefully designed for you.
        </Description>

        <CarouselContainer>
          <AnimatePresence mode="wait">
            {screens.map((screen, index) => {
              const rotation = ((index - currentIndex) * 360) / screens.length;
              const isActive = index === currentIndex;

              return (
                <PhoneMockup
                  key={screen.id}
                  $rotation={rotation}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0.3,
                    scale: isActive ? 1 : 0.8,
                    filter: `blur(${isActive ? 0 : 2}px)`,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  onClick={() => handleDotClick(index)}
                  whileHover={isActive ? { scale: 1.05 } : {}}
                >
                  <MockupFrame>
                    <NotchArea />
                    <Screen>
                      <motion.img
                        src={screen.image}
                        alt={screen.title}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </Screen>
                  </MockupFrame>
                </PhoneMockup>
              );
            })}
          </AnimatePresence>
        </CarouselContainer>

        <NavigationDots>
          {screens.map((_, index) => (
            <Dot
              key={index}
              $isActive={index === currentIndex}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </NavigationDots>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default MobileViewSection;
