"use client";
import { COLORS } from "@/constants/theme";
import { setDataDescription } from "@/store/SectionSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Description(props) {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const Data = {
    description,
  };
  useEffect(() => {
    if (props.index >= 0) {
      dispatch(setDataDescription({ index: props.index, data: Data }));
    }
  }, [description, props.index, dispatch]);
  const formDescription = useSelector((state) => state.Section.formDescription);
  useEffect(() => {
    const savedState = localStorage.getItem("appState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      if (parsedState.Section.formDescription == formDescription) {
        if (parsedState.Section.DataDescription[props.index].description) {
          setDescription(
            parsedState.Section.DataDescription[props.index].description
          );
        }
      }
    }
  }, []);

  return (
    <div className="">
      <div>
        <label htmlFor="description" className="ps-1 text-sm text-gray-500">
          Description
        </label>
        <textarea
          id="description"
          placeholder="Description"
          className="rounded-md w-full p-2 mt-1"
          rows="4"
          cols="50"
          style={{ backgroundColor: COLORS.bg }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
