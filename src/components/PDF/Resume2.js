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
import EntriesSection from "../DetailsInfo/EntriesSection";
import Description from "../DetailsInfo/DescriptionSection";
import List from "../DetailsInfo/ListSection";
import SkillsSection from "../DetailsInfo/SkillsSection";
const Resume2 = forwardRef((props, ref) => {
  const formEntries = useSelector((state) => state.Section.formEntries);
  const formDescription = useSelector((state) => state.Section.formDescription);
  const formList = useSelector((state) => state.Section.formList);
  const formSkills = useSelector((state) => state.Section.formSkills);
  return (
    <div className="grid grid-cols-3 h-full relative">
      <PersonalInfo
        styleContainer={
          "bg-yellow-500 h-28 text-black py-6 pe-4 flex flex-row justify-between items-center absolute start-28 right-0 top-16 z-0"
        }
        styleTrueImg={"ms-44"}
        styleFalseImg={"ms-20"}
        styleFirstName={"text-3xl font-bold inline-flex "}
        styleLastName={"ms-3 text-3xl font-bold inline-flex"}
        styleHeadline={"text-lg"}
        styleQr={"flex flex-col items-center"}
        IconColor={"#111827"}
      />
      <div className=" bg-gray-900">
        <div className="col-span-1 text-white p-6 relative">
          <UploadedImage
            styleContainer={"flex flex-row  justify-center static z-20 mb-6"}
            styleImage={"rounded-lg border-4 border-white"}
          />
          {/* DataPersonalDetails */}
          <PersonalDetails
            styleZoonIcon={""}
            ColorIcon={"#EAB308"}
            styleTitle={"ms-2 "}
          />
          {/* DataListEducation */}
          <Education
            StyleTitleContainer={""}
            StyleTitle={"text-lg font-bold border-b-4 border-yellow-500"}
            Icon={false}
            IconColor={"#EAB308"}
            styleContainerList={"pl-4 mb-2"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleList={"text-lg font-bold flex flex-row items-center"}
            styleCity={"text-sm font-semibold text-gray-400"}
            styleDate={"hidden"}
            StyleDescription={"text-[12px] text-justify whitespace-pre-wrap"}
          />
          <Skills
            StyleContainer={"mb-2"}
            StyleTitle={"text-lg font-bold border-b-4 border-yellow-500"}
            styleContainerList={"mb-1"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleSkill={"text-sm text-start"}
            IconTitleSkill={false}
            Rating={true}
            StyledRating={false}
            Color={"#eab308"}
          />
          {/* DataListLanguages */}
          <Language
            StyleContainer={"mb-2"}
            StyleTitle={"text-lg font-bold border-b-4 border-yellow-500"}
            styleContainerList={"mb-1"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleSkill={"text-sm text-start"}
            IconTitleSkill={false}
            IconColorSkill={"white"}
            Rating={true}
            StyledRating={false}
            Color={"#eab308"}
          />
          {/* DataListHobbies */}
          <Hobbies
            StyleContainer={"mb-2"}
            StyleTitle={"text-lg font-bold border-b-4 border-yellow-500"}
            styleContainerList={"mb-1"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleSkill={"text-sm text-start"}
            IconTitleSkill={false}
            IconColorSkill={"#eab308"}
            Color={"#eab308"}
          />
          {/* formQualities */}
          <Qualities
            StyleContainer={"mb-2"}
            StyleTitle={"text-lg font-bold border-b-4 border-yellow-500 "}
            styleContainerList={"mb-1"}
            styleList={"flex flex-row justify-between items-center"}
            StyleTitleList={"text-sm text-start"}
            Icon={true}
            IconColor={"#eab308"}
            Color={"#eab308"}
          />
        </div>
      </div>
      <div className="col-span-2 p-3 mt-36 grid ">
        <div className=" flex flex-col justify-between">
          <div className="mt-6">
            <Profile
              styleContainer={"mt-2"}
              styleTitle={"text-lg font-bold border-b-4 border-yellow-500"}
              Color={"#eab308"}
              ProfileStyleDescription={"text-sm ms-4  whitespace-pre-wrap"}
              IconTitle={false}
            />
            {/* formCourses */}
            <Courses
              StyleTitle={"text-lg font-bold border-b-4 border-yellow-500"}
              styleContainerList={"mb-1 "}
              styleList={"flex flex-row justify-between items-center"}
              StyleTitleList={"text-[16px] font-bold"}
              Icon={false}
              IconColor={"#eab308"}
              styleDate={"text-xs text-gray-600"}
              StyleDescription={"text-xs ms-1"}
            />
            {/* DataListEmployment */}
            <Employment
              StyleTitleContainer={"border-b-4 border-yellow-500"}
              StyleTitle={"text-lg font-bold"}
              Icon={false}
              IconColor={"#eab308"}
              styleContainerList={"border-l-4 border-yellow-500 pl-4 mb-1"}
              styleList={"flex flex-row justify-between items-center"}
              StyleTitleList={"text-[16px] font-bold"}
              styleCity={"text-sm font-semibold text-gray-600"}
              styleDate={"text-xs text-gray-600"}
              StyleDescription={"text-[12px] text-justify whitespace-pre-wrap"}
            />
            {/* Internships */}
            <Internships
              StyleTitleContainer={"border-b-4 border-yellow-500"}
              StyleTitle={"text-lg font-bold"}
              Icon={false}
              IconColor={"#eab308"}
              styleContainerList={"border-l-4 border-yellow-500 pl-4 mb-1"}
              styleList={"flex flex-row justify-between items-center"}
              StyleTitleList={"text-[16px] font-bold"}
              styleCity={"text-sm font-semibold text-gray-600"}
              styleDate={"text-xs text-gray-600"}
              StyleDescription={"text-[12px] text-justify whitespace-pre-wrap"}
            />
            {/* formCertificates */}
            <Certificates
              StyleTitle={"text-lg font-bold border-b-4 border-yellow-500"}
              styleContainerList={"mb-1"}
              styleList={"flex flex-row justify-between items-center"}
              StyleTitleList={"text-[16px] font-bold"}
              Icon={false}
              IconColor={"#eab308"}
              styleDate={"text-xs text-gray-600"}
              StyleDescription={"text-xs ms-1 whitespace-pre-wrap"}
            />
            {/* ExtracurricularActivities */}
            <ExtracurricularActivities
              StyleTitleContainer={"border-b-4 border-yellow-500"}
              StyleTitle={"text-lg font-bold"}
              Icon={false}
              IconColor={"#eab308"}
              styleContainerList={"border-l-4 border-yellow-500 pl-4 mb-1"}
              styleList={"flex flex-row justify-between items-center"}
              StyleTitleList={"text-[16px] font-bold"}
              styleCity={"text-sm font-semibold text-gray-600"}
              styleDate={"text-xs text-gray-600"}
              StyleDescription={"text-[12px] text-justify whitespace-pre-wrap"}
            />
            {/* Achievements */}
            <Achievements
              styleContainer={"mt-2"}
              StyleContainerTitle={"flex"}
              StyleTitle={"text-lg font-bold border-b-4 border-yellow-500"}
              styleDescription={"text-sm ms-4  whitespace-pre-wrap"}
            />
            {/* References */}
            <References
              styleContainer={"mt-2"}
              styleContainerTitle={"flex "}
              styleTitle={"text-lg font-bold border-b-4 border-yellow-500"}
              styleContainerList={"mb-2"}
              styleTitleList={"text-md font-bold"}
            />
            {formEntries > 0 &&
              Array.from({ length: formEntries }).map((_, index) => (
                <EntriesSection
                  index={index}
                  StyleTitleContainer={"border-b-4 border-yellow-500"}
                  StyleTitle={"text-lg font-bold"}
                  Icon={false}
                  IconColor={"#eab308"}
                  styleContainerList={"border-l-4 border-yellow-500 pl-4 mb-1"}
                  styleList={"flex flex-row justify-between items-center"}
                  StyleTitleList={"text-[16px] font-bold"}
                  styleCity={"text-sm font-semibold text-gray-600"}
                  styleDate={"text-xs text-gray-600"}
                  StyleDescription={
                    "text-[12px] text-justify whitespace-pre-wrap"
                  }
                />
              ))}
            {formDescription > 0 &&
              Array.from({ length: formDescription }).map((_, index) => (
                <Description
                  index={index}
                  styleContainer={"mt-2"}
                  StyleTitle={"text-lg font-bold border-b-4 border-yellow-500"}
                  Color={"#eab308"}
                  ProfileStyleDescription={"text-sm ms-4  whitespace-pre-wrap"}
                  IconTitle={false}
                />
              ))}
            {formList > 0 &&
              Array.from({ length: formList }).map((_, index) => (
                <List
                  index={index}
                  StyleContainer={"mb-2"}
                  StyleTitle={"text-lg font-bold border-b-4 border-yellow-500 "}
                  styleContainerList={"mb-1"}
                  styleList={"flex flex-row justify-between items-center"}
                  StyleTitleList={"text-sm text-start"}
                  Icon={true}
                  IconColor={"#eab308"}
                  Color={"#eab308"}
                />
              ))}
            {formSkills > 0 &&
              Array.from({ length: formSkills }).map((_, index) => (
                <SkillsSection
                  index={index}
                  StyleContainer={"mb-2"}
                  StyleTitle={"text-lg font-bold border-b-4 border-yellow-500"}
                  styleContainerList={"mb-1"}
                  styleList={"flex flex-row justify-between items-center"}
                  StyleTitleSkill={"text-sm text-start"}
                  IconTitleSkill={false}
                  Rating={true}
                  StyledRating={false}
                  Color={"#eab308"}
                />
              ))}
          </div>
          <div>
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

export default Resume2;
