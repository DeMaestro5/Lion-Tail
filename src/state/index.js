
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: 'dark',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleMode } = globalSlice.actions;
export default globalSlice.reducer;

