import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const countArticlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
      countArticles: (state, action) => {
        state.value = action.payload
      },
    },
  });
  
  export const { countArticles } = countArticlesSlice.actions;
  
  export default countArticlesSlice.reducer;