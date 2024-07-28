import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    formCourse: false,
  },
  reducers: {
    toggleFormCourse: (state) => {
      state.formCourse = !state.formCourse;
    },
  },
});

export const { toggleFormCourse } = courseSlice.actions;
export default courseSlice.reducer;
