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
import {
  setColor,
  setFontFamily,
  setFontSize,
  setTemplateSelected,
  setZoom,
} from "@/store/TemplatesSlice";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { useSelector } from "react-redux";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import { SketchPicker } from "react-color";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import "../../constants/style/Template.module.css";

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
const StyledMenuSize = styled((props) => (
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
    marginTop: theme.spacing(1),
    minWidth: "8vh",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      display: "flex",
      flexDirection: "column",
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
      minHeight: "6vh",
      padding: theme.spacing(1, 2),
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const StyledMenuFont = styled((props) => (
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
    marginTop: theme.spacing(1),
    minWidth: "8vh",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      display: "flex",
      flexDirection: "column",
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
      minHeight: "6vh",
      padding: theme.spacing(1, 2),
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
  const [fontSize, setFontSizeThis] = useState("");
  const [font, setFont] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [anchorFontSizeEl, setAnchorFontSizeEl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorColorEl, setAnchorColorEl] = useState(null);
  const [anchorFontEl, setAnchorFontEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const openFontSize = Boolean(anchorFontSizeEl);
  const openColor = Boolean(anchorColorEl);
  const openFont = Boolean(anchorFontEl);
  const FontText = [
    "Auto",
    "Roboto",
    "serif",
    "SUSE",
    "Open Sans",
    "Baskervville SC",
    "Source Code Pro",
    "Roboto Condensed",
    "Poppins",
    "Fjalla One",
    "Zilla Slab",
    "Signika",
    "Bitter",
  ];
  const handleClickTemplates = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleFontSizeClick = (event) => {
    setAnchorFontSizeEl(event.currentTarget);
  };
  const handleFontClick = (event) => {
    setAnchorFontEl(event.currentTarget);
  };
  const handleColorClick = (event) => {
    setAnchorColorEl(event.currentTarget);
  };
  const handleChangeFontSize = (size) => {
    setFontSizeThis(size);
    dispatch(setFontSize(size));
    setAnchorFontSizeEl(null);
  };
  const handleChangeFont = (font) => {
    setFont(font);
    dispatch(setFontFamily(font));
    console.log("setFont====>", font);
    setAnchorFontEl(null);
  };
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    dispatch(setColor(color.hex));
    setAnchorColorEl(null);
  };
  const handleSelect = (T) => {
    dispatch(setTemplateSelected(T));
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorFontSizeEl(null);
    setAnchorColorEl(null);
    setAnchorFontEl(null);
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
    <div className=" px-6 py-2 bg-gray-50 rounded-lg absolute bottom-7 left-10 right-10 z-20 shadow-xl  border-2 border-gray-200 flex flex-row justify-between">
      <div>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClickTemplates}
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
      </div>
      {/* Font Button */}
      <div>
        <Button
          id="demo-customized-button"
          aria-controls={openFont ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openFont ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleFontClick}
          endIcon={
            anchorFontEl == null ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUp />
            )
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
          <FontDownloadIcon />
        </Button>
        <StyledMenuFont
          id="demo-customized-menu-size"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorFontEl}
          open={openFont}
          onClose={handleClose}
        >
          {FontText.map((t, index) => (
            <MenuItem
              onClick={() => handleChangeFont(t)}
              key={index}
              disableRipple
            >
              <p style={{ fontFamily: t }}>{t}</p>
            </MenuItem>
          ))}
        </StyledMenuFont>
      </div>
      {/* FontSize Button */}
      <div>
        <Button
          id="demo-customized-button"
          aria-controls={openFontSize ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openFontSize ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleFontSizeClick}
          endIcon={
            anchorFontSizeEl == null ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUp />
            )
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
          <FormatSizeIcon />
        </Button>
        <StyledMenuSize
          id="demo-customized-menu-size"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorFontSizeEl}
          open={openFontSize}
          onClose={handleClose}
        >
          {[
            { name: "S", size: "12px" },
            { name: "M", size: "14px" },
            { name: "L", size: "16px" },
          ].map((t, index) => (
            <MenuItem
              onClick={() => handleChangeFontSize(t)}
              key={index}
              disableRipple
            >
              <p className="" style={{ fontSize: t.size }}>
                {t.name}
              </p>
            </MenuItem>
          ))}
        </StyledMenuSize>
      </div>
      {/* Color Picker Button */}
      <div>
        <Button
          onClick={handleColorClick}
          id="demo-customized-button"
          aria-controls={openColor ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openColor ? "true" : undefined}
          variant="contained"
          disableElevation
          endIcon={
            anchorColorEl == null ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUp />
            )
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
          <FormatColorFillIcon />
        </Button>
        <Menu
          anchorEl={anchorColorEl}
          open={openColor}
          onClose={() => setAnchorColorEl(null)}
        >
          <MenuItem disableRipple>
            <SketchPicker
              color={selectedColor}
              onChangeComplete={handleColorChange}
            />
          </MenuItem>
        </Menu>
      </div>

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
