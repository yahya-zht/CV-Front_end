import { createSlice } from "@reduxjs/toolkit";

export const AchievementsSlice = createSlice({
  name: "Achievements",
  initialState: {
    formAchievements: false,
    Title: "",
    AchievementsData: {},
  },
  reducers: {
    toggleFormAchievements: (state) => {
      state.formAchievements = !state.formAchievements;
    },
    setAchievementsData: (state, action) => {
      state.AchievementsData = action.payload;
    },
    setAchievementsTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const {
  toggleFormAchievements,
  setAchievementsData,
  setAchievementsTitle,
} = AchievementsSlice.actions;
export default AchievementsSlice.reducer;
