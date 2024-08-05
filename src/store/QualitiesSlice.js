import { createSlice } from "@reduxjs/toolkit";

export const QualitiesSlice = createSlice({
  name: "Qualities",
  initialState: {
    formQualities: false,
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
  },
});

export const { toggleFormQualities } = QualitiesSlice.actions;
export const { setQualitiesData } = QualitiesSlice.actions;
export const { setQualitiesList } = QualitiesSlice.actions;
export default QualitiesSlice.reducer;
