import { configureStore } from "@reduxjs/toolkit";
import user from "./store/loginState";

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
