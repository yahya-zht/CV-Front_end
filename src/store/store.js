import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import InternshipsReducer from "./InternshipsSlice";
import CertificatesReducer from "./CertificatesSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    Internships: InternshipsReducer,
    Certificates: CertificatesReducer,
  },
});
