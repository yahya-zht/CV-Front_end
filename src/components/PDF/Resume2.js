import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { COLORS } from "@/constants/theme";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SquareIcon from "@mui/icons-material/Square";
import QRCodeComponent from "../QRCodeComponent";
const labels = {
  1: "Beginner",
  2: "Moderate",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
};
const Resume2 = forwardRef((props, ref) => {
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
  const CourseData = useSelector((state) => state.course.CourseData);
  const CoursesList = useSelector((state) => state.course.CoursesList);

  const AchievementsData = useSelector(
    (state) => state.Achievements.AchievementsData
  );

  const CertificateData = useSelector(
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
      <div className="bg-yellow-500 h-28 text-black py-6 pe-4 flex flex-row justify-between items-center absolute start-28 right-0 top-16 z-0">
        <div className={DataPersonalDetails.uploadedImage ? "ms-44" : "ms-20"}>
          <p className="text-3xl font-bold">
            {DataPersonalDetails.firstName} {DataPersonalDetails.lastName}
          </p>
          <p className="text-lg">{DataPersonalDetails.headline}</p>
        </div>
        {DataPersonalDetails.website && DataPersonalDetails.checkedWeb && (
          <div className="flex flex-col items-center">
            <LanguageIcon fontSize="small" sx={{ color: "#111827" }} />
            <QRCodeComponent value={DataPersonalDetails.website} />
          </div>
        )}
        {DataPersonalDetails.linkedIn &&
          DataPersonalDetails.checkedLinkedIn && (
            <div className="flex flex-col items-center">
              <LinkedInIcon fontSize="small" sx={{ color: "#111827" }} />
              <QRCodeComponent value={DataPersonalDetails.linkedIn} />
            </div>
          )}
      </div>
      <div className=" bg-gray-900">
        <div className="col-span-1 text-white p-6 relative">
          <div className="flex flex-row  justify-center static z-20 mb-6">
            {DataPersonalDetails.uploadedImage ? (
              <div className="w-36 h-48 ">
                <div className="w-full h-full relative ">
                  <Image
                    src={DataPersonalDetails.uploadedImage}
                    alt="Uploaded image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg border-4 border-white"
                  />
                </div>
              </div>
            ) : (
              <div className="mb-32"></div>
            )}
          </div>
          {(DataPersonalDetails.phoneNumber ||
            DataPersonalDetails.email ||
            DataPersonalDetails.address ||
            DataPersonalDetails.postCode ||
            DataPersonalDetails.city ||
            DataPersonalDetails.website ||
            DataPersonalDetails.linkedIn) && (
            <div className="mb-4">
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
              {DataPersonalDetails.website.length > 0 &&
                !DataPersonalDetails.checkedWeb && (
                  <p className="text-xs flex flex-row items-center">
                    <LanguageIcon fontSize="small" sx={{ color: "#EAB308" }} />
                    <span className="ms-2">{DataPersonalDetails.website}</span>
                  </p>
                )}
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
              {DataPersonalDetails.linkedIn.length > 0 &&
                !DataPersonalDetails.checkedLinkedIn && (
                  <p className="text-xs flex flex-row items-center">
                    <LinkedInIcon fontSize="small" sx={{ color: "#EAB308" }} />
                    <span className="ms-2">{DataPersonalDetails.linkedIn}</span>
                  </p>
                )}
            </div>
          )}
          {(DataListEducation.length > 0 ||
            DataEducation.education ||
            DataEducation.school ||
            DataEducation.city ||
            DataEducation.startYear ||
            DataEducation.endYear ||
            DataEducation.description) && (
            <div className="mb-4">
              <p className="text-lg font-bold border-b-4 border-yellow-500">
                EDUCATION
              </p>
              <div className="ms-1 ">
                {DataListEducation.length > 0 &&
                  DataListEducation.map((education, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex flex-col ">
                        <div>
                          <p className="text-lg font-bold flex flex-row items-center">
                            <SquareIcon
                              sx={{ color: "#EAB308", fontSize: 15 }}
                            />{" "}
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
                {(DataEducation.education ||
                  DataEducation.school ||
                  DataEducation.city ||
                  DataEducation.startYear ||
                  DataEducation.endYear ||
                  DataEducation.description) && (
                  <div className="mb-1 flex flex-col">
                    <div className="flex flex-col">
                      <div>
                        <p className="text-lg font-bold flex flex-row items-center">
                          <SquareIcon sx={{ color: "#EAB308", fontSize: 15 }} />{" "}
                          <span className="ms-1 ">
                            {DataEducation.education}
                          </span>
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
            </div>
          )}
          {(DataSkill.skill || DataListSkills.length > 0) && (
            <div className="mb-4">
              <p className="text-lg font-bold border-b-4 border-yellow-500 ">
                Skills
              </p>
              <div className="mt-1  ms-2">
                {DataListSkills.length > 0 &&
                  DataListSkills.map((skill, i) => (
                    <div key={i} className="mb-1">
                      <div className="flex flex-row justify-between items-center">
                        <p className="text-sm text-start">{skill.skill}</p>
                        <Rating
                          name="size-small"
                          size="small"
                          value={skill.value}
                          readOnly
                        />
                        {/* <Box sx={{ ml: 1 }}>{labels[DataSkill.value]}</Box> */}
                      </div>
                    </div>
                  ))}
                {DataSkill.skill.length > 0 && (
                  <div className="">
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-sm text-start">{DataSkill.skill}</p>
                      <Rating
                        name="size-small"
                        size="small"
                        value={DataSkill.value}
                        readOnly
                      />
                      {/* <Box sx={{ ml: 1 }}>{labels[DataSkill.value]}</Box> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {(DataListLanguages.length > 0 || DataLanguage.language) && (
            <div className="mb-4">
              <p className="text-lg font-bold border-b-4 border-yellow-500 ">
                LANGUAGE
              </p>
              <div className="mt-1 ms-2">
                {DataListLanguages.length > 0 &&
                  DataListLanguages.map((language, i) => (
                    <div className="mb-1" key={i}>
                      <div className="flex flex-row justify-between items-center">
                        <p className="text-sm text-start">
                          {language.language}
                        </p>
                        <Rating
                          name="size-small"
                          size="small"
                          value={language.value}
                          readOnly
                        />
                      </div>
                    </div>
                  ))}
                {DataLanguage.language.length > 0 && (
                  <div className="">
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-sm  text-start">
                        {DataLanguage.language}
                      </p>
                      <Rating
                        name="size-small"
                        size="small"
                        value={DataLanguage.value}
                        readOnly
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {(DataListHobbies.length > 0 || DataHobby.hobby) && (
            <div className="mb-4">
              <p className="text-lg font-bold border-b-4 border-yellow-500 ">
                HOBBIES
              </p>
              <div className="my-1 ms-2">
                {DataListHobbies.length > 0 &&
                  DataListHobbies.map((hobby, i) => (
                    <div className="" key={i}>
                      <p className="text-xs flex flex-row items-center">
                        <FiberManualRecordIcon
                          fontSize="small"
                          sx={{ color: "#EAB308" }}
                        />
                        <span className="text-start text-sm ">
                          {hobby.hobby}
                        </span>
                      </p>
                    </div>
                  ))}
                {DataHobby.hobby.length > 0 && (
                  <div className="">
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
            </div>
          )}
          {formQualities && (
            <div className="mb-4">
              <p className="text-lg font-bold border-b-4 border-yellow-500 ">
                Qualities
              </p>
              <div className="my-1  ms-2 ">
                {QualitiesList.length > 0 &&
                  QualitiesList.map((quality, i) => (
                    <div className="" key={i}>
                      <p className="text-xs flex flex-row items-center">
                        <FiberManualRecordIcon
                          fontSize="small"
                          sx={{ color: "#EAB308" }}
                        />
                        <span className="text-start text-sm ">
                          {quality.quality}
                        </span>
                      </p>
                    </div>
                  ))}
                {QualitiesData.quality && (
                  <div className="">
                    <p className="text-xs flex flex-row items-center">
                      <FiberManualRecordIcon
                        fontSize="small"
                        sx={{ color: "#EAB308" }}
                      />
                      <span className="text-start text-sm ">
                        {QualitiesData.quality}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 p-3 mt-36 grid ">
        <div className=" flex flex-col justify-between">
          <div className="mt-6">
            {formProfile && (
              <div className="mt-2">
                <p className="text-lg font-bold border-b-4 border-yellow-500">
                  Profile
                </p>
                <p className="text-sm ms-4 ">
                  {DataProfile.descriptionProfile}
                </p>
              </div>
            )}
            {(DataListEmployment.length > 0 ||
              DataEmployment.position ||
              DataEmployment.startMonthEmployment ||
              DataEmployment.startYearEmployment ||
              DataEmployment.employer ||
              DataEmployment.cityEmployment ||
              DataEmployment.endMonthEmployment ||
              DataEmployment.endYearEmployment ||
              DataEmployment.descriptionEmployment) && (
              <div className="mt-2">
                <div className=" border-b-4 border-yellow-500 ">
                  <p className="text-lg font-bold ">Employment</p>
                </div>
                <div className="mt-1">
                  {DataListEmployment.length > 0 &&
                    DataListEmployment.map((employ, i) => (
                      <div
                        key={i}
                        className="border-l-4 border-yellow-500 pl-4 mb-1 "
                      >
                        <p className="m-0">
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-[16px] font-bold">
                              {employ.position}
                            </p>
                            <p className="text-xs text-gray-600">
                              {employ.startMonthEmployment}{" "}
                              {employ.startYearEmployment} -{" "}
                              {employ.endMonthEmployment}{" "}
                              {employ.endYearEmployment}
                            </p>
                          </div>
                          <p className="text-sm font-semibold">
                            {employ.employer}
                            <span>, {employ.cityEmployment}</span>
                          </p>
                          <p className="text-[12px] text-justify">
                            {employ.descriptionEmployment}
                          </p>
                        </p>
                      </div>
                    ))}
                  {(DataEmployment.position ||
                    DataEmployment.startMonthEmployment ||
                    DataEmployment.startYearEmployment ||
                    DataEmployment.endMonthEmployment ||
                    DataEmployment.endYearEmployment ||
                    DataEmployment.descriptionEmployment ||
                    DataEmployment.employer ||
                    DataEmployment.cityEmployment) && (
                    <div className="border-l-4 border-yellow-500 pl-4  mb-1">
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
                        {(DataEmployment.employer ||
                          DataEmployment.cityEmployment) && (
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
            {formInternships && (
              <div className="mt-2">
                <div className=" border-b-4 border-yellow-500 ">
                  <p className="text-lg font-bold ">Internships</p>
                </div>
                <div className="mt-1">
                  {InternshipsList.length > 0 &&
                    InternshipsList.map((internship, i) => (
                      <div
                        key={i}
                        className="border-l-4 border-yellow-500 pl-4 mb-1"
                      >
                        <p className="m-0">
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-[16px] font-bold">
                              {internship.position}
                            </p>
                            <p className="text-xs text-gray-600">
                              {internship.startMonthInternship}{" "}
                              {internship.startYearInternship} -{" "}
                              {internship.endMonthInternship}{" "}
                              {internship.endYearInternship}
                            </p>
                          </div>
                          {(internship.Internship ||
                            internship.cityInternship) && (
                            <p className="text-sm font-semibold">
                              {internship.Internship}
                              <span>, {internship.cityInternship}</span>
                            </p>
                          )}
                          <p className="text-[12px] text-justify">
                            {internship.descriptionInternship}
                          </p>
                        </p>
                      </div>
                    ))}
                  {(InternshipsData.position ||
                    InternshipsData.startMonthInternship ||
                    InternshipsData.startYearInternship ||
                    InternshipsData.endMonthInternship ||
                    InternshipsData.endYearInternship ||
                    InternshipsData.Internship ||
                    InternshipsData.cityInternship ||
                    InternshipsData.descriptionInternship) && (
                    <div className="border-l-4 border-yellow-500 pl-4  mb-1">
                      <p className="">
                        <div className="flex flex-row justify-between items-center">
                          <p className="text-[16px] font-bold">
                            {InternshipsData.position}
                          </p>
                          <p className="text-xs text-gray-600">
                            {InternshipsData.startMonthInternship}{" "}
                            {InternshipsData.startYearInternship} -{" "}
                            {InternshipsData.endMonthInternship}{" "}
                            {InternshipsData.endYearInternship}
                          </p>
                        </div>
                        {(InternshipsData.Internship ||
                          InternshipsData.cityInternship) && (
                          <p className="text-sm font-semibold">
                            {InternshipsData.Internship}
                            <span>, {InternshipsData.cityInternship}</span>
                          </p>
                        )}
                        <p className="text-[12px] text-justify">
                          {InternshipsData.descriptionInternship}
                        </p>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {formCourses && (
              <div className="mt-2">
                <p className="text-lg font-bold border-b-4 border-yellow-500">
                  Courses
                </p>
                <div className="mt-1 ms-2">
                  {CoursesList.length > 0 &&
                    CoursesList.map((course, i) => (
                      <div key={i} className="">
                        <div className="grid grid-cols-2">
                          <p className="text-md font-bold">{course.course}</p>
                          <p>
                            {course.monthCourse} - {course.yearCourse}
                          </p>
                        </div>
                        <p className="text-xs ms-1">
                          {course.descriptionCourse}
                        </p>
                      </div>
                    ))}
                  {CourseData && (
                    <div className="mb-1">
                      <div className="grid grid-cols-2">
                        <p className="text-md font-bold">{CourseData.course}</p>
                        {(CourseData.monthCourse || CourseData.yearCourse) && (
                          <p>
                            {CourseData.monthCourse} - {CourseData.yearCourse}
                          </p>
                        )}
                      </div>
                      <p className="text-xs ms-1">
                        {CourseData.descriptionCourse}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {formCertificates && (
              <div className="mt-2">
                <p className="text-lg font-bold border-b-4 border-yellow-500">
                  Certificates
                </p>
                <div className="mt-1 ms-2">
                  {CertificatesList.length > 0 &&
                    CertificatesList.map((certificate, i) => (
                      <div key={i} className=" ">
                        <div className="grid grid-cols-2">
                          <p className="text-md font-bold">
                            {certificate.Certificate}
                          </p>
                          <p>
                            {certificate.monthCertificate} -{" "}
                            {certificate.yearCertificate}
                          </p>
                        </div>
                        <p className="text-xs ms-1">
                          {certificate.descriptionCertificate}
                        </p>
                      </div>
                    ))}
                  {CertificateData && (
                    <div className="mb-1">
                      <div className="grid grid-cols-2">
                        <p className="text-md font-bold">
                          {CertificateData.Certificate}
                        </p>
                        {(CertificateData.monthCertificate ||
                          CertificateData.yearCertificate) && (
                          <p>
                            {CertificateData.monthCertificate} -{" "}
                            {CertificateData.yearCertificate}
                          </p>
                        )}
                      </div>
                      <p className="text-xs ms-1">
                        {CertificateData.descriptionCertificate}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/*  */}
            {formExtracurricularActivities && (
              <div className="mt-2">
                <div className=" border-b-4 border-yellow-500 ">
                  <p className="text-lg font-bold ">
                    Extracurricular Activities
                  </p>
                </div>
                <div className="mt-1">
                  {ExtracurricularActivitiesList.length > 0 &&
                    ExtracurricularActivitiesList.map((e, i) => (
                      <div
                        key={i}
                        className="border-l-4 border-yellow-500 pl-4 mb-1 "
                      >
                        <p className="m-0">
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-[16px] font-bold">
                              {e.position}
                            </p>
                            <p className="text-xs text-gray-600">
                              {e.startMonthExtracurricularActivities}{" "}
                              {e.startYearExtracurricularActivities} -{" "}
                              {e.endMonthExtracurricularActivities}{" "}
                              {e.endYearExtracurricularActivities}
                            </p>
                          </div>
                          <p className="text-sm font-semibold">
                            {e.employer}
                            <span>, {e.cityExtracurricularActivities}</span>
                          </p>
                          <p className="text-[12px] text-justify">
                            {e.descriptionExtracurricularActivities}
                          </p>
                        </p>
                      </div>
                    ))}
                  {(ExtracurricularActivitiesData.position ||
                    ExtracurricularActivitiesData.startMonthExtracurricularActivities ||
                    ExtracurricularActivitiesData.startYearExtracurricularActivities ||
                    ExtracurricularActivitiesData.endMonthExtracurricularActivities ||
                    ExtracurricularActivitiesData.endYearExtracurricularActivities ||
                    ExtracurricularActivitiesData.descriptionExtracurricularActivities ||
                    ExtracurricularActivitiesData.employer ||
                    ExtracurricularActivitiesData.cityExtracurricularActivities) && (
                    <div className="border-l-4 border-yellow-500 pl-4  mb-1">
                      <p className="">
                        <div className="flex flex-row justify-between items-center">
                          <p className="text-[16px] font-bold">
                            {ExtracurricularActivitiesData.position}
                          </p>
                          <p className="text-xs text-gray-600">
                            {
                              ExtracurricularActivitiesData.startMonthExtracurricularActivities
                            }{" "}
                            {
                              ExtracurricularActivitiesData.startYearExtracurricularActivities
                            }{" "}
                            -{" "}
                            {
                              ExtracurricularActivitiesData.endMonthExtracurricularActivities
                            }{" "}
                            {
                              ExtracurricularActivitiesData.endYearExtracurricularActivities
                            }
                          </p>
                        </div>
                        {(ExtracurricularActivitiesData.employer ||
                          ExtracurricularActivitiesData.cityExtracurricularActivities) && (
                          <p className="text-sm font-semibold">
                            {ExtracurricularActivitiesData.employer}
                            <span>
                              ,{" "}
                              {
                                ExtracurricularActivitiesData.cityExtracurricularActivities
                              }
                            </span>
                          </p>
                        )}
                        <p className="text-[12px] text-justify">
                          {
                            ExtracurricularActivitiesData.descriptionExtracurricularActivities
                          }
                        </p>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/*  */}
            {formAchievements && (
              <div className="mt-2">
                <p className="text-lg font-bold border-b-4 border-yellow-500">
                  Achievements
                </p>
                <p className="text-sm ms-4">
                  {AchievementsData.descriptionAchievements}
                </p>
              </div>
            )}
            {formReferences && (
              <div className="mt-2">
                <p className="text-lg font-bold border-b-4 border-yellow-500">
                  Reference
                </p>
                <div className="mt-1 ms-2">
                  {DataListReferences.length > 0 &&
                    DataListReferences.map((reference, i) => (
                      <div key={i} className="">
                        <p className="text-md font-bold">{reference.name}</p>
                        {(reference.organization ||
                          reference.cityReferences) && (
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
                  {formReferences && (
                    <div className="mb-1">
                      <p className="text-md font-bold">{DataReferences.name}</p>
                      {(DataReferences.organization ||
                        DataReferences.cityReferences) && (
                        <p className="text-xs">
                          {DataReferences.organization},{" "}
                          {DataReferences.cityReferences}
                        </p>
                      )}
                      <div className=" grid grid-cols-2 gap-2">
                        {DataReferences.phoneNumber && (
                          <p className="text-xs col-6">
                            <span className="font-semibold">Phone: </span>
                            {DataReferences.phoneNumber}
                          </p>
                        )}
                        {DataReferences.email && (
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
          <div>
            {formFooter && (
              <div className="mt-2  bottom-0 ">
                {/* <p className="text-lg font-bold border-b-4 border-yellow-500">
                Footer
              </p> */}
                <p className="text-sm text-center">
                  {FooterData.descriptionFooter}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume2;
