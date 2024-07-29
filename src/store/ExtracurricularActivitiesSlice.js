import { createSlice } from "@reduxjs/toolkit";

export const ExtracurricularActivitiesSlice = createSlice({
  name: "ExtracurricularActivities",
  initialState: {
    formExtracurricularActivities: false,
  },
  reducers: {
    toggleFormExtracurricularActivities: (state) => {
      state.formExtracurricularActivities =
        !state.formExtracurricularActivities;
    },
  },
});

export const { toggleFormExtracurricularActivities } =
  ExtracurricularActivitiesSlice.actions;
export default ExtracurricularActivitiesSlice.reducer;
