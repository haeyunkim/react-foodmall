import axios from "axios";

const LoginCheck = () => {
  const LoginToken = window.localStorage.getItem("accessToken");
  return axios({
    method: "post",
    url: "http://43.200.99.107:8080/admin",
    headers: {
      Authorization: `${LoginCheck}`,
    },
  })
    .then((res) => {
      console.log("success");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default LoginCheck;
