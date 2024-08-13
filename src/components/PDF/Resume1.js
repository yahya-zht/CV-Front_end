import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import Profile from "../DetailsInfo/Profile";
import Skills from "../DetailsInfo/Skills";
import Language from "../DetailsInfo/Language";
import Hobbies from "../DetailsInfo/Hobbies";
import Qualities from "../DetailsInfo/Qualities";
import Courses from "../DetailsInfo/Courses";
import Employment from "../DetailsInfo/Employment";
import Education from "../DetailsInfo/Education";
import Internships from "../DetailsInfo/Internships";
import Footer from "../DetailsInfo/Footer";
import Certificates from "../DetailsInfo/Certificates";
import ExtracurricularActivities from "../DetailsInfo/ExtracurricularActivities";
import Achievements from "../DetailsInfo/Achievements";
import References from "../DetailsInfo/References";
import UploadedImage from "../DetailsInfo/UploadedImage";
import PersonalDetails from "../DetailsInfo/PersonalDetails";
import PersonalInfo from "../DetailsInfo/PersonalInfo";

const Resume1 = forwardRef((props, ref) => {
  // DataPersonalDetails
  const DataPersonalDetails = useSelector(
    (state) => state.PersonalDetailsStore.DataPersonalDetails
  );
  const formProfile = useSelector((state) => state.Profile.formProfile);
  return (
    <div className="flex flex-row bg-white h-full relative">
      <PersonalInfo
        styleContainer={
          "absolute bg-blue-900 py-6 px-4 h-40 top-16 start-0 right-0 z-0 flex flex-row justify-between"
        }
        styleTrueImg={"ms-72"}
        styleFalseImg={"ms-44"}
        styleFirstName={"text-4xl font-bold text-white mb-1"}
        styleLastName={"text-4xl font-bold ps-8 text-white mb-1"}
        styleHeadline={"text-lg text-white ps-16 mb-1"}
        styleQr={"flex flex-col items-center"}
        IconColor={"white"}
      />
      <div className="w-2/5 bg-gray-950 ms-10 p-6">
        <UploadedImage
          styleContainer={"flex flex-row  justify-center static z-20 mt-5"}
          styleImage={"rounded-full border-4 border-blue-900"}
        />
        {/* formProfile */}
        <Profile
          styleContainer={
            DataPersonalDetails.uploadedImage ? "mt-0 mb-3" : "mt-14 mb-3"
          }
          styleTitle={
            "text-lg font-light border-b-4 border-blue-900 text-white text-center font-mono"
          }
          Color={"#1e3a8a"}
          ProfileStyleDescription={
            "text-sm mx-2 font-sans text-white whitespace-pre-wrap text-center "
          }
          IconTitle={false}
        />
        <div
          className={
            formProfile || DataPersonalDetails.uploadedImage ? "mt-0" : "mt-14"
          }
        >
          {/* DataPersonalDetails */}
          <PersonalDetails
            styleZoonIcon={"bg-blue-700 p-1 rounded-full"}
            ColorIcon={"white"}
            styleTitle={"ms-2 text-white"}
          />
          {/* DataListLanguages */}
          <Language
            StyleContainer={"mb-2"}
            StyleTitle={
              "text-lg font-light border-4 border-blue-900 text-white text-center font-mono rounded-full"
            }
            styleContainerList={"mb-1 text-white"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleSkill={"text-sm text-start"}
            IconTitleSkill={true}
            IconColorSkill={"white"}
            Rating={false}
            StyledRating={true}
            Color={"#1E3A8A"}
          />
          {/* DataListSkills */}
          <Skills
            StyleContainer={"mb-2"}
            StyleTitle={
              "text-lg font-light border-4 border-blue-900 text-white text-center font-mono rounded-full"
            }
            styleContainerList={"mb-1 text-white"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleSkill={"text-sm text-start"}
            IconTitleSkill={true}
            IconColorSkill={"white"}
            Rating={false}
            StyledRating={true}
            Color={"#1E3A8A"}
          />
          {/* formHobbies */}
          <Hobbies
            StyleContainer={"mb-2"}
            StyleTitle={
              "text-lg font-light border-4 border-blue-900 text-white text-center font-mono rounded-full"
            }
            styleContainerList={"mb-1 text-white"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleSkill={"text-sm text-start"}
            IconTitleSkill={true}
            IconColorSkill={"white"}
            Rating={false}
            StyledRating={true}
            Color={"#1E3A8A"}
          />
          {/* formQualities */}
          <Qualities
            StyleContainer={"mb-2  text-white"}
            StyleTitle={
              "text-lg font-light border-4 border-blue-900 text-white text-center font-mono rounded-full"
            }
            styleContainerList={"mb-1"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleList={"text-sm text-start"}
            Icon={true}
            IconColor={"white"}
            Color={"#1E3A8A"}
          />
          {/* formCourses */}
          <Courses
            StyleTitle={
              "text-lg font-light border-4 border-blue-900 text-white text-center font-mono rounded-full"
            }
            styleContainerList={"mb-1 text-white"}
            styleList={"flex flex-row justify-between"}
            StyleTitleList={"text-md font-bold"}
            Icon={true}
            IconColor={"white"}
            styleDate={"hidden"}
            StyleDescription={"text-xs ms-1"}
          />
        </div>
      </div>
      <div className="w-3/5 bg-slate-100 px-2 mt-56">
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* DataListEducation */}
            <Education
              StyleTitleContainer={"flex"}
              StyleTitle={
                "border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center"
              }
              Icon={false}
              IconColor={"#1E3A8A"}
              styleContainerList={"pl-4 mb-2"}
              styleList={"flex flex-row justify-between items-center"}
              StyleTitleList={"text-[16px] font-bold"}
              styleCity={"text-sm font-semibold text-gray-600"}
              styleDate={"text-xs text-gray-600"}
              StyleDescription={"text-[12px] text-justify whitespace-pre-wrap"}
            />
            {/* DataListEmployment */}
            <Employment
              StyleTitleContainer={"flex"}
              StyleTitle={
                " border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center  "
              }
              Icon={false}
              IconColor={"#1E3A8A"}
              styleContainerList={"pl-4 mb-2"}
              styleList={"flex flex-row justify-between items-center"}
              StyleTitleList={"text-[16px] font-bold"}
              styleCity={"text-sm font-semibold text-gray-600"}
              styleDate={"text-xs text-gray-600"}
              StyleDescription={"text-[12px] text-justify whitespace-pre-wrap"}
            />
            {/* Internships */}
            <Internships
              StyleTitleContainer={"flex"}
              StyleTitle={
                " border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center  "
              }
              Icon={false}
              IconColor={"#1E3A8A"}
              styleContainerList={"pl-4 mb-2"}
              styleList={"flex flex-row justify-between items-center"}
              StyleTitleList={"text-[16px] font-bold"}
              styleCity={"text-sm font-semibold text-gray-600"}
              styleDate={"text-xs text-gray-600"}
              StyleDescription={"text-[12px] text-justify whitespace-pre-wrap"}
            />
            {/* formCertificates */}
            <Certificates
              StyleTitle={
                " border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center"
              }
              styleContainerList={"mb-1"}
              styleList={"flex flex-row justify-between"}
              StyleTitleList={"text-md font-bold"}
              Icon={false}
              IconColor={"#1E3A8A"}
              styleDate={"text-xs text-gray-600"}
              StyleDescription={"text-xs ms-1 whitespace-pre-wrap"}
            />

            {/* formExtracurricularActivities */}
            <ExtracurricularActivities
              StyleTitleContainer={"flex"}
              StyleTitle={
                " border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-3/4 bg-blue-900 text-white text-center  "
              }
              Icon={false}
              IconColor={"#1E3A8A"}
              styleContainerList={"pl-4 mb-2"}
              styleList={"flex flex-row justify-between items-center"}
              StyleTitleList={"text-[16px] font-bold"}
              styleCity={"text-sm font-semibold text-gray-600"}
              styleDate={"text-xs text-gray-600"}
              StyleDescription={"text-[12px] text-justify whitespace-pre-wrap"}
            />

            {/* formAchievements */}
            <Achievements
              styleContainer={"mt-2"}
              StyleContainerTitle={"flex"}
              StyleTitle={
                "border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center"
              }
              styleDescription={"text-sm ms-4  whitespace-pre-wrap"}
            />
            {/* formReferences */}
            <References
              styleContainer={"mt-2"}
              styleContainerTitle={"flex "}
              styleTitle={
                "border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center"
              }
              styleContainerList={"mb-2"}
              styleTitleList={"text-md font-bold"}
            />
          </div>
          <div>
            {/* formFooter */}
            <Footer
              styleContainerFooter={"mt-2  bottom-0"}
              styleDescription={"text-sm text-center whitespace-pre-wrap"}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
export default Resume1;
