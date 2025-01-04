import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myValue: 5,
  userName: "Balyon Goodness",
};

const Action = createSlice({
  name: "Global",
  initialState,
  reducers: {
    increament: (state) => {
      state.myValue += 5;
    },
  },
});

export const { increament } = Action.actions;

export default Action.reducer;
