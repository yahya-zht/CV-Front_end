import { createSlice } from "@reduxjs/toolkit";

export const SkillsSlice = createSlice({
  name: "Skill",
  initialState: {
    DataSkill: [],
    DataListSkills: [],
  },
  reducers: {
    setDataSkill: (state, action) => {
      state.DataSkill = action.payload;
    },
    setDataListSkills: (state, action) => {
      state.DataListSkills = action.payload;
    },
  },
});

export const { setDataListSkills } = SkillsSlice.actions;
export const { setDataSkill } = SkillsSlice.actions;
export default SkillsSlice.reducer;
