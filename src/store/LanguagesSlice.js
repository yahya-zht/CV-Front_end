import { createSlice } from "@reduxjs/toolkit";

export const LanguagesSlice = createSlice({
  name: "Language",
  initialState: {
    Title: "",
    Edit: "",
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
    setEdit: (state, action) => {
      state.Edit = action.payload;
    },
  },
});

export const {
  setDataListLanguages,
  setDataLanguage,
  setLanguageTitle,
  setEdit,
} = LanguagesSlice.actions;
export default LanguagesSlice.reducer;
