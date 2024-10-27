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
const Resume8 = forwardRef((props, ref) => {
  const initialItemsLeft = [
    "PersonalDetails",
    "Language",
    "Skills",
    "Courses",
    "Qualities",
    "Hobbies",
  ];
  const initialItemsRight = [
    "PersonalInfo",
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
  const [color, setColor] = useState("#343132");
  const [textXs, setTextXs] = useState("text-xs"); //12
  const [textSm, setTextSm] = useState("text-sm"); //14
  const [textMd, setTextMd] = useState("text-base"); //16
  const [textLg, setTextLg] = useState("text-lg"); //18

  useEffect(() => {
    localStorage.setItem("resumeLayout", JSON.stringify(itemsLeft));
  }, [itemsLeft]);

  const DataPersonalDetails = useSelector(
    (state) => state.PersonalDetailsStore.DataPersonalDetails
  );
  const formProfile = useSelector((state) => state.Profile.formProfile);
  const formEntries = useSelector((state) => state.Section.formEntries);
  const formDescription = useSelector((state) => state.Section.formDescription);
  const formList = useSelector((state) => state.Section.formList);
  const formSkills = useSelector((state) => state.Section.formSkills);
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
    Language: (
      <Language
        StyleContainer={"mb-2"}
        BgColor={color}
        StyleTitle={`${textLg} border-4 text-white text-center font-semibold rounded-full`}
        styleContainerList={"mb-1 text-white"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleSkill={`${textSm} text-start`}
        IconTitleSkill={true}
        IconColorSkill={"white"}
        Rating={false}
        StyledRating={true}
        Color={color}
      />
    ),
    PersonalDetails: (
      <PersonalDetails
        container={"mb-4"}
        BgColor={color}
        styleZoonIcon={"p-1 rounded-full"}
        ColorIcon={"white"}
        styleTitle={"ms-2 text-white"}
      />
    ),
    Skills: (
      <Skills
        StyleContainer={"mb-2"}
        BgColor={color}
        StyleTitle={`${textLg} border-4 text-white text-center font-semibold rounded-full`}
        styleContainerList={"mb-1 text-white"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleSkill={`${textSm} text-start`}
        IconTitleSkill={true}
        IconColorSkill={"white"}
        Rating={false}
        StyledRating={true}
        Color={color}
      />
    ),
    Hobbies: (
      <Hobbies
        StyleContainer={"mb-2"}
        BgColor={color}
        StyleTitle={`${textLg} border-4 text-white text-center font-semibold rounded-full`}
        styleContainerList={"mb-1 text-white"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleSkill={`${textSm} text-start`}
        IconTitleSkill={true}
        IconColorSkill={"white"}
        Rating={false}
        StyledRating={true}
        Color={color}
      />
    ),
    Qualities: (
      <Qualities
        StyleContainer={"mb-2  text-white"}
        BgColor={color}
        StyleTitle={`${textLg} border-4 text-white text-center font-semibold rounded-full`}
        styleContainerList={"mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textSm} text-start`}
        Icon={true}
        IconColor={"white"}
        Color={color}
      />
    ),
    Courses: (
      <Courses
        styleContainer={""}
        BgColor={color}
        StyleTitle={`${textLg} border-4 text-white text-center font-semibold rounded-full focus:border-2 focus:border-green-600`}
        styleContainerList={"ms-2 mb-1 text-white"}
        styleList={"flex flex-row justify-between"}
        StyleTitleList={`${textSm} font-bold`}
        Icon={true}
        IconColor={"white"}
        styleDate={"hidden"}
        StyleDescription={`${textXs} ms-1`}
      />
    ),
  };
  const componentRight = {
    PersonalInfo: (
      <PersonalInfo
        BgColor={""}
        styleContainer={`py-6 px-4 h-40 flex flex-row justify-between`}
        styleTrueImg={""}
        styleFalseImg={""}
        styleFirstName={"text-4xl font-bold text-black mb-1 inline-flex"}
        styleLastName={"text-4xl font-bold text-black mb-1 inline-flex"}
        styleHeadline={`${textLg} text-black mb-1`}
        styleQr={"flex flex-col items-center"}
        IconColor={"black"}
      />
    ),
    Education: (
      <Education
        StyleTitleContainer={"flex"}
        BgColor={color}
        border={true}
        colorTitle={color}
        StyleTitle={`${textLg} rounded-full px-2 font-semibold w-auto text-center `}
        Icon={false}
        IconColor={color}
        styleContainerList={"border-l-4 pl-4 mb-2"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textSm} font-bold`}
        styleCity={`${textSm} font-semibold text-gray-600`}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textXs} text-justify whitespace-pre-wrap`}
      />
    ),
    Employment: (
      <Employment
        StyleTitleContainer={"flex"}
        BgColor={color}
        border={true}
        colorTitle={color}
        StyleTitle={`rounded-full px-2 ${textLg} font-semibold w-auto text-center`}
        Icon={false}
        IconColor={color}
        styleContainerList={"border-l-4 pl-4 mb-2"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textSm} font-bold`}
        styleCity={`${textSm} font-semibold text-gray-600`}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textXs} text-justify whitespace-pre-wrap`}
      />
    ),
    Internships: (
      <Internships
        StyleTitleContainer={"flex"}
        BgColor={color}
        border={true}
        colorTitle={color}
        StyleTitle={`rounded-full px-2 ${textLg} font-semibold w-auto text-center`}
        Icon={false}
        IconColor={color}
        styleContainerList={"border-l-4 pl-4 mb-2"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textSm} font-bold`}
        styleCity={`${textSm} font-semibold text-gray-600`}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textXs} text-justify whitespace-pre-wrap`}
      />
    ),
    Certificates: (
      <Certificates
        StyleTitleContainer={"flex"}
        BgColor={color}
        border={true}
        colorTitle={color}
        StyleTitle={`rounded-full px-2 ${textLg} font-semibold w-auto text-center`}
        styleContainerList={"border-l-4 pl-4 mb-1"}
        styleList={"flex flex-row justify-between"}
        StyleTitleList={" font-bold"}
        Icon={false}
        IconColor={color}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textXs} ms-1 whitespace-pre-wrap`}
      />
    ),
    ExtracurricularActivities: (
      <ExtracurricularActivities
        StyleTitleContainer={"flex"}
        BgColor={color}
        border={true}
        colorTitle={color}
        StyleTitle={`rounded-full px-2 ${textLg} font-semibold w-auto text-center`}
        Icon={false}
        IconColor={color}
        styleContainerList={"border-l-4 pl-4 mb-2"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textSm} font-bold`}
        styleCity={`${textSm} font-semibold text-gray-600`}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textXs} text-justify whitespace-pre-wrap`}
      />
    ),
    Achievements: (
      <Achievements
        styleContainer={"mt-2"}
        BgColor={color}
        border={true}
        colorTitle={color}
        StyleContainerTitle={"flex"}
        StyleTitle={` ${textLg}  rounded-full px-2 font-semibold w-auto text-center`}
        styleDescription={`${textSm} ms-4  whitespace-pre-wrap`}
      />
    ),
    References: (
      <References
        styleContainer={"mt-2"}
        BgColor={color}
        styleContainerTitle={"flex "}
        border={true}
        colorTitle={color}
        styleTitle={` ${textLg}  rounded-full px-2 font-semibold w-auto text-center`}
        styleContainerList={"border-l-4 mb-2 pl-4"}
        styleTitleList={" font-bold"}
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
          colorTitle={color}
          StyleTitle={` rounded-full px-2 ${textLg} font-semibold w-auto text-center`}
          Icon={false}
          IconColor={color}
          styleContainerList={"border-l-4 pl-4 mb-2"}
          styleList={"flex flex-row justify-between items-center"}
          StyleTitleList={`${textSm} font-bold`}
          styleCity={`${textSm} font-semibold text-gray-600`}
          styleDate={`${textXs} text-gray-600`}
          StyleDescription={`${textXs} text-justify whitespace-pre-wrap`}
        />
      )),
    formDescription:
      formDescription > 0 &&
      Array.from({ length: formDescription }).map((_, index) => (
        <Description
          index={index}
          styleContainer={"mb-2"}
          BgColor={color}
          border={true}
          colorTitle={color}
          StyleContainerTitle={"flex"}
          StyleTitle={` ${textLg}  rounded-full px-2 font-semibold w-auto text-center`}
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
          colorTitle={color}
          StyleContainer={"mb-2"}
          StyleTitle={` ${textLg} rounded-full px-2 font-semibold w-auto text-center`}
          styleContainerList={"border-l-4 pl-4 mb-1"}
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
          StyleContainer={"mb-2"}
          BgColor={color}
          border={true}
          colorTitle={color}
          StyleTitle={` ${textLg} rounded-full px-2 font-semibold w-auto text-center`}
          styleContainerList={"border-l-4 pl-4 mb-1 "}
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
      <div className=" ms-9 border-0" style={{ backgroundColor: color }}>
        <div className="bg-white pt-10 rounded-b-full w-full px-4">
          <UploadedImage
            BgColor={color}
            sizeImg={"w-60 h-60"}
            styleContainer={"flex flex-row justify-center static z-20 pb-2"}
            styleImage={"rounded-full border-4"}
          />
        </div>
        <div className="h-auto px-4" style={{ backgroundColor: color }}>
          <Profile
            styleContainer={
              DataPersonalDetails.uploadedImage ? "mt-0 mb-3" : "mt-14 mb-3"
            }
            BgColor={color}
            styleContainerTitle={`${textLg} border-b-4 text-white text-center font-semibold`}
            Color={color}
            ProfileStyleDescription={`${textSm} mx-2 font-sans text-white whitespace-pre-wrap text-center`}
            IconTitle={false}
          />
          <div
            className={
              formProfile || DataPersonalDetails.uploadedImage
                ? "mt-0"
                : "mt-14"
            }
          >
            <DndContext onDragEnd={handleDragEndLeft}>
              {itemsLeft.map((item, i) => (
                <DroppableContainer key={i} id={i}>
                  <DraggableItem id={item}>{componentLeft[item]}</DraggableItem>
                </DroppableContainer>
              ))}
            </DndContext>
          </div>
        </div>
      </div>
      <div className="w-3/5 bg-white px-2 mt-16">
        <div className="flex flex-col justify-between h-full">
          <div>
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

export default Resume8;
