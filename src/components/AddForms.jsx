import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { toggleFormCourse } from "../store/courseSlice";
import { useSelector, useDispatch } from "react-redux";
import { toggleFormInternships } from "@/store/InternshipsSlice";
import { toggleformCertificates } from "@/store/CertificatesSlice";
import { toggleFormQualities } from "@/store/QualitiesSlice";
import { toggleFormExtracurricularActivities } from "@/store/ExtracurricularActivitiesSlice";
import { toggleFormReferences } from "@/store/ReferencesSlice";
import { toggleFormFooter } from "@/store/FooterSlice";
import { toggleFormProfile } from "@/store/ProfileSlice";
import { toggleFormAchievements } from "@/store/AchievementsSlice";
import SectionCreator from "./SectionCreator";

export default function AddForms() {
  const formCourses = useSelector((state) => state.course.formCourse);
  const formInternships = useSelector(
    (state) => state.Internships.formInternships
  );
  const formCertificates = useSelector(
    (state) => state.Certificates.formCertificates
  );
  const formQualities = useSelector((state) => state.Qualities.formQualities);

  const formExtracurricularActivities = useSelector(
    (state) => state.ExtracurricularActivities.formExtracurricularActivities
  );
  const formReferences = useSelector(
    (state) => state.References.formReferences
  );
  const formFooter = useSelector((state) => state.Footer.formFooter);
  const formProfile = useSelector((state) => state.Profile.formProfile);
  const formAchievements = useSelector(
    (state) => state.Achievements.formAchievements
  );

  const dispatch = useDispatch();

  const handleAddCourseForm = () => {
    dispatch(toggleFormCourse(true));
  };
  const handleAddInternshipsForm = () => {
    dispatch(toggleFormInternships(true));
  };
  const handleAddCertificatesForm = () => {
    dispatch(toggleformCertificates(true));
  };
  const handleAddQualitiesForm = () => {
    dispatch(toggleFormQualities(true));
  };
  const handleAddExtracurricularActivitiesForm = () => {
    dispatch(toggleFormExtracurricularActivities(true));
  };
  const handleAddReferencesForm = () => {
    dispatch(toggleFormReferences(true));
  };
  const handleAddFooterForm = () => {
    dispatch(toggleFormFooter(true));
  };
  const handleAddProfileForm = () => {
    dispatch(toggleFormProfile(true));
  };
  const handleAddAchievementsForm = () => {
    dispatch(toggleFormAchievements(true));
  };
  return (
    <div className="mt-4  ">
      {!formCourses && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2 my-1"
          onClick={handleAddCourseForm}
        >
          <AddIcon /> Courses
        </button>
      )}
      {!formInternships && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2 my-1"
          onClick={handleAddInternshipsForm}
        >
          <AddIcon /> Internships
        </button>
      )}
      {!formCertificates && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2 my-1"
          onClick={handleAddCertificatesForm}
        >
          <AddIcon /> Certificates
        </button>
      )}
      {!formQualities && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2 my-1"
          onClick={handleAddQualitiesForm}
        >
          <AddIcon /> Qualities
        </button>
      )}
      {!formExtracurricularActivities && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2 my-1"
          onClick={handleAddExtracurricularActivitiesForm}
        >
          <AddIcon />
          Extracurricular Activities
        </button>
      )}
      {!formReferences && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2 my-1"
          onClick={handleAddReferencesForm}
        >
          <AddIcon />
          References
        </button>
      )}
      {!formFooter && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2 my-1"
          onClick={handleAddFooterForm}
        >
          <AddIcon />
          Footer
        </button>
      )}
      {!formProfile && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2 my-1"
          onClick={handleAddProfileForm}
        >
          <AddIcon />
          Profile
        </button>
      )}
      {!formAchievements && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2 my-1"
          onClick={handleAddAchievementsForm}
        >
          <AddIcon />
          Achievements
        </button>
      )}
      <SectionCreator />
    </div>
  );
}
