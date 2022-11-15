import { createSlice } from "@reduxjs/toolkit";

let loginModal = createSlice({
  name: "loginModal",
  initialState: false,
  reducers: {
    changeLoginMode(state, action) {
      return (state = action.payload);
    },
  },
});

let findIdModal = createSlice({
  name: "findIdModal",
  initialState: false,
  reducers: {
    changeFindIdMode(state, action) {
      return (state = action.payload);
    },
  },
});

let findPwModal = createSlice({
  name: "findPwModal",
  initialState: false,
  reducers: {
    changeFindPwMode(state, action) {
      return (state = action.payload);
    },
  },
});

let signUpModal = createSlice({
  name: "signUpModal",
  initialState: false,
  reducers: {
    changeSignUpMode(state, action) {
      return (state = action.payload);
    },
  },
});

let reviseModal = createSlice({
  name: "reviseModal",
  initialState: false,
  reducers: {
    changeReviseMode(state, action) {
      return (state = action.payload);
    },
  },
});

let findIdConfirmModal = createSlice({
  name: "findIdConfirmModal",
  initialState: false,
  reducers: {
    changeFindIdConfirmMode(state, action) {
      return (state = action.payload);
    },
  },
});

let findPwConfirmModal = createSlice({
  name: "findPwConfirmModal",
  initialState: false,
  reducers: {
    changeFindPwConfirmMode(state, action) {
      return (state = action.payload);
    },
  },
});

export let { changeLoginMode } = loginModal.actions;
export let { changeFindIdMode } = findIdModal.actions;
export let { changeFindPwMode } = findPwModal.actions;
export let { changeSignUpMode } = signUpModal.actions;
export let { changeReviseMode } = reviseModal.actions;
export let { changeFindIdConfirmMode } = findIdConfirmModal.actions;
export let { changeFindPwConfirmMode } = findPwConfirmModal.actions;

export {
  loginModal,
  findIdModal,
  findPwModal,
  signUpModal,
  reviseModal,
  findIdConfirmModal,
  findPwConfirmModal,
};
