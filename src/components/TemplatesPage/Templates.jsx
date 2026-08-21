"use client";

import React from "react";
import Image from "next/image";
import { DataImages } from "@/constants/DataTemplates";
import { COLORS } from "@/constants/theme";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setTemplateSelected } from "@/store/TemplatesSlice";

const TemplatesPage = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const handleTemplateClick = (templateId) => {
    dispatch(setTemplateSelected(templateId));
    router.push(`/create`);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ backgroundColor: COLORS.primary }}
    >
      <div className="max-w-6xl w-full px-4 sm:px-6 py-8 sm:py-12">

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-center mb-5 sm:mb-8"
          style={{ color: COLORS.white }}
        >
          CV Templates
        </h1>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-center mb-8 sm:mb-12 max-w-2xl mx-auto"
          style={{ color: COLORS.white }}
        >
          Choose a template that fits your style and profession. Click to
          preview or download.
        </p>

        {/* Templates */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {DataImages.map((img, index) => (
            <div
              key={img.id || index}
              className="w-full"
            >
              <div
                className="cursor-pointer duration-500 hover:-translate-y-2 hover:scale-105 drop-shadow-md"
                onClick={() => handleTemplateClick(img.id)}
              >
                <Image
                  src={img.image}
                  alt={`CV Template ${index + 1}`}
                  width={400}
                  height={560}
                  className="w-full h-auto rounded-md"
                />
              </div>

              <p
                className="text-center font-semibold mt-2 text-sm sm:text-base"
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
