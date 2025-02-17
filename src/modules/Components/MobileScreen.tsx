import React from "react";

const MobileScreen: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px", // Adjust margin as needed
      }}
    >
      {/* Mobile Frame */}
      <div
        style={{
          width: "375px",
          height: "800px",
          border: "15px solid black",
          borderRadius: "40px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          backgroundColor: "black",
        }}
      >
        {/* Scrollable Content */}
        <div
          style={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
            backgroundColor: "#000",
            padding: "10px",
          }}
        >
          {/* <img
            src={require("../assets/image.png")} // Ensure correct path
            alt="Mobile UI"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
