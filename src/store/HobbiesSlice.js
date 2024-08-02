import { createSlice } from "@reduxjs/toolkit";

export const HobbiesSlice = createSlice({
  name: "Hobby",
  initialState: {
    DataHobby: [],
    DataListHobbies: [],
  },
  reducers: {
    setDataHobby: (state, action) => {
      state.DataHobby = action.payload;
    },
    setDataListHobbies: (state, action) => {
      state.DataListHobbies = action.payload;
    },
  },
});

export const { setDataListHobbies } = HobbiesSlice.actions;
export const { setDataHobby } = HobbiesSlice.actions;
export default HobbiesSlice.reducer;
