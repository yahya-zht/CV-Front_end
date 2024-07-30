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

export default function AddForms() {
  const formCourse = useSelector((state) => state.course.formCourse);
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
    dispatch(toggleFormCourse());
  };
  const handleAddInternshipsForm = () => {
    dispatch(toggleFormInternships());
  };
  const handleAddCertificatesForm = () => {
    dispatch(toggleformCertificates());
  };
  const handleAddQualitiesForm = () => {
    dispatch(toggleFormQualities());
  };
  const handleAddExtracurricularActivitiesForm = () => {
    dispatch(toggleFormExtracurricularActivities());
  };
  const handleAddReferencesForm = () => {
    dispatch(toggleFormReferences());
  };
  const handleAddFooterForm = () => {
    dispatch(toggleFormFooter());
  };
  const handleAddProfileForm = () => {
    dispatch(toggleFormProfile());
  };
  const handleAddAchievementsForm = () => {
    dispatch(toggleFormAchievements());
  };
  return (
    <div className="mt-4  ">
      {!formCourse && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2 my-1"
          onClick={handleAddCourseForm}
        >
          <AddIcon /> Course
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
    </div>
  );
}
