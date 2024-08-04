import { createSlice } from "@reduxjs/toolkit";

export const PersonalDetailsSlice = createSlice({
  name: "PersonalDetails",
  initialState: {
    formPersonalDetails: false,
    DataPersonalDetails: {},
  },
  reducers: {
    setDataPersonalDetails: (state, action) => {
      state.DataPersonalDetails = action.payload;
    },
  },
});

export const { toggleFormPersonalDetails } = PersonalDetailsSlice.actions;
export const { setDataPersonalDetails } = PersonalDetailsSlice.actions;
export default PersonalDetailsSlice.reducer;
