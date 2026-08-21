"use client";

import NavbarCreate from "@/components/Creation/NavbarCreate";
import FormInfo from "@/components/Creation/FormInfo";
import Template from "@/components/Creation/Template";
import NavTemplates from "@/components/Creation/NavTemplates";
import { useState } from "react";

export default function Create() {
  const [clk, setClk] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col">

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <NavbarCreate clk={clk} setClk={setClk} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">

        {/* Form Section */}
        <div
          className="
            w-full
            lg:w-1/2
            bg-white
            lg:h-screen
            lg:overflow-y-auto
            pt-16
          "
        >
          <FormInfo />
        </div>

        {/* Preview Section */}
        <div
          className="
            relative
            w-full
            lg:w-1/2
            bg-gray-100
            lg:h-screen
            lg:overflow-y-auto
            pt-4
            sm:pt-6
            lg:pt-16
            pb-24
            lg:pb-32
          "
        >
          <div className="select-none w-full overflow-x-hidden">
            <Template clk={clk} setClk={setClk} />
          </div>

          {/* Template Navigation */}
          <div className="
              absolute
              w-full
              flex
              justify-center
              mt-2
            ">
            <NavTemplates />
          </div>
        </div>

      </div>
    </div>
  );
}