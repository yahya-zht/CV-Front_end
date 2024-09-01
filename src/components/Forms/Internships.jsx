"use client";
import { COLORS } from "@/constants/theme";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import {
  setInternshipsData,
  setInternshipsList,
  setEdit,
} from "@/store/InternshipsSlice";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
export default function Internships() {
  const [id, setId] = useState();
  const [list, setList] = useState([]);
  const [position, setPosition] = useState("");
  const [Internship, setInternship] = useState("");
  const [city, setCity] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");
  const [formInternships, setForm] = useState(true);
  const [errorInternships, setErrorInternships] = useState("");
  const [edit, setEditItem] = useState(false);

  const dispatch = useDispatch();
  const Internships = {
    position,
    Internship,
    city,
    startMonth,
    startYear,
    endMonth,
    endYear,
    description,
  };

  dispatch(setInternshipsData(Internships));
  dispatch(setInternshipsList(list));

  const handleForm = () => {
    setErrorInternships("");
    setForm(true);
    deleteForm();
    setEditItem(false);
    dispatch(setEdit(false));
  };
  const handleDelete = (Id) => {
    setList((prev) => prev.filter((e) => e.id !== Id));
    list.length == 1 && setForm(true);
  };
  const deleteForm = () => {
    setId("");
    setPosition("");
    setInternship("");
    setCity("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDescription("");
  };
  const handleAdd = () => {
    if (!position) {
      setErrorInternships("Position is required.");
      return;
    }
    setList([
      ...list,
      {
        id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
        position,
        Internship,
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
    setInternship("");
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

  const years = Array.from({ length: 35 }, (_, i) => 2024 - i);

  const handleEdit = (id) => {
    setForm(true);
    const item = list.find((e) => e.id === id);
    if (item) {
      setId(item.id);
      dispatch(setEdit(true));
      setPosition(item.position);
      setInternship(item.Internship);
      setCity(item.city);
      setStartMonth(item.startMonth);
      setStartYear(item.startYear);
      setEndMonth(item.endMonth);
      setEndYear(item.endYear);
      setDescription(item.description);
      setEditItem(true);
    }
  };
  const handleUpdate = () => {
    if (!position) {
      setErrorhobbies("Position is required.");
      return;
    }
    const updatedList = list.map((item) =>
      item.id === id
        ? {
            id,
            position,
            Internship,
            city,
            startMonth,
            startYear,
            endMonth,
            endYear,
            description,
          }
        : item
    );
    setList(updatedList);
    dispatch(setEdit(false));
    setId("");
    setPosition("");
    setInternship("");
    setCity("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDescription("");
    setForm(false);
    setEditItem(false);
  };
  useEffect(() => {
    const savedState = localStorage.getItem("appState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      if (parsedState.Internships.InternshipsList) {
        setList(parsedState.Internships.InternshipsList);
      }
      if (parsedState.Internships.InternshipsData.position) {
        setPosition(parsedState.Internships.InternshipsData.position);
      }
      if (parsedState.Internships.InternshipsData.Internship) {
        setInternship(parsedState.Internships.InternshipsData.Internship);
      }
      if (parsedState.Internships.InternshipsData.city) {
        setCity(parsedState.Internships.InternshipsData.city);
      }
      if (parsedState.Internships.InternshipsData.startMonth) {
        setStartMonth(parsedState.Internships.InternshipsData.startMonth);
      }
      if (parsedState.Internships.startYear) {
        setStartYear(parsedState.Internships.startYear);
      }
      if (parsedState.Internships.InternshipsData.endMonth) {
        setEndMonth(parsedState.Internships.InternshipsData.endMonth);
      }
      if (parsedState.Internships.InternshipsData.endYear) {
        setEndYear(parsedState.Internships.InternshipsData.endYear);
      }
      if (parsedState.Internships.InternshipsData.description) {
        setDescription(parsedState.Internships.InternshipsData.description);
      }
      if (parsedState.Internships.Edit) {
        setEditItem(parsedState.Internships.Edit);
      }
    }
  }, []);
  return (
    <div className="">
      {formInternships && (
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
            {errorInternships && (
              <div>
                <div className="text-red-500 text-sm">{errorInternships}</div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="">
              <label htmlFor="school" className="ps-1 text-sm text-gray-500">
                Internship
              </label>
              <input
                type="text"
                id="school"
                placeholder="Internship"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={Internship}
                onChange={(e) => setInternship(e.target.value)}
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
                  <span>{item.Internship}</span>, <span>{item.city}</span>
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
              <AddIcon /> Add Internship
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
