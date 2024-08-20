"use client";
import NavbarCreate from "@/components/NavbarCreate";
import FormInfo from "@/components/FormInfo";
import Template from "@/components/Template";
import NavTemplates from "@/components/NavTemplates";
import { useState } from "react";

export default function Create() {
  const [clk, setClk] = useState(false);
  return (
    <div className="flex relative flex-col ">
      <div className="absolute top-0 left-0 right-0 z-10">
        <NavbarCreate clk={clk} setClk={setClk} />
      </div>
      <div className="flex flex-col z-0 lg:flex-row">
        <div className="lg:w-1/2 bg-white lg:scroll-m-1  lg:overflow-y-auto lg:h-screen w-full">
          <FormInfo />
        </div>
        <div className="lg:w-1/2 w-full">
          <div className=" lg:scroll-m-1 lg:overflow-y-auto lg:h-screen select-none">
            <Template clk={clk} setClk={setClk} />
          </div>
          <div className="relative ">
            <NavTemplates />
          </div>
        </div>
      </div>
    </div>
  );
}
