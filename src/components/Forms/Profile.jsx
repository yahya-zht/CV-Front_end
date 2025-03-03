"use client";
import { COLORS } from "@/constants/theme";
import { setDataProfile } from "@/store/ProfileSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Profile() {
  const [descriptionProfile, setDescriptionProfile] = useState("");
  const dispatch = useDispatch();
  dispatch(setDataProfile({ descriptionProfile: descriptionProfile }));
  useEffect(() => {
    const savedState = localStorage.getItem("appState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      if (parsedState.profile.DataProfile.descriptionProfile) {
        setDescriptionProfile(
          parsedState.profile.DataProfile.descriptionProfile
        );
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
          value={descriptionProfile}
          onChange={(e) => setDescriptionProfile(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
