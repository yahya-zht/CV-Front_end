import { createSlice } from "@reduxjs/toolkit";

export const SkillsSlice = createSlice({
  name: "Skill",
  initialState: {
    Title: "",
    Edit: "",
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
    setEdit: (state, action) => {
      state.Edit = action.payload;
    },
  },
});

export const { setDataListSkills, setDataSkill, setSkillTitle, setEdit } =
  SkillsSlice.actions;
export default SkillsSlice.reducer;
