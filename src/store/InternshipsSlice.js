import { createSlice } from "@reduxjs/toolkit";

export const InternshipsSlice = createSlice({
  name: "Internships",
  initialState: {
    formInternships: false,
  },
  reducers: {
    toggleFormInternships: (state) => {
      state.formInternships = !state.formInternships;
    },
  },
});

export const { toggleFormInternships } = InternshipsSlice.actions;
export default InternshipsSlice.reducer;
