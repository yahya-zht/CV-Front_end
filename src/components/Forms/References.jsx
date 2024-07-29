"use client";
import { COLORS } from "@/constants/theme";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
export default function References() {
  const [id, setIdReference] = useState();
  const [listReferences, setListReferences] = useState([]);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [cityReferences, setCityReferences] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [formReferences, setFormReferences] = useState(true);
  const [errorReferences, setErrorReferences] = useState("");
  const handleForm = () => {
    setErrorReferences("");
    setFormReferences(true);
  };
  const handleDelete = (Id) => {
    setListReferences((prev) => prev.filter((e) => e.id !== Id));
    listReferences.length == 1 && setFormReferences(true);
  };
  const deleteForm = () => {
    setIdReference("");
    setName("");
    setOrganization("");
    setCityReferences("");
    setPhoneNumber("");
    setEmail("");
  };
  const handleAdd = () => {
    if (!name) {
      setErrorReferences("name is required.");
      return;
    }
    setListReferences([
      ...listReferences,
      {
        id:
          listReferences.length == 0
            ? 1
            : listReferences[listReferences.length - 1].id + 1,
        name,
        organization,
        cityReferences,
        phoneNumber,
        email,
      },
    ]);
    console.log(
      "listReferences.length ",
      listReferences.length == 0
        ? 1
        : listReferences[listReferences.length - 1].id
    );
    setIdReference("");
    setName("");
    setOrganization("");
    setCityReferences("");
    setPhoneNumber("");
    setEmail("");
    setFormReferences(false);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="">
      {formReferences && (
        <div className="p-2 border-2 border-gray-300 rounded-lg">
          <div className="my-2">
            <label htmlFor="name" className="ps-1 text-sm text-gray-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="name"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errorReferences && (
              <div>
                <div className="text-red-500 text-sm">{errorReferences}</div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="">
              <label
                htmlFor="Organization"
                className="ps-1 text-sm text-gray-500"
              >
                Organization
              </label>
              <input
                type="text"
                id="Organization"
                placeholder="Organization"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="cityReferences"
                className="ps-1 text-sm text-gray-500"
              >
                City
              </label>
              <input
                type="text"
                id="cityReferences"
                placeholder="City"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={cityReferences}
                onChange={(e) => setCityReferences(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="">
              <label
                htmlFor="phoneNumber"
                className="ps-1 text-sm text-gray-500"
              >
                Phone number
              </label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Phone Number"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="Email" className="ps-1 text-sm text-gray-500">
                Email
              </label>
              <input
                type="email"
                id="Email"
                placeholder="Email"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <button
              className="p-1 text-red-600 hover:text-red-500 me-2"
              onClick={deleteForm}
            >
              <DeleteForeverIcon />
            </button>
            <button
              onClick={handleAdd}
              className="p-1 pe-2 text-white bg-blue-950 hover:border-blue-950 bottom-2 border-2 rounded-lg hover:bg-white hover:text-blue-950"
            >
              <DoneIcon /> Done
            </button>
          </div>
        </div>
      )}

      {listReferences.length > 0 && (
        <div className="">
          {listReferences.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.name}</p>
                <p className="flex flex-row text-gray-500">
                  <span>{item.organization}</span>,{" "}
                  <span>{item.cityReferences}</span>
                </p>
              </div>
              <div>
                <button
                  className="p-1 text-red-600 hover:text-red-500 me-2"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteForeverIcon />
                </button>
              </div>
            </div>
          ))}
          <div className="">
            <button
              className="p-1 mt-2 text-blue-950 bg-white border-blue-950 bottom-2 border-2 rounded-lg hover:bg-blue-950 hover:text-white"
              onClick={handleForm}
            >
              <AddIcon /> Add Reference
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
