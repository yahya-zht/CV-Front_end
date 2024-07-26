import React from "react";
import { COLORS } from "@/constants/theme";

export default function PersonalDetails() {
  return (
    <div>
      <div className="mb-3">
        <h3 className="font-normal">Personal Details</h3>
      </div>
      <div className="flex flex-row ">
        <div className="w-1/5 me-2">
          <label htmlFor="" className="ps-1 text-sm text-gray-500">
            Image
          </label>
          <input
            type="text"
            name=""
            id=""
            className="rounded-md w-full p-12 mt-1 "
            style={{ backgroundColor: COLORS.bg }}
          />
        </div>
        <div className="w-4/5 flex flex-col justify-between">
          <div className=" grid grid-cols-2 gap-2 mb-2">
            <div className="">
              <label htmlFor="" className="ps-1 text-sm text-gray-500">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
              />
            </div>
            <div className="">
              <label htmlFor="" className="ps-1 text-sm text-gray-500">
                Last Name
              </label>
              <input
                type="text"
                placeholder="last Name"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
              />
            </div>
          </div>
          <div>
            <div className="">
              <label htmlFor="" className="ps-1 text-sm text-gray-500">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-2">
        <label htmlFor="" className="ps-1 text-sm text-gray-500">
          Headline
        </label>
        <input
          type="text"
          placeholder="Headline"
          className="rounded-md w-full p-2 mt-1"
          style={{ backgroundColor: COLORS.bg }}
        />
      </div>
      <div className="my-2">
        <label htmlFor="" className="ps-1 text-sm text-gray-500">
          Phone number
        </label>
        <input
          type="text"
          placeholder="Phone number"
          className="rounded-md w-full p-2 mt-1"
          style={{ backgroundColor: COLORS.bg }}
        />
      </div>
      <div className="my-2">
        <label htmlFor="" className="ps-1 text-sm text-gray-500">
          Address
        </label>
        <input
          type="text"
          placeholder="Address"
          className="rounded-md w-full p-2 mt-1"
          style={{ backgroundColor: COLORS.bg }}
        />
      </div>
      <div className=" grid grid-cols-2 gap-2 my-2">
        <div className="">
          <label htmlFor="" className="ps-1 text-sm text-gray-500">
            Post code
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="rounded-md w-full p-2 mt-1"
            style={{ backgroundColor: COLORS.bg }}
          />
        </div>
        <div className="">
          <label htmlFor="" className="ps-1 text-sm text-gray-500">
            City
          </label>
          <input
            type="text"
            placeholder="last Name"
            className="rounded-md w-full p-2 mt-1"
            style={{ backgroundColor: COLORS.bg }}
          />
        </div>
      </div>
    </div>
  );
}
