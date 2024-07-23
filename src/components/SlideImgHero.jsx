import React from "react";
import cv1 from "../assets/images/TemplatesCv/Black Modern Professional Resume.jpg";
import cv2 from "../assets/images/TemplatesCv/Black Modern Professional Resume1.jpg";
import cv3 from "../assets/images/TemplatesCv/Black Modern Professional Resume2.jpg";
import cv4 from "../assets/images/TemplatesCv/blue professional modern CV resume.jpg";
import cv5 from "../assets/images/TemplatesCv/blue professional modern CV resume1.jpg";
import cv6 from "../assets/images/TemplatesCv/blue professional modern CV resume2.jpg";
import cv7 from "../assets/images/TemplatesCv/blue professional modern CV resume3.jpg";
import cv8 from "../assets/images/TemplatesCv/Modern Minimalist CV Resume.jpg";
import cv9 from "../assets/images/TemplatesCv/Professional CV Resume.jpg";
import cv10 from "../assets/images/TemplatesCv/Professional CV Resume1.jpg";
import cv11 from "../assets/images/TemplatesCv/White simple student cv resume.jpg";
import cv12 from "../assets/images/TemplatesCv/White simple student cv resume1.jpg";
import cv13 from "../assets/images/TemplatesCv/White simple student cv resume2.jpg";
import cv14 from "../assets/images/TemplatesCv/White simple student cv resume3.jpg";
import Image from "next/image";

const Imgs = [
  cv1,
  cv2,
  cv3,
  cv4,
  cv5,
  cv6,
  cv7,
  cv8,
  cv9,
  cv10,
  cv11,
  cv12,
  cv13,
  cv14,
];
export default function SlideImgHero() {
  return (
    <div className="flex flex-wrap flex-row p-8">
      {Imgs.map((img, index) => (
        <div key={index} className="w-1/5 ">
          <Image
            src={img}
            alt={`template cv ${index + 1}`}
            layout="responsive"
            className="skew-y-12 cursor-pointer duration-700 hover:skew-y-0 hover:-translate-y-6 hover:scale-125 drop-shadow-md mb-2 z-0 hover:z-40 "
          />
        </div>
      ))}
    </div>
  );
}
