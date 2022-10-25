import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate, Routes, Route } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="main">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            배너
          </Navbar.Brand>
          <div>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/foodList");
                }}
              >
                맛집리스트
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
