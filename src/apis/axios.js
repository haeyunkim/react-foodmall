import axios from "axios";

const api = axios.create({
  baseURL: "http://43.200.99.107:8080/member",
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
  },
});

export default api;
