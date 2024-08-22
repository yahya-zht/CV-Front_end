import { createSlice } from "@reduxjs/toolkit";

export const EmploymentSlice = createSlice({
  name: "Employment",
  initialState: {
    Title: "",
    Edit: "",
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
    setEdit: (state, action) => {
      state.Edit = action.payload;
    },
  },
});

export const {
  setDataListEmployment,
  setDataEmployment,
  setEmploymentTitle,
  setEdit,
} = EmploymentSlice.actions;
export default EmploymentSlice.reducer;
