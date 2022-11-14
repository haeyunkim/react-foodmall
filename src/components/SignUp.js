import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SignUpPopUp from "../popup/SignupPopup";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import api from "../apis/axios";

const SignUp = ({ signUpCloseModal, signUpModal }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [name, setName] = useState("");
  const [jumin1, setJumin1] = useState("");
  const [jumin2, setJumin2] = useState("");
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
  const onlyKorean = (e) => {
    if (e.key.match(/[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g)) {
      e.target.value = e.target.value.replace(
        /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g,
        ""
      );
    }
  };

  const onlyNumber = (e) => {
    if (e.key.match(/[^0-9]/g)) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
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
    api
      .post("/join", {
        email: email,
        password: pw,
        name: name,
        frontRrn: jumin1,
        backRrn: jumin2,
        number: num,
      })
      .then((res) => {
        console.log(res);
        console.log("success");
        // localStorage.setItem("signupData", JSON.stringify(res.data));
        window.alert("회원가입에 성공했습니다.");
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.message);
        if (error.response.data.message === "이미 회원가입 되어있습니다.") {
          return window.alert("이미 회원가입 되어있습니다.");
        }
        if (error.response.data.message === "이미 존재하는 이메일입니다.") {
          return window.alert("이미 존재하는 이메일입니다.");
        }
      });
  };

  return (
    <>
      {signUpModal ? (
        <div className="signup-big-container">
          <Container id="signUp-wrapper" component="main" maxWidth="xs">
            <div className="box-wrapper">
              <div className="signUp-box">
                <div className="signup-title-wrapper">
                  <div className="signup-title-item1">
                    <img
                      className="signup-taste-daejeon"
                      src="data:image/jpeg;base64,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"
                      width="10%"
                    />
                    <h2 className="signup-title">회원가입</h2>
                  </div>
                  <div className="signup-close-btn-wrapper">
                    <button
                      className="signup-close-btn"
                      onClick={signUpCloseModal}
                    >
                      x
                    </button>
                  </div>
                </div>
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
                      className={` ${
                        isEmail ? "success-email" : "error-email"
                      }`}
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
                    <span
                      className={`message ${isPassword ? "success" : "error"}`}
                    >
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
                      className={`message ${
                        isPasswordCheck ? "success" : "error"
                      }`}
                    >
                      {passwordCheckMessage}
                    </span>
                  )}
                  <div className="name-area">
                    <TextField
                      onKeyUp={onlyKorean}
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

                  <div className="jumin-area">
                    <TextField
                      onKeyPress={handleEnter}
                      onChange={(e) => {
                        setJumin1(e.target.value);
                      }}
                      onKeyUp={onlyNumber}
                      className="TextField jumin-input"
                      margin="normal"
                      label="주민번호 앞자리"
                      required
                      fullWidth
                      name="jumin1"
                      autoComplete="주민번호"
                    />
                    <div>-</div>
                    <TextField
                      onKeyPress={handleEnter}
                      onChange={(e) => {
                        setJumin2(e.target.value);
                      }}
                      onKeyUp={onlyNumber}
                      type="password"
                      className="TextField jumin-input"
                      margin="normal"
                      label="주민번호 뒷자리"
                      required
                      fullWidth
                      name="jumin2"
                      autoComplete="주민번호"
                    />
                  </div>

                  <div className="num-area">
                    <TextField
                      onKeyPress={handleEnter}
                      onChange={onchangeNumber}
                      onKeyUp={onlyNumber}
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
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SignUp;
