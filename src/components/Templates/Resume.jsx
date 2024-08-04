"use client";
import React, { useState } from "react";
import ResumePDF from "../PDF/ResumePDF";
import { useDispatch, useSelector } from "react-redux";
import { setZoom } from "@/store/TemplatesSlice";

export default function Resume() {
  const [zoomInOut, setZoomInOut] = useState({ cursor: "zoom-in" });
  const zoom = useSelector((state) => state.Templates.Zoom);
  const dispatch = useDispatch();
  const handleZoom = () => {
    if (zoom == 0.58) {
      dispatch(setZoom(0.9));
      setZoomInOut({ cursor: "zoom-out" });
    } else {
      dispatch(setZoom(0.58));
      setZoomInOut({ cursor: "zoom-in" });
    }
  };
  return (
    <div>
      <div
        id="zoom"
        className="flex justify-center items-start h-96 "
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "top center",
          cursor: zoomInOut.cursor,
        }}
        onClick={() => handleZoom()}
      >
        <ResumePDF />
      </div>
    </div>
  );
}
