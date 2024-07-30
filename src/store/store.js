import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import InternshipsReducer from "./InternshipsSlice";
import CertificatesReducer from "./CertificatesSlice";
import QualitiesReducer from "./QualitiesSlice";
import ExtracurricularActivitiesReducer from "./ExtracurricularActivitiesSlice";
import ReferencesReducer from "./ReferencesSlice";
import FooterReducer from "./FooterSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    Internships: InternshipsReducer,
    Certificates: CertificatesReducer,
    Qualities: QualitiesReducer,
    ExtracurricularActivities: ExtracurricularActivitiesReducer,
    References: ReferencesReducer,
    Footer: FooterReducer,
  },
});
