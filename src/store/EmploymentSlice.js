import { createSlice } from "@reduxjs/toolkit";

export const EmploymentSlice = createSlice({
  name: "Employment",
  initialState: {
    DataEmployment: [],
    DataListEmployment: [],
  },
  reducers: {
    setDataEmployment: (state, action) => {
      state.DataEmployment = action.payload;
    },
    setDataListEmployment: (state, action) => {
      state.DataListEmployment = action.payload;
    },
  },
});

export const { setDataListEmployment } = EmploymentSlice.actions;
export const { setDataEmployment } = EmploymentSlice.actions;
export default EmploymentSlice.reducer;
