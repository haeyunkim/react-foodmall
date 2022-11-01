import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import SignUpPopUp from "../popup/SignupPopup";
import { useNavigate } from "react-router-dom";
import SignUpBg from "../components/Bg";
import Footer from "../components/Footer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [num, setNum] = useState("");
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();
  // 오류 메시지 출력
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordCheckMessage, setPasswordCheckMessage] = useState("");
  const [numberMessage, setNumberMessage] = useState("");
  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordCheck, setIsPasswordCheck] = useState(false);
  const [isNumber, setIsNumber] = useState(false);

  const onChangeEmail = (e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다! 다시 확인해주세요");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다");
      setIsEmail(true);
    }
  };

  const onChangePassWord = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPw(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setCheckPw(passwordConfirmCurrent);

    if (passwordConfirmCurrent === pw) {
      setPasswordCheckMessage("비밀번호를 똑같이 입력하셨습니다");
      setIsPasswordCheck(true);
    } else {
      setPasswordCheckMessage("비밀번호가 틀립니다. 다시 확인해주세요");
      setIsPasswordCheck(false);
    }
  };

  const onchangeNumber = (e) => {
    const onchangeNumberCurrent = e.target.value;
    setNum(onchangeNumberCurrent);

    if (onchangeNumberCurrent.includes("-")) {
      setNumberMessage("-를 빼고 입력해주세요!");
      setIsNumber(false);
    } else if (isNaN(onchangeNumberCurrent)) {
      setNumberMessage("숫자만 입력해주세요!");
      setIsNumber(false);
    } else {
      setNumberMessage("올바른 전화번호 형식입니다!");
      setIsNumber(true);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSignUp();
    }
  };

  const handleSignUp = () => {
    if (pw !== checkPw) {
      setPopUp(true);
    }
    if (email === "" || pw === "") {
      window.alert("아이디와 비밀번호를 입력해주세요!");
      return;
    }
    if (name === "") {
      window.alert("이름을 입력해주세요!");
      return;
    }
    if (num === "") {
      window.alert("핸드폰 번호를 입력해주세요!");
      return;
    }
    // if (date === "") {
    //   window.alert("생년월일을 입력해주세요!");
    //   return;
    // }
    axios
      .post(
        "http://43.200.99.107:8080/join",
        {
          email: email,
          password: pw,
          name: name,
          birth: date,
          number: num,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log("success");
        localStorage.setItem("signupData", JSON.stringify(res.data));
        window.alert("회원가입에 성공했습니다.");
        navigate("/");
      })
      .catch((error) => {
        window.alert("중복된 아이디값입니다.");
      });
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <Container className="signUp-wrapper" component="main" maxWidth="xs">
        <div className="box-wrapper">
          <div className="signUp-box">
            <div className="signup-title">회원가입</div>
            <form>
              <TextField
                onKeyPress={handleEnter}
                onChange={onChangeEmail}
                className="TextField Email-input"
                margin="normal"
                label="Email Address"
                required
                fullWidth
                name="email"
                autoComplete="email"
                autoFocus
              />
              {email.length > 0 && (
                <span
                  className={` ${isEmail ? "success-email" : "error-email"}`}
                >
                  {emailMessage}
                </span>
              )}

              <div id="passWard-input">
                <TextField
                  onKeyPress={handleEnter}
                  onChange={onChangePassWord}
                  className="TextField"
                  label="PassWord"
                  type="password"
                  required
                  fullWidth
                  name="password"
                  autoComplete="current-password"
                />
              </div>
              {pw.length > 0 && (
                <span className={`message ${isPassword ? "success" : "error"}`}>
                  {passwordMessage}
                </span>
              )}

              <div id="check-pw">
                <TextField
                  onKeyPress={handleEnter}
                  onChange={onChangePasswordConfirm}
                  className="TextField ch-pw-input"
                  label="Check PassWord"
                  type="password"
                  required
                  fullWidth
                  name="password"
                  autoComplete="current-password"
                />
              </div>
              {checkPw.length > 0 && (
                <span
                  className={`message ${isPasswordCheck ? "success" : "error"}`}
                >
                  {passwordCheckMessage}
                </span>
              )}
              <div className="name-area">
                <TextField
                  onKeyPress={handleEnter}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="TextField name-input"
                  margin="normal"
                  label="name"
                  required
                  fullWidth
                  name="name"
                  autoComplete="name"
                />
              </div>

              <div className="date-area">
                <TextField
                  onKeyPress={handleEnter}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  type="date"
                  className="TextField date-input"
                  id="date"
                  margin="normal"
                  // label="birth"
                  required
                  fullWidth
                  name="birth"
                  autoComplete="birth"
                />
              </div>

              <div className="num-area">
                <TextField
                  onKeyPress={handleEnter}
                  onChange={onchangeNumber}
                  className="TextField number-input"
                  margin="normal"
                  label="number"
                  required
                  fullWidth
                  name="number"
                  autoComplete="number"
                />
                {num.length > 0 && (
                  <span className={`${isNumber ? "success" : "error"}`}>
                    {numberMessage}
                  </span>
                )}
              </div>
            </form>

            <Button
              onClick={() => {
                handleSignUp();
              }}
              className="checkBtn"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
          </div>
          <div className="modal-layer"></div>
        </div>
      </Container>
      <div className="signUp-footer-wrapper">
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
