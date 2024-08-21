import { createSlice } from "@reduxjs/toolkit";

export const ExtracurricularActivitiesSlice = createSlice({
  name: "ExtracurricularActivities",
  initialState: {
    formExtracurricularActivities: false,
    Title: "",
    ExtracurricularActivitiesData: {},
    ExtracurricularActivitiesList: [],
  },
  reducers: {
    toggleFormExtracurricularActivities: (state) => {
      state.formExtracurricularActivities =
        !state.formExtracurricularActivities;
    },
    setExtracurricularActivitiesData: (state, action) => {
      state.ExtracurricularActivitiesData = action.payload;
    },
    setExtracurricularActivitiesList: (state, action) => {
      state.ExtracurricularActivitiesList = action.payload;
    },
    setExtracurricularActivitiesTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const {
  toggleFormExtracurricularActivities,
  setExtracurricularActivitiesData,
  setExtracurricularActivitiesList,
  setExtracurricularActivitiesTitle,
} = ExtracurricularActivitiesSlice.actions;
export default ExtracurricularActivitiesSlice.reducer;
