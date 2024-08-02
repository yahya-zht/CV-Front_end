"use client";
import { COLORS } from "@/constants/theme";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDataHobby, setDataListHobbies } from "@/store/HobbiesSlice";

export default function Hobbies() {
  const [listhobbies, setListhobbies] = useState([]);
  const [hobby, setHobby] = useState("");
  const [errorhobbies, setErrorhobbies] = useState("");
  const [formhobbies, setFormhobbies] = useState(true);

  const dispatch = useDispatch();

  dispatch(setDataListHobbies(listhobbies));
  const DataHobby = {
    hobby,
  };
  dispatch(setDataHobby(DataHobby));
  const handleDelete = (Id) => {
    setListhobbies((prev) => prev.filter((e) => e.id !== Id));
    listhobbies.length == 1 && setFormhobbies(true);
  };
  const handleForm = () => {
    setErrorhobbies("");
    setFormhobbies(true);
  };
  const deleteForm = () => {
    setHobby("");
  };
  const handleAdd = () => {
    if (hobby.trim() === "") {
      setErrorhobbies("Hobby is required");
      return;
    }
    if (
      listhobbies.some((e) => e.hobby.toLowerCase() === hobby.toLowerCase())
    ) {
      setErrorhobbies("Hobby already exists");
      return;
    }
    setListhobbies([
      ...listhobbies,
      {
        id:
          listhobbies.length == 0
            ? 1
            : listhobbies[listhobbies.length - 1].id + 1,
        hobby,
      },
    ]);
    setHobby("");
    setErrorhobbies("");
    setFormhobbies(false);
  };
  return (
    <div>
      {formhobbies && (
        <div className="py-2 px-4 border-2 border-gray-300 rounded-lg">
          <div className="my-2">
            <label htmlFor="hobby" className="ps-1 text-sm text-gray-500">
              Hobby
            </label>
            <input
              type="text"
              id="hobby"
              placeholder="hobby"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
            />
            {errorhobbies && (
              <div>
                <div className="text-red-500 text-sm">{errorhobbies}</div>
              </div>
            )}
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
      {listhobbies.length > 0 && (
        <div className="">
          {listhobbies.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.hobby}</p>
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
              <AddIcon /> Add Hobby
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
