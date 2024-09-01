"use client";
import { COLORS } from "@/constants/theme";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataListSkills,
  setDataSkills,
  setEditSkills,
} from "@/store/SectionSlice";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
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
export default function SkillsSection(props) {
  const [id, setIdSkill] = useState([]);
  const [listSkills, setListSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const [value, setValue] = React.useState(0);
  const [errorSkills, setErrorSkills] = useState("");
  const [formSkill, setFormSkill] = useState(true);
  const [edit, setEditItem] = useState(false);
  const DataListSkills = useSelector(
    (state) => state.Section.ListDataSkills[props.index]
  );
  const dispatch = useDispatch();

  const DataSkill = {
    skill,
    value,
  };

  useEffect(() => {
    if (props.index >= 0) {
      dispatch(setDataSkills({ index: props.index, data: DataSkill }));
    }
    dispatch(setDataListSkills({ index: props.index, data: listSkills }));
  }, [skill, value, props.index, dispatch]);
  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  const handleDelete = (Id) => {
    setListSkills((prev) => prev.filter((e) => e.id !== Id));
    listSkills.length == 1 && setFormSkill(true);
  };
  const handleForm = () => {
    dispatch(setEditSkills({ index: props.index, data: false }));
    setIdSkill("");
    setSkill("");
    setValue("");
    setEditItem(false);
    setErrorSkills("");
    setFormSkill(true);
  };
  const deleteForm = () => {
    setSkill("");
    setValue(0);
  };
  const handleAdd = () => {
    if (skill.trim() === "") {
      setErrorSkills("Skill is required");
      return;
    }
    if (listSkills.some((e) => e.skill.toLowerCase() === skill.toLowerCase())) {
      setErrorSkills("Skill already exists");
      return;
    }
    setListSkills([
      ...listSkills,
      {
        id:
          listSkills.length == 0 ? 1 : listSkills[listSkills.length - 1].id + 1,
        skill,
        value,
      },
    ]);
    setSkill("");
    setValue(0);
    setErrorSkills("");
    setFormSkill(false);
  };
  const handleEdit = (id) => {
    setFormSkill(true);
    const item = listSkills.find((e) => e.id === id);
    if (item) {
      setEditItem(true);
      dispatch(setEditSkills({ index: props.index, data: true }));
      setIdSkill(item.id);
      setSkill(item.skill);
      setValue(item.value);
    }
  };
  const handleUpdate = () => {
    if (!skill) {
      setErrorSkills("Skill is required");
      return;
    }
    const updatedList = listSkills.map((item) =>
      item.id === id
        ? {
            id,
            skill,
            value,
          }
        : item
    );
    setListSkills(updatedList);
    dispatch(setEditSkills({ index: props.index, data: false }));
    setEditItem(false);
    setFormSkill(false);
    setIdSkill("");
    setSkill("");
    setValue("");
  };
  const formSkillsSave = useSelector((state) => state.Section.formSkills);
  useEffect(() => {
    const savedState = localStorage.getItem("appState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      if (parsedState.Section.formSkills == formSkillsSave) {
        if (parsedState.Section.DataSkills[props.index].skill) {
          setSkill(parsedState.Section.DataSkills[props.index].skill);
        }
        if (parsedState.Section.DataSkills[props.index].value) {
          setValue(parsedState.Section.DataSkills[props.index].value);
        }
        if (parsedState.Section.ListDataSkills[props.index]) {
          setListSkills(parsedState.Section.ListDataSkills[props.index]);
        }
      }
    }
  }, []);
  return (
    <div>
      {formSkill && (
        <div className="py-2 px-4 border-2 border-gray-300 rounded-lg">
          <div className="my-2">
            <label htmlFor="Skill" className="ps-1 text-sm text-gray-500">
              Skill
            </label>
            <input
              type="text"
              id="Skill"
              placeholder="Skill"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
            {errorSkills && (
              <div>
                <div className="text-red-500 text-sm">{errorSkills}</div>
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
      {listSkills.length > 0 && (
        <div className="">
          {DataListSkills.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.skill}</p>
                <p className="flex flex-row text-gray-500">
                  <span>{units[item.value]}</span>
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
              <AddIcon /> Add Skill
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
