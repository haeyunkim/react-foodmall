import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import FoodList from "./foodList";
import { useState } from "react";
import Login from "./Login";
import { style } from "@mui/system";
import SignUp from "./SignUp";
import { Bg } from "./Bg";

const Main = () => {
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
        {/* {loginOpen && <Login setLoginOpen={setLoginOpen} />} */}
      </Navbar>
      <Bg />
    </div>
  );
};

export default Main;
