import { createSlice } from "@reduxjs/toolkit";

export const ExtracurricularActivitiesSlice = createSlice({
  name: "ExtracurricularActivities",
  initialState: {
    formExtracurricularActivities: false,
    Title: "",
    Edit: "",
    ExtracurricularActivitiesData: {},
    ExtracurricularActivitiesList: [],
  },
  reducers: {
    toggleFormExtracurricularActivities: (state, action) => {
      state.formExtracurricularActivities = action.payload;
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
    setEdit: (state, action) => {
      state.Edit = action.payload;
    },
  },
});

export const {
  toggleFormExtracurricularActivities,
  setExtracurricularActivitiesData,
  setExtracurricularActivitiesList,
  setExtracurricularActivitiesTitle,
  setEdit,
} = ExtracurricularActivitiesSlice.actions;
export default ExtracurricularActivitiesSlice.reducer;
