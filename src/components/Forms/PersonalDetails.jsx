"use client";
import React, { useState } from "react";
import { COLORS } from "@/constants/theme";
import { useDispatch } from "react-redux";
import { setDataPersonalDetails } from "@/store/PersonalDetailsSlice";
import { useDropzone } from "react-dropzone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DeleteIcon from "@mui/icons-material/Delete";
import { Switch } from "@mui/material";

export default function PersonalDetails() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [headline, setHeadline] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [checkedWeb, setCheckedWeb] = useState(false);
  const [checkedLinkedIn, setCheckedLinkedIn] = useState(false);

  const handleChangeWeb = (event) => {
    setCheckedLinkedIn(false);
    setCheckedWeb(event.target.checked);
  };
  const handleChangeLinkedIn = (event) => {
    setCheckedWeb(false);
    setCheckedLinkedIn(event.target.checked);
  };

  const dispatch = useDispatch();

  const DataPersonalDetails = {
    uploadedImage,
    firstName,
    lastName,
    email,
    headline,
    phoneNumber,
    address,
    postCode,
    city,
    website,
    checkedWeb,
    checkedLinkedIn,
    linkedIn,
  };

  dispatch(setDataPersonalDetails(DataPersonalDetails));

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });
  const DeletePhoto = () => {
    setUploadedImage(null);
  };

  return (
    <div>
      <div className="mb-3">
        <h3 className="font-normal">Personal Details</h3>
      </div>
      <div className="flex flex-row">
        <div className="w-1/5 me-2 flex flex-col">
          <label htmlFor="image" className="ps-1 text-sm text-gray-500">
            Photo
          </label>
          <div
            {...getRootProps()}
            className="border-2  border-black rounded-lg p-6 text-center cursor-pointer bg-gray-100 flex-1 flex justify-center items-center hover:bg-blue-100"
          >
            <input {...getInputProps()} />
            <p className="">
              <AccountBoxIcon />
            </p>
          </div>
          {uploadedImage != null && (
            <div className="text-center">
              <DeleteIcon
                color="error"
                className="cursor-pointer hover:text-red-500"
                onClick={() => DeletePhoto()}
              />
            </div>
          )}
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
      <div className="my-2">
        <div className="flex flex-row justify-between">
          <label htmlFor="Website" className="ps-1 text-sm text-gray-500">
            Website
          </label>
          <div>
            <span className="ps-1 text-sm text-gray-500">QR</span>
            <Switch
              size="small"
              checked={checkedWeb}
              onChange={handleChangeWeb}
              className="text-center"
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
        <input
          type="text"
          id="Website"
          placeholder="www.example.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="rounded-md w-full p-2 mt-1"
          style={{ backgroundColor: COLORS.bg }}
        />
      </div>
      <div className="my-2">
        <div className="flex flex-row justify-between">
          <label htmlFor="Website" className="ps-1 text-sm text-gray-500">
            {checkedLinkedIn ? "URL LinkedIn" : "Linkedin"}
          </label>
          <div>
            <span className="ps-1 text-sm text-gray-500">QR</span>
            <Switch
              size="small"
              checked={checkedLinkedIn}
              onChange={handleChangeLinkedIn}
              className="text-center"
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
        <input
          type="text"
          id="Website"
          placeholder={
            checkedLinkedIn
              ? "https://www.linkedin.com/in/UserName"
              : "Linkedin Name"
          }
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
          className="rounded-md w-full p-2 mt-1"
          style={{ backgroundColor: COLORS.bg }}
        />
      </div>
    </div>
  );
}
