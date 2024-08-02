"use client";
import React, { useState } from "react";
import { COLORS } from "@/constants/theme";
import { useDispatch } from "react-redux";
import { setDataPersonalDetails } from "@/store/PersonalDetailsSlice";

export default function PersonalDetails() {
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [headline, setHeadline] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const DataPersonalDetails = {
    image,
    firstName,
    lastName,
    email,
    headline,
    phoneNumber,
    address,
    postCode,
    city,
  };

  dispatch(setDataPersonalDetails(DataPersonalDetails));

  return (
    <div>
      <div className="mb-3">
        <h3 className="font-normal">Personal Details</h3>
      </div>
      <div className="flex flex-row">
        <div className="w-1/5 me-2">
          <label htmlFor="image" className="ps-1 text-sm text-gray-500">
            Image
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="rounded-md w-full p-2 mt-1"
            style={{ backgroundColor: COLORS.bg }}
          />
        </div>
        <div className="w-4/5 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <label htmlFor="firstName" className="ps-1 text-sm text-gray-500">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="ps-1 text-sm text-gray-500">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="ps-1 text-sm text-gray-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
            />
          </div>
        </div>
      </div>
      <div className="my-2">
        <label htmlFor="headline" className="ps-1 text-sm text-gray-500">
          Headline
        </label>
        <input
          type="text"
          id="headline"
          placeholder="Headline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="rounded-md w-full p-2 mt-1"
          style={{ backgroundColor: COLORS.bg }}
        />
      </div>
      <div className="my-2">
        <label htmlFor="phoneNumber" className="ps-1 text-sm text-gray-500">
          Phone number
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="rounded-md w-full p-2 mt-1"
          style={{ backgroundColor: COLORS.bg }}
        />
      </div>
      <div className="my-2">
        <label htmlFor="address" className="ps-1 text-sm text-gray-500">
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="rounded-md w-full p-2 mt-1"
          style={{ backgroundColor: COLORS.bg }}
        />
      </div>
      <div className="grid grid-cols-2 gap-2 my-2">
        <div>
          <label htmlFor="postCode" className="ps-1 text-sm text-gray-500">
            Post code
          </label>
          <input
            type="text"
            id="postCode"
            placeholder="Post code"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            className="rounded-md w-full p-2 mt-1"
            style={{ backgroundColor: COLORS.bg }}
          />
        </div>
        <div>
          <label htmlFor="city" className="ps-1 text-sm text-gray-500">
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-md w-full p-2 mt-1"
            style={{ backgroundColor: COLORS.bg }}
          />
        </div>
      </div>
    </div>
  );
}
