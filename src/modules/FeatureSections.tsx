import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { FaRocket } from 'react-icons/fa'; // You can choose a different icon if needed

const FeatureSections = () => {
  return (
    <div style={{ alignItems: "left", marginLeft: "25%" }}>
      <Row className="d-flex">
        <h1 className='fw-bold' style={{ textAlign: 'left' }}>Features</h1>
        <div>
          <Card
            className="bg-light text-white"
            style={{ width: "75%", height: "150px", marginTop: "10px" }}
          >
            <Card.Body
              style={{
                color: "black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                {/* Icon */}
                <FaRocket style={{ fontSize: "30px", marginBottom: "10px", color: "#FF8C00" }} />
                {/* StuPro–themed title */}
                <Card.Title style={{ marginLeft: "10%", fontSize: "1.25rem", fontWeight: "bold" }}>
                  Connect, Collaborate, & Grow with StuPro
                </Card.Title>
                {/* Description */}
                <Card.Text style={{ marginLeft: "10%", fontSize: "0.9rem", color: "black" }}>
                  Empowering students to share knowledge and build a thriving community.
                </Card.Text>
              </div>
              {/* Image on the right side of the card */}
              <img
                src="https://via.placeholder.com/100" // Replace with your image URL
                alt="StuPro Feature"
                style={{ height: "100%", objectFit: "cover", borderRadius: "5px" }}
              />
            </Card.Body>
          </Card>
        </div>
      </Row>
      {/* Use gx-0 to reduce horizontal gutter between columns */}
      <Row className="gx-0" style={{ marginLeft: 0, marginRight: 0 }}>
  <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Card
      style={{
        width: "550px",
        height: "210px",
        marginTop: "10px",
        background: "linear-gradient(to bottom, #F3c431, rgba(221, 222, 163, 1))"
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "10px"
        }}
      >
        <Card.Title style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          stupro
        </Card.Title>
        <Card.Title style={{ fontSize: "1rem" }}>
          stupro
        </Card.Title>
      </Card.Body>
    </Card>
  </Col>

  <Col style={{ paddingLeft: 0, paddingRight: 0 ,marginRight:"20px"}}>
    <Card
      style={{
        width: "50%",
        height: "100px",
        marginTop: "10px",
        background: "linear-gradient(to bottom, #F3c431, rgba(221, 222, 163, 1))"
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "5px"
        }}
      >
        <Card.Title style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          stupro
        </Card.Title>
        <Card.Title style={{ fontSize: "1rem" }}>
          stupro
        </Card.Title>
      </Card.Body>
    </Card>
    <Card
      style={{
        width: "50%",
        height: "100px",
        marginTop: "10px",
        background: "linear-gradient(to bottom, #F3c431, rgba(221, 222, 163, 1))"
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "5px"
        }}
      >
        <Card.Title style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          stupro
        </Card.Title>
        <Card.Title style={{ fontSize: "1rem" }}>
          stupro
        </Card.Title>
      </Card.Body>
    </Card>
  </Col>
</Row>

    </div>
  )
}

export default FeatureSections
