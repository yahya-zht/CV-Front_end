"use client";
import React, { useState } from "react";
import img from "../../assets/images/avatar03.jpeg";
import Image from "next/image";

export default function Resume1(props) {
  const [zoomInOut, setZoomInOut] = useState({ cursor: "zoom-in" });
  const handleZoom = () => {
    if (props.zoom == 0.58) {
      props.setZoom(1);
      setZoomInOut({ cursor: "zoom-out" });
    } else {
      props.setZoom(0.58);
      setZoomInOut({ cursor: "zoom-in" });
    }
  };

  return (
    <div>
      <div
        className="flex justify-center items-start h-96 "
        style={{
          transform: `scale(${props.zoom})`,
          transformOrigin: "top center",
          cursor: zoomInOut.cursor,
        }}
        onClick={() => handleZoom()}
      >
        <div
          className="bg-red-700 shadow-lg"
          style={{ width: "210mm", height: "297mm" }}
        >
          <div className="grid grid-cols-3 h-full">
            <div className="col-span-1 bg-gray-900 text-white p-6">
              <div className="flex items-center mb-6">
                <Image
                  src={img}
                  alt="Profile Picture"
                  className="w-24 h-24 rounded-full border-2 border-yellow-600"
                />
              </div>
              <div className="mb-6">
                <p className="text-sm">
                  <i className="fas fa-phone-alt"></i> +123-456-7890
                </p>
                <p className="text-sm">
                  <i className="fas fa-envelope"></i> hello@reallygreatsite.com
                </p>
                <p className="text-sm">
                  <i className="fas fa-globe"></i> www.reallygreatsite.com
                </p>
                <p className="text-sm">
                  <i className="fas fa-map-marker-alt"></i> 123 Anywhere St, Any
                  City, ST 12345
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-bold">EDUCATION</h2>
                <p className="text-sm">
                  Bachelor of Design
                  <br />
                  Wardiere University
                  <br />
                  2006 - 2008
                </p>
                <p className="text-sm">
                  Bachelor of Design
                  <br />
                  Wardiere University
                  <br />
                  2006 - 2008
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-bold">EXPERTISE</h2>
                <p className="text-sm">Digital Marketing</p>
                <p className="text-sm">Branding</p>
                <p className="text-sm">Copywriting</p>
                <p className="text-sm">SEO</p>
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-bold">LANGUAGE</h2>
                <p className="text-sm">English</p>
                <p className="text-sm">French</p>
              </div>
            </div>
            <div className="col-span-2 p-6">
              <div className="bg-yellow-500 text-black p-4">
                <h1 className="text-3xl font-bold">LORNA ALVARADO</h1>
                <h2 className="text-xl">Art Director</h2>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold">Experience</h2>
                <div className="mt-4">
                  <div className="border-l-4 border-yellow-500 pl-4 mb-4">
                    <p className="text-sm text-gray-600">Jan 2022 - Present</p>
                    <h3 className="text-lg font-bold">
                      Company Name | 123 Anywhere St., Any City
                    </h3>
                    <h4 className="text-md font-bold">
                      Digital Marketing Manager
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pharetra in lorem at laoreet. Donec hendrerit
                      libero eget est tempor, quis tempus arcu elementum. In
                      elementum elit at dui tristique feugiat.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4 mb-4">
                    <p className="text-sm text-gray-600">2017 - 2019</p>
                    <h3 className="text-lg font-bold">
                      Company Name | 123 Anywhere St., Any City
                    </h3>
                    <h4 className="text-md font-bold">Social Media Manager</h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pharetra in lorem at laoreet. Donec hendrerit
                      libero eget est tempor, quis tempus arcu elementum. In
                      elementum elit at dui tristique feugiat.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4 mb-4">
                    <p className="text-sm text-gray-600">2015 - 2017</p>
                    <h3 className="text-lg font-bold">
                      Company Name | 123 Anywhere St., Any City
                    </h3>
                    <h4 className="text-md font-bold">Social Media Manager</h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pharetra in lorem at laoreet. Donec hendrerit
                      libero eget est tempor, quis tempus arcu elementum. In
                      elementum elit at dui tristique feugiat.
                    </p>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mt-6">Reference</h2>
                <div className="mt-4">
                  <p className="text-md font-bold">Estelle Darcy</p>
                  <p className="text-sm">Wardiere Inc. / CEO</p>
                  <p className="text-sm">Phone: +123-456-7890</p>
                  <p className="text-sm">Email: hello@reallygreatsite.com</p>
                </div>
                <div className="mt-4">
                  <p className="text-md font-bold">Harper Russo</p>
                  <p className="text-sm">Wardiere Inc. / CEO</p>
                  <p className="text-sm">Phone: +123-456-7890</p>
                  <p className="text-sm">Email: hello@reallygreatsite.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
