"use client";

import React from "react";
import Image from "next/image";
import { DataImages } from "@/constants/DataTemplates";
import { COLORS } from "@/constants/theme";

const TemplatesPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ backgroundColor: COLORS.primary }}
    >
      <div className="max-w-6xl w-full px-6 py-12">
        <h1
          className="text-primary text-4xl font-extrabold text-center mb-8"
          style={{ color: COLORS.white }}
        >
          CV Templates
        </h1>
        <p
          className="text-secondary text-lg text-center mb-12"
          style={{ color: COLORS.white }}
        >
          Choose a template that fits your style and profession. Click to
          preview or download.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {DataImages.map((img, index) => (
            <div key={index} className="w-1/5 min-w-[200px]">
              <Image
                src={img.image}
                alt={`CV Template ${index + 1}`}
                layout="responsive"
                className="cursor-pointer duration-700 hover:translate-y-[-10px] hover:scale-105 drop-shadow-md rounded-md"
                onClick={() => alert(`Selected Template ${index + 1}`)}
              />
              <p
                className="text-center text-teal font-semibold mt-2"
                style={{ color: COLORS.white }}
              >
                Template {index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
