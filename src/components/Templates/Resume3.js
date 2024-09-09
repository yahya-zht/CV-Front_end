import React, { forwardRef, useEffect, useState } from "react";
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
import { useDraggable, useDroppable, DndContext } from "@dnd-kit/core";

const Resume3 = forwardRef(() => {
  const formEntries = useSelector((state) => state.Section.formEntries);
  const formDescription = useSelector((state) => state.Section.formDescription);
  const formList = useSelector((state) => state.Section.formList);
  const formSkills = useSelector((state) => state.Section.formSkills);
  const DataPersonalDetails = useSelector(
    (state) => state.PersonalDetailsStore.DataPersonalDetails
  );
  const initialItemsLeft = [
    "PersonalDetails",
    "Language",
    "Skills",
    "Qualities",
    "Hobbies",
  ];
  const initialItemsRight = [
    "Profile",
    "Courses",
    "Education",
    "Employment",
    "Internships",
    "Certificates",
    "ExtracurricularActivities",
    "Achievements",
    "References",
    "formEntries",
    "formDescription",
    "formList",
    "formSkills",
  ];
  const [itemsLeft, setItemsLeft] = useState(initialItemsLeft);
  const [itemsRight, setItemsRight] = useState(initialItemsRight);
  const [color, setColor] = useState("#5C8E8F");
  const [textXs, setTextXs] = useState("text-xs"); //12
  const [textSm, setTextSm] = useState("text-sm"); //14
  const [textMd, setTextMd] = useState("text-base"); //16
  const [textLg, setTextLg] = useState("text-lg"); //18
  useEffect(() => {
    localStorage.setItem("resumeLayout", JSON.stringify(itemsLeft));
  }, [itemsLeft]);
  const FontSize = useSelector((state) => state.Templates.FontSize);
  const ColorSave = useSelector((state) => state.Templates.Color);
  useEffect(() => {
    if (ColorSave) {
      setColor(ColorSave);
    }
  }, [ColorSave]);
  useEffect(() => {
    switch (FontSize.name) {
      case "S":
        setTextXs("text-[10px]");
        setTextSm("text-[12px]");
        setTextMd("text-[14px]");
        setTextLg("text-[16px]");
        break;
      case "M":
        setTextXs("text-xs");
        setTextSm("text-sm");
        setTextMd("text-base");
        setTextLg("text-lg");
        break;
      case "L":
        setTextXs("text-[14px]");
        setTextSm("text-[16px]");
        setTextMd("text-[18px]");
        setTextLg("text-[20px]");
        break;
      default:
        setTextXs("text-xs");
        setTextSm("text-sm");
        setTextMd("text-base");
        setTextLg("text-lg");
        break;
    }
  }, [FontSize]);
  const componentLeft = {
    PersonalDetails: (
      <PersonalDetails
        BgColor={color}
        styleZoonIcon={"p-1 rounded-full"}
        ColorIcon={"white"}
        styleTitle={"ms-2 "}
      />
    ),
    Language: (
      <Language
        StyleContainer={"mb-2"}
        BgColor={color}
        border={true}
        StyleTitle={`${textLg} font-semibold border-b-4 text-center rounded-full`}
        styleContainerList={"mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleSkill={`${textSm} text-start`}
        IconTitleSkill={true}
        IconColorSkill={color}
        Rating={false}
        StyledRating={true}
        Color={color}
      />
    ),
    Skills: (
      <Skills
        StyleContainer={"mb-2"}
        BgColor={color}
        border={true}
        StyleTitle={`${textLg} font-semibold border-b-4 text-center rounded-full`}
        styleContainerList={"mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleSkill={`${textSm} text-start`}
        IconTitleSkill={true}
        IconColorSkill={color}
        Rating={false}
        StyledRating={true}
        Color={color}
      />
    ),
    Hobbies: (
      <Hobbies
        StyleContainer={"mb-2"}
        BgColor={color}
        border={true}
        StyleTitle={`${textLg} font-semibold border-b-4 text-center rounded-full`}
        styleContainerList={"mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleSkill={`${textSm} text-start`}
        IconTitleSkill={true}
        IconColorSkill={color}
        Color={color}
      />
    ),
    Qualities: (
      <Qualities
        StyleContainer={"mb-2"}
        BgColor={color}
        border={true}
        StyleTitle={`${textLg} font-semibold border-b-4  text-center rounded-full`}
        styleContainerList={"mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textSm} text-start`}
        Icon={true}
        IconColor={color}
        Color={color}
      />
    ),
  };
  const componentRight = {
    Profile: (
      <Profile
        StyleTitleContainer={"flex"}
        BgColor={color}
        border={true}
        styleTitle={`${textLg} font-semibold border-b-4  text-center w-auto px-5 rounded-xl`}
        IconTitle={false}
        Color={color}
        ProfileStyleDescription={`${textXs} mx-2 font-sans whitespace-pre-wrap text-justify px-2 py-1`}
      />
    ),
    Education: (
      <Education
        StyleTitleContainer={"flex"}
        BgColor={color}
        border={true}
        StyleTitle={`border-b-4  rounded-full px-5 ${textLg} font-semibold w-auto text-center`}
        Icon={false}
        IconColor={color}
        styleContainerList={"pl-4 mb-2"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textMd} font-bold`}
        styleCity={`${textSm} font-semibold text-gray-600`}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textSm} text-justify whitespace-pre-wrap`}
      />
    ),
    Courses: (
      <Courses
        StyleTitleContainer={"flex"}
        BgColor={color}
        border={true}
        StyleTitle={`border-b-4  rounded-full px-5 ${textLg} font-semibold w-auto text-center`}
        styleContainerList={"pl-4 mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textMd} font-bold`}
        Icon={false}
        IconColor={color}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textXs} ms-1 whitespace-pre-wrap`}
      />
    ),
    Employment: (
      <Employment
        BgColor={color}
        border={true}
        StyleTitleContainer={"flex"}
        StyleTitle={`border-b-4  rounded-full px-5 ${textLg} font-semibold w-auto text-center`}
        Icon={false}
        IconColor={color}
        styleContainerList={"pl-4 mb-2"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textMd} font-bold`}
        styleCity={`${textSm} font-semibold text-gray-600`}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textSm} text-justify whitespace-pre-wrap`}
      />
    ),
    Internships: (
      <Internships
        StyleTitleContainer={"flex"}
        BgColor={color}
        border={true}
        StyleTitle={`border-b-4  rounded-full px-5 ${textLg} font-semibold w-auto text-center`}
        Icon={false}
        IconColor={color}
        styleContainerList={"pl-4 mb-2"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textMd} font-bold`}
        styleCity={`${textSm} font-semibold text-gray-600`}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textSm} text-justify whitespace-pre-wrap`}
      />
    ),
    Certificates: (
      <Certificates
        StyleTitleContainer={"flex"}
        BgColor={color}
        border={true}
        StyleTitle={`border-b-4  rounded-full px-5 ${textLg} font-semibold w-auto text-center`}
        styleContainerList={"pl-4 mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textMd} font-bold`}
        Icon={false}
        IconColor={"#eab308"}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textXs} ms-1 whitespace-pre-wrap`}
      />
    ),
    ExtracurricularActivities: (
      <ExtracurricularActivities
        StyleTitleContainer={"flex"}
        BgColor={color}
        border={true}
        StyleTitle={`border-b-4  rounded-full px-5 ${textLg} font-semibold w-auto text-center`}
        Icon={false}
        IconColor={color}
        styleContainerList={"pl-4 mb-2"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textMd} font-bold`}
        styleCity={`${textSm} font-semibold text-gray-600`}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textSm} text-justify whitespace-pre-wrap`}
      />
    ),
    Achievements: (
      <Achievements
        styleContainer={"mt-2"}
        BgColor={color}
        border={true}
        StyleContainerTitle={"flex"}
        StyleTitle={`border-b-4  rounded-full px-5 ${textLg} font-semibold w-auto text-center`}
        styleDescription={`${textSm} ms-4  whitespace-pre-wrap`}
      />
    ),
    References: (
      <References
        styleContainer={"mt-2"}
        styleContainerTitle={"flex "}
        BgColor={color}
        border={true}
        styleTitle={`border-b-4  rounded-full px-5 ${textLg} font-semibold w-auto text-center`}
        styleContainerList={"pl-4 mb-2"}
        styleTitleList={`${textMd} font-bold`}
      />
    ),
    formEntries:
      formEntries > 0 &&
      Array.from({ length: formEntries }).map((_, index) => (
        <EntriesSection
          index={index}
          StyleTitleContainer={"flex"}
          BgColor={color}
          border={true}
          StyleTitle={`border-b-4  rounded-full px-5 ${textLg} font-semibold w-auto text-center`}
          Icon={false}
          IconColor={color}
          styleContainerList={"pl-4 mb-2"}
          styleList={"flex flex-row justify-between items-center"}
          StyleTitleList={`${textMd} font-bold`}
          styleCity={`${textSm} font-semibold text-gray-600`}
          styleDate={`${textXs} text-gray-600`}
          StyleDescription={`${textSm} text-justify whitespace-pre-wrap`}
        />
      )),
    formDescription:
      formDescription > 0 &&
      Array.from({ length: formDescription }).map((_, index) => (
        <Description
          index={index}
          BgColor={color}
          border={true}
          styleContainer={"mt-2"}
          StyleContainerTitle={"flex"}
          StyleTitle={`border-b-4  rounded-full px-5 ${textLg} font-semibold w-auto text-center`}
          styleDescription={`${textSm} ms-4  whitespace-pre-wrap`}
        />
      )),
    formList:
      formList > 0 &&
      Array.from({ length: formList }).map((_, index) => (
        <List
          index={index}
          BgColor={color}
          border={true}
          StyleContainer={"mb-2"}
          StyleTitle={`${textLg} font-semibold border-b-4  text-center rounded-full w-auto px-5`}
          styleContainerList={"mb-1"}
          styleList={"flex flex-row justify-between items-center"}
          StyleTitleList={`${textSm} text-start`}
          Icon={true}
          IconColor={color}
          Color={color}
        />
      )),
    formSkills:
      formSkills > 0 &&
      Array.from({ length: formSkills }).map((_, index) => (
        <SkillsSection
          index={index}
          BgColor={color}
          border={true}
          StyleContainer={"mb-2"}
          StyleTitle={`${textLg} font-semibold border-b-4  text-center rounded-full w-auto px-5`}
          styleContainerList={"mb-1"}
          styleList={"flex flex-row justify-between items-center"}
          StyleTitleSkill={`${textSm} text-start`}
          IconTitleSkill={true}
          IconColorSkill={color}
          Rating={false}
          StyledRating={true}
          Color={color}
        />
      )),
  };
  const DraggableItem = ({ id, children }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id,
    });

    const style = {
      transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        : undefined,
      cursor: "grab",
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        onFocus={(e) => {
          e.target.style.border = "3px solid gray";
          e.target.style.borderRadius = "10px";
          e.target.style.cursor = "grabbing";
        }}
      >
        {children}
      </div>
    );
  };

  const DroppableContainer = ({ id, children }) => {
    const { setNodeRef } = useDroppable({
      id,
    });
    return (
      <div ref={setNodeRef} style={{}}>
        {children}
      </div>
    );
  };

  const handleDragEndLeft = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = itemsLeft.indexOf(active.id);
      const newIndex = itemsLeft.indexOf(over.id);

      const updatedItems = [...itemsLeft];
      const [movedItem] = updatedItems.splice(oldIndex, 1);
      updatedItems.splice(newIndex, 0, movedItem);

      setItemsLeft(updatedItems);
    }
  };
  const handleDragEndRight = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = itemsRight.indexOf(active.id);
      const newIndex = itemsRight.indexOf(over.id);

      const updatedItems = [...itemsRight];
      const [movedItem] = updatedItems.splice(oldIndex, 1);
      updatedItems.splice(newIndex, 0, movedItem);

      setItemsRight(updatedItems);
    }
  };
  return (
    <div className="flex flex-row bg-white h-full relative">
      <PersonalInfo
        BgColor={color}
        styleContainer={
          "absolute  py-6 px-4 h-44 top-6 start-0 right-0 z-0 flex flex-row justify-between"
        }
        styleTrueImg={"ms-72"}
        styleFalseImg={"ms-48"}
        styleFirstName={"text-4xl font-bold text-white mb-1"}
        styleLastName={"text-4xl font-bold text-white mb-1"}
        styleHeadline={`${textLg} text-white mb-1`}
        styleQr={"flex flex-col items-center"}
        IconColor={"white"}
      />
      <div className="bg-[#D9D9D9] w-2/5 px-6 py-4">
        <UploadedImage
          styleContainer={"flex flex-row  justify-center static z-20 mt-0"}
          styleImage={"rounded-xl border-4 border-white"}
          BgColor={color}
        />
        <div className={DataPersonalDetails.uploadedImage ? "mt-0" : "mt-16"}>
          <DndContext onDragEnd={handleDragEndLeft}>
            {itemsLeft.map((item, i) => (
              <DroppableContainer key={i} id={i}>
                <DraggableItem id={item}>{componentLeft[item]}</DraggableItem>
              </DroppableContainer>
            ))}
          </DndContext>
        </div>
      </div>
      <div className="w-3/5 mt-52 mx-2">
        <div className=" flex flex-col justify-between h-full">
          <div>
            {" "}
            <DndContext onDragEnd={handleDragEndRight}>
              {itemsRight.map((item, i) => (
                <DroppableContainer key={i} id={i}>
                  <DraggableItem id={item}>
                    {componentRight[item]}
                  </DraggableItem>
                </DroppableContainer>
              ))}
            </DndContext>
          </div>
          <div>
            {/* formFooter */}
            <Footer
              styleContainerFooter={"mt-2  bottom-0"}
              styleDescription={`${textSm} text-center whitespace-pre-wrap`}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
export default Resume3;
