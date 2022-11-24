import axios from "axios";

const reply = axios.create({
  baseURL: "http://43.200.99.107:8080/comment",
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
  },
});

export default reply;
