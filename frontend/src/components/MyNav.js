import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import logoImage from "../assets/logo.png";

const MyNav = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        <LinkContainer to="/" style={{ cursor: "pointer" }}>
          <Navbar.Brand>
            <img
              src={logoImage}
              alt="logo"
              style={{ height: "100px", width: "100px" }}
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/about" style={{ cursor: "pointer" }}>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
