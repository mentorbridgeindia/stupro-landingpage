import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const AppNavbar: React.FC = () => {
  return (
    <div className="d-flex justify-content-center w-100 top-0 ">
      <Navbar
        expand="lg"
        className=" py-3 bg-light shadow-sm w-50"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1000",
          opacity: "0.9",
          borderRadius: "25px",
        }}
      >
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#" className="fw-bold d-flex align-items-center">
            <img
              src="https://wfkq0nguanh0273r.public.blob.vercel-storage.com/stupro-logo.png"
              alt="Logo"
              className="mee-2w"
              style={{ borderRadius: "50%", width: "40px", height: "40px" }}
            />
            <span className="fs-4" style={{ fontFamily: "cursive" }}>
              St2Pro
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" style={{ fontWeight: "bold" }}>
              <Nav.Link href="#" className="text-warning fw-bold mx-3">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="mx-3">
                Features
              </Nav.Link>
              <Nav.Link href="#" className="mx-3">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
