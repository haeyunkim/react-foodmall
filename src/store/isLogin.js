import { createSlice } from "@reduxjs/toolkit";

let isLogin = createSlice({
  name: "isLogin",
  initialState: {
    isLogin: false,
  },
  reducers: {
    changeLogin(state, action) {
      isLogin = true;
    },
  },
});

export default isLogin;
export let { changeLogin } = isLogin.actions;
