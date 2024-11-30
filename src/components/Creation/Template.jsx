"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Resume from "../Templates/Resume";
import "../../constants/style/Template.module.css";
export default function Template(props) {
  const [font, setFont] = useState("");
  const zoom = useSelector((state) => state.Templates.Zoom);
  const FontFamily = useSelector((state) => state.Templates.FontFamily);
  useEffect(() => {
    switch (FontFamily) {
      case "Baskervville SC":
        setFont("'Baskervville SC', serif");
        break;
      case "Open Sans":
        setFont("'Open Sans', sans-serif");
        break;
      case "SUSE":
        setFont("'SUSE', sans-serif");
        break;
      case "Source Code Pro":
        setFont("'Source Code Pro', monospace");
        break;
      case "Roboto":
        setFont("'Roboto', sans-serif");
        break;
      case "Poppins":
        setFont("'Poppins', sans-serif");
        break;
      case "Roboto Condensed":
        setFont("'Roboto Condensed', sans-serif");
        break;
      case "Fjalla One":
        setFont("'Fjalla One', sans-serif");
        break;
      case "Zilla Slab":
        setFont("'Zilla Slab', serif");
        break;
      case "Signika":
        setFont("'Signika', sans-serif");
        break;
      case "Bitter":
        setFont("'Bitter', serif");
        break;
      case "serif":
        setFont("serif");
        break;
      default:
        setFont("");
        break;
    }
  }, [FontFamily]);

  return (
    <div className="pt-20  " style={{ fontFamily: font }}>
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
