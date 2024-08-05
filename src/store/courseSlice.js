import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    formCourse: false,
    CourseData: {},
    CoursesList: [],
  },
  reducers: {
    toggleFormCourse: (state) => {
      state.formCourse = !state.formCourse;
    },
    setCourseData: (state, action) => {
      state.CourseData = action.payload;
    },
    setCoursesList: (state, action) => {
      state.CoursesList = action.payload;
    },
  },
});

export const { toggleFormCourse } = courseSlice.actions;
export const { setCourseData } = courseSlice.actions;
export const { setCoursesList } = courseSlice.actions;
export default courseSlice.reducer;
