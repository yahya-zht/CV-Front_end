import { createSlice } from "@reduxjs/toolkit";

export const ReferencesSlice = createSlice({
  name: "References",
  initialState: {
    formReferences: false,
  },
  reducers: {
    toggleFormReferences: (state) => {
      state.formReferences = !state.formReferences;
    },
  },
});

export const { toggleFormReferences } = ReferencesSlice.actions;
export default ReferencesSlice.reducer;
