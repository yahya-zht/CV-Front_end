"use client";
import { COLORS } from "@/constants/theme";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { setCourseData, setCoursesList, setEdit } from "@/store/courseSlice";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";

export default function Courses() {
  const [id, setIdCourse] = useState();
  const [listCourses, setListCourses] = useState([]);
  const [course, setCourse] = useState("");
  const [monthCourse, setMonthCourse] = useState("");
  const [yearCourse, setYearCourse] = useState("");
  const [descriptionCourse, setDescriptionCourse] = useState("");
  const [formCourse, setFormCourse] = useState(true);
  const [errorCourse, setErrorCourse] = useState("");
  const [edit, setEditCourse] = useState(false);
  const dispatch = useDispatch();
  const DataCourse = {
    course,
    monthCourse,
    yearCourse,
    descriptionCourse,
  };
  dispatch(setCourseData(DataCourse));
  dispatch(setCoursesList(listCourses));
  const handleForm = () => {
    setErrorCourse("");
    setFormCourse(true);
    deleteForm();
    dispatch(setEdit(false));
    setEditCourse(false);
  };
  const handleDelete = (Id) => {
    setListCourses((prev) => prev.filter((e) => e.id !== Id));
    listCourses.length == 1 && setFormCourse(true);
  };
  const deleteForm = () => {
    setIdCourse("");
    setCourse("");
    setMonthCourse("");
    setYearCourse("");
    setDescriptionCourse("");
  };
  const handleAdd = () => {
    if (!course) {
      setErrorCourse("Position is required.");
      return;
    }
    setListCourses([
      ...listCourses,
      {
        id:
          listCourses.length == 0
            ? 1
            : listCourses[listCourses.length - 1].id + 1,
        course,
        monthCourse,
        yearCourse,
        descriptionCourse,
      },
    ]);
    console.log(
      "listCourses.length ",
      listCourses.length == 0 ? 1 : listCourses[listCourses.length - 1].id
    );
    setIdCourse("");
    setCourse("");
    setMonthCourse("");
    setYearCourse("");
    setDescriptionCourse("");
    setFormCourse(false);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 35 }, (_, i) => 2024 - i);

  const handleEdit = (id) => {
    setFormCourse(true);
    const item = listCourses.find((e) => e.id === id);
    if (item) {
      setEditCourse(true);
      setIdCourse(item.id);
      setCourse(item.course);
      setMonthCourse(item.monthCourse);
      setYearCourse(item.yearCourse);
      setDescriptionCourse(item.descriptionCourse);
      setEditCourse(true);
      dispatch(setEdit(true));
    }
  };
  const handleUpdate = () => {
    if (!course) {
      setErrorCourse("Education is required.");
      return;
    }
    const updatedList = listCourses.map((item) =>
      item.id === id
        ? {
            id,
            course,
            monthCourse,
            yearCourse,
            descriptionCourse,
          }
        : item
    );
    setListCourses(updatedList);
    setFormCourse(false);
    setErrorCourse("");
    setEditCourse(false);
    dispatch(setEdit(false));
    setIdCourse("");
    setCourse("");
    setMonthCourse("");
    setYearCourse("");
    setDescriptionCourse("");
  };

  return (
    <div className="">
      {formCourse && (
        <div>
          <div className="my-2">
            <label htmlFor="Course" className="ps-1 text-sm text-gray-500">
              Course
            </label>
            <input
              type="text"
              id="Course"
              placeholder="Course"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            {errorCourse && (
              <div>
                <div className="text-red-500 text-sm">{errorCourse}</div>
              </div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="monthCourse" className="ps-1 text-sm text-gray-500">
              Period
            </label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <select
                id="monthCourse"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={monthCourse}
                onChange={(e) => setMonthCourse(e.target.value)}
              >
                <option value="" disabled>
                  Month
                </option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                id="yearCourse"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={yearCourse}
                onChange={(e) => setYearCourse(e.target.value)}
              >
                <option value="" disabled>
                  Year
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="descriptionCourse"
              className="ps-1 text-sm text-gray-500"
            >
              Description
            </label>
            <textarea
              id="descriptionCourse"
              placeholder="Description"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={descriptionCourse}
              onChange={(e) => setDescriptionCourse(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-row justify-end">
            <button
              className="p-1 text-red-600 hover:text-red-500 me-2"
              onClick={deleteForm}
            >
              <DeleteForeverIcon />
            </button>
            {edit ? (
              <button
                onClick={handleUpdate}
                className="p-1 text-white bg-blue-950 hover:border-blue-950 bottom-2 border-2 rounded-lg hover:bg-white hover:text-blue-950"
              >
                <SaveAsIcon /> Update
              </button>
            ) : (
              <button
                onClick={handleAdd}
                className="p-1 pe-2 text-white bg-blue-950 hover:border-blue-950 bottom-2 border-2 rounded-lg hover:bg-white hover:text-blue-950"
              >
                <DoneIcon /> Done
              </button>
            )}
          </div>
        </div>
      )}

      {listCourses.length > 0 && (
        <div className="">
          {listCourses.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.course}</p>
              </div>
              <div>
                <button
                  className="p-1 text-blue-900 hover:text-gray-500 me-2"
                  onClick={() => handleEdit(item.id)}
                >
                  <EditIcon />
                </button>
                <button
                  className="p-1 text-red-600 hover:text-red-500 me-2"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteForeverIcon />
                </button>
              </div>
            </div>
          ))}
          <div className="">
            <button
              className="p-1 mt-2 text-blue-950 bg-white border-blue-950 bottom-2 border-2 rounded-lg hover:bg-blue-950 hover:text-white"
              onClick={handleForm}
            >
              <AddIcon /> Add Course
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
