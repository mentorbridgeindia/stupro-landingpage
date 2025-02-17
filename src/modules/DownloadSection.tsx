import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { FaDownload } from 'react-icons/fa'; // Icon for download

const DownloadCard = () => {
  return (
    <div style={{marginTop:"100px",marginLeft:"25%"}}>
    <Card
      className="bg-light text-white"
      style={{ width: "75%", height: "250px", marginTop: "10px", display: 'flex', background: 'linear-gradient(to bottom, #F3c431, rgba(221, 222, 163, 1))' }}
    >
      <Card.Body
        style={{
          color: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {/* Left side - Title, Description, and Download Button */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          {/* Icon */}
          <FaDownload style={{ fontSize: "30px", marginBottom: "10px",marginLeft:"10%", color: "#FF8C00" }} />
          
          {/* Title */}
          <Card.Title style={{ marginLeft: "10%", fontSize: "1.25rem", fontWeight: "bold" }}>
            Download StuPro
          </Card.Title>

          {/* Description */}
          <Card.Text style={{ marginLeft: "10%", fontSize: "0.9rem", color: "black" }}>
            Click the button below to download the StuPro app and start connecting with peers!
          </Card.Text>

          {/* Download Button */}
          <Button variant="primary" style={{ marginLeft: "10%" }}>
            Download
          </Button>
        </div>

        {/* Right side - Image */}
        <div style={{ flex: 1 }}>
          <img
            src="https://via.placeholder.com/100" // Replace with your image URL
            alt="StuPro App"
            style={{
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default DownloadCard
