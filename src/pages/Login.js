import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import {
  changeFindIdMode,
  changeFindPwMode,
  changeLoginMode,
  changeSignUpMode,
} from "../store/loginModal";

const Login = ({ setLoginStatus }) => {
  let dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  let loginModal = useSelector((state) => state.loginModal);

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
      /^(?=.*[a-zA-Z])(?=.*[!@#$% ^*+=-])(?=.*[0-9]).{8,25}$/;
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
      console.log("enter");
      e.preventDefault();
      register();
    }
  };

  const register = () => {
    axios
      .post("http://43.200.99.107:8080/member/login", {
        email: id,
        password: pw,
      })
      .then((res) => {
        console.log(res.data);
        const refreshToken = res.data.rtk;
        const accessToken = res.data.atk;

        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("refreshToken", refreshToken);
        axios.defaults.headers.common["Authorization"] = `${accessToken}`;

        window.alert("로그인에 성공했습니다.");
        dispatch(changeLoginMode(false));
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
        window.alert("등록되지 않은 아이디입니다");
      });
  };

  const handleFindIdOpen = () => {
    dispatch(changeLoginMode(false));
    dispatch(changeFindIdMode(true));
  };

  const handleFindPwOpen = () => {
    dispatch(changeFindPwMode(true));
    dispatch(changeLoginMode(false));
  };
  const handleSignUpOpen = () => {
    dispatch(changeLoginMode(false));
    dispatch(changeSignUpMode(true));
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
                  <button
                    className="login-close-btn"
                    onClick={() => {
                      dispatch(changeLoginMode(false));
                    }}
                  >
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
                    <Link onClick={handleFindIdOpen}>
                      아이디를 찾으시겠습니까?
                    </Link>
                  </Grid>
                  <Grid item xs>
                    <Link onClick={handleFindPwOpen}>
                      비밀번호를 찾으시겠습니까?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link onClick={handleSignUpOpen} className="findPw">
                      회원가입하시겠습니까?
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Login;
