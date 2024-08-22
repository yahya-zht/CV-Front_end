"use client";
import { COLORS } from "@/constants/theme";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import {
  setDataEmployment,
  setDataListEmployment,
  setEdit,
} from "@/store/EmploymentSlice";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";

export default function Employment() {
  const [id, setIdEmployment] = useState();
  const [listEmployment, setListEmployment] = useState([]);
  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [cityEmployment, setCityEmployment] = useState("");
  const [startMonthEmployment, setStartMonthEmployment] = useState("");
  const [startYearEmployment, setStartYearEmployment] = useState("");
  const [endMonthEmployment, setEndMonthEmployment] = useState("");
  const [endYearEmployment, setEndYearEmployment] = useState("");
  const [descriptionEmployment, setDescriptionEmployment] = useState("");
  const [formEmployment, setFormEmployment] = useState(true);
  const [errorEmployment, setErrorEmployment] = useState("");
  const [edit, setEditEmployment] = useState(false);

  const dispatch = useDispatch();
  dispatch(setDataListEmployment(listEmployment));

  const DataEmployment = {
    position,
    employer,
    cityEmployment,
    startMonthEmployment,
    startYearEmployment,
    endMonthEmployment,
    endYearEmployment,
    descriptionEmployment,
  };
  dispatch(setDataEmployment(DataEmployment));

  const handleForm = () => {
    setErrorEmployment("");
    setFormEmployment(true);
    dispatch(setEdit(false));
    deleteForm();
    setEditEmployment(false);
  };
  const handleDelete = (Id) => {
    setListEmployment((prev) => prev.filter((e) => e.id !== Id));
    listEmployment.length == 1 && setFormEmployment(true);
  };
  const deleteForm = () => {
    setIdEmployment("");
    setPosition("");
    setEmployer("");
    setCityEmployment("");
    setStartMonthEmployment("");
    setStartYearEmployment("");
    setEndMonthEmployment("");
    setEndYearEmployment("");
    setDescriptionEmployment("");
  };
  const handleAdd = () => {
    if (!position) {
      setErrorEmployment("Position is required.");
      return;
    }
    setListEmployment([
      ...listEmployment,
      {
        id:
          listEmployment.length == 0
            ? 1
            : listEmployment[listEmployment.length - 1].id + 1,
        position,
        employer,
        cityEmployment,
        startMonthEmployment,
        startYearEmployment,
        endMonthEmployment,
        endYearEmployment,
        descriptionEmployment,
      },
    ]);
    console.log(
      "listEmployment.length ",
      listEmployment.length == 0
        ? 1
        : listEmployment[listEmployment.length - 1].id
    );
    setIdEmployment("");
    setPosition("");
    setEmployer("");
    setCityEmployment("");
    setStartMonthEmployment("");
    setStartYearEmployment("");
    setEndMonthEmployment("");
    setEndYearEmployment("");
    setDescriptionEmployment("");
    setFormEmployment(false);
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
    setFormEmployment(true);
    const item = listEmployment.find((e) => e.id === id);
    if (item) {
      setIdEmployment(item.id);
      setPosition(item.position);
      setEmployer(item.employer);
      setCityEmployment(item.cityEmployment);
      setStartMonthEmployment(item.startMonthEmployment);
      setStartYearEmployment(item.startYearEmployment);
      setEndMonthEmployment(item.endMonthEmployment);
      setEndYearEmployment(item.endYearEmployment);
      setDescriptionEmployment(item.descriptionEmployment);
      setEditEmployment(true);
      dispatch(setEdit(true));
    }
  };
  const handleUpdate = () => {
    if (!position) {
      setErrorEmployment("Position is required.");
      return;
    }
    const updatedList = listEmployment.map((item) =>
      item.id === id
        ? {
            id,
            position,
            employer,
            cityEmployment,
            startMonthEmployment,
            startYearEmployment,
            endMonthEmployment,
            endYearEmployment,
            descriptionEmployment,
          }
        : item
    );
    setListEmployment(updatedList);
    setFormEmployment(false);
    setEditEmployment(false);
    setIdEmployment("");
    setPosition("");
    setEmployer("");
    setCityEmployment("");
    setStartMonthEmployment("");
    setStartYearEmployment("");
    setEndMonthEmployment("");
    setEndYearEmployment("");
    setDescriptionEmployment("");
    dispatch(setEdit(false));
  };
  return (
    <div className="">
      {formEmployment && (
        <div className="p-2 border-2 border-gray-300 rounded-lg">
          <div className="my-2">
            <label htmlFor="position" className="ps-1 text-sm text-gray-500">
              Position
            </label>
            <input
              type="text"
              id="position"
              placeholder="Position"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            {errorEmployment && (
              <div>
                <div className="text-red-500 text-sm">{errorEmployment}</div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="">
              <label htmlFor="school" className="ps-1 text-sm text-gray-500">
                Employer
              </label>
              <input
                type="text"
                id="school"
                placeholder="Employer"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={employer}
                onChange={(e) => setEmployer(e.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="cityEmployment"
                className="ps-1 text-sm text-gray-500"
              >
                City
              </label>
              <input
                type="text"
                id="cityEmployment"
                placeholder="City"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={cityEmployment}
                onChange={(e) => setCityEmployment(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="">
              <label
                htmlFor="startMonthEmployment"
                className="ps-1 text-sm text-gray-500"
              >
                Start date
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select
                  id="startMonthEmployment"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={startMonthEmployment}
                  onChange={(e) => setStartMonthEmployment(e.target.value)}
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
                  id="startYearEmployment"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={startYearEmployment}
                  onChange={(e) => setStartYearEmployment(e.target.value)}
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
            <div className="">
              <label
                htmlFor="endMonthEmployment"
                className="ps-1 text-sm text-gray-500"
              >
                End date
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select
                  id="endMonthEmployment"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={endMonthEmployment}
                  onChange={(e) => setEndMonthEmployment(e.target.value)}
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
                  id="endYearEmployment"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={endYearEmployment}
                  onChange={(e) => setEndYearEmployment(e.target.value)}
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
          </div>
          <div>
            <label
              htmlFor="descriptionEmployment"
              className="ps-1 text-sm text-gray-500"
            >
              Description
            </label>
            <textarea
              id="descriptionEmployment"
              placeholder="Description"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={descriptionEmployment}
              onChange={(e) => setDescriptionEmployment(e.target.value)}
            ></textarea>
            <div className="flex flex-row"></div>
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

      {listEmployment.length > 0 && (
        <div className="">
          {listEmployment.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.position}</p>
                <p className="flex flex-row text-gray-500">
                  <span>{item.employer}</span>,{" "}
                  <span>{item.cityEmployment}</span>
                </p>
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
              <AddIcon /> Add Employment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
