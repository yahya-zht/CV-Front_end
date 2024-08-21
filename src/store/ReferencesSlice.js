import { createSlice } from "@reduxjs/toolkit";

export const ReferencesSlice = createSlice({
  name: "References",
  initialState: {
    formReferences: false,
    Title: "",
    DataReferences: [],
    DataListReferences: [],
  },
  reducers: {
    toggleFormReferences: (state) => {
      state.formReferences = !state.formReferences;
    },
    setDataReferences: (state, action) => {
      state.DataReferences = action.payload;
    },
    setDataListReferences: (state, action) => {
      state.DataListReferences = action.payload;
    },
    setReferencesTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const {
  toggleFormReferences,
  setReferencesTitle,
  setDataReferences,
  setDataListReferences,
} = ReferencesSlice.actions;
export default ReferencesSlice.reducer;
