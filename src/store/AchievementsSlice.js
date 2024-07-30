import { createSlice } from "@reduxjs/toolkit";

export const AchievementsSlice = createSlice({
  name: "Achievements",
  initialState: {
    formAchievements: false,
  },
  reducers: {
    toggleFormAchievements: (state) => {
      state.formAchievements = !state.formAchievements;
    },
  },
});

export const { toggleFormAchievements } = AchievementsSlice.actions;
export default AchievementsSlice.reducer;
