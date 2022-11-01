import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: {
    id: "",
    pw: "",
    idMessage: "",
    pwMessage: "",
    isId: false,
    isPw: false,
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
      state.idMessage = action.payload;
      state.pwMessage = action.payload;
      state.isId = action.payload;
      state.isPw = action.payload;
    },
  },
});

export default user;
