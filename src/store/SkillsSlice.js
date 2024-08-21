import { createSlice } from "@reduxjs/toolkit";

export const SkillsSlice = createSlice({
  name: "Skill",
  initialState: {
    Title: "",
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
    setSkillTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const { setDataListSkills, setDataSkill, setSkillTitle } =
  SkillsSlice.actions;
export default SkillsSlice.reducer;
