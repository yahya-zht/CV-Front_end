"use client";
import { COLORS } from "@/constants/theme";
import React, { useState } from "react";
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
  const [id, setIdInternships] = useState();
  const [listInternships, setListInternships] = useState([]);
  const [position, setPosition] = useState("");
  const [Internship, setInternship] = useState("");
  const [cityInternship, setCityInternships] = useState("");
  const [startMonthInternship, setStartMonthInternship] = useState("");
  const [startYearInternship, setStartYearInternship] = useState("");
  const [endMonthInternship, setEndMonthInternship] = useState("");
  const [endYearInternship, setEndYearInternship] = useState("");
  const [descriptionInternship, setDescriptionInternship] = useState("");
  const [formInternships, setFormInternships] = useState(true);
  const [errorInternships, setErrorInternships] = useState("");
  const [edit, setEditItem] = useState(false);

  const dispatch = useDispatch();
  const Internships = {
    position,
    Internship,
    cityInternship,
    startMonthInternship,
    startYearInternship,
    endMonthInternship,
    endYearInternship,
    descriptionInternship,
  };

  dispatch(setInternshipsData(Internships));
  dispatch(setInternshipsList(listInternships));

  const handleForm = () => {
    setErrorInternships("");
    setFormInternships(true);
    deleteForm();
    setEditItem(false);
    dispatch(setEdit(false));
  };
  const handleDelete = (Id) => {
    setListInternships((prev) => prev.filter((e) => e.id !== Id));
    listInternships.length == 1 && setFormInternships(true);
  };
  const deleteForm = () => {
    setIdInternships("");
    setPosition("");
    setInternship("");
    setCityInternships("");
    setStartMonthInternship("");
    setStartYearInternship("");
    setEndMonthInternship("");
    setEndYearInternship("");
    setDescriptionInternship("");
  };
  const handleAdd = () => {
    if (!position) {
      setErrorInternships("Position is required.");
      return;
    }
    setListInternships([
      ...listInternships,
      {
        id:
          listInternships.length == 0
            ? 1
            : listInternships[listInternships.length - 1].id + 1,
        position,
        Internship,
        cityInternship,
        startMonthInternship,
        startYearInternship,
        endMonthInternship,
        endYearInternship,
        descriptionInternship,
      },
    ]);
    setIdInternships("");
    setPosition("");
    setInternship("");
    setCityInternships("");
    setStartMonthInternship("");
    setStartYearInternship("");
    setEndMonthInternship("");
    setEndYearInternship("");
    setDescriptionInternship("");
    setFormInternships(false);
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
    setFormInternships(true);
    const item = listInternships.find((e) => e.id === id);
    if (item) {
      setIdInternships(item.id);
      dispatch(setEdit(true));
      setPosition(item.position);
      setInternship(item.Internship);
      setCityInternships(item.cityInternship);
      setStartMonthInternship(item.startMonthInternship);
      setStartYearInternship(item.startYearInternship);
      setEndMonthInternship(item.endMonthInternship);
      setEndYearInternship(item.endYearInternship);
      setDescriptionInternship(item.description);
      setEditItem(true);
    }
  };
  const handleUpdate = () => {
    if (!position) {
      setErrorhobbies("Position is required.");
      return;
    }
    const updatedList = listInternships.map((item) =>
      item.id === id
        ? {
            id,
            position,
            Internship,
            cityInternship,
            startMonthInternship,
            startYearInternship,
            endMonthInternship,
            endYearInternship,
            descriptionInternship,
          }
        : item
    );
    setListInternships(updatedList);
    dispatch(setEdit(false));
    setIdInternships("");
    setPosition("");
    setInternship("");
    setCityInternships("");
    setStartMonthInternship("");
    setStartYearInternship("");
    setEndMonthInternship("");
    setEndYearInternship("");
    setDescriptionInternship("");
    setFormInternships(false);
    setEditItem(false);
  };
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
              <label
                htmlFor="cityInternship"
                className="ps-1 text-sm text-gray-500"
              >
                City
              </label>
              <input
                type="text"
                id="cityInternship"
                placeholder="City"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={cityInternship}
                onChange={(e) => setCityInternships(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="">
              <label
                htmlFor="startMonthInternship"
                className="ps-1 text-sm text-gray-500"
              >
                Start date
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select
                  id="startMonthInternship"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={startMonthInternship}
                  onChange={(e) => setStartMonthInternship(e.target.value)}
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
                  id="startYearInternship"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={startYearInternship}
                  onChange={(e) => setStartYearInternship(e.target.value)}
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
                htmlFor="endMonthInternship"
                className="ps-1 text-sm text-gray-500"
              >
                End date
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select
                  id="endMonthInternship"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={endMonthInternship}
                  onChange={(e) => setEndMonthInternship(e.target.value)}
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
                  id="endYearInternship"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={endYearInternship}
                  onChange={(e) => setEndYearInternship(e.target.value)}
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
              htmlFor="descriptionInternship"
              className="ps-1 text-sm text-gray-500"
            >
              Description
            </label>
            <textarea
              id="descriptionInternship"
              placeholder="Description"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={descriptionInternship}
              onChange={(e) => setDescriptionInternship(e.target.value)}
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

      {listInternships.length > 0 && (
        <div className="">
          {listInternships.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.position}</p>
                <p className="flex flex-row text-gray-500">
                  <span>{item.Internship}</span>,{" "}
                  <span>{item.cityInternship}</span>
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
