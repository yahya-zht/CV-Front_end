"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Resume from "../Templates/Resume";

import "../../constants/style/Template.module.css";

export default function Template(props) {
  const [font, setFont] = useState("");
  const [mobileScale, setMobileScale] = useState(1);

  const zoom = useSelector((state) => state.Templates.Zoom);
  const FontFamily = useSelector((state) => state.Templates.FontFamily);

  useEffect(() => {
    const fonts = {
      "Baskervville SC": "'Baskervville SC', serif",
      "Open Sans": "'Open Sans', sans-serif",
      SUSE: "'SUSE', sans-serif",
      "Source Code Pro": "'Source Code Pro', monospace",
      Roboto: "'Roboto', sans-serif",
      Poppins: "'Poppins', sans-serif",
      "Roboto Condensed": "'Roboto Condensed', sans-serif",
      "Fjalla One": "'Fjalla One', sans-serif",
      "Zilla Slab": "'Zilla Slab', serif",
      Signika: "'Signika', sans-serif",
      Bitter: "'Bitter', serif",
      serif: "serif",
    };

    setFont(fonts[FontFamily] || "");
  }, [FontFamily]);

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;

      // A4 width ≈ 794px
      const a4Width = 794;

      if (screenWidth < 1024) {
        const availableWidth = screenWidth - 24;

        const scale = Math.min(
          availableWidth / a4Width,
          1
        );

        setMobileScale(scale);
      } else {
        setMobileScale(1);
      }
    };

    updateScale();

    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <div
      className="
        w-full
        overflow-hidden
        pt-8
      "
      style={{ fontFamily: font }}
    >
      <div className="flex justify-center items-start w-full">

        <div
          style={{
            transform: `scale(${mobileScale * zoom})`,
            transformOrigin: "top center",

            // Keep layout space corresponding to scaled A4
            width: "210mm",
            height: `calc(297mm * ${mobileScale * zoom})`,
          }}
        >
          <Resume
            clk={props.clk}
            setClk={props.setClk}
          />
        </div>

      </div>
    </div>
  );
}