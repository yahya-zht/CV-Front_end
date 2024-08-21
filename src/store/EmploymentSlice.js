import { createSlice } from "@reduxjs/toolkit";

export const EmploymentSlice = createSlice({
  name: "Employment",
  initialState: {
    Title: "",
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
    setEmploymentTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const { setDataListEmployment, setDataEmployment, setEmploymentTitle } =
  EmploymentSlice.actions;
export default EmploymentSlice.reducer;
