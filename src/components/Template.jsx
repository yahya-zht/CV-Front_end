"use client";
import React from "react";
import { useSelector } from "react-redux";
import Resume from "./Templates/Resume";

export default function Template(props) {
  const zoom = useSelector((state) => state.Templates.Zoom);

  return (
    <div className="pt-20">
      <div
        id="zoom"
        className="flex justify-center items-start h-96 "
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "top center",
        }}
      >
        <Resume clk={props.clk} setClk={props.setClk} />
      </div>
    </div>
  );
}
