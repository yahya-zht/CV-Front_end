"use client";
import { COLORS } from "@/constants/theme";
import React, { useState } from "react";

export default function Achievements() {
  const [descriptionAchievements, setDescriptionAchievements] = useState("");
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
