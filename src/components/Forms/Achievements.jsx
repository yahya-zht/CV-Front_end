"use client";
import { COLORS } from "@/constants/theme";
import { setAchievementsData } from "@/store/AchievementsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Achievements() {
  const [descriptionAchievements, setDescriptionAchievements] = useState("");
  const dispatch = useDispatch();
  const AchievementsData = {
    descriptionAchievements,
  };
  dispatch(setAchievementsData(AchievementsData));
  useEffect(() => {
    const savedState = localStorage.getItem("appState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      if (parsedState.Achievements.AchievementsData.descriptionAchievements) {
        setDescriptionAchievements(
          parsedState.Achievements.AchievementsData.descriptionAchievements
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
          value={descriptionAchievements}
          onChange={(e) => setDescriptionAchievements(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
