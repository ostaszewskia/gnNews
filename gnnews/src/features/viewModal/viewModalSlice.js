import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const viewModalSlice = createSlice({
  name: "isList",
  initialState,
  reducers: {
    setIsList: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setIsList } = viewModalSlice.actions;

export default viewModalSlice.reducer;
