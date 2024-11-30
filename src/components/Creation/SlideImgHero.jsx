import React from "react";
import Image from "next/image";
import { DataImages } from "@/constants/DataTemplates";

export default function SlideImgHero() {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {/* <div className="flex flex-wrap flex-row p-8"> */}
      {DataImages.map((img, index) => (
        <div key={index} className="w-1/6 ">
          <Image
            src={img.image}
            alt={`template cv ${index + 1}`}
            layout="responsive"
            className="skew-y-12 cursor-pointer duration-700 hover:skew-y-0 hover:-translate-y-6 hover:scale-125 drop-shadow-md mb-2 z-0 hover:z-40 "
          />
        </div>
      ))}
    </div>
  );
}
