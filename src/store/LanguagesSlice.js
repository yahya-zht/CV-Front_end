import { createSlice } from "@reduxjs/toolkit";

export const LanguagesSlice = createSlice({
  name: "Language",
  initialState: {
    Title: "",
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
    setLanguageTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const { setDataListLanguages, setDataLanguage, setLanguageTitle } =
  LanguagesSlice.actions;
export default LanguagesSlice.reducer;
