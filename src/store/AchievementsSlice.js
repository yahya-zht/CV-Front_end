import { createSlice } from "@reduxjs/toolkit";

export const AchievementsSlice = createSlice({
  name: "Achievements",
  initialState: {
    formAchievements: false,
    AchievementsData: {},
  },
  reducers: {
    toggleFormAchievements: (state) => {
      state.formAchievements = !state.formAchievements;
    },
    setAchievementsData: (state, action) => {
      state.AchievementsData = action.payload;
    },
  },
});

export const { toggleFormAchievements, setAchievementsData } =
  AchievementsSlice.actions;
export default AchievementsSlice.reducer;
