import { configureStore } from "@reduxjs/toolkit";
import {
  loginModal,
  findIdModal,
  findPwModal,
  signUpModal,
  reviseModal,
  findIdConfirmModal,
  findPwConfirmModal,
} from "./store/loginModal";

export default configureStore({
  reducer: {
    loginModal: loginModal.reducer,
    findIdModal: findIdModal.reducer,
    findPwModal: findPwModal.reducer,
    signUpModal: signUpModal.reducer,
    reviseModal: reviseModal.reducer,
    findIdConfirmModal: findIdConfirmModal.reducer,
    findPwConfirmModal: findPwConfirmModal.reducer,
  },
});
