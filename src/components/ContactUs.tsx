import { motion } from "framer-motion";
import React from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 8rem 5%;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.95),
    rgba(26, 26, 26, 0.95)
  );
`;

const GlowBackground = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at 20% 20%,
      rgba(220, 170, 20, 0.15) 0%,
      transparent 25%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(78, 205, 196, 0.15) 0%,
      transparent 25%
    );
  pointer-events: none;
`;

const ContactContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  position: relative;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(220, 170, 20, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InputGroup = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  color: #e0e0e0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #dcaa14;
    box-shadow: 0 0 0 2px rgba(220, 170, 20, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #dcaa14;
    box-shadow: 0 0 0 2px rgba(220, 170, 20, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(120deg, #dcaa14, #ffd700);
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  color: #000000;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(220, 170, 20, 0.2);
  }
`;

const ContactInfo = styled(motion.div)`
  padding: 3rem;
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InfoCard = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(220, 170, 20, 0.2);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #e0e0e0;

  svg {
    font-size: 1.5rem;
    color: #dcaa14;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    vertical-align: middle;
    margin-bottom: 0 !important;
  }
`;

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactSection id="contact">
      <div className="sub-title">CONTACT US</div>
      <GlowBackground />
      <ContactContainer>
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="d-flex justify-content-center gap-5">
            <InputGroup>
              <Label>Name</Label>
              <Input type="text" placeholder="Enter your name" required />
            </InputGroup>
            <InputGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email" required />
            </InputGroup>
          </div>
          <InputGroup>
            <Label>Message</Label>
            <TextArea placeholder="Your message..." required />
          </InputGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mb-5"
          >
            Send Message
            <FiSend />
          </SubmitButton>
          <InfoCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <InfoItem>
              <FiMapPin />
              <p>123 Innovation Street, Tech Valley, Silicon City, 12345</p>
            </InfoItem>
            <InfoItem>
              <FiMail />
              <p>contact@yourcompany.com</p>
            </InfoItem>
            <InfoItem>
              <FiPhone />
              <p>+1 (234) 567-8900</p>
            </InfoItem>
          </InfoCard>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactUs;
