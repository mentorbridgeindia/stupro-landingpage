import React, { useEffect, useState } from "react";

const MobileScreen: React.FC = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY * 0.5); // Adjust speed if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{marginTop:"200px"}}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginLeft:"200px",
      }}
    >
      {/* Mobile Frame */}
      <div
        style={{
          width: "275px",
          height: "600px",
          overflow: "hidden",
          position: "relative",
          border: "15px solid black",
          borderRadius: "40px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          backgroundColor: "black",
          transform: "translate(-50%, -50%)",
          margin: "40px auto",
        }}
      >
        {/* Scrollable Image */}
        <div style={{ height: "100%", overflow: "hidden", position: "relative" }}>
          <img
            src={require("../../assets/homepage .png")} // Ensure correct path
            alt="Mobile UI"
            style={{
              width: "150%",
              marginLeft: "-55%",
              position: "absolute",
              top: `-${scrollPos}px`, // Moves image up as page scrolls
              transition: "top 0.2s ease-out",
            }}
          />
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default MobileScreen;
