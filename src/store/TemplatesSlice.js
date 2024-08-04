import { createSlice } from "@reduxjs/toolkit";

export const TemplatesSlice = createSlice({
  name: "Templates",
  initialState: {
    Zoom: 0.58,
    TemplateSelected: 1,
  },
  reducers: {
    setZoom: (state, action) => {
      state.Zoom = action.payload;
    },
    setTemplateSelected: (state, action) => {
      state.TemplateSelected = action.payload;
    },
  },
});

export const { setZoom } = TemplatesSlice.actions;
export const { setTemplateSelected } = TemplatesSlice.actions;
export default TemplatesSlice.reducer;
