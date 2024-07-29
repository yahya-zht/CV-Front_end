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

export default function FormInfo() {
  const formCourse = useSelector((state) => state.course.formCourse);
  const formInternships = useSelector(
    (state) => state.Internships.formInternships
  );

  const dispatch = useDispatch();
  const handleAddCourseForm = () => {
    dispatch(toggleFormCourse());
  };
  const handleAddInternshipsForm = () => {
    dispatch(toggleFormInternships());
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
        <div>
          <AddForms />
        </div>
      </div>
    </div>
  );
}
