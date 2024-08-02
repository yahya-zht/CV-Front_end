import { createSlice } from "@reduxjs/toolkit";

export const LanguagesSlice = createSlice({
  name: "Language",
  initialState: {
    DataLanguage: [],
    DataListLanguages: [],
  },
  reducers: {
    setDataLanguage: (state, action) => {
      state.DataLanguage = action.payload;
    },
    setDataListLanguages: (state, action) => {
      state.DataListLanguages = action.payload;
    },
  },
});

export const { setDataListLanguages } = LanguagesSlice.actions;
export const { setDataLanguage } = LanguagesSlice.actions;
export default LanguagesSlice.reducer;
