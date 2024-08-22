import { createSlice } from "@reduxjs/toolkit";

export const HobbiesSlice = createSlice({
  name: "Hobby",
  initialState: {
    Title: "",
    Edit: "",
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
    setEdit: (state, action) => {
      state.Edit = action.payload;
    },
  },
});

export const { setDataListHobbies, setDataHobby, setHobbyTitle, setEdit } =
  HobbiesSlice.actions;
export default HobbiesSlice.reducer;
