import { createSlice } from "@reduxjs/toolkit";

export const EducationSlice = createSlice({
  name: "Education",
  initialState: {
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
  },
});

export const { setDataListEducation } = EducationSlice.actions;
export const { setDataEducation } = EducationSlice.actions;
export default EducationSlice.reducer;
