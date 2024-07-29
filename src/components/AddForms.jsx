import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { toggleFormCourse } from "../store/courseSlice";
import { useSelector, useDispatch } from "react-redux";
import { toggleFormInternships } from "@/store/InternshipsSlice";
import { toggleformCertificates } from "@/store/CertificatesSlice";
import { toggleFormQualities } from "@/store/QualitiesSlice";

export default function AddForms() {
  const formCourse = useSelector((state) => state.course.formCourse);
  const formInternships = useSelector(
    (state) => state.Internships.formInternships
  );
  const formCertificates = useSelector(
    (state) => state.Certificates.formCertificates
  );
  const formQualities = useSelector((state) => state.Qualities.formQualities);
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
  return (
    <div className="mt-4">
      {!formCourse && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100"
          onClick={handleAddCourseForm}
        >
          <AddIcon /> Course
        </button>
      )}
      {!formInternships && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2"
          onClick={handleAddInternshipsForm}
        >
          <AddIcon /> Internships
        </button>
      )}
      {!formCertificates && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2"
          onClick={handleAddCertificatesForm}
        >
          <AddIcon /> Certificates
        </button>
      )}
      {!formQualities && (
        <button
          className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2"
          onClick={handleAddQualitiesForm}
        >
          <AddIcon /> Qualities
        </button>
      )}
    </div>
  );
}
