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
import { toggleFormCourse } from "../store/courseSlice";
import { Button } from "@mui/material";
import Internships from "./Forms/Internships";
import { toggleFormInternships } from "@/store/InternshipsSlice";
import { toggleformCertificates } from "@/store/CertificatesSlice";
import Certificates from "./Forms/Certificates";
import { toggleFormQualities } from "@/store/QualitiesSlice";
import Qualities from "./Forms/Qualities";
import { toggleFormExtracurricularActivities } from "@/store/ExtracurricularActivitiesSlice";
import ExtracurricularActivities from "./Forms/ExtracurricularActivities";
import { toggleFormReferences } from "@/store/ReferencesSlice";
import References from "./Forms/References";

export default function FormInfo() {
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

  const dispatch = useDispatch();
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
            Education / Formation
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
            Employment
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
            Skills
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
            Languages
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
            Hobbies
          </AccordionSummary>
          <AccordionDetails>
            <Hobbies />
          </AccordionDetails>
        </Accordion>
        {formCourse && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="text-xl font-bold"
            >
              <span> Courses </span>
            </AccordionSummary>
            <AccordionDetails>
              <Courses />
            </AccordionDetails>
            <AccordionActions>
              <Button
                startIcon={<DeleteIcon />}
                onClick={handleAddCourseForm}
                color="error"
                variant="contained"
              >
                Delete
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
              <span> Internships </span>
            </AccordionSummary>
            <AccordionDetails>
              <Internships />
            </AccordionDetails>
            <AccordionActions>
              <Button
                startIcon={<DeleteIcon />}
                onClick={handleAddInternshipsForm}
                color="error"
                variant="contained"
              >
                Delete
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
              <span> Certificates </span>
            </AccordionSummary>
            <AccordionDetails>
              <Certificates />
            </AccordionDetails>
            <AccordionActions>
              <Button
                startIcon={<DeleteIcon />}
                onClick={handleAddCertificatesForm}
                color="error"
                variant="contained"
              >
                Delete
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
              <span> Qualities </span>
            </AccordionSummary>
            <AccordionDetails>
              <Qualities />
            </AccordionDetails>
            <AccordionActions>
              <Button
                startIcon={<DeleteIcon />}
                onClick={handleAddQualitiesForm}
                color="error"
                variant="contained"
              >
                Delete
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
              <span> Extracurricular Activities </span>
            </AccordionSummary>
            <AccordionDetails>
              <ExtracurricularActivities />
            </AccordionDetails>
            <AccordionActions>
              <Button
                startIcon={<DeleteIcon />}
                onClick={handleAddExtracurricularActivitiesForm}
                color="error"
                variant="contained"
              >
                Delete
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
              <span> References </span>
            </AccordionSummary>
            <AccordionDetails>
              <References />
            </AccordionDetails>
            <AccordionActions>
              <Button
                startIcon={<DeleteIcon />}
                onClick={handleAddReferencesForm}
                color="error"
                variant="contained"
              >
                Delete
              </Button>
            </AccordionActions>
          </Accordion>
        )}
        <div>
          <AddForms />
        </div>
      </div>
    </div>
  );
}
