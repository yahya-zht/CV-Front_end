"use client";
import { COLORS } from "@/constants/theme";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import {
  setCertificateData,
  setCertificatesList,
} from "@/store/CertificatesSlice";
export default function Certificates() {
  const [id, setIdCertificate] = useState();
  const [listCertificates, setListCertificates] = useState([]);
  const [Certificate, setCertificate] = useState("");
  const [monthCertificate, setMonthCertificate] = useState("");
  const [yearCertificate, setYearCertificate] = useState("");
  const [descriptionCertificate, setDescriptionCertificate] = useState("");
  const [formCertificate, setFormCertificate] = useState(true);
  const [errorCertificate, setErrorCertificate] = useState("");
  const dispatch = useDispatch();
  const CertificatesData = {
    Certificate,
    monthCertificate,
    yearCertificate,
    descriptionCertificate,
  };
  dispatch(setCertificateData(CertificatesData));
  dispatch(setCertificatesList(listCertificates));

  const handleForm = () => {
    setErrorCertificate("");
    setFormCertificate(true);
  };
  const handleDelete = (Id) => {
    setListCertificates((prev) => prev.filter((e) => e.id !== Id));
    listCertificates.length == 1 && setFormCertificate(true);
  };
  const deleteForm = () => {
    setIdCertificate("");
    setCertificate("");
    setMonthCertificate("");
    setYearCertificate("");
    setDescriptionCertificate("");
  };
  const handleAdd = () => {
    if (!Certificate) {
      setErrorCertificate("Position is required.");
      return;
    }
    setListCertificates([
      ...listCertificates,
      {
        id:
          listCertificates.length == 0
            ? 1
            : listCertificates[listCertificates.length - 1].id + 1,
        Certificate,
        monthCertificate,
        yearCertificate,
        descriptionCertificate,
      },
    ]);
    setIdCertificate("");
    setCertificate("");
    setMonthCertificate("");
    setYearCertificate("");
    setDescriptionCertificate("");
    setFormCertificate(false);
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
  const years = Array.from({ length: 35 }, (_, i) => 2024 - i);

  return (
    <div className="">
      {formCertificate && (
        <div>
          <div className="my-2">
            <label htmlFor="Certificate" className="ps-1 text-sm text-gray-500">
              Certificate
            </label>
            <input
              type="text"
              id="Certificate"
              placeholder="Certificate"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={Certificate}
              onChange={(e) => setCertificate(e.target.value)}
            />
            {errorCertificate && (
              <div>
                <div className="text-red-500 text-sm">{errorCertificate}</div>
              </div>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="monthCertificate"
              className="ps-1 text-sm text-gray-500"
            >
              Period
            </label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <select
                id="monthCertificate"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={monthCertificate}
                onChange={(e) => setMonthCertificate(e.target.value)}
              >
                <option value="" disabled>
                  Month
                </option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                id="yearCertificate"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={yearCertificate}
                onChange={(e) => setYearCertificate(e.target.value)}
              >
                <option value="" disabled>
                  Year
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="descriptionCertificate"
              className="ps-1 text-sm text-gray-500"
            >
              Description
            </label>
            <textarea
              id="descriptionCertificate"
              placeholder="Description"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={descriptionCertificate}
              onChange={(e) => setDescriptionCertificate(e.target.value)}
            ></textarea>
            <div className="flex flex-row"></div>
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

      {listCertificates.length > 0 && (
        <div className="">
          {listCertificates.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.Certificate}</p>
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
              <AddIcon /> Add Certificate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
