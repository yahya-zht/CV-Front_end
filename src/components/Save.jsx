import React, { useEffect, useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { Button, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function Save() {
  const personalDetails = useSelector((state) => state.PersonalDetailsStore);
  const profile = useSelector((state) => state.Profile);
  const languages = useSelector((state) => state.Languages);
  const course = useSelector((state) => state.course);
  const Employment = useSelector((state) => state.Employment);
  const Internships = useSelector((state) => state.Internships);
  const Certificates = useSelector((state) => state.Certificates);
  const Qualities = useSelector((state) => state.Qualities);
  const ExtracurricularActivities = useSelector(
    (state) => state.ExtracurricularActivities
  );
  const References = useSelector((state) => state.References);
  const Footer = useSelector((state) => state.Footer);
  const Achievements = useSelector((state) => state.Achievements);
  const Education = useSelector((state) => state.Education);
  const Skills = useSelector((state) => state.Skills);
  const Hobbies = useSelector((state) => state.Hobbies);
  const Section = useSelector((state) => state.Section);
  const [iconDelete, setIconDelete] = useState(false);

  const handleSave = () => {
    try {
      const dataToSave = {
        personalDetails,
        profile,
        languages,
        course,
        Employment,
        Internships,
        Certificates,
        Qualities,
        ExtracurricularActivities,
        References,
        Footer,
        Achievements,
        Education,
        Skills,
        Hobbies,
        // Templates,
        Section,
      };
      const serializedData = JSON.stringify(dataToSave);
      localStorage.setItem("appState", serializedData);
      // alert("Data saved successfully!");
    } catch (error) {
      if (error.code === 22 || error.name === "QuotaExceededError") {
        alert("LocalStorage is full. Please clear some space and try again.");
      } else {
        alert("An error occurred while saving data.");
        console.error(error);
      }
    }
    setIconDelete(true);
  };
  const handleDelete = () => {
    localStorage.removeItem("appState");
    setIconDelete(false);
  };
  useEffect(() => {
    if (localStorage.getItem("appState")) {
      setIconDelete(true);
    } else {
      setIconDelete(false);
    }
  }, []);
  return (
    <div className="flex flex-row mb-5 mt-10 justify-end items-center">
      <div>
        <Button
          onClick={() => handleSave()}
          sx={{ backgroundColor: "#1E3A8A" }}
          variant="contained"
        >
          <span className="me-2">Save</span>
          <SaveIcon />
        </Button>
      </div>
      <div className="ms-2">
        {iconDelete ? (
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => handleDelete()}
          >
            <DeleteIcon />
          </IconButton>
        ) : null}
      </div>
    </div>
  );
}
