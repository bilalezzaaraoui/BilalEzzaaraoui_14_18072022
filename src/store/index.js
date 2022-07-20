import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
