import { createSlice } from "@reduxjs/toolkit";

export const InternshipsSlice = createSlice({
  name: "Internships",
  initialState: {
    formInternships: false,
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
  },
});

export const { toggleFormInternships } = InternshipsSlice.actions;
export const { setInternshipsData } = InternshipsSlice.actions;
export const { setInternshipsList } = InternshipsSlice.actions;
export default InternshipsSlice.reducer;
