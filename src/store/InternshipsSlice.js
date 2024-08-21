import { createSlice } from "@reduxjs/toolkit";

export const InternshipsSlice = createSlice({
  name: "Internships",
  initialState: {
    formInternships: false,
    Title: "",
    InternshipsData: {},
    InternshipsList: [],
  },
  reducers: {
    toggleFormInternships: (state) => {
      state.formInternships = !state.formInternships;
    },
    setInternshipsData: (state, action) => {
      state.InternshipsData = action.payload;
    },
    setInternshipsList: (state, action) => {
      state.InternshipsList = action.payload;
    },
    setInternshipsTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const {
  toggleFormInternships,
  setInternshipsTitle,
  setInternshipsData,
  setInternshipsList,
} = InternshipsSlice.actions;
export default InternshipsSlice.reducer;
