import { Card, Col, Row } from "react-bootstrap";

import styled from "styled-components";

const IconWrapper = styled.div<{ $index: number }>`
  min-width: 65px;
  overflow: hidden;
  height: 65px;
  position: relative;
  /* border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%; */
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;

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

const FeatureIcon = styled.img`
  background: #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  left: 17px;
  right: 0;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
`;

export const CutsSection = () => {
  const cuts = [
    {
      title: "Analytical Skills",
      description:
        "Develop critical thinking and problem-solving abilities to tackle challenges with logic and reasoning",
      icon: "https://img.icons8.com/?size=30&id=c0d5ZV9gJXwS&format=png&color=ffffff",
    },
    {
      title: "Communication Skills",
      description:
        "Master verbal, non-verbal, and written communication to express your ideas confidently",
      icon: "https://img.icons8.com/?size=30&id=qtVfONaVBJkO&format=png&color=ffffff",
    },
    {
      title: "Coding Skills",
      description:
        "Learn and improve your programming proficiency with interactive coding exercises and real-world projects",
      icon: "https://img.icons8.com/?size=30&id=qtVfONaVBJkO&format=png&color=ffffff",
    },
  ];

  const twoCuts = [
    {
      title: "Technical Skills",
      description:
        "Stay updated with the latest technologies, tools, and industry trends through hands-on learning experiences",
      icon: "https://img.icons8.com/?size=30&id=qtVfONaVBJkO&format=png&color=ffffff",
    },
    {
      title: "Comprehension Skills",
      description:
        "Enhance your reading, listening, and writing skills to grasp, interpret, and convey information effectively",
      icon: "https://img.icons8.com/?size=30&id=qtVfONaVBJkO&format=png&color=ffffff",
    },
  ];

  const renderCut = (cut: any, index: number) => {
    return (
      <Card className="cuts-card">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between gap-2">
            <IconWrapper $index={index} className="icon-wrapper">
              <FeatureIcon src={cut.icon} alt={cut.title} />
            </IconWrapper>
            <div className="d-flex justify-content-start flex-column align-items-start">
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {cut.title}
              </h3>
              <p
                style={{ fontSize: "0.9rem", lineHeight: "1.75" }}
                className="text-muted align-self-start"
              >
                {cut.description}
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="cuts-section mt-5 mx-5">
      <div className="sub-title">5 CUTS</div>
      <div style={{ margin: "1rem 10rem" }}>
        <h6
          className="mx-5"
          style={{
            lineHeight: "2.5rem",
            fontSize: "1rem",
          }}
        >
          A girl living near a forest with her grandmother had no one to buy her
          toys. Her friends shared theirs, but she longed for her own.
          Determined, she took an axe and struck a tree five times each day—no
          more, no less. Over time, the tree fell, giving her endless wood for
          toys. That's the power of consistency. Just like her, consistent
          effort leads to achieving your goals. <br />
        </h6>
      </div>
      <h5 className="fs-4 mt-4 app-text mb-4">
        Keep learning, keep preparing!
      </h5>
      <Row className="mx-5 mt-5 mb-3">
        {cuts.map((cut, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="mb-5">
            {renderCut(cut, index)}
          </Col>
        ))}
      </Row>
      <Row className="mx-5 my-2 justify-content-center">
        {twoCuts.map((cut, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="mb-5">
            {renderCut(cut, index)}
          </Col>
        ))}
      </Row>
    </div>
  );
};
