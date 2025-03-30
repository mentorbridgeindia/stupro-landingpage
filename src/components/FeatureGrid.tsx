import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const GridContainer = styled.section`
  padding: 8rem 5%;
  position: relative;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(180px, auto));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BentoCard = styled(motion.div)<{ $gridArea?: string }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  grid-area: ${(props) => props.$gridArea};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    .icon-wrapper {
      border-radius: 50%;
    }
  }
`;

const MainFeatureCard = styled(BentoCard)`
  grid-column: span 2;
  grid-row: span 2;
  background: linear-gradient(
    135deg,
    rgba(255, 107, 107, 0.1),
    rgba(78, 205, 196, 0.1)
  );

  @media (max-width: 768px) {
    grid-column: span 1;
    grid-row: span 1;
  }

  &:hover {
    .icon-wrapper {
      border-radius: 50%;
    }
  }
`;

const FeatureIcon = styled.div`
  /* font-size: 2.5rem; */
  /* margin-bottom: 1.5rem; */
  /* background: linear-gradient(120deg, #dcaa14, #dcaa14); */
  background: #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  left: 0;
  right: 0;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
  font-size: 1rem;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureQuote = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
  font-size: 1rem;
  margin-top: 1rem;

  &::before {
    content: "“";
    margin-right: 0.5rem;
  }

  &::after {
    content: "”";
    margin-left: 0.5rem;
  }
`;

const IconWrapper = styled.div<{ $index: number }>`
  width: 100px;
  height: 100px;
  font-size: 45px;
  position: relative;
  color: var(--whiteColor);
  transition: var(--transition);
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;

  ${(props) =>
    props.$index === 0 &&
    `
    background: linear-gradient(44.44deg, #ed2775 7.79%, #ff7448 94.18%);
  `}

  ${(props) =>
    props.$index === 1 &&
    `
    background: linear-gradient(44.44deg, #3f75ff 7.79%, #4adeff 94.18%);
  `}

  ${(props) =>
    props.$index === 2 &&
    `
    background: linear-gradient(44.44deg, #ff4b3f 7.79%, #ffac30 94.18%);
  `}

  ${(props) =>
    props.$index === 3 &&
    `
    background: linear-gradient(45.24deg, #9f5ff1 5.99%, #ff54b0 91.87%);
  `}

  ${(props) =>
    props.$index === 4 &&
    `
    background: linear-gradient(45deg, #19bddd 0%, #2696e1 100%);
  `}
`;

const StatItem = styled.div`
  h4 {
    font-size: 2rem;
    color: #dcaa14;
    margin-bottom: 0.5rem;
  }
  p {
    color: #e0e0e0;
    font-size: 0.9rem;
  }
`;

const features = [
  {
    icon: "🚀",
    title: "Byte-Sized Learning",
    description:
      "Trending content, curated for you, delivered in card-based slides under 450 characters.",
    quote: "No fluff, just facts.",
    gridArea: "main",
    stats: [
      {
        value: "50-60%",
        label: "Faster Learning",
        description:
          "No more scrolling through irrelevant content—just high-impact insights curated for maximum results in minimum time.",
      },
      {
        value: "40%",
        label: "More Job Readiness",
        description:
          "Structured career guidance means no more guessing what to put on your resume or LinkedIn—just clear, data-backed advice.",
      },
      {
        value: "30%",
        label: "More Practical Knowledge",
        description:
          "Real-world coding challenges, quizzes, products, and repos help you bridge the theory-to-practice gap faster than ever.",
      },
      {
        value: "100%",
        label: "More Confidence",
        description:
          "You won’t just learn—you’ll actually apply and master skills that make you job-ready.",
      },
    ],
  },
  {
    icon: "🔒",
    title: "Daily Career Challenges",
    description:
      "One article, one coding problem, one quiz, one sentence, one tech fact to improve communication.",
    quote: "Small daily wins that add up BIG over time.",
  },
  {
    icon: "🎯",
    title: "Real-Time Coding Practice",
    description:
      "Get real industry-level coding problems based on your preferred language and skill level. Get the challenge and try at your own coding environment.",
    quote: "Not just LeetCode—REAL problems.",
  },
  {
    icon: "🔄",
    title: "Interactive Writing",
    description:
      "Write and get AI analysis and feedback on your own writing. No more dry, boring writing exercises. ",
    quote: "Just write and get better",
  },
  {
    icon: "📱",
    title: "Leaderboard & Streaks",
    description:
      "Compete with students from various colleges, maintain streaks, and see how you rank in learning, coding, and quizzes.",
    quote: "Learning should be as addictive as social media.",
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
      <div className="sub-title">FEATURES</div>
      <BentoGrid>
        {features.map((feature, index) =>
          feature.gridArea === "main" ? (
            <MainFeatureCard
              key={index}
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <IconWrapper $index={index} className="icon-wrapper">
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                </IconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <FeatureQuote>{feature.quote}</FeatureQuote>
                <StatsContainer>
                  {feature.stats?.map((stat, statIndex) => (
                    <StatItem key={statIndex}>
                      <h4>{stat.value}</h4>
                      <p>{stat.label}</p>
                    </StatItem>
                  ))}
                </StatsContainer>
              </div>
            </MainFeatureCard>
          ) : (
            <BentoCard
              key={index}
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper className="icon-wrapper" $index={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureQuote>{feature.quote}</FeatureQuote>
            </BentoCard>
          )
        )}
      </BentoGrid>
    </GridContainer>
  );
};

export default FeatureGrid;
