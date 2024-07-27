import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import PersonalDetails from "./Forms/PersonalDetails";
import Education from "./Forms/Education";
import Employment from "./Forms/Employment";
import Skills from "./Forms/Skills";
import Languages from "./Forms/Languages";

export default function FormInfo() {
  return (
    <div className="p-6">
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
      </div>
    </div>
  );
}
