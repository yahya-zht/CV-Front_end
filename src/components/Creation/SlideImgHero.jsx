"use client";
import React from "react";
import Image from "next/image";
import { DataImages } from "@/constants/DataTemplates";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setTemplateSelected } from "@/store/TemplatesSlice";

export default function SlideImgHero() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleTemplateClick = (templateId) => {
    dispatch(setTemplateSelected(templateId));
    router.push(`/create`);
  };
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {DataImages.map((img, index) => (
        <div key={index} className="w-1/6 ">
          <Image
            src={img.image}
            alt={`template cv ${index + 1}`}
            layout="responsive"
            onClick={() => handleTemplateClick(img.id)}
            className="skew-y-12 cursor-pointer duration-700 hover:skew-y-0 hover:-translate-y-6 hover:scale-125 drop-shadow-md mb-2 z-0 hover:z-40 "
          />
        </div>
      ))}
    </div>
  );
}
