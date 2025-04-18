import { motion } from "framer-motion";
import {
  FiDatabase,
  FiEye,
  FiLock,
  FiShield,
  FiTrash2,
  FiUserPlus,
} from "react-icons/fi";
import styled from "styled-components";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

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

const Emphasis = styled.span`
  color: #dcaa14;
  font-weight: 500;
`;

const PrivacyPolicy = () => {
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
            <Title>Privacy Policy</Title>
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
              <FiUserPlus />
              <h2>1. Information We Collect</h2>
            </SectionTitle>
            <Content>
              <p>
                We collect only essential information needed to provide you with
                our e-learning services:
              </p>
              <ul>
                <li>Name (for personalization)</li>
                <li>
                  Email address (for account management and communications)
                </li>
                <li>College name (for institutional grouping)</li>
                <li>Company (if applicable, for professional networking)</li>
                <li>Department (for relevant content delivery)</li>
              </ul>
              <p>
                <Emphasis>Note:</Emphasis> We do not collect any additional
                personal information beyond these basic details.
              </p>
            </Content>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>
              <FiDatabase />
              <h2>2. Learning Data & Usage</h2>
            </SectionTitle>
            <Content>
              <p>Your learning journey is private and protected:</p>
              <ul>
                <li>Progress tracking and achievement data</li>
                <li>Performance in challenges and quizzes</li>
                <li>Coding practice submissions</li>
                <li>Writing exercise responses</li>
                <li>Streak and participation records</li>
              </ul>
              <p>
                <Emphasis>Important:</Emphasis> All learning data is kept
                strictly confidential and is never shared with third parties.
              </p>
            </Content>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>
              <FiLock />
              <h2>3. Data Security</h2>
            </SectionTitle>
            <Content>
              <p>We implement robust security measures to protect your data:</p>
              <ul>
                <li>End-to-end encryption for all personal data</li>
                <li>Secure storage on protected servers</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to authorized personnel only</li>
                <li>Industry-standard security protocols</li>
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
              <FiEye />
              <h2>4. Data Usage & Purpose</h2>
            </SectionTitle>
            <Content>
              <p>Your data is used exclusively for:</p>
              <ul>
                <li>Providing personalized learning experiences</li>
                <li>Tracking individual progress and achievements</li>
                <li>Generating anonymous usage statistics</li>
                <li>Improving our educational content</li>
                <li>Maintaining leaderboards (using display names only)</li>
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
              <h2>5. Your Privacy Rights</h2>
            </SectionTitle>
            <Content>
              <p>You have complete control over your data:</p>
              <ul>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your account and associated data</li>
                <li>Right to opt-out of non-essential communications</li>
                <li>Right to download your learning data</li>
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
              <FiTrash2 />
              <h2>6. Data Deletion</h2>
            </SectionTitle>
            <Content>
              <p>You can request complete deletion of your data:</p>
              <ul>
                <li>Account deletion removes all personal information</li>
                <li>Learning data is permanently erased</li>
                <li>Backup data is removed within 30 days</li>
                <li>Deletion requests are processed within 48 hours</li>
                <li>Confirmation email sent after successful deletion</li>
              </ul>
              <p>
                <Emphasis>Note:</Emphasis> Some anonymous, aggregated data may
                be retained for platform improvement purposes.
              </p>
            </Content>
          </Section>
        </ContentWrapper>
      </PageContainer>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
