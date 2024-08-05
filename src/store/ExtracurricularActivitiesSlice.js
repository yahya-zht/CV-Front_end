import { createSlice } from "@reduxjs/toolkit";

export const ExtracurricularActivitiesSlice = createSlice({
  name: "ExtracurricularActivities",
  initialState: {
    formExtracurricularActivities: false,
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
  },
});

export const { toggleFormExtracurricularActivities } =
  ExtracurricularActivitiesSlice.actions;

export const { setExtracurricularActivitiesData } =
  ExtracurricularActivitiesSlice.actions;
export const { setExtracurricularActivitiesList } =
  ExtracurricularActivitiesSlice.actions;
export default ExtracurricularActivitiesSlice.reducer;
