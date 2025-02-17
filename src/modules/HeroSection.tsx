import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { ReactComponent as Check } from "../assets/check.svg";
import NavBar from "./Components/NavBar";
import AppNavbar from "./Components/NavBar";
import MobileScreen from "./Components/MobileScreen";


const HeroSection: React.FC = () => {
  return (
    <>
    
    <Container
      fluid
      className="text-center py-5 d-flex align-items-center justify-content-center"
      style={{ minHeight: "50vh" }}
    >
      <div
        id="globe"
        className="position-absolute end-0 top-10 mt-sm-3 mt-7 me-lg-7 peekaboo"
      >
        <canvas
          width="700"
          height="654"
          className="w-lg-100 h-lg-100 w-75 h-75 me-lg-0 me-n10 mt-lg-5"
          style={{ width: "700px", height: "654.594px" }}
        ></canvas>
      </div>
      <Row className="w-100">
  <Col md={12} className="d-flex flex-column align-items-center">
    <h1 
      className="display-4 fw-bold text-center mt-5 mb-3" 
      style={{
        background: "linear-gradient(90deg, #FFA800, #FF5733)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}
    >
      Empowering Students <br /> with Smart Solutions
    </h1>
    <p className="lead text-muted text-center mt-3 mb-3" style={{fontWeight:"bold"}}>
      A platform designed to enhance learning, collaboration, and <br />
      innovation for students worldwide.
    </p>
  </Col>
</Row>

      
    </Container>
    </>
  );
};

export default HeroSection;