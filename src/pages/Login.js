import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import api from "../apis/axios";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Login.css";
import FindId from "../components/FindId";

const Login = ({
  findIdOpenModal,
  loginOpenModal,
  loginCloseModal,
  loginModal,
  findIdModal,
  findIdCloseModal,
  findPwCloseModal,
  findPwModal,
  findPwOpenModal,
}) => {
  let navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  const onChangeId = (e) => {
    const idRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const idCurrent = e.target.value;

    setId(idCurrent);

    if (!idRegex.test(idCurrent)) {
      setIdMessage("이메일 형식이 틀렸습니다! 다시 확인해주세요");
      setIsId(false);
    } else {
      setIdMessage("올바른 이메일 형식입니다");
      setIsId(true);
    }
  };

  const onChangePw = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const pwCurrent = e.target.value;
    setPw(pwCurrent);

    if (!passwordRegex.test(pwCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호입니다.");
      setIsPw(true);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      register();
    }
  };

  const register = () => {
    axios
      .post("http://43.200.99.107:8080/login", {
        email: id,
        password: pw,
      })
      .then((res) => {
        console.log(res.data);
        const refreshToken = res.data.refreshToken;
        const accessToken = res.data.key;

        window.localStorage.setItem("accessToken", JSON.stringify(accessToken));

        window.alert("로그인에 성공했습니다.");
        navigate("/");
        // if (result.message === "success") {
        //   console.log(result);
        //   window.localStorage.setItem("token", result.access_token);
        // }
      })
      .catch((error) => {
        console.log(error);
        window.alert("등록되지 않은 아이디입니다");
      });
  };

  return (
    <>
      {loginModal ? (
        <div className="overflow">
          <Container className="login-wrapper" component="main" maxWidth="xs">
            <div className="box-wrapper">
              <div className="login-box">
                <div className="login-title-container">
                  <div className="login-title">로그인창</div>
                  <button className="login-close-btn" onClick={loginCloseModal}>
                    x
                  </button>
                </div>
                <form className="signup-form">
                  <TextField
                    onChange={onChangeId}
                    onKeyPress={handleEnter}
                    className="TextField"
                    type="text"
                    margin="normal"
                    label="Email Address"
                    required
                    fullWidth
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  {id.length > 0 && (
                    <span
                      className={` ${isId ? "success-email2" : "error-email2"}`}
                    >
                      {idMessage}
                    </span>
                  )}
                  <TextField
                    onChange={onChangePw}
                    onKeyPress={handleEnter}
                    className="TextField"
                    label="PassWord"
                    type="password"
                    required
                    fullWidth
                    name="password"
                    autoComplete="current-password"
                  />
                  {pw.length > 0 && (
                    <span className={`message ${isPw ? "success" : "error"}`}>
                      {pwMessage}
                    </span>
                  )}
                </form>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    register();
                  }}
                >
                  로그인
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link onClick={findIdOpenModal}>
                      아이디를 찾으시겠습니까?
                    </Link>
                  </Grid>
                  <Grid item xs>
                    <Link onClick={findPwOpenModal}>
                      비밀번호를 찾으시겠습니까?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      onClick={() => {
                        navigate("/signup");
                      }}
                      className="findPw"
                    >
                      회원가입하시겠습니까?
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Container>
          <FindId />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Login;
