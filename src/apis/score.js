import axios from "axios";

const Score = axios.create({
  baseURL: "http://43.200.99.107:8080/score/add",
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
  },
});

export default Score;
