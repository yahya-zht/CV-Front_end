import { createSlice } from "@reduxjs/toolkit";
export const SectionSlice = createSlice({
  name: "Section",
  initialState: {
    formEntries: 0,
    EditEntries: [],
    EntriesTitle: [],
    DataEntries: [],
    ListDataEntries: [],
    formSkills: 0,
    EditSkills: [],
    SkillsTitle: [],
    DataSkills: [],
    ListDataSkills: [],
    formList: 0,
    EditList: [],
    ListTitle: [],
    DataList: [],
    ListDataList: [],
    formDescription: 0,
    DescriptionTitle: [],
    DataDescription: [],
    ListDataDescription: [],
  },
  reducers: {
    setFormEntries: (state) => {
      state.formEntries = state.formEntries + 1;
      state.EntriesTitle.push({});
      state.DataEntries.push({});
      state.ListDataEntries.push([]);
    },
    setEditEntries: (state, action) => {
      const { index, data } = action.payload;
      state.EditEntries[index] = data;
    },
    setEntriesTitle: (state, action) => {
      const { index, data } = action.payload;
      state.EntriesTitle[index] = data;
    },
    setDataEntries: (state, action) => {
      const { index, data } = action.payload;
      state.DataEntries[index] = data;
    },
    setDataListEntries: (state, action) => {
      const { index, data } = action.payload;
      state.ListDataEntries[index] = data;
    },
    setFormSkills: (state) => {
      state.formSkills = state.formSkills + 1;
      state.SkillsTitle.push({});
      state.DataSkills.push({});
      state.ListDataSkills.push([]);
    },
    setEditSkills: (state, action) => {
      const { index, data } = action.payload;
      state.EditSkills[index] = data;
    },
    setSkillsTitle: (state, action) => {
      const { index, data } = action.payload;
      state.SkillsTitle[index] = data;
    },
    setDataSkills: (state, action) => {
      const { index, data } = action.payload;
      state.DataSkills[index] = data;
    },
    setDataListSkills: (state, action) => {
      const { index, data } = action.payload;
      state.ListDataSkills[index] = data;
    },
    setFormList: (state) => {
      state.formList = state.formList + 1;
      state.ListTitle.push({});
      state.DataList.push({});
      state.ListDataList.push([]);
    },
    setEditList: (state, action) => {
      const { index, data } = action.payload;
      state.EditList[index] = data;
    },
    setListTitle: (state, action) => {
      const { index, data } = action.payload;
      state.ListTitle[index] = data;
    },
    setDataList: (state, action) => {
      const { index, data } = action.payload;
      state.DataList[index] = data;
    },
    setListDataList: (state, action) => {
      const { index, data } = action.payload;
      state.ListDataList[index] = data;
    },
    setFormDescription: (state) => {
      state.formDescription = state.formDescription + 1;
      state.DescriptionTitle.push({});
      state.DataDescription.push({});
      state.ListDataDescription.push([]);
    },
    setDescriptionTitle: (state, action) => {
      const { index, data } = action.payload;
      state.DescriptionTitle[index] = data;
    },
    setDataDescription: (state, action) => {
      const { index, data } = action.payload;
      state.DataDescription[index] = data;
    },
    setListDataDescription: (state, action) => {
      const { index, data } = action.payload;
      state.ListDataDescription[index] = data;
    },
    setDelete: (state, action) => {
      const { index, type } = action.payload;
      switch (type) {
        case "Entries":
          state.EntriesTitle.splice(index, 1);
          state.DataEntries.splice(index, 1);
          state.ListDataEntries.splice(index, 1);
          state.formEntries -= 1;
          break;
        case "Description":
          state.DescriptionTitle.splice(index, 1);
          state.DataDescription.splice(index, 1);
          state.ListDataDescription.splice(index, 1);
          state.formDescription -= 1;
          break;
        case "List":
          state.ListTitle.splice(index, 1);
          state.DataList.splice(index, 1);
          state.ListDataList.splice(index, 1);
          state.formList -= 1;
          break;
        case "Skills":
          state.SkillsTitle.splice(index, 1);
          state.DataSkills.splice(index, 1);
          state.ListDataSkills.splice(index, 1);
          state.formSkills -= 1;
          break;
        default:
          break;
      }
    },
    setFormDescriptionSave: (state, action) => {
      state.formDescription = action.payload;
    },
    setDataDescriptionSave: (state, action) => {
      state.DataDescription = action.payload;
    },
    setDescriptionTitleSave: (state, action) => {
      state.DescriptionTitle = action.payload;
    },
    setFormListSave: (state, action) => {
      state.formList = action.payload;
    },
    setDataListSave: (state, action) => {
      state.DataList = action.payload;
    },
    setListTitleSave: (state, action) => {
      state.ListTitle = action.payload;
    },
    setListDataListSave: (state, action) => {
      state.ListDataList = action.payload;
    },
    setFormSkillsSave: (state, action) => {
      state.formSkills = action.payload;
    },
    setDataSkillSave: (state, action) => {
      state.DataSkills = action.payload;
    },
    setSkillsTitleSave: (state, action) => {
      state.SkillsTitle = action.payload;
    },
    setListDataSkillsSave: (state, action) => {
      state.ListDataSkills = action.payload;
    },
    setformEntriesSave: (state, action) => {
      state.formEntries = action.payload;
    },
    setDataEntriesSave: (state, action) => {
      state.DataEntries = action.payload;
    },
    setEntriesTitleSave: (state, action) => {
      state.EntriesTitle = action.payload;
    },
    setListDataEntriesSave: (state, action) => {
      state.ListDataEntries = action.payload;
    },
  },
});

export const {
  setFormDescriptionSave,
  setDescriptionTitleSave,
  setDataDescriptionSave,
  setFormListSave,
  setDataListSave,
  setListTitleSave,
  setListDataListSave,
  setSkillsTitleSave,
  setDataSkillSave,
  setFormSkillsSave,
  setListDataSkillsSave,
  setformEntriesSave,
  setDataEntriesSave,
  setEntriesTitleSave,
  setListDataEntriesSave,
  setFormEntries,
  setEntriesTitle,
  setDataEntries,
  setDataListEntries,
  setFormSkills,
  setSkillsTitle,
  setDataSkills,
  setDataListSkills,
  setFormList,
  setListTitle,
  setDataList,
  setListDataList,
  setFormDescription,
  setDescriptionTitle,
  setDataDescription,
  setListDataDescription,
  setDelete,
  setEditEntries,
  setEditSkills,
  setEditList,
} = SectionSlice.actions;

export default SectionSlice.reducer;
