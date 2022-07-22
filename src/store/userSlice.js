import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    newUser(state, action) {
      state.arr = [...state.arr, action.payload];
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
