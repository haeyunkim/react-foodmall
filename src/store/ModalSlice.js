import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: "No",
  mode: "",
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.show = "Yes";
    },
    notShowModal: (state) => {
      state.show = "No";
    },
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { showModal, notShowModal, changeMode } = ModalSlice.actions;
export default ModalSlice.reducer;
