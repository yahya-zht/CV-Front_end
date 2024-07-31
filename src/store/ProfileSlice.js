import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "Profile",
  initialState: {
    formProfile: false,
    DataProfile: { descriptionProfile: "" },
  },
  reducers: {
    toggleFormProfile: (state) => {
      state.formProfile = !state.formProfile;
    },
    setDataProfile: (state, action) => {
      state.DataProfile = action.payload;
    },
  },
});

export const { toggleFormProfile } = ProfileSlice.actions;
export const { setDataProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
