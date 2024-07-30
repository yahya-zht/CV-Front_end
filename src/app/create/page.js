"use client";
import NavbarCreate from "@/components/NavbarCreate";
import FormInfo from "@/components/FormInfo";
import Template from "@/components/Template";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { useState } from "react";

export default function Create() {
  const [zoom, setZoom] = useState(0.58);

  return (
    <div className="flex relative flex-col">
      <div className="absolute top-0 left-0 right-0 z-10">
        <NavbarCreate />
      </div>
      <div className="flex flex-col z-0 lg:flex-row">
        <div className="lg:w-1/2 bg-white lg:scroll-m-1  lg:overflow-y-auto lg:h-screen w-full">
          <FormInfo />
        </div>
        <div className="lg:w-1/2 w-full">
          <div className=" lg:scroll-m-1 lg:overflow-y-auto lg:h-screen select-none">
            <Template zoom={zoom} setZoom={setZoom} />
          </div>
          <div className="relative ">
            <div className=" px-6 bg-blue-600 absolute bottom-1 left-3 right-3 z-20">
              {/* <button onClick={handleZoomOut} className="bg-red-600 p-2"> */}
              {/* <ZoomOutIcon /> */}
              {/* </button> */}
              {/* <button onClick={handleZoomIn} className="bg-red-600 p-2"> */}
              {/* <ZoomInIcon /> */}
              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
