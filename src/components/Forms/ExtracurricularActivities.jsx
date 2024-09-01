"use client";
import { COLORS } from "@/constants/theme";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import {
  setExtracurricularActivitiesData,
  setExtracurricularActivitiesList,
  setEdit,
} from "@/store/ExtracurricularActivitiesSlice";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
export default function ExtracurricularActivities() {
  const [id, setId] = useState();
  const [edit, setEditItem] = useState(false);
  const [employer, setEmployer] = useState("");
  const [list, setList] = useState([]);
  const [position, setPosition] = useState("");
  const [city, setCity] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");
  const [form, setForm] = useState(true);
  const [error, setErrorExtracurricularActivities] = useState("");

  const dispatch = useDispatch();
  const ExtracurricularActivitiesData = {
    position,
    employer,
    city,
    startMonth,
    startYear,
    endMonth,
    endYear,
    description,
  };
  dispatch(setExtracurricularActivitiesData(ExtracurricularActivitiesData));
  dispatch(setExtracurricularActivitiesList(list));
  const handleForm = () => {
    setErrorExtracurricularActivities("");
    setForm(true);
    dispatch(setEdit(false));
    deleteForm();
    setEditItem(false);
  };
  const handleDelete = (Id) => {
    setList((prev) => prev.filter((e) => e.id !== Id));
    list.length == 1 && setForm(true);
  };
  const deleteForm = () => {
    setId("");
    setPosition("");
    setEmployer("");
    setCity("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDescription("");
  };
  const handleAdd = () => {
    if (!position) {
      setErrorExtracurricularActivities("Position is required.");
      return;
    }
    setList([
      ...list,
      {
        id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
        position,
        employer,
        city,
        startMonth,
        startYear,
        endMonth,
        endYear,
        description,
      },
    ]);
    setId("");
    setPosition("");
    setEmployer("");
    setCity("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDescription("");
    setForm(false);
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
  const currentDate = new Date();
  const ThisYear = currentDate.getFullYear();
  const years = Array.from({ length: 35 }, (_, i) => ThisYear - i);
  const handleEdit = (id) => {
    setForm(true);
    const item = list.find((e) => e.id === id);
    if (item) {
      setId(item.id);
      setPosition(item.position);
      setEmployer(item.employer);
      setCity(item.city);
      setStartMonth(item.startMonth);
      setStartYear(item.startYear);
      setEndMonth(item.endMonth);
      setEndYear(item.endYear);
      setDescription(item.description);
      setEditItem(true);
      dispatch(setEdit(true));
    }
  };
  const handleUpdate = () => {
    if (!position) {
      setErrorExtracurricularActivities("Position is required.");
      return;
    }
    const updatedList = list.map((item) =>
      item.id === id
        ? {
            id,
            position,
            employer,
            city,
            startMonth,
            startYear,
            endMonth,
            endYear,
            description,
          }
        : item
    );
    dispatch(setEdit(false));
    setList(updatedList);
    setForm(false);
    setId("");
    setPosition("");
    setEmployer("");
    setCity("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDescription("");
    setEditItem(false);
  };
  useEffect(() => {
    const savedState = localStorage.getItem("appState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      if (parsedState.ExtracurricularActivities.ExtracurricularActivitiesList) {
        setList(
          parsedState.ExtracurricularActivities.ExtracurricularActivitiesList
        );
      }
      if (
        parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
          .position
      ) {
        setPosition(
          parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
            .position
        );
      }
      if (
        parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
          .employer
      ) {
        setEmployer(
          parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
            .employer
        );
      }
      if (
        parsedState.ExtracurricularActivities.ExtracurricularActivitiesData.city
      ) {
        setCity(
          parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
            .city
        );
      }
      if (
        parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
          .startMonth
      ) {
        setStartMonth(
          parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
            .startMonth
        );
      }
      if (parsedState.ExtracurricularActivities.startYear) {
        setStartYear(parsedState.ExtracurricularActivities.startYear);
      }
      if (
        parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
          .endMonth
      ) {
        setEndMonth(
          parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
            .endMonth
        );
      }
      if (
        parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
          .endYear
      ) {
        setEndYear(
          parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
            .endYear
        );
      }
      if (
        parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
          .description
      ) {
        setDescription(
          parsedState.ExtracurricularActivities.ExtracurricularActivitiesData
            .description
        );
      }
      if (parsedState.ExtracurricularActivities.Edit) {
        setEditItem(parsedState.ExtracurricularActivities.Edit);
      }
    }
  }, []);
  return (
    <div className="">
      {form && (
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
            {error && (
              <div>
                <div className="text-red-500 text-sm">{error}</div>
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
              <label htmlFor="city" className="ps-1 text-sm text-gray-500">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="City"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="">
              <label
                htmlFor="startMonth"
                className="ps-1 text-sm text-gray-500"
              >
                Start date
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select
                  id="startMonth"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={startMonth}
                  onChange={(e) => setStartMonth(e.target.value)}
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
                  id="startYear"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
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
              <label htmlFor="endMonth" className="ps-1 text-sm text-gray-500">
                End date
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select
                  id="endMonth"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={endMonth}
                  onChange={(e) => setEndMonth(e.target.value)}
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
                  id="endYear"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
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
            <label htmlFor="description" className="ps-1 text-sm text-gray-500">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Description"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

      {list.length > 0 && (
        <div className="">
          {list.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.position}</p>
                <p className="flex flex-row text-gray-500">
                  <span>{item.employer}</span>, <span>{item.city}</span>
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
              <AddIcon /> Add ExtracurricularActivities
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
