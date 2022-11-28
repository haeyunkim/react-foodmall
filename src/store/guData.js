import { createSlice } from "@reduxjs/toolkit";

let guData = createSlice({
  name: "guData",
  initialState: "",
  reducers: {
    setGuData(state, action) {
      return (state = action.payload);
    },
  },
});

export let { setGuData } = guData.actions;

export { guData };
