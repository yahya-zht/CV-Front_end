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
const Resume2 = forwardRef((props, ref) => {
  const initialItemsLeft = [
    "PersonalDetails",
    "Language",
    "Skills",
    "Education",
    "Qualities",
    "Hobbies",
  ];
  const initialItemsRight = [
    "Profile",
    "Courses",
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
  const [color, setColor] = useState("#eab308");
  const [textXs, setTextXs] = useState("text-xs"); //12
  const [textSm, setTextSm] = useState("text-sm"); //14
  const [textMd, setTextMd] = useState("text-base"); //16
  const [textLg, setTextLg] = useState("text-lg"); //18

  useEffect(() => {
    localStorage.setItem("resumeLayout", JSON.stringify(itemsLeft));
  }, [itemsLeft]);

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
    PersonalDetails: (
      <PersonalDetails
        styleZoonIcon={""}
        ColorIcon={color}
        styleTitle={"ms-2 "}
      />
    ),
    Language: (
      <Language
        StyleContainer={"mb-2"}
        BgColor={color}
        StyleTitle={`${textLg} font-bold border-b-4 `}
        styleContainerList={"mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleSkill={`${textSm} text-start`}
        IconTitleSkill={false}
        IconColorSkill={"white"}
        Rating={true}
        StyledRating={false}
        Color={color}
      />
    ),
    Education: (
      <Education
        StyleTitleContainer={""}
        BgColor={color}
        border={true}
        StyleTitle={`${textLg} font-bold border-b-4 border-yellow-500`}
        Icon={false}
        IconColor={color}
        styleContainerList={"ms-2 mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textLg} font-bold flex flex-row items-center`}
        styleCity={`${textSm} font-semibold text-gray-400`}
        styleDate={"hidden"}
        StyleDescription={`${textSm} text-justify whitespace-pre-wrap`}
      />
    ),
    Skills: (
      <Skills
        StyleContainer={"mb-2"}
        BgColor={color}
        StyleTitle={`${textLg} font-bold border-b-4`}
        styleContainerList={"mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleSkill={`${textSm} text-start`}
        IconTitleSkill={false}
        Rating={true}
        StyledRating={false}
        Color={color}
      />
    ),
    Hobbies: (
      <Hobbies
        StyleContainer={"mb-2"}
        BgColor={color}
        StyleTitle={`${textLg} font-bold border-b-4 `}
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
        BgColor={color}
        StyleContainer={"mb-2"}
        StyleTitle={`${textLg} font-bold border-b-4 `}
        styleContainerList={" mb-1"}
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
        styleContainer={"mt-2"}
        BgColor={color}
        styleTitle={`${textLg} font-bold border-b-4 `}
        Color={color}
        ProfileStyleDescription={`${textSm} ms-4  whitespace-pre-wrap`}
        IconTitle={false}
      />
    ),
    Courses: (
      <Courses
        BgColor={color}
        border={true}
        StyleTitle={`${textLg} font-bold border-b-4 `}
        styleContainerList={"border-l-4 pl-4 mb-1 "}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textMd} font-bold`}
        Icon={false}
        IconColor={color}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textXs} ms-1`}
      />
    ),
    Employment: (
      <Employment
        BgColor={color}
        border={true}
        StyleTitleContainer={""}
        StyleTitle={`${textLg} font-bold border-b-4`}
        Icon={false}
        IconColor={color}
        styleContainerList={"border-l-4 pl-4 mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textMd} font-bold`}
        styleCity={`${textSm} font-semibold text-gray-600`}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textSm} text-justify whitespace-pre-wrap`}
      />
    ),
    Internships: (
      <Internships
        border={true}
        BgColor={color}
        StyleTitleContainer={""}
        StyleTitle={`${textLg} font-bold border-b-4`}
        Icon={false}
        IconColor={color}
        styleContainerList={"border-l-4 pl-4 mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textMd} font-bold`}
        styleCity={`${textSm} font-semibold text-gray-600`}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textSm} text-justify whitespace-pre-wrap`}
      />
    ),
    Certificates: (
      <Certificates
        BgColor={color}
        border={true}
        StyleTitle={`${textLg} font-bold border-b-4 `}
        styleContainerList={"border-l-4 pl-4 mb-1"}
        styleList={"flex flex-row justify-between items-center"}
        StyleTitleList={`${textMd} font-bold`}
        Icon={false}
        IconColor={color}
        styleDate={`${textXs} text-gray-600`}
        StyleDescription={`${textXs} ms-1 whitespace-pre-wrap`}
      />
    ),
    ExtracurricularActivities: (
      <ExtracurricularActivities
        border={true}
        BgColor={color}
        StyleTitleContainer={" "}
        StyleTitle={`${textLg} border-b-4 font-bold`}
        Icon={false}
        IconColor={color}
        styleContainerList={"border-l-4 pl-4 mb-1"}
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
        StyleContainerTitle={"flex"}
        BgColor={color}
        border={true}
        StyleTitle={`${textLg} font-bold border-b-4 border-yellow-500 w-full`}
        styleDescription={`${textSm} ms-4  whitespace-pre-wrap`}
      />
    ),
    References: (
      <References
        styleContainer={"mt-2"}
        styleContainerTitle={"flex "}
        BgColor={color}
        border={true}
        styleTitle={`${textLg} font-bold border-b-4 border-yellow-500 w-full`}
        styleContainerList={"border-l-4 pl-4 mb-2"}
        styleTitleList={`${textMd} font-bold`}
      />
    ),
    formEntries:
      formEntries > 0 &&
      Array.from({ length: formEntries }).map((_, index) => (
        <EntriesSection
          index={index}
          border={true}
          BgColor={color}
          StyleTitleContainer={""}
          StyleTitle={`${textLg} border-b-4 font-bold w-full`}
          Icon={false}
          IconColor={color}
          styleContainerList={"border-l-4 border-yellow-500 pl-4 mb-1"}
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
          StyleTitle={`${textLg} font-bold border-b-4 border-yellow-500 w-full`}
          Color={color}
          ProfileStyleDescription={`${textSm} ms-4 whitespace-pre-wrap`}
          IconTitle={false}
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
          StyleTitle={`${textLg} font-bold border-b-4 border-yellow-500 w-full`}
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
          StyleTitle={`${textLg} font-bold border-b-4 border-yellow-500 w-full`}
          styleContainerList={"mb-1"}
          styleList={"flex flex-row justify-between items-center"}
          StyleTitleSkill={`${textSm} text-start`}
          IconTitleSkill={false}
          Rating={true}
          StyledRating={false}
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
    <div className="grid grid-cols-3 h-full relative">
      <PersonalInfo
        BgColor={color}
        styleContainer={
          "h-28 text-black py-6 pe-4 flex flex-row justify-between items-center absolute start-28 right-0 top-16 z-0"
        }
        styleTrueImg={"ms-44"}
        styleFalseImg={"ms-20"}
        styleFirstName={"text-3xl font-bold inline-flex"}
        styleLastName={"ms-3 text-3xl font-bold inline-flex"}
        styleHeadline={`${textLg}`}
        styleQr={"flex flex-col items-center"}
        IconColor={"#111827"}
      />
      <div className=" bg-gray-900">
        <div className="col-span-1 text-white p-6 relative">
          <UploadedImage
            BgColor={color}
            styleContainer={"flex flex-row  justify-center static z-20 mb-6"}
            styleImage={"rounded-lg border-4 border-white"}
          />
          <DndContext onDragEnd={handleDragEndLeft}>
            {itemsLeft.map((item, i) => (
              <DroppableContainer key={i} id={i}>
                <DraggableItem id={item}>{componentLeft[item]}</DraggableItem>
              </DroppableContainer>
            ))}
          </DndContext>
        </div>
      </div>
      <div className="col-span-2 p-3 mt-36 grid ">
        <div className=" flex flex-col justify-between">
          <div className="mt-6">
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

export default Resume2;
