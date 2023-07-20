import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 20,
};

export const cakeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value !== 0) {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      if (action.payload) {
        state.value += action.payload;
      }
    },
    decrementByAmount: (state, action) => {
      if (action.payload) {
        const cStateValue = state.value;
        const result = cStateValue - action.payload;
        if (result >= 0) {
          state.value -= action.payload;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  cakeSlice.actions;

export default cakeSlice.reducer;
