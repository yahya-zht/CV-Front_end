"use client";
import { COLORS } from "@/constants/theme";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Link from "next/link";
import { useState } from "react";
export default function NavbarCreate(props) {
  const download = () => {
    console.log("click");
    props.setClk(true);
  };
  return (
    <nav style={{ backgroundColor: COLORS.primary }}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center ">
            <p className="text-gray-300 hover:text-white cursor-pointer">
              <Link href="/">LOGO</Link>
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-xl bg-white px-8 py-1 hover:bg-blue-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={download}
            >
              <span className="font-black flex flex-row justify-center">
                <DownloadForOfflineIcon
                  color=""
                  fontSize="medium"
                  className="me-3"
                />
                Download
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
