import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { toggleFormCourse } from "../store/courseSlice";
import { useSelector, useDispatch } from "react-redux";

export default function AddForms() {
  const formCourse = useSelector((state) => state.course.formCourse);
  const dispatch = useDispatch();

  const handleAddCourseForm = () => {
    dispatch(toggleFormCourse());
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
    </div>
  );
}
