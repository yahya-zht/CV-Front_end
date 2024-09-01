import { createSlice } from "@reduxjs/toolkit";

export const ReferencesSlice = createSlice({
  name: "References",
  initialState: {
    formReferences: false,
    Title: "",
    Edit: "",
    DataReferences: [],
    DataListReferences: [],
  },
  reducers: {
    toggleFormReferences: (state, action) => {
      state.formReferences = action.payload;
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
    setEdit: (state, action) => {
      state.Edit = action.payload;
    },
  },
});

export const {
  toggleFormReferences,
  setReferencesTitle,
  setDataReferences,
  setDataListReferences,
  setEdit,
} = ReferencesSlice.actions;
export default ReferencesSlice.reducer;
