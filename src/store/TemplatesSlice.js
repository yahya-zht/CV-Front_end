import { createSlice } from "@reduxjs/toolkit";

export const TemplatesSlice = createSlice({
  name: "Templates",
  initialState: {
    Zoom: 0.55,
    TemplateSelected: 1,
    Color: "",
    FontSize: "",
    FontFamily: "",
  },
  reducers: {
    setZoom: (state, action) => {
      state.Zoom = action.payload;
    },
    setTemplateSelected: (state, action) => {
      state.TemplateSelected = action.payload;
    },
    setColor: (state, action) => {
      state.Color = action.payload;
    },
    setFontSize: (state, action) => {
      state.FontSize = action.payload;
    },
    setFontFamily: (state, action) => {
      state.FontFamily = action.payload;
    },
  },
});

export const {
  setZoom,
  setTemplateSelected,
  setColor,
  setFontSize,
  setFontFamily,
} = TemplatesSlice.actions;
export default TemplatesSlice.reducer;
