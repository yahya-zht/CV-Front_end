import { createSlice } from "@reduxjs/toolkit";

export const EducationSlice = createSlice({
  name: "Education",
  initialState: {
    Title: "",
    DataEducation: [],
    DataListEducation: [],
  },
  reducers: {
    setDataEducation: (state, action) => {
      state.DataEducation = action.payload;
    },
    setDataListEducation: (state, action) => {
      state.DataListEducation = action.payload;
    },
    setEducationTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const { setDataListEducation, setDataEducation, setEducationTitle } =
  EducationSlice.actions;
export default EducationSlice.reducer;
