import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiCode,
  FiTrendingUp,
  FiAward,
  FiEdit3,
  FiUsers,
} from "react-icons/fi";

const GridContainer = styled.section`
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

const SectionTitle = styled(motion.div)`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #dcaa14, transparent);
  }

  h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    background: linear-gradient(120deg, #dcaa14, #ffd700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
  }

  p {
    color: #e0e0e0;
    font-size: clamp(1.1rem, 1.5vw, 1.25rem);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
  }
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BentoCard = styled(motion.div)<{ $span?: string }>`
  grid-column: ${(props) => props.$span ?? "span 4"};
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(220, 170, 20, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }

    .icon-wrapper {
      transform: scale(1.1) rotate(10deg);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

const IconWrapper = styled(motion.div)<{ $index: number }>`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 2rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-size: 2rem;

  ${(props) => {
    const gradients = [
      "linear-gradient(135deg, #FF6B6B, #FFE66D)",
      "linear-gradient(135deg, #4ECDC4, #556270)",
      "linear-gradient(135deg, #FF8008, #FFC837)",
      "linear-gradient(135deg, #7F7FD5, #86A8E7)",
      "linear-gradient(135deg, #654EA3, #EAAFC8)",
    ];
    return `background: ${gradients[props.$index % gradients.length]};`;
  }}

  &::after {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.75rem;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 1.25rem;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeatureDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const FeatureQuote = styled.div`
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  font-style: italic;
  color: #dcaa14;
  font-size: 1rem;
  margin-top: auto;
  border-left: 2px solid #dcaa14;
  border-right: 2px solid #dcaa14;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(220, 170, 20, 0.2);
  }

  h4 {
    font-size: 2.5rem;
    color: #dcaa14;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    color: #ffffff;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const features = [
  {
    icon: <FiTrendingUp />,
    title: "Byte-Sized Learning",
    description:
      "Trending content, curated for you, delivered in card-based slides under 450 characters.",
    quote: "No fluff, just facts",
    span: "span 6",
  },
  {
    icon: <FiAward />,
    title: "Daily Career Challenges",
    description:
      "One article, one coding problem, one quiz, one sentence, one tech fact to improve communication.",
    quote: "Small daily wins that add up BIG over time",
    span: "span 6",
  },
  {
    icon: <FiCode />,
    title: "Coding Practice",
    description:
      "Get real industry-level coding problems based on your preferred language and skill level.",
    quote: "Not just LeetCode—REAL problems",
    span: "span 4",
  },
  {
    icon: <FiEdit3 />,
    title: "Interactive Writing",
    description:
      "Write and get AI analysis and feedback on your own writing. No more dry, boring writing exercises.",
    quote: "Just write and get better",
    span: "span 4",
  },
  {
    icon: <FiUsers />,
    title: "Leaderboard",
    description:
      "Compete with students from various colleges, maintain streaks, and see how you rank.",
    quote: "Learning should be as addictive",
    span: "span 4",
  },
];

const FeatureGrid = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / card.offsetWidth) * 100;
    const y = ((e.clientY - rect.top) / card.offsetHeight) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <GridContainer>
      <GlowBackground />
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Powerful Features</h2>
        <p>
          Experience a new way of learning with our cutting-edge features
          designed to accelerate your growth and maximize your potential.
        </p>
      </SectionTitle>

      <BentoGrid>
        {features.map((feature, index) => (
          <BentoCard
            key={index}
            $span={feature.span}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="d-flex align-items-center gap-3">
              <IconWrapper $index={index} className="icon-wrapper">
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
            </div>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <FeatureQuote>{feature.quote}</FeatureQuote>
          </BentoCard>
        ))}
      </BentoGrid>
    </GridContainer>
  );
};

export default FeatureGrid;
