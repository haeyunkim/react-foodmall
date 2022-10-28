import { useEffect } from "react";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Revise from "./Revise";

const Header = () => {
  let navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setLoginStatus(true);
    } else {
      console.log("값이 없습니다.");
    }
  }, []);

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
              {loginStatus ? (
                <Nav.Link onClick={openModal}>회원정보수정</Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </div>
        </Container>
      </Navbar>
      <Revise openModal={openModal} closeModal={closeModal} modal={modal} />
      {modal ? <div className="popup-bg"></div> : <></>}
    </div>
  );
};

export default Header;
