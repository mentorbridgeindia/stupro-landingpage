import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import appPhase from "../../assets/appPhase.avif";
import '../UI/GameChanger.css'

const GameChanger = () => {
  const [isTextVisible, setTextVisible] = useState(false);
  const [isImageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        setTextVisible(scrollY > 100);
        
        setImageVisible(scrollY > 400);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      {/* Title and Description */}
      
      <motion.div
        className="text-container"
        style={{position:'sticky'}}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isTextVisible ? 1 : 0, x: isTextVisible ? 0 : -50 }}
        transition={{ duration: 0.8 }}
      >

      </motion.div>
      <motion.div
        className="app-phase-container"
        style={{left: 100}}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isImageVisible ? 1 : 0, y: isImageVisible ? 0 : 50 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="desc-content">
          <div>
            <h1 className="main-title">Amazing Mobile Experience</h1>
          </div>
          <div>
            <p className="description">
              Experience the best mobile solutions with seamless performance and
              stunning visuals.
            </p>
          </div>
        </div>
        <img src={appPhase} alt="Mobile" className="app-phase-img" />
        <div className="app-phase-text">
          <h3>Revolutionizing Mobile</h3>
          <p>
            Our mobile app ensures efficiency, speed, and an engaging
            experience, making it the perfect companion for modern users.
          </p>
        </div>
      </motion.div>
    </Container>
  );
};

export default GameChanger;
