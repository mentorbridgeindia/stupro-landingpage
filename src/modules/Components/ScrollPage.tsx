import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../UI/ScrollPage.css";
import img1 from "../../assets/homePhase.avif";
import img2 from "../../assets/AppAnalytics.avif";
import img3 from "../../assets/AppPhase1.avif";
import { Container } from "react-bootstrap";

const sections = [
  { id: "section1", title: "First Title", image: img1 },
  { id: "section2", title: "Second Title", image: img2 },
  { id: "section3", title: "Third Title", image: img3 },
];

const ScrollPage = () => {
  const [activeImage, setActiveImage] = useState(sections[0].image);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            setActiveImage(section.image);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
    <div className="scroll-container">
      {/* Left Section with Titles */}
      <div className="text-section">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="text-block">
            <h2>{section.title}</h2>
          </div>
        ))}
      </div>

      {/* Right Section - Sticky Image */}
      <div className="image-section">
        <motion.img
          key={activeImage}
          src={activeImage}
          alt="Dynamic"
          className="sticky-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
    </Container>
  );
};

export default ScrollPage;
