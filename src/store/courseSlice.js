import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    formCourse: false,
    Title: "",
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
    setCoursesTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const {
  toggleFormCourse,
  setCourseData,
  setCoursesList,
  setCoursesTitle,
} = courseSlice.actions;
export default courseSlice.reducer;
