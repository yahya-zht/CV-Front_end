import { createSlice } from "@reduxjs/toolkit";

export const FooterSlice = createSlice({
  name: "Footer",
  initialState: {
    formFooter: false,
  },
  reducers: {
    toggleFormFooter: (state) => {
      state.formFooter = !state.formFooter;
    },
  },
});

export const { toggleFormFooter } = FooterSlice.actions;
export default FooterSlice.reducer;
