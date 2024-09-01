"use client";
import { COLORS } from "@/constants/theme";
import { setFooterData } from "@/store/FooterSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Footer() {
  const [descriptionFooter, setDescriptionFooter] = useState("");
  const dispatch = useDispatch();
  const FooterData = {
    descriptionFooter,
  };
  dispatch(setFooterData(FooterData));
  useEffect(() => {
    const savedState = localStorage.getItem("appState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      if (parsedState.Footer.FooterData.descriptionFooter) {
        setDescriptionFooter(parsedState.Footer.FooterData.descriptionFooter);
      }
    }
  }, []);
  return (
    <div className="">
      <div>
        <label htmlFor="description" className="ps-1 text-sm text-gray-500">
          Content
        </label>
        <textarea
          id="description"
          placeholder="Description"
          className="rounded-md w-full p-2 mt-1"
          rows="4"
          cols="50"
          style={{ backgroundColor: COLORS.bg }}
          value={descriptionFooter}
          onChange={(e) => setDescriptionFooter(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
