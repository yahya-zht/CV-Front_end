import { createSlice } from "@reduxjs/toolkit";

export const ReferencesSlice = createSlice({
  name: "References",
  initialState: {
    formReferences: false,
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
  },
});

export const { toggleFormReferences } = ReferencesSlice.actions;
export const { setDataReferences } = ReferencesSlice.actions;
export const { setDataListReferences } = ReferencesSlice.actions;
export default ReferencesSlice.reducer;
