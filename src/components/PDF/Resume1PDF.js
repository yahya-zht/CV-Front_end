import React, { forwardRef, useEffect } from "react";
import { useSelector } from "react-redux";
import img from "../../assets/images/avatar03.jpeg";
import Image from "next/image";
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
const Resume1PDF = forwardRef((props, ref) => {
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
  const DataEmployment = useSelector(
    (state) => state.Employment.DataEmployment
  );
  const DataListEmployment = useSelector(
    (state) => state.Employment.DataListEmployment
  );
  const DataListLanguages = useSelector(
    (state) => state.Languages.DataListLanguages
  );
  const DataLanguage = useSelector((state) => state.Languages.DataLanguage);
  const DataListReferences = useSelector(
    (state) => state.References.DataListReferences
  );
  const DataReferences = useSelector(
    (state) => state.References.DataReferences
  );
  const CoursesData = useSelector((state) => state.course.CourseData);
  const CoursesList = useSelector((state) => state.course.CoursesList);

  const AchievementsData = useSelector(
    (state) => state.Achievements.AchievementsData
  );

  const CertificatesData = useSelector(
    (state) => state.Certificates.CertificateData
  );
  const CertificatesList = useSelector(
    (state) => state.Certificates.CertificatesList
  );

  const ExtracurricularActivitiesData = useSelector(
    (state) => state.ExtracurricularActivities.ExtracurricularActivitiesData
  );
  const ExtracurricularActivitiesList = useSelector(
    (state) => state.ExtracurricularActivities.ExtracurricularActivitiesList
  );

  const FooterData = useSelector((state) => state.Footer.FooterData);

  const InternshipsData = useSelector(
    (state) => state.Internships.InternshipsData
  );
  const InternshipsList = useSelector(
    (state) => state.Internships.InternshipsList
  );

  const QualitiesData = useSelector((state) => state.Qualities.QualitiesData);
  const QualitiesList = useSelector((state) => state.Qualities.QualitiesList);



  const formProfile = useSelector((state) => state.Profile.formProfile);
  const formReferences = useSelector(
    (state) => state.References.formReferences
  );

  const formCourses = useSelector((state) => state.course.formCourse);
  const formInternships = useSelector(
    (state) => state.Internships.formInternships
  );
  const formCertificates = useSelector(
    (state) => state.Certificates.formCertificates
  );
  const formQualities = useSelector((state) => state.Qualities.formQualities);
  const formFooter = useSelector((state) => state.Footer.formFooter);
  const formAchievements = useSelector(
    (state) => state.Achievements.formAchievements
  );
  const formExtracurricularActivities = useSelector(
    (state) => state.ExtracurricularActivities.formExtracurricularActivities
  );


  return (
    <div className="grid grid-cols-3 h-full relative">
      <div className="bg-yellow-500 h-28 text-black py-6 pe-4 flex flex-row justify-start items-center absolute start-28 right-0 top-16 z-0">
        <div className="ms-44 ">
          <p className="text-3xl font-bold">
            {DataPersonalDetails.firstName} {DataPersonalDetails.lastName}
          </p>
          <p className="text-lg">{DataPersonalDetails.headline}</p>
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
          {(DataPersonalDetails.phoneNumber ||
            DataPersonalDetails.email ||
            DataPersonalDetails.address ||
            DataPersonalDetails.postCode ||
            DataPersonalDetails.city) && (
            <div className="mb-6">
              {DataPersonalDetails.phoneNumber.length > 0 && (
                <p className="text-xs flex flex-row items-center ">
                  <LocalPhoneIcon fontSize="small" sx={{ color: "#EAB308" }} />
                  <span className="ms-2 ">
                    {DataPersonalDetails.phoneNumber}
                  </span>
                </p>
              )}
              {DataPersonalDetails.email.length > 0 && (
                <p className="text-xs flex flex-row items-center">
                  <MarkunreadIcon fontSize="small" sx={{ color: "#EAB308" }} />
                  <span className="ms-2 ">{DataPersonalDetails.email}</span>
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
                  <LocationOnIcon fontSize="small" sx={{ color: "#EAB308" }} />
                  <span className="ms-2 ">
                    {DataPersonalDetails.address} {DataPersonalDetails.postCode}
                    , {DataPersonalDetails.city}
                  </span>
                </p>
              )}
            </div>
          )}
          {(DataListEducation.length > 0 || DataEducation.education) && (
            <div className="mb-4">
              <p className="text-lg font-bold border-b-4 border-yellow-500">
                EDUCATION
              </p>
              {DataListEducation.length > 0 &&
                DataListEducation.map((education, i) => (
                  <div key={i} className="ms-1 mb-1 flex flex-col">
                    <div className="flex flex-col ">
                      <div>
                        <p className="text-lg font-bold flex flex-row items-center">
                          <SquareIcon sx={{ color: "#EAB308", fontSize: 15 }} />{" "}
                          <span className="ms-1 ">{education.education}</span>
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
                      <p className="text-lg font-bold flex flex-row items-center">
                        <SquareIcon sx={{ color: "#EAB308", fontSize: 15 }} />{" "}
                        <span className="ms-1 ">{DataEducation.education}</span>
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
                        {DataEducation.startYear} - {DataEducation.endYear}
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
          {(DataSkill.skill || DataListSkills.length > 0) && (
            <div className="mb-4">
              <p className="text-lg font-bold border-b-4 border-yellow-500 ">
                Skills
              </p>
              {DataListSkills.length > 0 &&
                DataListSkills.map((skill, i) => (
                  <div key={i} className="mt-1">
                    <p className="text-sm mb-0 text-start">{skill.skill}</p>
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
                  <p className="text-sm mb-0 text-start">{DataSkill.skill}</p>
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
          {(DataListLanguages.length > 0 || DataLanguage.language) && (
            <div className="mb-4">
              <p className="text-lg font-bold border-b-4 border-yellow-500 ">
                LANGUAGE
              </p>
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
          {(DataListHobbies.length > 0 || DataHobby.hobby) && (
            <div className="mb-4">
              <p className="text-lg font-bold border-b-4 border-yellow-500 ">
                HOBBIES
              </p>
              {DataListHobbies.length > 0 &&
                DataListHobbies.map((hobby, i) => (
                  <div className="my-1 ms-1" key={i}>
                    <p className="text-xs flex flex-row items-center">
                      <FiberManualRecordIcon
                        fontSize="small"
                        sx={{ color: "#EAB308" }}
                      />
                      <span className="text-start text-sm ">{hobby.hobby}</span>
                    </p>
                  </div>
                ))}
              {DataHobby.hobby.length > 0 && (
                <div className="my-1 ms-1">
                  <p className="text-xs flex flex-row items-center">
                    <FiberManualRecordIcon
                      fontSize="small"
                      sx={{ color: "#EAB308" }}
                    />
                    <span className="text-start text-sm ">
                      {DataHobby.hobby}
                    </span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 p-3 mt-36">
        <div className="mt-6">
          {formProfile && (
            <div className="mb-6">
              <p className="text-lg font-bold border-b-4 border-yellow-500">
                Profile
              </p>
              <p className="text-sm ms-4 ">{DataProfile.descriptionProfile}</p>
            </div>
          )}
          {(DataListEmployment.length > 0 || DataEmployment.position) && (
            <div>
              <div className=" border-b-4 border-yellow-500 ">
                <p className="text-lg font-bold ">Employment</p>
              </div>
              <div className="mt-2">
                {DataListEmployment.length > 0 &&
                  DataListEmployment.map((employ, i) => (
                    <div
                      key={i}
                      className="border-l-4 border-yellow-500 pl-4 mb-1"
                    >
                      <p className="m-0">
                        <div className="flex flex-row justify-between items-center m-0">
                          <p className="text-[16px] font-bold m-0">
                            {employ.position}
                          </p>
                          <p className="text-xs text-gray-600 m-0">
                            {employ.startMonthEmployment}{" "}
                            {employ.startYearEmployment} -{" "}
                            {employ.endMonthEmployment}{" "}
                            {employ.endYearEmployment}
                          </p>
                        </div>
                        <p className="text-sm font-semibold m-0">
                          {employ.employer}
                          <span>, {employ.cityEmployment}</span>
                        </p>
                        <p className="text-[12px] text-justify m-0">
                          {employ.descriptionEmployment}
                        </p>
                      </p>
                    </div>
                  ))}
                {DataEmployment.position.length > 0 && (
                  <div className="border-l-4 border-yellow-500 pl-4 ">
                    <p className="">
                      <div className="flex flex-row justify-between items-center">
                        <p className="text-[16px] font-bold">
                          {DataEmployment.position}
                        </p>
                        <p className="text-xs text-gray-600">
                          {DataEmployment.startMonthEmployment}{" "}
                          {DataEmployment.startYearEmployment} -{" "}
                          {DataEmployment.endMonthEmployment}{" "}
                          {DataEmployment.endYearEmployment}
                        </p>
                      </div>
                      {DataEmployment.employer.length > 0 && (
                        <p className="text-sm font-semibold">
                          {DataEmployment.employer}
                          <span>, {DataEmployment.cityEmployment}</span>
                        </p>
                      )}
                      <p className="text-[12px] text-justify">
                        {DataEmployment.descriptionEmployment}
                      </p>
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          {formReferences && (
            <div>
              <p className="text-lg font-bold mt-6  border-b-4 border-yellow-500">
                Reference
              </p>
              <div className="mt-1 ms-2">
                {DataListReferences.length > 0 &&
                  DataListReferences.map((reference, i) => (
                    <div key={i} className="">
                      <p className="text-md font-bold">{reference.name}</p>
                      {(reference.organization.length > 0 ||
                        reference.cityReferences.length > 0) && (
                        <p className="text-xs">
                          {reference.organization}, {reference.cityReferences}
                        </p>
                      )}
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-xs ">
                          <span className="font-semibold">Phone: </span>
                          {reference.phoneNumber}
                        </p>
                        <p className="text-xs">
                          <span className="font-semibold">Email: </span>{" "}
                          {reference.email}
                        </p>
                      </div>
                    </div>
                  ))}
                {DataReferences.name && (
                  <div className="">
                    <p className="text-md font-bold">{DataReferences.name}</p>
                    {(DataReferences.organization.length > 0 ||
                      DataReferences.cityReferences.length > 0) && (
                      <p className="text-xs">
                        {DataReferences.organization},{" "}
                        {DataReferences.cityReferences}
                      </p>
                    )}
                    <div className=" grid grid-cols-2 gap-2">
                      {DataReferences.phoneNumber.length > 0 && (
                        <p className="text-xs col-6">
                          <span className="font-semibold">Phone: </span>
                          {DataReferences.phoneNumber}
                        </p>
                      )}
                      {DataReferences.email.length > 0 && (
                        <p className="text-xs me-5 col-6">
                          <span className="font-semibold">Email: </span>
                          {DataReferences.email}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Resume1PDF;
