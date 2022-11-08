import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./store/ModalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
