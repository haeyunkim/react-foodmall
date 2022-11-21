import axios from "axios";

const storeApi = axios.create({
  baseURL: "http://43.200.99.107:8080/store",
});

export default storeApi;
