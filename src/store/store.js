import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import InternshipsReducer from "./InternshipsSlice";
import CertificatesReducer from "./CertificatesSlice";
import QualitiesReducer from "./QualitiesSlice";
import ExtracurricularActivitiesReducer from "./ExtracurricularActivitiesSlice";
import ReferencesReducer from "./ReferencesSlice";
import FooterReducer from "./FooterSlice";
import ProfileReducer from "./ProfileSlice";
import AchievementsReducer from "./AchievementsSlice";
import PersonalDetailsReducer from "./PersonalDetailsSlice";
import EducationReducer from "./EducationSlice";
import SkillsReducer from "./SkillsSlice";
import LanguagesReducer from "./LanguagesSlice";
import HobbiesReducer from "./HobbiesSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    Internships: InternshipsReducer,
    Certificates: CertificatesReducer,
    Qualities: QualitiesReducer,
    ExtracurricularActivities: ExtracurricularActivitiesReducer,
    References: ReferencesReducer,
    Footer: FooterReducer,
    Profile: ProfileReducer,
    Achievements: AchievementsReducer,
    PersonalDetailsStore: PersonalDetailsReducer,
    Education: EducationReducer,
    Skills: SkillsReducer,
    Languages: LanguagesReducer,
    Hobbies: HobbiesReducer,
  },
});
