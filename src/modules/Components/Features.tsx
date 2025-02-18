import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import analytics from "../../assets/analytics.avif";
import homePhase from "../../assets/homePhase.jpg";
import '../UI/Feature.css'

const Features = () => {
    return(
    <Container>
     <motion.div>
            <div className="features-card">
                {/* Analytics Card */}
            <div className="feature-container">
            <div className="feature-box">
              <img src={analytics} alt="Analytics" className="feature-img" />
            </div>
            <p className="feature-text">
              Advanced analytics to track and improve user engagement.
            </p>
          </div>
  
          {/* HomePhase Card */}
          <div className="feature-container">
            <div className="feature-box">
              <img src={homePhase} alt="Home Phase" className="feature-img"/>
            </div>
            <p className="feature-text">
              Intuitive home screen layout for effortless navigation.
            </p>
          </div>
            </div>
     </motion.div>
    </Container>
    )
}

export default Features;