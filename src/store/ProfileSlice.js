import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "Profile",
  initialState: {
    formProfile: false,
    Title: "",
    DataProfile: { descriptionProfile: "" },
  },
  reducers: {
    toggleFormProfile: (state) => {
      state.formProfile = !state.formProfile;
    },
    setDataProfile: (state, action) => {
      state.DataProfile = action.payload;
    },
    setProfileTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const { toggleFormProfile, setProfileTitle, setDataProfile } =
  ProfileSlice.actions;
export default ProfileSlice.reducer;
