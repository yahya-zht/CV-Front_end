import { createSlice } from "@reduxjs/toolkit";

export const HobbiesSlice = createSlice({
  name: "Hobby",
  initialState: {
    Title: "",
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
    setHobbyTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const { setDataListHobbies, setDataHobby, setHobbyTitle } =
  HobbiesSlice.actions;
export default HobbiesSlice.reducer;
