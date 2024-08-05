import { createSlice } from "@reduxjs/toolkit";

export const FooterSlice = createSlice({
  name: "Footer",
  initialState: {
    formFooter: false,
    FooterData: {},
  },
  reducers: {
    toggleFormFooter: (state) => {
      state.formFooter = !state.formFooter;
    },
    setFooterData: (state, action) => {
      state.FooterData = action.payload;
    },
  },
});

export const { toggleFormFooter } = FooterSlice.actions;
export const { setFooterData } = FooterSlice.actions;
export default FooterSlice.reducer;
