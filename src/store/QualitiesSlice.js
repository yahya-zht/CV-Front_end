import { createSlice } from "@reduxjs/toolkit";

export const QualitiesSlice = createSlice({
  name: "Qualities",
  initialState: {
    formQualities: false,
    Title: "",
    Edit: "",
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
    setEdit: (state, action) => {
      state.Edit = action.payload;
    },
  },
});

export const {
  toggleFormQualities,
  setQualitiesTitle,
  setQualitiesData,
  setQualitiesList,
  setEdit,
} = QualitiesSlice.actions;
export default QualitiesSlice.reducer;
