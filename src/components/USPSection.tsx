import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

const USPContainer = styled.section`
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const USPTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(120deg, #dcaa14, #dcaa14);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const USPDescription = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e0e0e0;
  max-width: 600px;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const FeatureIcon = styled(motion.div)`
  width: 64px;
  height: 64px;
  background: linear-gradient(
    135deg,
    rgba(255, 107, 107, 0.2),
    rgba(78, 205, 196, 0.2)
  );
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
`;

const FeatureContent = styled.div`
  h3 {
    color: #ffffff;
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: 600;
  }

  p {
    color: #e0e0e0;
    line-height: 1.6;
    font-size: 1rem;
  }
`;

const ImageColumn = styled(motion.div)`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FloatingImage = styled(motion.img)`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background: linear-gradient(
    45deg,
    rgba(255, 107, 107, 0.1),
    rgba(78, 205, 196, 0.1)
  );
  border-radius: 50%;
  filter: blur(40px);
`;

const features = [
  {
    icon: "🎯",
    title: "Precision Perfect",
    description:
      "Advanced algorithms ensure pixel-perfect accuracy in every task.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Optimized performance delivers instant results when you need them.",
  },
  {
    icon: "🛡️",
    title: "Bulletproof Security",
    description: "Enterprise-grade security keeps your data safe and private.",
  },
];

const USPSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <USPContainer id="features">
      <div className="sub-title">WHY STUPRO?</div>
      <BackgroundGlow />
      <Grid>
        <ContentColumn>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <USPTitle>Transform Your Experience</USPTitle>
            <USPDescription>
              Experience the next level of mobile applications with our
              cutting-edge features and unparalleled performance. We've
              reimagined what's possible.
            </USPDescription>
          </motion.div>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <FeatureIcon
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {feature.icon}
                </FeatureIcon>
                <FeatureContent>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </FeatureContent>
              </FeatureItem>
            ))}
          </FeatureList>
        </ContentColumn>
        <ImageColumn style={{ y, opacity }}>
          <FloatingShape
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              top: "10%",
              right: "20%",
            }}
          />
          <FloatingShape
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              bottom: "20%",
              left: "10%",
            }}
          />
          <FloatingImage
            src="/path-to-your-app-screenshot.png"
            alt="App Features"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // transition={{ duration: 0.8 }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </ImageColumn>
      </Grid>
    </USPContainer>
  );
};

export default USPSection;
