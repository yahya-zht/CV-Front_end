"use client";
import React from "react";
import Resume1 from "./Templates/Resume1";

export default function Template(props) {
  return (
    <div className="pt-20">
      <Resume1 zoom={props.zoom} setZoom={props.setZoom} />
    </div>
  );
}
