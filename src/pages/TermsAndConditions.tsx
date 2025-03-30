import { motion } from "framer-motion";
import {
  FiBook,
  FiDollarSign,
  FiShield,
  FiSmartphone,
  FiUser,
} from "react-icons/fi";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.95),
    rgba(26, 26, 26, 0.95)
  );
  color: #ffffff;
  padding: 8rem 5% 4rem;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  background: linear-gradient(120deg, #dcaa14, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
`;

const LastUpdated = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
`;

const Section = styled(motion.section)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(220, 170, 20, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    color: #dcaa14;
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: 600;
  }
`;

const Content = styled.div`
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 1.5rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.5rem;
      position: relative;
      align-items: left;
      text-align: left;

      &::before {
        content: "•";
        color: #dcaa14;
        position: absolute;
        left: -1.5rem;
      }
    }
  }
`;

const TermsAndConditions = () => {
  return (
    <>
      <PageContainer>
        <Navbar isHome={true} />
        <ContentWrapper>
          <Header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>Terms and Conditions</Title>
            <LastUpdated>
              Last Updated: {new Date().toLocaleDateString()}
            </LastUpdated>
          </Header>

          <Section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>
              <FiBook />
              <h2>1. Learning Content</h2>
            </SectionTitle>
            <Content>
              <p>
                By using our e-learning platform, you agree to the following
                terms regarding educational content:
              </p>
              <ul>
                <li>Content is delivered in byte-sized cards</li>
                <li>
                  Daily challenges include coding problems, quizzes, articles,
                  and communication exercises
                </li>
                <li>
                  All content is AI-prepared and curated for optimal learning
                  experience
                </li>
                <li>
                  Users receive structured career guidance and practical
                  knowledge
                </li>
                <li>
                  Content may not be reproduced or distributed without
                  permission
                </li>
              </ul>
            </Content>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>
              <FiUser />
              <h2>2. User Accounts</h2>
            </SectionTitle>
            <Content>
              <p>To access our platform's features, users must:</p>
              <ul>
                <li>Create and maintain an accurate account</li>
                <li>
                  Maintain streak consistency for optimal learning experience
                </li>
                <li>Participate in leaderboards and competitions fairly</li>
                <li>Not share account credentials with others</li>
                <li>Be responsible for all activities under their account</li>
              </ul>
            </Content>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>
              <FiShield />
              <h2>3. Privacy & Data Protection</h2>
            </SectionTitle>
            <Content>
              <p>
                We are committed to protecting your privacy and personal data:
              </p>
              <ul>
                <li>User data is encrypted and securely stored</li>
                <li>
                  Learning progress and achievements are privately maintained
                </li>
                <li>
                  Performance metrics are used for personalized learning
                  experience
                </li>
                <li>User data is never sold to third parties</li>
                <li>Users can request their data deletion at any time</li>
              </ul>
            </Content>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>
              <FiSmartphone />
              <h2>4. App Usage & Features</h2>
            </SectionTitle>
            <Content>
              <p>Our app provides various features for enhanced learning:</p>
              <ul>
                <li>Interactive writing with AI analysis and feedback</li>
                <li>Real-time coding practice with industry-level problems</li>
                <li>Daily challenges across multiple categories</li>
                <li>Leaderboard participation and streak maintenance</li>
                <li>Cross-college competition and ranking system</li>
              </ul>
            </Content>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>
              <FiDollarSign />
              <h2>5. Subscription & Payments</h2>
            </SectionTitle>
            <Content>
              <p>Terms regarding platform access and payments:</p>
              <ul>
                <li>All features remain free without subscription</li>
                <li>
                  Nowhere, StuPro will ask for any kind of payment or
                  subscription
                </li>
                <li>
                  StuPro is not responsible for any kind of payment or
                  subscription
                </li>
              </ul>
            </Content>
          </Section>
        </ContentWrapper>
      </PageContainer>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
