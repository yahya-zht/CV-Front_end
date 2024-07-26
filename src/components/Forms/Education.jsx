"use client";
import { COLORS } from "@/constants/theme";
import React, { useRef, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
export default function Education() {
  const [id, setId] = useState();
  const [list, setList] = useState([]);
  const [education, setEducation] = useState("");
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");
  const [form, setForm] = useState(true);
  const [error, setError] = useState("");
  const handleForm = () => {
    setForm(true);
  };
  const handleDelete = (Id) => {
    setList((prev) => prev.filter((e) => e.id !== Id));
    list.length == 1 && setForm(true);
  };
  const deleteForm = () => {
    setId("");
    setEducation("");
    setSchool("");
    setCity("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDescription("");
  };
  const handleAdd = () => {
    if (!education) {
      setError("Education is required.");
      return;
    }
    setList([
      ...list,
      {
        id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
        education,
        school,
        city,
        startMonth,
        startYear,
        endMonth,
        endYear,
        description,
      },
    ]);
    console.log(
      "list.length ",
      list.length == 0 ? 1 : list[list.length - 1].id
    );
    setId("");
    setEducation("");
    setSchool("");
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

  return (
    <div className="">
      {form && (
        <div>
          <div className="my-2">
            <label htmlFor="education" className="ps-1 text-sm text-gray-500">
              Education / Formation
            </label>
            <input
              type="text"
              id="education"
              placeholder="Education / Formation"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={education}
              onChange={(e) => setEducation(e.target.value)}
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
                School
              </label>
              <input
                type="text"
                id="school"
                placeholder="School"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={school}
                onChange={(e) => setSchool(e.target.value)}
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
            <button
              onClick={handleAdd}
              className="p-1 pe-2 text-white bg-blue-950 hover:border-blue-950 bottom-2 border-2 rounded-lg hover:bg-white hover:text-blue-950"
            >
              <DoneIcon /> Done
            </button>
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
                <p>{item.education}</p>
                <p className="flex flex-row text-gray-500">
                  <span>{item.school}</span>, <span>{item.city}</span>
                </p>
              </div>
              <div>
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
              <AddIcon /> Add Education
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
