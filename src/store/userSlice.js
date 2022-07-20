import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    newUser(state, action) {
      state.arr = [
        ...state.arr,
        action.payload,
        // {
        //   firstName: action.payload.firstName,
        //   lastName: action.payload.lastName,
        //   startDate: action.payload.startDate,
        //   department: action.payload.department,
        //   dateOfBirth: action.payload.dateOfBirth,
        //   street: action.payload.street,
        //   city: action.payload.city,
        //   state: action.payload.state,
        //   zipCode: action.payload.zipCode,
        // },
      ];
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
