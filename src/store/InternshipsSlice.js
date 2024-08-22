import { createSlice } from "@reduxjs/toolkit";

export const InternshipsSlice = createSlice({
  name: "Internships",
  initialState: {
    formInternships: false,
    Title: "",
    Edit: "",
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
    setEdit: (state, action) => {
      state.Edit = action.payload;
    },
  },
});

export const {
  toggleFormInternships,
  setInternshipsTitle,
  setInternshipsData,
  setInternshipsList,
  setEdit,
} = InternshipsSlice.actions;
export default InternshipsSlice.reducer;
