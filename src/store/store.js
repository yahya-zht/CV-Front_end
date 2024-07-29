import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import InternshipsReducer from "./InternshipsSlice";
import CertificatesReducer from "./CertificatesSlice";
import QualitiesReducer from "./QualitiesSlice";
import ExtracurricularActivitiesReducer from "./ExtracurricularActivitiesSlice";
import ReferencesReducer from "./ReferencesSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    Internships: InternshipsReducer,
    Certificates: CertificatesReducer,
    Qualities: QualitiesReducer,
    ExtracurricularActivities: ExtracurricularActivitiesReducer,
    References: ReferencesReducer,
  },
});
