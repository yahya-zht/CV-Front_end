"use client";
import { COLORS } from "@/constants/theme";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDataLanguage, setDataListLanguages } from "@/store/LanguagesSlice";
const units = [
  "Make a choice",
  "Beginner",
  "Moderate",
  "Good",
  "Very good",
  "Excellent",
];
function valueLabelFormat(value) {
  let unitIndex = 0;
  switch (value) {
    case 0:
      unitIndex = 0;
      break;
    case 1:
      unitIndex = 1;
      break;
    case 2:
      unitIndex = 2;
      break;
    case 3:
      unitIndex = 3;
      break;
    case 4:
      unitIndex = 4;
      break;
    case 5:
      unitIndex = 5;
      break;
    default:
      unitIndex = 0;
      break;
  }

  return `${units[unitIndex]}`;
}

function calculateValue(value) {
  return value;
}
export default function Languages() {
  const [listLanguage, setlistLanguage] = useState([]);
  const [language, setlanguage] = useState("");
  const [value, setValue] = React.useState(0);
  const [errorlanguages, setErrorlanguages] = useState("");
  const [formlanguage, setFormlanguage] = useState(true);

  const dispatch = useDispatch();
  dispatch(setDataListLanguages(listLanguage));
  const DataLanguage = {
    language,
    value,
  };
  dispatch(setDataLanguage(DataLanguage));
  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  const handleDelete = (Id) => {
    setlistLanguage((prev) => prev.filter((e) => e.id !== Id));
    listLanguage.length == 1 && setFormlanguage(true);
  };
  const handleForm = () => {
    setErrorlanguages("");
    setFormlanguage(true);
  };
  const deleteForm = () => {
    setlanguage("");
    setValue(0);
  };
  const handleAdd = () => {
    if (language.trim() === "") {
      setErrorlanguages("language is required");
      return;
    }
    if (
      listLanguage.some(
        (e) => e.language.toLowerCase() === language.toLowerCase()
      )
    ) {
      setErrorlanguages("language already exists");
      return;
    }
    if (value === 0) {
      setErrorlanguages("Select a level");
      return;
    }
    setlistLanguage([
      ...listLanguage,
      {
        id:
          listLanguage.length == 0
            ? 1
            : listLanguage[listLanguage.length - 1].id + 1,
        language,
        value,
      },
    ]);
    setlanguage("");
    setValue(0);
    setErrorlanguages("");
    setFormlanguage(false);
  };
  return (
    <div>
      {formlanguage && (
        <div className="py-2 px-4 border-2 border-gray-300 rounded-lg">
          <div className="my-2">
            <label htmlFor="language" className="ps-1 text-sm text-gray-500">
              language
            </label>
            <input
              type="text"
              id="language"
              placeholder="language"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={language}
              onChange={(e) => setlanguage(e.target.value)}
            />
            {errorlanguages && (
              <div>
                <div className="text-red-500 text-sm">{errorlanguages}</div>
              </div>
            )}
          </div>
          <div className="my-2">
            <Box sx={{ width: 250 }}>
              <Typography id="non-linear-slider" gutterBottom>
                Level: {valueLabelFormat(calculateValue(value))}
              </Typography>
              <Slider
                value={value}
                style={{ color: COLORS.primary, height: "10px" }}
                min={0}
                step={1}
                max={5}
                scale={calculateValue}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            </Box>
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
      {listLanguage.length > 0 && (
        <div className="">
          {listLanguage.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.language}</p>
                <p className="flex flex-row text-gray-500">
                  <span>{units[item.value]}</span>
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
              <AddIcon /> Add Language
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
