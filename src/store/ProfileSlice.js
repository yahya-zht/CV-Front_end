import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "Profile",
  initialState: {
    formProfile: false,
  },
  reducers: {
    toggleFormProfile: (state) => {
      state.formProfile = !state.formProfile;
    },
  },
});

export const { toggleFormProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
