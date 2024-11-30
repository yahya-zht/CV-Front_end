import { COLORS } from "@/constants/theme";
import Link from "next/link";
import React from "react";
export default function Navbar() {
  return (
    <nav style={{ backgroundColor: COLORS.primary }}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center ">
            <p className="text-gray-300 hover:text-white cursor-pointer">
              <Link href="/">LOGO 1</Link>
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center ">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="templates"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
                >
                  Templates
                </a>
                <a
                  href="pricing"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="create"
              className="relative rounded-xl bg-white px-8 py-1 font-bold hover:bg-blue-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Create CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
