import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as FacebookSvg } from "../assets/facebook.svg";
import { ReactComponent as InstagramSvg } from "../assets/instagram.svg";
import { ReactComponent as LinkedInSvg } from "../assets/linkedin.svg";
import { ReactComponent as TwitterSvg } from "../assets/twitter.svg";
import { ReactComponent as YoutubeSvg } from "../assets/youtube.svg";

const FooterContainer = styled.footer`
  background: linear-gradient(
    279.99deg,
    #9f5ff1 -1.19%,
    #ff54b0 50.96%,
    #ff9f5a 99.95%
  );
  padding: 5rem 5% 2rem;
  color: #ffffff;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(120deg, #dcaa14, #dcaa14);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  color: #fff;
  line-height: 1.6;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: "Noto Serif", serif;
  letter-spacing: 0.09em;
`;

const FooterTitle = styled.h4`
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
  font-family: "Noto Serif", serif;
  letter-spacing: 0.09em;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  font-family: "Noto Serif", serif;
  letter-spacing: 0.075em;

  &:hover {
    color: #000;
  }
`;

const Name = styled.h5`
  font-family: "Noto Serif", serif;
  letter-spacing: 0.2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-family: "Noto Serif", serif;
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const Copyright = styled.div`
  color: #fff;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #fff;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  font-family: "Noto Serif", serif;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Logo>
            <img
              src="https://wfkq0nguanh0273r.public.blob.vercel-storage.com/logo-alone.png"
              alt="Logo"
              style={{ width: "125px", height: "150px" }}
            />
          </Logo>
          <Name>STUPRO</Name>
        </FooterColumn>

        <FooterColumn
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FooterTitle>Company</FooterTitle>
          <FooterLink href="#about">About Us</FooterLink>
          <FooterLink href="#blog">Blog</FooterLink>
        </FooterColumn>

        <FooterColumn
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FooterTitle>Resources</FooterTitle>
          <FooterLink href="#docs">Documentation</FooterLink>
          <FooterLink href="#community">Community</FooterLink>
        </FooterColumn>

        <FooterColumn
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FooterTitle>Legal</FooterTitle>
          <FooterLink href="#privacy">Privacy Policy</FooterLink>
          <FooterLink href="#terms">Terms of Service</FooterLink>
        </FooterColumn>
      </FooterGrid>

      <Copyright>
        <FooterText>© {currentYear} StuPro. All rights reserved.</FooterText>
        <FooterText>
          From Student to Professional - Faster | Smarter | Better
        </FooterText>
        <SocialLinks>
          <SocialIcon
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <TwitterSvg />
          </SocialIcon>
          <SocialIcon
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FacebookSvg />
          </SocialIcon>
          <SocialIcon
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <InstagramSvg />
          </SocialIcon>
          <SocialIcon
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInSvg />
          </SocialIcon>
          <SocialIcon
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <YoutubeSvg />
          </SocialIcon>
        </SocialLinks>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
