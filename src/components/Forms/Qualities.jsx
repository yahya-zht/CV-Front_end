"use client";
import { COLORS } from "@/constants/theme";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQualitiesData, setQualitiesList } from "@/store/QualitiesSlice";

export default function Qualities() {
  const [listQualities, setListQualities] = useState([]);
  const [quality, setQuality] = useState("");
  const [errorqualities, setErrorqualities] = useState("");
  const [formqualities, setFormqualities] = useState(true);

  const dispatch = useDispatch();
  const QualitiesData = {
    quality,
  };
  dispatch(setQualitiesData(QualitiesData));
  dispatch(setQualitiesList(listQualities));

  const handleDelete = (Id) => {
    setListQualities((prev) => prev.filter((e) => e.id !== Id));
    listQualities.length == 1 && setFormqualities(true);
  };
  const handleForm = () => {
    setErrorqualities("");
    setFormqualities(true);
  };
  const deleteForm = () => {
    setQuality("");
  };
  const handleAdd = () => {
    if (quality.trim() === "") {
      setErrorqualities("quality is required");
      return;
    }
    if (
      listQualities.some(
        (e) => e.quality.toLowerCase() === quality.toLowerCase()
      )
    ) {
      setErrorqualities("quality already exists");
      return;
    }
    setListQualities([
      ...listQualities,
      {
        id:
          listQualities.length == 0
            ? 1
            : listQualities[listQualities.length - 1].id + 1,
        quality,
      },
    ]);
    setQuality("");
    setErrorqualities("");
    setFormqualities(false);
  };
  return (
    <div>
      {formqualities && (
        <div className="py-2 px-4 border-2 border-gray-300 rounded-lg">
          <div className="my-2">
            <label htmlFor="quality" className="ps-1 text-sm text-gray-500">
              Quality
            </label>
            <input
              type="text"
              id="quality"
              placeholder="Quality"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
            />
            {errorqualities && (
              <div>
                <div className="text-red-500 text-sm">{errorqualities}</div>
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
      {listQualities.length > 0 && (
        <div className="">
          {listQualities.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.quality}</p>
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
              <AddIcon /> Add quality
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
