import { Card, Col, Container, Row } from "react-bootstrap";
import { ReactComponent as EllipseCard } from "../assets/EllipseCard.svg";
import { ReactComponent as LeftEllipseCard } from "../assets/LeftEllipseCard.svg";
import { ReactComponent as RightEllipseCard } from "../assets/RightEllipseCard.svg";
import { ReactComponent as AI } from "../assets/ai.svg";
import { ReactComponent as ByteIcon } from "../assets/byte.svg";
import { ReactComponent as Guide } from "../assets/guide.svg";
import { ReactComponent as Hand } from "../assets/hand.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import FallingText from '../reactBits/FallingText/FallingText';
import ShinyText from '../reactBits/ShineyText/ShineyText';
import "../reactBits/ShineyText/ShinewText.css";
import "./BentoGrid.css";
const BentoGrid = () => {
  return (
    <Container fluid className="bento-grid animate__animated animate__fadeIn">
      <div className="sub-title">HOW IT WORKS?</div>
      <Card style={{ backgroundColor: "#28304D" }} className="mx-3 my-3">
        <Card.Body>
          <Row className="g-3">
            <Col md={12} lg={3}>
              <div className="d-flex flex-column justify-content-between gap-2">
                <Card className="shiny-text left-card" style={{ animationDuration: "5s" }}>
                  <Card.Body>
                    <ByteIcon />
                    <h3 className=" mt-3 text-white mb-2">
                      Byte sized learning
                    </h3>
                    <h6 className="pt-5">Content not exceeding </h6>
                    <h1 className="left-text">400</h1>
                    <h6>characters per card</h6>
                  </Card.Body>
                </Card>
                <Card className="left-card h-500">
                  <Card.Body>
                    {/* <h1 className="left-text left-num">5 cuts</h1>
                    <h6 className="text-white">Daily Challenges</h6>
                    <div className="cat-1 cat-text">
                      <span className="ellipse pink"></span>
                      <h6 className="">Sentence</h6>
                    </div>
                    <div className="cat-2  cat-text">
                      <span className="ellipse blue"></span>
                      <h6 className="cat-2-text">Coding</h6>
                    </div>
                    <div className="cat-3  cat-text">
                      <span className="ellipse green"></span>
                      <h6 className="cat-2-text">Quiz</h6>
                    </div>
                    <div className="cat-4  cat-text">
                      <span className="ellipse yellow"></span>
                      <h6 className="cat-2-text">Article</h6>
                    </div>
                    <div className="cat-5  cat-text">
                      <span className="ellipse purple"></span>
                      <h6 className="cat-2-text">Knowledge</h6>
                    </div> */}
                    <FallingText
                      // text={`In today's Bits article, we explore animated components in React through a fun coding quiz to boost your knowledge sentence by sentence.`}
                      text = {` React Bits Animated Components Simplify Sentence Coding Quiz Knowledge Article `}
                      highlightWords={["React", "Bits", "animated", "components", "simplify","sentence","coding","quiz","knowledge","article"]}
                      highlightClass="highlighted"
                      trigger="hover"
                      backgroundColor="transparent"
                      wireframes={false}
                      gravity={0.56}
                      fontSize="2rem"
                      mouseConstraintStiffness={0.9}
/>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <EllipseCard />
                <div className="position-absolute top-50 start-50 translate-middle logo">
                  <Logo />
                </div>
                <div className="d-flex justify-content-center gap-2 w-100">
                  <LeftEllipseCard />
                  <RightEllipseCard />
                </div>
              </div>
            </Col>
            <Col md={12} lg={3}>
              <div className="d-flex flex-column justify-content-between gap-2">
                <Card className="left-card right-card">
                  <Card.Body>
                    <div className="d-flex justify-content-end">
                      <AI />
                    </div>
                    <h3 className="text-white mt-3">AI prepared content</h3>
                  </Card.Body>
                </Card>
                <Card className="left-card right-card">
                  <Card.Body>
                    <Guide />
                    <h3 className="text-white mt-5 mb-2">40%</h3>
                    <h5 className="mb-2">More Job Readiness</h5>
                    <p className="text-white">
                      Structured career guidance - no more guessing, clear
                      data-backed advice.
                    </p>
                  </Card.Body>
                </Card>
                <Card className="left-card right-card">
                  <Card.Body>
                    <div className="d-flex justify-content-end flex-column align-items-end">
                      <Hand />
                      <h6 className="text-white mt-2 left-text">
                        For the Students, By the Students, To the Students
                      </h6>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BentoGrid;
