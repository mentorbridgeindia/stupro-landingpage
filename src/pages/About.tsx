import styled from "styled-components";
import { motion } from "framer-motion";

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
`;

const TeamImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  margin-top: 2rem;
`;

const About = () => {
  return (
    <AboutContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>About Us</Title>
      <Description>
        At StuPro, we are dedicated to transforming students into professionals with faster, smarter, and better solutions. Our mission is to provide the tools and resources necessary for success in today's competitive job market.
      </Description>
      <TeamImage src="https://example.com/team-photo.jpg" alt="Our Team" />
    </AboutContainer>
  );
};

export default About;
