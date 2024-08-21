"use client";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonalDetails from "./Forms/PersonalDetails";
import Education from "./Forms/Education";
import Employment from "./Forms/Employment";
import Skills from "./Forms/Skills";
import Languages from "./Forms/Languages";
import Hobbies from "./Forms/Hobbies";
import AddForms from "./AddForms";
import DeleteIcon from "@mui/icons-material/Delete";
import Courses from "./Forms/Courses";
import { useSelector, useDispatch } from "react-redux";
import { setCoursesTitle, toggleFormCourse } from "../store/courseSlice";
import { Button } from "@mui/material";
import Internships from "./Forms/Internships";
import {
  setInternshipsTitle,
  toggleFormInternships,
} from "@/store/InternshipsSlice";
import {
  setCertificatesTitle,
  toggleformCertificates,
} from "@/store/CertificatesSlice";
import Certificates from "./Forms/Certificates";
import { setQualitiesTitle, toggleFormQualities } from "@/store/QualitiesSlice";
import Qualities from "./Forms/Qualities";
import {
  setExtracurricularActivitiesTitle,
  toggleFormExtracurricularActivities,
} from "@/store/ExtracurricularActivitiesSlice";
import ExtracurricularActivities from "./Forms/ExtracurricularActivities";
import {
  setDataListReferences,
  setReferencesTitle,
  toggleFormReferences,
} from "@/store/ReferencesSlice";
import References from "./Forms/References";
import Footer from "./Forms/Footer";
import { toggleFormFooter } from "@/store/FooterSlice";
import Profile from "./Forms/Profile";
import { setProfileTitle, toggleFormProfile } from "@/store/ProfileSlice";
import Achievements from "./Forms/Achievements";
import {
  setAchievementsTitle,
  toggleFormAchievements,
} from "@/store/AchievementsSlice";
import Entries from "./Forms/EntriesSection";
import { useState } from "react";
import {
  setDelete,
  setDescriptionTitle,
  setEntriesTitle,
  setListTitle,
  setSkillsTitle,
} from "@/store/SectionSlice";
import Description from "./Forms/DescriptionSection";
import List from "./Forms/ListSection";
import SkillsSection from "./Forms/SkillsSection";
import { setEducationTitle } from "@/store/EducationSlice";
import { setEmploymentTitle } from "@/store/EmploymentSlice";
import { setSkillTitle } from "@/store/SkillsSlice";
import { setLanguageTitle } from "@/store/LanguagesSlice";
import { setHobbyTitle } from "@/store/HobbiesSlice";
export default function FormInfo() {
  const dispatch = useDispatch();
  const formEntries = useSelector((state) => state.Section.formEntries);
  const formDescription = useSelector((state) => state.Section.formDescription);
  const formList = useSelector((state) => state.Section.formList);
  const formSkills = useSelector((state) => state.Section.formSkills);
  const [entriesTitleList, setEntriesTitleList] = useState([]);
  const [DescriptionTitleList, setDescriptionTitleList] = useState([]);
  const [titleList, setTitleList] = useState([]);
  const [titleSkills, setTitleSkills] = useState([]);
  const [titleEducation, setTitleEducation] = useState("");
  const [titleEmployment, setTitleEmployment] = useState("");
  const [titleSkill, setTitleSkill] = useState("");
  const [titleLanguages, setTitleLanguages] = useState("");
  const [titleHobby, setTitleHobby] = useState("");
  const [titleAchievement, setTitleAchievement] = useState("");
  const [titleCertificate, setTitleCertificate] = useState("");
  const [titleCourse, setTitleCourse] = useState("");
  const [titleExtracurricularActivities, setTitleExtracurricularActivities] =
    useState("");
  const [titleInternships, setTitleInternships] = useState("");
  const [titleProfile, setTitleProfile] = useState("");
  const [titleQualities, setTitleQualities] = useState("");
  const [titleReferences, setTitleReferences] = useState("");

  const handleTitleReferences = (title) => {
    setTitleReferences(title);
    dispatch(setReferencesTitle(title));
  };
  const handleTitleQualities = (title) => {
    setTitleQualities(title);
    dispatch(setQualitiesTitle(title));
  };
  const handleTitleCertificate = (title) => {
    setTitleCertificate(title);
    dispatch(setCertificatesTitle(title));
  };
  const handleTitleCourse = (title) => {
    setTitleCourse(title);
    dispatch(setCoursesTitle(title));
  };
  const handleTitleExtracurricularActivities = (title) => {
    setTitleExtracurricularActivities(title);
    dispatch(setExtracurricularActivitiesTitle(title));
  };
  const handleTitleProfile = (title) => {
    setTitleProfile(title);
    dispatch(setProfileTitle(title));
  };
  const handleTitleInternships = (title) => {
    setTitleInternships(title);
    dispatch(setInternshipsTitle(title));
  };

  const handleTitleAchievement = (title) => {
    setTitleAchievement(title);
    dispatch(setAchievementsTitle(title));
  };
  const handleTitleEducation = (title) => {
    setTitleEducation(title);
    dispatch(setEducationTitle(title));
  };
  const handleTitleEmployment = (title) => {
    setTitleEmployment(title);
    dispatch(setEmploymentTitle(title));
  };
  const handleTitleSkill = (title) => {
    setTitleSkill(title);
    dispatch(setSkillTitle(title));
  };
  const handleTitleLanguages = (title) => {
    setTitleLanguages(title);
    dispatch(setLanguageTitle(title));
  };
  const handleTitleHobbies = (title) => {
    setTitleHobby(title);
    dispatch(setHobbyTitle(title));
  };
  const handleTitleChange = (index, title) => {
    setEntriesTitleList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = title;
      return updatedList;
    });
    dispatch(
      setEntriesTitle({
        index: index,
        data: title,
      })
    );
  };
  const handleDescriptionTitleChange = (index, title) => {
    setDescriptionTitleList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = title;
      return updatedList;
    });
    dispatch(
      setDescriptionTitle({
        index: index,
        data: title,
      })
    );
  };
  const handleTitleListChange = (index, title) => {
    setTitleList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = title;
      return updatedList;
    });
    dispatch(
      setListTitle({
        index: index,
        data: title,
      })
    );
  };
  const handleTitleSkillsChange = (index, title) => {
    setTitleSkills((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = title;
      return updatedList;
    });

    dispatch(
      setSkillsTitle({
        index: index,
        data: title,
      })
    );
  };
  const formCourse = useSelector((state) => state.course.formCourse);
  const formInternships = useSelector(
    (state) => state.Internships.formInternships
  );
  const formCertificates = useSelector(
    (state) => state.Certificates.formCertificates
  );
  const formQualities = useSelector((state) => state.Qualities.formQualities);
  const formExtracurricularActivities = useSelector(
    (state) => state.ExtracurricularActivities.formExtracurricularActivities
  );
  const formReferences = useSelector(
    (state) => state.References.formReferences
  );
  const formFooter = useSelector((state) => state.Footer.formFooter);
  const formProfile = useSelector((state) => state.Profile.formProfile);
  const formAchievements = useSelector(
    (state) => state.Achievements.formAchievements
  );
  const handleAddCourseForm = () => {
    dispatch(toggleFormCourse());
  };
  const handleAddInternshipsForm = () => {
    dispatch(toggleFormInternships());
  };
  const handleAddCertificatesForm = () => {
    dispatch(toggleformCertificates());
  };
  const handleAddQualitiesForm = () => {
    dispatch(toggleFormQualities());
  };
  const handleAddExtracurricularActivitiesForm = () => {
    dispatch(toggleFormExtracurricularActivities());
  };
  const handleAddReferencesForm = () => {
    dispatch(toggleFormReferences());
    dispatch(setDataListReferences([]));
  };
  const handleAddFooterForm = () => {
    dispatch(toggleFormFooter());
  };
  const handleAddProfileForm = () => {
    dispatch(toggleFormProfile());
  };
  const handleAddAchievementsForm = () => {
    dispatch(toggleFormAchievements());
  };
  const handleDelete = (index, type) => {
    let updatedList;
    switch (type) {
      case "Entries":
        updatedList = entriesTitleList.filter((_, i) => i !== index);
        setEntriesTitleList(updatedList);
        dispatch(setDelete({ index, type }));
        break;
      case "Description":
        updatedList = DescriptionTitleList.filter((_, i) => i !== index);
        setDescriptionTitleList(updatedList);
        dispatch(setDelete({ index, type }));
        break;
      case "List":
        updatedList = titleList.filter((_, i) => i !== index);
        setTitleList(updatedList);
        dispatch(setDelete({ index, type }));
        break;
      case "Skills":
        updatedList = titleSkills.filter((_, i) => i !== index);
        setTitleSkills(updatedList);
        dispatch(setDelete({ index, type }));
        break;
      default:
        console.error("Unknown type:", type);
    }
  };
  return (
    <div className="p-6 pt-20">
      <div>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-xl font-bold"
          >
            Personal Details
          </AccordionSummary>
          <AccordionDetails>
            <PersonalDetails />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="text-xl font-bold"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder={` Education / Formation`}
              value={titleEducation || ""}
              onChange={(e) => handleTitleEducation(e.target.value)}
            />
          </AccordionSummary>
          <AccordionDetails>
            <Education />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="text-xl font-bold"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder={`Employment`}
              value={titleEmployment || ""}
              onChange={(e) => handleTitleEmployment(e.target.value)}
            />
          </AccordionSummary>
          <AccordionDetails>
            <Employment />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="text-xl font-bold"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder={`Skills`}
              value={titleSkill || ""}
              onChange={(e) => handleTitleSkill(e.target.value)}
            />
          </AccordionSummary>
          <AccordionDetails>
            <Skills />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="text-xl font-bold"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder={`Languages`}
              value={titleLanguages || ""}
              onChange={(e) => handleTitleLanguages(e.target.value)}
            />
          </AccordionSummary>
          <AccordionDetails>
            <Languages />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="text-xl font-bold"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder={`Hobbies`}
              value={titleHobby || ""}
              onChange={(e) => handleTitleHobbies(e.target.value)}
            />
          </AccordionSummary>
          <AccordionDetails>
            <Hobbies />
          </AccordionDetails>
        </Accordion>
        {formProfile && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="text-xl font-bold"
            >
              <input
                type="text"
                name=""
                id=""
                placeholder={`Profile`}
                value={titleProfile || ""}
                onChange={(e) => handleTitleProfile(e.target.value)}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Profile />
            </AccordionDetails>
            <AccordionActions>
              <Button
                // startIcon={<DeleteIcon />}
                onClick={handleAddProfileForm}
                color="error"
                variant="contained"
              >
                <DeleteIcon />
              </Button>
            </AccordionActions>
          </Accordion>
        )}
        {formCourse && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="text-xl font-bold"
            >
              <input
                type="text"
                name=""
                id=""
                placeholder={`Courses`}
                value={titleCourse || ""}
                onChange={(e) => handleTitleCourse(e.target.value)}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Courses />
            </AccordionDetails>
            <AccordionActions>
              <Button
                // startIcon={<DeleteIcon />}
                onClick={handleAddCourseForm}
                color="error"
                variant="contained"
              >
                <DeleteIcon />
              </Button>
            </AccordionActions>
          </Accordion>
        )}
        {formInternships && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="text-xl font-bold"
            >
              <input
                type="text"
                name=""
                id=""
                placeholder={`Internships`}
                value={titleInternships || ""}
                onChange={(e) => handleTitleInternships(e.target.value)}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Internships />
            </AccordionDetails>
            <AccordionActions>
              <Button
                // startIcon={<DeleteIcon />}
                onClick={handleAddInternshipsForm}
                color="error"
                variant="contained"
              >
                <DeleteIcon />
              </Button>
            </AccordionActions>
          </Accordion>
        )}
        {formCertificates && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="text-xl font-bold"
            >
              <input
                type="text"
                name=""
                id=""
                placeholder={`Certificates`}
                value={titleCertificate || ""}
                onChange={(e) => handleTitleCertificate(e.target.value)}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Certificates />
            </AccordionDetails>
            <AccordionActions>
              <Button
                // startIcon={<DeleteIcon />}
                onClick={handleAddCertificatesForm}
                color="error"
                variant="contained"
              >
                <DeleteIcon />
              </Button>
            </AccordionActions>
          </Accordion>
        )}
        {formQualities && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="text-xl font-bold"
            >
              <span> </span>
              <input
                type="text"
                name=""
                id=""
                placeholder={`Qualities`}
                value={titleQualities || ""}
                onChange={(e) => handleTitleQualities(e.target.value)}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Qualities />
            </AccordionDetails>
            <AccordionActions>
              <Button
                // startIcon={<DeleteIcon />}
                onClick={handleAddQualitiesForm}
                color="error"
                variant="contained"
              >
                <DeleteIcon />
              </Button>
            </AccordionActions>
          </Accordion>
        )}
        {formExtracurricularActivities && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="text-xl font-bold"
            >
              <span> </span>
              <input
                type="text"
                name=""
                id=""
                placeholder={`Extracurricular Activities`}
                value={titleExtracurricularActivities || ""}
                onChange={(e) =>
                  handleTitleExtracurricularActivities(e.target.value)
                }
              />
            </AccordionSummary>
            <AccordionDetails>
              <ExtracurricularActivities />
            </AccordionDetails>
            <AccordionActions>
              <Button
                // startIcon={<DeleteIcon />}
                onClick={handleAddExtracurricularActivitiesForm}
                color="error"
                variant="contained"
              >
                <DeleteIcon />
              </Button>
            </AccordionActions>
          </Accordion>
        )}
        {formReferences && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="text-xl font-bold"
            >
              <input
                type="text"
                name=""
                id=""
                placeholder={`References`}
                value={titleReferences || ""}
                onChange={(e) => handleTitleReferences(e.target.value)}
              />
            </AccordionSummary>
            <AccordionDetails>
              <References />
            </AccordionDetails>
            <AccordionActions>
              <Button
                // startIcon={<DeleteIcon />}
                onClick={handleAddReferencesForm}
                color="error"
                variant="contained"
              >
                <DeleteIcon />
              </Button>
            </AccordionActions>
          </Accordion>
        )}
        {formAchievements && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="text-xl font-bold"
            >
              <span> </span>
              <input
                type="text"
                name=""
                id=""
                placeholder={`Achievements`}
                value={titleAchievement || ""}
                onChange={(e) => handleTitleAchievement(e.target.value)}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Achievements />
            </AccordionDetails>
            <AccordionActions>
              <Button
                // startIcon={<DeleteIcon />}
                onClick={handleAddAchievementsForm}
                color="error"
                variant="contained"
              >
                <DeleteIcon />
              </Button>
            </AccordionActions>
          </Accordion>
        )}
        {formFooter && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="text-xl font-bold"
            >
              <span> Footer </span>
            </AccordionSummary>
            <AccordionDetails>
              <Footer />
            </AccordionDetails>
            <AccordionActions>
              <Button
                // startIcon={<DeleteIcon />}
                onClick={handleAddFooterForm}
                color="error"
                variant="contained"
              >
                <DeleteIcon />
              </Button>
            </AccordionActions>
          </Accordion>
        )}
        {formEntries > 0 &&
          Array.from({ length: formEntries }).map((_, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 3}-content`}
                id={`panel${index + 3}-header`}
                className="text-xl font-bold"
              >
                <span>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder={`Custom section Entries ${index + 1}`}
                    value={entriesTitleList[index] || ""}
                    onChange={(e) => handleTitleChange(index, e.target.value)}
                  />
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <Entries index={index} />
              </AccordionDetails>
              <AccordionActions>
                <Button
                  onClick={() => handleDelete(index, "Entries")}
                  color="error"
                  variant="contained"
                >
                  <DeleteIcon />
                </Button>
              </AccordionActions>
            </Accordion>
          ))}
        {formDescription > 0 &&
          Array.from({ length: formDescription }).map((_, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 3}-content`}
                id={`panel${index + 3}-header`}
                className="text-xl font-bold"
              >
                <span>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder={`Custom section Description ${index + 1}`}
                    value={DescriptionTitleList[index] || ""}
                    onChange={(e) =>
                      handleDescriptionTitleChange(index, e.target.value)
                    }
                  />
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <Description index={index} />
              </AccordionDetails>
              <AccordionActions>
                <Button
                  onClick={() => handleDelete(index, "Description")}
                  color="error"
                  variant="contained"
                >
                  <DeleteIcon />
                </Button>
              </AccordionActions>
            </Accordion>
          ))}
        {formList > 0 &&
          Array.from({ length: formList }).map((_, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 3}-content`}
                id={`panel${index + 3}-header`}
                className="text-xl font-bold"
              >
                <span>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder={`Custom section List ${index + 1}`}
                    value={titleList[index] || ""}
                    onChange={(e) =>
                      handleTitleListChange(index, e.target.value)
                    }
                  />
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <List index={index} />
              </AccordionDetails>
              <AccordionActions>
                <Button
                  onClick={() => handleDelete(index, "List")}
                  color="error"
                  variant="contained"
                >
                  <DeleteIcon />
                </Button>
              </AccordionActions>
            </Accordion>
          ))}
        {formSkills > 0 &&
          Array.from({ length: formSkills }).map((_, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 3}-content`}
                id={`panel${index + 3}-header`}
                className="text-xl font-bold"
              >
                <span>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder={`Custom section Skills ${index + 1}`}
                    value={titleSkills[index] || ""}
                    onChange={(e) =>
                      handleTitleSkillsChange(index, e.target.value)
                    }
                  />
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <SkillsSection index={index} />
              </AccordionDetails>
              <AccordionActions>
                <Button
                  onClick={() => handleDelete(index, "Skills")}
                  color="error"
                  variant="contained"
                >
                  <DeleteIcon />
                </Button>
              </AccordionActions>
            </Accordion>
          ))}
        <div>
          <AddForms />
        </div>
      </div>
    </div>
  );
}
