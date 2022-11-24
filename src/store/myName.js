import { createSlice } from "@reduxjs/toolkit";

let myName = createSlice({
  name: "myName",
  initialState: "",
  reducers: {
    setMyName(state, action) {
      return (state = action.payload);
    },
  },
});

export let { setMyName } = myName.actions;

export { myName };
