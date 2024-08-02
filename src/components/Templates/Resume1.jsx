"use client";
import React, { useRef, useState } from "react";
import img from "../../assets/images/avatar03.jpeg";
import Image from "next/image";
import { useSelector } from "react-redux";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { COLORS } from "@/constants/theme";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SquareIcon from "@mui/icons-material/Square";
const labels = {
  1: "Beginner",
  2: "Moderate",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
};
export default function Resume1(props) {
  const DataProfile = useSelector((state) => state.Profile.DataProfile);
  const DataPersonalDetails = useSelector(
    (state) => state.PersonalDetailsStore.DataPersonalDetails
  );
  const DataEducation = useSelector((state) => state.Education.DataEducation);
  const DataListEducation = useSelector(
    (state) => state.Education.DataListEducation
  );
  const DataSkill = useSelector((state) => state.Skills.DataSkill);
  const DataListSkills = useSelector((state) => state.Skills.DataListSkills);
  const DataHobby = useSelector((state) => state.Hobbies.DataHobby);
  const DataListHobbies = useSelector((state) => state.Hobbies.DataListHobbies);
  const DataListLanguages = useSelector(
    (state) => state.Languages.DataListLanguages
  );
  const DataLanguage = useSelector((state) => state.Languages.DataLanguage);

  const formProfile = useSelector((state) => state.Profile.formProfile);

  console.log("DataLanguage ============>", DataLanguage);
  console.log("DataListLanguages ============>", DataListLanguages);

  const [zoomInOut, setZoomInOut] = useState({ cursor: "zoom-in" });
  const handleZoom = () => {
    if (props.zoom == 0.58) {
      props.setZoom(1);
      setZoomInOut({ cursor: "zoom-out" });
    } else {
      props.setZoom(0.58);
      setZoomInOut({ cursor: "zoom-in" });
    }
  };

  return (
    <div>
      <div
        id="zoom"
        className="flex justify-center items-start h-96 "
        style={{
          transform: `scale(${props.zoom})`,
          transformOrigin: "top center",
          cursor: zoomInOut.cursor,
        }}
        onClick={() => handleZoom()}
      >
        <div
          id="resume"
          className="bg-white shadow-lg"
          style={{ width: "210mm", height: "297mm" }}
        >
          <div className="grid grid-cols-3 h-full relative">
            <div className="bg-yellow-500 h-28 text-black py-6 pe-4 flex flex-row justify-start items-center absolute start-28 right-0 top-16 z-0">
              <div className="ms-44">
                <h1 className="text-3xl font-bold">
                  {DataPersonalDetails.firstName} {DataPersonalDetails.lastName}
                </h1>
                <h2 className="text-lg">{DataPersonalDetails.headline}</h2>
              </div>
            </div>
            <div className=" bg-gray-900">
              <div className="col-span-1 text-white p-6 relative">
                <div className="flex flex-row justify-center static z-20 mb-6">
                  <div className=" w-36 h-48">
                    <Image
                      src={img}
                      alt="Profile Picture"
                      className=" w-36 h-48   border-4 border-white"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  {DataPersonalDetails.phoneNumber.length > 0 && (
                    <p className="text-xs flex flex-row items-center mb-1">
                      <LocalPhoneIcon
                        fontSize="small"
                        sx={{ color: "#EAB308" }}
                      />
                      <span className="ms-2">
                        {DataPersonalDetails.phoneNumber}
                      </span>
                    </p>
                  )}
                  {DataPersonalDetails.email.length > 0 && (
                    <p className="text-xs flex flex-row items-center mb-1">
                      <MarkunreadIcon
                        fontSize="small"
                        sx={{ color: "#EAB308" }}
                      />
                      <span className="ms-2">{DataPersonalDetails.email}</span>
                    </p>
                  )}
                  {/* webSite */}
                  {/* <p className="text-xs flex flex-row items-center mb-1">
                    <LanguageIcon
                      fontSize="small"
                      sx={{ color: "#EAB308" }}
                    />
                    <span className="ms-2">www.reallygreatsite.com</span>
                  </p> */}
                  {(DataPersonalDetails.address.length > 0 ||
                    DataPersonalDetails.postCode.length > 0 ||
                    DataPersonalDetails.city.length > 0) && (
                    <p className="text-xs flex flex-row items-center">
                      <LocationOnIcon
                        fontSize="small"
                        sx={{ color: "#EAB308" }}
                      />
                      <span className="ms-2">
                        {DataPersonalDetails.address}{" "}
                        {DataPersonalDetails.postCode},{" "}
                        {DataPersonalDetails.city}
                      </span>
                    </p>
                  )}
                </div>
                {(DataListEducation.length > 0 ||
                  DataEducation.education.length > 0) && (
                  <div className="mb-4">
                    <h2 className="text-lg font-bold border-b-4 border-yellow-500">
                      EDUCATION
                    </h2>
                    {DataListEducation.length > 0 &&
                      DataListEducation.map((education, i) => (
                        <div key={i} className="ms-1 mb-1 flex flex-col">
                          <div className="flex flex-col ">
                            <div>
                              <p className="text-lg font-bold flex flex-row items-center">
                                <SquareIcon
                                  sx={{ color: "#EAB308", fontSize: 15 }}
                                />{" "}
                                <span className="ms-1">
                                  {education.education}
                                </span>
                              </p>
                              {education.school.length > 0 && (
                                <p className="text-sm">
                                  {education.school}, {education.city}
                                </p>
                              )}
                            </div>
                            {education.startYear.length > 0 && (
                              <p className="text-sm text-gray-300">
                                {education.startYear} - {education.endYear}
                              </p>
                            )}
                          </div>
                          <div>
                            <p className="text-xs">{education.description}</p>
                          </div>
                        </div>
                      ))}
                    {DataEducation.education.length > 0 && (
                      <div className="ms-1 mb-1 flex flex-col">
                        <div className="flex flex-col">
                          <div>
                            <p className="text-lg font-bold">
                              {DataEducation.education}
                            </p>
                            {(DataEducation.school.length > 0 ||
                              DataEducation.city.length > 0) && (
                              <p className="text-sm">
                                {DataEducation.school}, {DataEducation.city}
                              </p>
                            )}
                          </div>
                          {(DataEducation.startYear.length > 0 ||
                            DataEducation.endYear.length > 0) && (
                            <p className="text-sm text-gray-300">
                              {DataEducation.startYear} -{" "}
                              {DataEducation.endYear}
                            </p>
                          )}
                        </div>
                        <div>
                          <p className="text-xs">{DataEducation.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {(DataSkill.skill.length > 0 || DataListSkills.length > 0) && (
                  <div className="mb-4">
                    <h2 className="text-lg font-bold border-b-4 border-yellow-500">
                      Skills
                    </h2>
                    {DataListSkills.length > 0 &&
                      DataListSkills.map((skill, i) => (
                        <div key={i} className="mt-1">
                          <p className="text-sm mb-0 text-start">
                            {skill.skill}
                          </p>
                          <p className="text-sm mb-0 text-end">
                            <Rating
                              name="size-small"
                              size="small"
                              value={skill.value}
                              readOnly
                            />
                            {/* <Box sx={{ ml: 1 }}>{labels[DataSkill.value]}</Box> */}
                          </p>
                        </div>
                      ))}
                    {DataSkill.skill.length > 0 && (
                      <div className="my-1">
                        <p className="text-sm mb-0 text-start">
                          {DataSkill.skill}
                        </p>
                        <p className="text-xs mb-0 flex flex-row justify-end">
                          <Rating
                            name="size-small"
                            size="small"
                            value={DataSkill.value}
                            readOnly
                          />
                          {/* <Box sx={{ ml: 1 }}>{labels[DataSkill.value]}</Box> */}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                {(DataListLanguages.length > 0 ||
                  DataLanguage.language.length > 0) && (
                  <div className="mb-4">
                    <h2 className="text-lg font-bold border-b-4 border-yellow-500">
                      LANGUAGE
                    </h2>
                    {DataListLanguages.length > 0 &&
                      DataListLanguages.map((language, i) => (
                        <div className="my-1" key={i}>
                          <p className="text-sm mb-0 text-start">
                            {language.language}
                          </p>
                          <p className="text-xs mb-0 flex flex-row justify-end">
                            <Rating
                              name="size-small"
                              size="small"
                              value={language.value}
                              readOnly
                            />
                          </p>
                        </div>
                      ))}
                    {DataLanguage.language.length > 0 && (
                      <div className="my-1">
                        <p className="text-sm mb-0 text-start">
                          {DataLanguage.language}
                        </p>
                        <p className="text-xs mb-0 flex flex-row justify-end">
                          <Rating
                            name="size-small"
                            size="small"
                            value={DataLanguage.value}
                            readOnly
                          />
                        </p>
                      </div>
                    )}
                  </div>
                )}
                {(DataListHobbies.length > 0 || DataHobby.hobby.length > 0) && (
                  <div className="mb-4">
                    <h2 className="text-lg font-bold border-b-4 border-yellow-500">
                      HOBBIES
                    </h2>
                    {DataListHobbies.length > 0 &&
                      DataListHobbies.map((hobby, i) => (
                        <div className="my-1 ms-1" key={i}>
                          <p className="text-sm mb-0 text-start">
                            <FiberManualRecordIcon
                              fontSize="small"
                              sx={{ color: "#EAB308" }}
                            />
                            {hobby.hobby}
                          </p>
                        </div>
                      ))}
                    {DataHobby.hobby.length > 0 && (
                      <div className="my-1 ms-1">
                        <p className="text-sm mb-0 text-start">
                          <FiberManualRecordIcon
                            fontSize="small"
                            sx={{ color: "#EAB308" }}
                          />
                          {DataHobby.hobby}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-2 p-6 mt-36">
              <div className="mt-6">
                {formProfile && (
                  <div className="mb-6">
                    <h2 className="text-lg font-bold">Profile</h2>
                    <p className="text-sm ms-4">
                      {DataProfile.descriptionProfile}
                    </p>
                  </div>
                )}
                <h2 className="text-2xl font-bold">Experience</h2>
                <div className="mt-4">
                  <div className="border-l-4 border-yellow-500 pl-4 mb-4">
                    <p className="text-xs text-gray-600">Jan 2022 - Present</p>
                    <h3 className="text-lg font-bold">
                      Company Name | 123 Anywhere St., Any City
                    </h3>
                    <h4 className="text-md font-bold">
                      Digital Marketing Manager
                    </h4>
                    <p className="text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pharetra in lorem at laoreet. Donec hendrerit
                      libero eget est tempor, quis tempus arcu elementum. In
                      elementum elit at dui tristique feugiat.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4 mb-4">
                    <p className="text-xs text-gray-600">2017 - 2019</p>
                    <h3 className="text-lg font-bold">
                      Company Name | 123 Anywhere St., Any City
                    </h3>
                    <h4 className="text-md font-bold">Social Media Manager</h4>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pharetra in lorem at laoreet. Donec hendrerit
                      libero eget est tempor, quis tempus arcu elementum. In
                      elementum elit at dui tristique feugiat.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4 mb-4">
                    <p className="text-xs text-gray-600">2015 - 2017</p>
                    <h3 className="text-lg font-bold">
                      Company Name | 123 Anywhere St., Any City
                    </h3>
                    <h4 className="text-md font-bold">Social Media Manager</h4>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pharetra in lorem at laoreet. Donec hendrerit
                      libero eget est tempor, quis tempus arcu elementum. In
                      elementum elit at dui tristique feugiat.
                    </p>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mt-6">Reference</h2>
                <div className="mt-4">
                  <p className="text-md font-bold">Estelle Darcy</p>
                  <p className="text-xs">Wardiere Inc. / CEO</p>
                  <p className="text-xs">Phone: +123-456-7890</p>
                  <p className="text-xs">Email: hello@reallygreatsite.com</p>
                </div>
                <div className="mt-4">
                  <p className="text-md font-bold">Harper Russo</p>
                  <p className="text-xs">Wardiere Inc. / CEO</p>
                  <p className="text-xs">Phone: +123-456-7890</p>
                  <p className="text-xs">Email: hello@reallygreatsite.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
