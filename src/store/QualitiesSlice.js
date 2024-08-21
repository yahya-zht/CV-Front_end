import { createSlice } from "@reduxjs/toolkit";

export const QualitiesSlice = createSlice({
  name: "Qualities",
  initialState: {
    formQualities: false,
    Title: "",
    QualitiesData: {},
    QualitiesList: [],
  },
  reducers: {
    toggleFormQualities: (state) => {
      state.formQualities = !state.formQualities;
    },
    setQualitiesData: (state, action) => {
      state.QualitiesData = action.payload;
    },
    setQualitiesList: (state, action) => {
      state.QualitiesList = action.payload;
    },
    setQualitiesTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const {
  toggleFormQualities,
  setQualitiesTitle,
  setQualitiesData,
  setQualitiesList,
} = QualitiesSlice.actions;
export default QualitiesSlice.reducer;
