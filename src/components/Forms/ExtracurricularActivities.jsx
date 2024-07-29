"use client";
import { COLORS } from "@/constants/theme";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
export default function ExtracurricularActivities() {
  const [id, setIdExtracurricularActivities] = useState();
  const [listExtracurricularActivities, setListExtracurricularActivities] =
    useState([]);
  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [cityExtracurricularActivities, setCityExtracurricularActivities] =
    useState("");
  const [
    startMonthExtracurricularActivities,
    setStartMonthExtracurricularActivities,
  ] = useState("");
  const [
    startYearExtracurricularActivities,
    setStartYearExtracurricularActivities,
  ] = useState("");
  const [
    endMonthExtracurricularActivities,
    setEndMonthExtracurricularActivities,
  ] = useState("");
  const [
    endYearExtracurricularActivities,
    setEndYearExtracurricularActivities,
  ] = useState("");
  const [
    descriptionExtracurricularActivities,
    setDescriptionExtracurricularActivities,
  ] = useState("");
  const [formExtracurricularActivities, setFormExtracurricularActivities] =
    useState(true);
  const [errorExtracurricularActivities, setErrorExtracurricularActivities] =
    useState("");
  const handleForm = () => {
    setErrorExtracurricularActivities("");
    setFormExtracurricularActivities(true);
  };
  const handleDelete = (Id) => {
    setListExtracurricularActivities((prev) => prev.filter((e) => e.id !== Id));
    listExtracurricularActivities.length == 1 &&
      setFormExtracurricularActivities(true);
  };
  const deleteForm = () => {
    setIdExtracurricularActivities("");
    setPosition("");
    setEmployer("");
    setCityExtracurricularActivities("");
    setStartMonthExtracurricularActivities("");
    setStartYearExtracurricularActivities("");
    setEndMonthExtracurricularActivities("");
    setEndYearExtracurricularActivities("");
    setDescriptionExtracurricularActivities("");
  };
  const handleAdd = () => {
    if (!position) {
      setErrorExtracurricularActivities("Position is required.");
      return;
    }
    setListExtracurricularActivities([
      ...listExtracurricularActivities,
      {
        id:
          listExtracurricularActivities.length == 0
            ? 1
            : listExtracurricularActivities[
                listExtracurricularActivities.length - 1
              ].id + 1,
        position,
        employer,
        cityExtracurricularActivities,
        startMonthExtracurricularActivities,
        startYearExtracurricularActivities,
        endMonthExtracurricularActivities,
        endYearExtracurricularActivities,
        descriptionExtracurricularActivities,
      },
    ]);
    console.log(
      "listExtracurricularActivities.length ",
      listExtracurricularActivities.length == 0
        ? 1
        : listExtracurricularActivities[
            listExtracurricularActivities.length - 1
          ].id
    );
    setIdExtracurricularActivities("");
    setPosition("");
    setEmployer("");
    setCityExtracurricularActivities("");
    setStartMonthExtracurricularActivities("");
    setStartYearExtracurricularActivities("");
    setEndMonthExtracurricularActivities("");
    setEndYearExtracurricularActivities("");
    setDescriptionExtracurricularActivities("");
    setFormExtracurricularActivities(false);
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

  return (
    <div className="">
      {formExtracurricularActivities && (
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
            {errorExtracurricularActivities && (
              <div>
                <div className="text-red-500 text-sm">
                  {errorExtracurricularActivities}
                </div>
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
                htmlFor="cityExtracurricularActivities"
                className="ps-1 text-sm text-gray-500"
              >
                City
              </label>
              <input
                type="text"
                id="cityExtracurricularActivities"
                placeholder="City"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={cityExtracurricularActivities}
                onChange={(e) =>
                  setCityExtracurricularActivities(e.target.value)
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="">
              <label
                htmlFor="startMonthExtracurricularActivities"
                className="ps-1 text-sm text-gray-500"
              >
                Start date
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select
                  id="startMonthExtracurricularActivities"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={startMonthExtracurricularActivities}
                  onChange={(e) =>
                    setStartMonthExtracurricularActivities(e.target.value)
                  }
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
                  id="startYearExtracurricularActivities"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={startYearExtracurricularActivities}
                  onChange={(e) =>
                    setStartYearExtracurricularActivities(e.target.value)
                  }
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
                htmlFor="endMonthExtracurricularActivities"
                className="ps-1 text-sm text-gray-500"
              >
                End date
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select
                  id="endMonthExtracurricularActivities"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={endMonthExtracurricularActivities}
                  onChange={(e) =>
                    setEndMonthExtracurricularActivities(e.target.value)
                  }
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
                  id="endYearExtracurricularActivities"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={endYearExtracurricularActivities}
                  onChange={(e) =>
                    setEndYearExtracurricularActivities(e.target.value)
                  }
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
              htmlFor="descriptionExtracurricularActivities"
              className="ps-1 text-sm text-gray-500"
            >
              Description
            </label>
            <textarea
              id="descriptionExtracurricularActivities"
              placeholder="Description"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={descriptionExtracurricularActivities}
              onChange={(e) =>
                setDescriptionExtracurricularActivities(e.target.value)
              }
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

      {listExtracurricularActivities.length > 0 && (
        <div className="">
          {listExtracurricularActivities.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.position}</p>
                <p className="flex flex-row text-gray-500">
                  <span>{item.employer}</span>,{" "}
                  <span>{item.cityExtracurricularActivities}</span>
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
              <AddIcon /> Add ExtracurricularActivities
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
