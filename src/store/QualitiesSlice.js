import { createSlice } from "@reduxjs/toolkit";

export const QualitiesSlice = createSlice({
  name: "Qualities",
  initialState: {
    formQualities: false,
  },
  reducers: {
    toggleFormQualities: (state) => {
      state.formQualities = !state.formQualities;
    },
  },
});

export const { toggleFormQualities } = QualitiesSlice.actions;
export default QualitiesSlice.reducer;
