"use client";
import React, { useState } from "react";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import { DataImages } from "@/constants/DataTemplates";
import { KeyboardArrowUp } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setTemplateSelected, setZoom } from "@/store/TemplatesSlice";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { useSelector } from "react-redux";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(-1),
    minHeight: "30vh",
    overflowY: "auto",
    maxWidth: "85vh",
    overflowX: "auto",
    // color: "yellow",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      // backgroundColor: "rgba(25, 25, 23)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "auto",
      minWidth: "25vh",
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
export default function NavTemplates() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (T) => {
    dispatch(setTemplateSelected(T));
    setAnchorEl(null);
  };
  const zoom = useSelector((state) => state.Templates.Zoom);
  const handleZoom = () => {
    if (zoom == 0.55) {
      dispatch(setZoom(0.9));
    } else {
      dispatch(setZoom(0.55));
    }
  };
  return (
    <div className=" px-6 py-2 bg-gray-50 rounded-lg  absolute bottom-7 left-10 right-10 z-20 shadow-xl  border-2 border-gray-200 flex flex-row justify-between">
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={
          anchorEl == null ? <KeyboardArrowDownIcon /> : <KeyboardArrowUp />
        }
        sx={{
          backgroundColor: "#EEEEEE",
          color: "#201E43",
          "&:hover": {
            backgroundColor: "#201E43",
            color: "#EEEEEE",
          },
        }}
      >
        <ViewCarouselIcon />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {DataImages.map((img, index) => (
          <MenuItem
            onClick={() => handleSelect(img.id)}
            key={index}
            disableRipple
          >
            <Image src={img.image} alt={`template cv ${img.id}`} />
          </MenuItem>
        ))}
      </StyledMenu>
      <Button
        onClick={handleZoom}
        sx={{
          backgroundColor: "#EEEEEE",
          color: "#201E43",
          "&:hover": {
            backgroundColor: "#201E43",
            color: "#EEEEEE",
          },
        }}
      >
        {zoom == 0.55 ? <ZoomInIcon /> : <ZoomOutIcon />}
      </Button>
    </div>
  );
}
