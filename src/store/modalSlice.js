import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    open(state) {
      state.isOpen = true;
    },
    logout(state) {
      state.isOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
