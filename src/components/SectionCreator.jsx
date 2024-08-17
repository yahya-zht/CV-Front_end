import React, { useState } from "react";
import { Menu, MenuItem, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { KeyboardArrowUp } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  setFormDescription,
  setFormEntries,
  setFormList,
  setFormSkills,
} from "@/store/SectionSlice";
const SectionCreator = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSectionCreate = (sectionType) => {
    switch (sectionType) {
      case "Description":
        dispatch(setFormDescription());
        break;
      case "Entries":
        dispatch(setFormEntries());
        break;
      case "Skills":
        dispatch(setFormSkills());
        break;
      case "List":
        dispatch(setFormList());
        break;
      default:
        console.error("Invalid section type");
        break;
    }
    handleClose();
  };

  return (
    <div className="inline-flex">
      <button
        className="py-1 px-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 ms-2 my-1"
        onClick={handleClick}
      >
        <AddIcon />
        <span className="me-2">Custom section</span>
        {anchorEl == null ? <KeyboardArrowDownIcon /> : <KeyboardArrowUp />}
      </button>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSectionCreate("Description")}>
          Description section
        </MenuItem>
        <MenuItem onClick={() => handleSectionCreate("Entries")}>
          Entries section
        </MenuItem>
        <MenuItem onClick={() => handleSectionCreate("Skills")}>
          Skills section
        </MenuItem>
        <MenuItem onClick={() => handleSectionCreate("List")}>
          List section
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SectionCreator;
