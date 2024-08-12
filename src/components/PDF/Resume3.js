import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import QRCodeComponent from "../QRCodeComponent";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import Profile from "../DetailsInfo/Profile";
import Skills from "../DetailsInfo/Skills";
import Language from "../DetailsInfo/Language";
import Hobbies from "../DetailsInfo/Hobbies";

const Resume3 = forwardRef(() => {
  // DataPersonalDetails
  const DataPersonalDetails = useSelector(
    (state) => state.PersonalDetailsStore.DataPersonalDetails
  );
  // Profile
  const formProfile = useSelector((state) => state.Profile.formProfile);
  const DataProfile = useSelector((state) => state.Profile.DataProfile);
  // Language
  const DataListLanguages = useSelector(
    (state) => state.Languages.DataListLanguages
  );
  const DataLanguage = useSelector((state) => state.Languages.DataLanguage);
  // Skill
  const DataSkill = useSelector((state) => state.Skills.DataSkill);
  const DataListSkills = useSelector((state) => state.Skills.DataListSkills);
  // Hobby
  const DataHobby = useSelector((state) => state.Hobbies.DataHobby);
  const DataListHobbies = useSelector((state) => state.Hobbies.DataListHobbies);
  // Qualities
  const formQualities = useSelector((state) => state.Qualities.formQualities);
  const QualitiesData = useSelector((state) => state.Qualities.QualitiesData);
  const QualitiesList = useSelector((state) => state.Qualities.QualitiesList);
  // courses
  const formCourses = useSelector((state) => state.course.formCourse);
  const CourseData = useSelector((state) => state.course.CourseData);
  const CoursesList = useSelector((state) => state.course.CoursesList);
  //Employment
  const DataEmployment = useSelector(
    (state) => state.Employment.DataEmployment
  );
  const DataListEmployment = useSelector(
    (state) => state.Employment.DataListEmployment
  );
  //Education
  const DataEducation = useSelector((state) => state.Education.DataEducation);
  const DataListEducation = useSelector(
    (state) => state.Education.DataListEducation
  );
  // Footer
  const formFooter = useSelector((state) => state.Footer.formFooter);
  const FooterData = useSelector((state) => state.Footer.FooterData);
  // References
  const formReferences = useSelector(
    (state) => state.References.formReferences
  );
  const DataListReferences = useSelector(
    (state) => state.References.DataListReferences
  );
  const DataReferences = useSelector(
    (state) => state.References.DataReferences
  );
  // Certificates
  const formCertificates = useSelector(
    (state) => state.Certificates.formCertificates
  );
  const CertificateData = useSelector(
    (state) => state.Certificates.CertificateData
  );
  const CertificatesList = useSelector(
    (state) => state.Certificates.CertificatesList
  );
  // Extracurricular Activities
  const formExtracurricularActivities = useSelector(
    (state) => state.ExtracurricularActivities.formExtracurricularActivities
  );
  const ExtracurricularActivitiesData = useSelector(
    (state) => state.ExtracurricularActivities.ExtracurricularActivitiesData
  );
  const ExtracurricularActivitiesList = useSelector(
    (state) => state.ExtracurricularActivities.ExtracurricularActivitiesList
  );
  // Achievements
  const formAchievements = useSelector(
    (state) => state.Achievements.formAchievements
  );
  const AchievementsData = useSelector(
    (state) => state.Achievements.AchievementsData
  );
  //Internships
  const formInternships = useSelector(
    (state) => state.Internships.formInternships
  );
  const InternshipsData = useSelector(
    (state) => state.Internships.InternshipsData
  );
  const InternshipsList = useSelector(
    (state) => state.Internships.InternshipsList
  );
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#5C8E8F",
    },
    "& .MuiRating-iconHover": {
      color: "#5C8E8F",
    },
  });
  const ProfileStyleContainer =
    "text-lg font-semibold border-b-4 border-[#5C8E8F] text-center w-2/4 rounded-xl";
  const Color = "#5C8E8F";
  const ProfileStyleDescription =
    "text-xs mx-2 font-sans whitespace-pre-wrap text-justify px-2 py-1";
  return (
    <div className="flex flex-row bg-white h-full relative">
      <div className="absolute bg-[#5C8E8F] py-6 px-4 h-44 top-6 start-0 right-0 z-0 flex flex-row justify-between">
        <div className={DataPersonalDetails.uploadedImage ? "ms-72 " : "ms-48"}>
          <p className="text-4xl font-bold text-white mb-1 ">
            {DataPersonalDetails.firstName}
          </p>
          <p className="text-4xl font-bold text-white mb-1">
            {DataPersonalDetails.lastName}
          </p>
          <p className="text-lg text-white mb-1">
            {DataPersonalDetails.headline}
          </p>
        </div>
        <div>
          {DataPersonalDetails.website && DataPersonalDetails.checkedWeb && (
            <div className="flex flex-col items-center">
              <LanguageIcon fontSize="small" sx={{ color: "white" }} />
              <QRCodeComponent value={DataPersonalDetails.website} />
            </div>
          )}
          {DataPersonalDetails.linkedIn &&
            DataPersonalDetails.checkedLinkedIn && (
              <div className="flex flex-col items-center">
                <LinkedInIcon fontSize="small" sx={{ color: "white" }} />
                <QRCodeComponent value={DataPersonalDetails.linkedIn} />
              </div>
            )}
        </div>
      </div>
      <div className="bg-[#D9D9D9] w-2/5 px-6 py-4">
        <div className="flex flex-row  justify-center static z-20 mt-0">
          {DataPersonalDetails.uploadedImage ? (
            <div className="w-36 h-48 ">
              <div className="w-full h-full relative ">
                <Image
                  src={DataPersonalDetails.uploadedImage}
                  alt="Uploaded image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl border-4 border-white"
                />
              </div>
            </div>
          ) : (
            <div className="mb-32"></div>
          )}
        </div>
        <div className={DataPersonalDetails.uploadedImage ? "mt-0" : "mt-16"}>
          {/* DataPersonalDetails */}
          {(DataPersonalDetails.phoneNumber ||
            DataPersonalDetails.email ||
            DataPersonalDetails.address ||
            DataPersonalDetails.postCode ||
            DataPersonalDetails.city ||
            DataPersonalDetails.website ||
            DataPersonalDetails.linkedIn) && (
            <div className="mb-4">
              {DataPersonalDetails.phoneNumber.length > 0 && (
                <p className="text-xs flex flex-row items-center mb-1">
                  <span className="bg-[#5C8E8F] p-1 rounded-full">
                    <LocalPhoneIcon fontSize="small" sx={{ color: "white" }} />
                  </span>
                  <span className="ms-2 ">
                    {DataPersonalDetails.phoneNumber}
                  </span>
                </p>
              )}
              {DataPersonalDetails.email.length > 0 && (
                <p className="text-xs flex flex-row items-center mb-1">
                  <span className="bg-[#5C8E8F] p-1 rounded-full">
                    <MarkunreadIcon fontSize="small" sx={{ color: "white" }} />
                  </span>
                  <span className="ms-2 ">{DataPersonalDetails.email}</span>
                </p>
              )}
              {DataPersonalDetails.website.length > 0 &&
                !DataPersonalDetails.checkedWeb && (
                  <p className="text-xs flex flex-row items-center mb-1">
                    <span className="bg-[#5C8E8F] p-1 rounded-full">
                      <LanguageIcon fontSize="small" sx={{ color: "white" }} />
                    </span>
                    <span className="ms-2">{DataPersonalDetails.website}</span>
                  </p>
                )}
              {(DataPersonalDetails.address.length > 0 ||
                DataPersonalDetails.postCode.length > 0 ||
                DataPersonalDetails.city.length > 0) && (
                <p className="text-xs flex flex-row items-center mb-1">
                  <span className="bg-[#5C8E8F] p-1 rounded-full">
                    <LocationOnIcon fontSize="small" sx={{ color: "white" }} />
                  </span>
                  <span className="ms-2 ">
                    {DataPersonalDetails.address} {DataPersonalDetails.postCode}
                    , {DataPersonalDetails.city}
                  </span>
                </p>
              )}
              {DataPersonalDetails.linkedIn.length > 0 &&
                !DataPersonalDetails.checkedLinkedIn && (
                  <p className="text-xs flex flex-row items-center ">
                    <span className="bg-[#5C8E8F] p-1 rounded-full">
                      <LinkedInIcon fontSize="small" sx={{ color: "white" }} />
                    </span>
                    <span className="ms-2 ">
                      {DataPersonalDetails.linkedIn}
                    </span>
                  </p>
                )}
            </div>
          )}
          {/* DataListSkills */}
          <Skills
            DataListSkills={DataListSkills}
            DataSkill={DataSkill}
            StyleContainer={"mb-2"}
            StyleTitle={
              "text-lg font-semibold border-b-4 border-[#5C8E8F] text-center rounded-full"
            }
            styleContainerList={"mb-1"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleSkill={"text-sm text-start"}
            IconTitleSkill={true}
            IconColorSkill={"#5C8E8F"}
            Rating={false}
            StyledRating={true}
            Color={"#5C8E8F"}
          />

          {/* DataListLanguages */}
          <Language
            DataListLanguages={DataListLanguages}
            DataLanguage={DataLanguage}
            StyleContainer={"mb-2"}
            StyleTitle={
              "text-lg font-semibold border-b-4 border-[#5C8E8F] text-center rounded-full"
            }
            styleContainerList={"mb-1"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleSkill={"text-sm text-start"}
            IconTitleSkill={true}
            IconColorSkill={"#5C8E8F"}
            Rating={false}
            StyledRating={true}
            Color={"#5C8E8F"}
          />
          {/* DataListHobbies */}
          <Hobbies
            DataListHobbies={DataListHobbies}
            DataHobby={DataHobby}
            StyleContainer={"mb-2"}
            StyleTitle={
              "text-lg font-semibold border-b-4 border-[#5C8E8F] text-center rounded-full"
            }
            styleContainerList={"mb-1"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleSkill={"text-sm text-start"}
            IconTitleSkill={true}
            IconColorSkill={"#5C8E8F"}
            Color={"#5C8E8F"}
          />
          {/* formQualities */}
          {formQualities && (
            <div className="mb-2">
              <p className="text-lg font-semibold border-b-4 border-[#5C8E8F] text-center rounded-full">
                Qualities
              </p>
              <div className="mt-1 ms-2">
                {QualitiesList.length > 0 &&
                  QualitiesList.map((quality, i) => (
                    <div className="mb-1">
                      <div className="flex flex-row justify-between items-center">
                        <p className="text-sm text-start">
                          <CircleIcon sx={{ color: "#5C8E8F", fontSize: 10 }} />{" "}
                          {quality.quality}
                        </p>
                      </div>
                    </div>
                  ))}
                {QualitiesData.quality && (
                  <div className="list-disc">
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-sm  text-start">
                        <CircleIcon sx={{ color: "#5C8E8F", fontSize: 10 }} />{" "}
                        {QualitiesData.quality}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-3/5 mt-52">
        <div className=" flex flex-col justify-between h-full">
          <div>
            {/* formProfile */}
            <Profile
              formProfile={formProfile}
              DataProfile={DataProfile}
              styleTitle={ProfileStyleContainer}
              Color={Color}
              ProfileStyleDescription={ProfileStyleDescription}
            />
            {/* DataListEducation */}
            {(DataListEducation.length > 0 ||
              DataEducation.education ||
              DataEducation.school ||
              DataEducation.city ||
              DataEducation.startYear ||
              DataEducation.endYear ||
              DataEducation.description) && (
              <div className="mt-2">
                <div className="flex ">
                  <p className=" border-b-4 border-[#5C8E8F] rounded-full px-2 text-lg font-semibold w-2/4 text-center">
                    <CircleIcon sx={{ color: "#5C8E8F" }} />
                    <span className="ms-5">Education</span>
                  </p>
                </div>
                <div className="mt-1">
                  {DataListEducation.length > 0 &&
                    DataListEducation.map((education, i) => (
                      <div key={i} className="pl-4 mb-2">
                        <p className="m-0">
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-[16px] font-bold">
                              {education.education}
                            </p>
                            {(education.startYear || education.endYear) && (
                              <p className="text-xs text-gray-600">
                                {education.startMonth} {education.startYear} -{" "}
                                {education.endMonth} {education.endYear}
                              </p>
                            )}
                          </div>
                          {(education.school || education.city) && (
                            <p className="text-sm font-semibold">
                              {education.school}
                              <span>, {education.city}</span>
                            </p>
                          )}
                          <p className="text-[12px] text-justify whitespace-pre-wrap">
                            {education.description}
                          </p>
                        </p>
                      </div>
                    ))}
                  {(DataEducation.education ||
                    DataEducation.school ||
                    DataEducation.city ||
                    DataEducation.startYear ||
                    DataEducation.endYear ||
                    DataEducation.description) && (
                    <div className=" pl-4 mb-2">
                      <p className="">
                        <div className="flex flex-row justify-between items-center">
                          <p className="text-[16px] font-bold">
                            {DataEducation.education}
                          </p>
                          <p className="text-xs text-gray-600">
                            {DataEducation.startMonth} {DataEducation.startYear}{" "}
                            - {DataEducation.endMonth} {DataEducation.endYear}
                          </p>
                        </div>
                        {(DataEducation.school || DataEducation.city) && (
                          <p className="text-sm font-semibold">
                            {DataEducation.school}
                            <span>, {DataEducation.city}</span>
                          </p>
                        )}
                        <p className="text-[12px] text-justify whitespace-pre-wrap">
                          {DataEducation.description}
                        </p>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* DataListEmployment */}
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
                <div className="flex ">
                  <p className="border-b-4 border-[#5C8E8F] rounded-full px-2 text-lg font-semibold w-2/4 text-center">
                    <CircleIcon sx={{ color: "#5C8E8F" }} />
                    <span className="ms-5">Employment</span>
                  </p>
                </div>
                <div className="mt-1">
                  {DataListEmployment.length > 0 &&
                    DataListEmployment.map((employ, i) => (
                      <div key={i} className="pl-4 mb-2">
                        <p className="m-0">
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-[16px] font-bold">
                              {employ.position}
                            </p>
                            {(employ.startYearEmployment ||
                              employ.endYearEmployment) && (
                              <p className="text-xs text-gray-600">
                                {employ.startMonthEmployment}{" "}
                                {employ.startYearEmployment} -{" "}
                                {employ.endMonthEmployment}{" "}
                                {employ.endYearEmployment}
                              </p>
                            )}
                          </div>
                          {(employ.employer || employ.cityEmployment) && (
                            <p className="text-sm font-semibold">
                              {employ.employer}
                              <span>, {employ.cityEmployment}</span>
                            </p>
                          )}
                          <p className="text-[12px] text-justify whitespace-pre-wrap">
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
                    <div className=" pl-4 mb-2">
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
                        <p className="text-[12px] text-justify whitespace-pre-wrap">
                          {DataEmployment.descriptionEmployment}
                        </p>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* formCourses */}
            {formCourses && (
              <div className="mb-2">
                <p className="border-b-4 border-[#5C8E8F] rounded-full px-2 text-lg font-semibold w-2/4 text-center">
                  Courses
                </p>
                <div className="mt-1 mx-2 px-2">
                  {CoursesList.length > 0 &&
                    CoursesList.map((course, i) => (
                      <div key={i} className="mb-1">
                        <div className="flex flex-row justify-between">
                          <p className="text-md font-bold">{course.course}</p>
                          {(course.monthCourse || course.yearCourse) && (
                            <p className="text-end">
                              {course.monthCourse} - {course.yearCourse}
                            </p>
                          )}
                        </div>
                        <p className="text-xs ms-1">
                          {course.descriptionCourse}
                        </p>
                      </div>
                    ))}
                  {CourseData.course && (
                    <div className="mb-1">
                      <div className="flex flex-row justify-between">
                        <p className="text-md font-bold">{CourseData.course}</p>
                        {(CourseData.monthCourse || CourseData.yearCourse) && (
                          <p className="text-end">
                            {CourseData.monthCourse} - {CourseData.yearCourse}
                          </p>
                        )}
                      </div>
                      <p className="text-xs ms-1  whitespace-pre-wrap">
                        {CourseData.descriptionCourse}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            {/* formFooter */}
            {formFooter && (
              <div className="mt-2  bottom-0 ">
                <p className="text-sm text-center whitespace-pre-wrap">
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
export default Resume3;
