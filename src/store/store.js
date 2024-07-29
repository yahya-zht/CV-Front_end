import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import InternshipsReducer from "./InternshipsSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    Internships: InternshipsReducer,
  },
});
