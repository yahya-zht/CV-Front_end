import React from "react";
import { useSelector } from "react-redux";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import QRCodeComponent from "../QRCodeComponent";

export default function PersonalInfo(props) {
  const DataPersonalDetails = useSelector(
    (state) => state.PersonalDetailsStore.DataPersonalDetails
  );
  return (
    <div
      className={props.styleContainer}
      style={{ backgroundColor: props.BgColor }}
    >
      <div
        className={
          DataPersonalDetails.uploadedImage
            ? props.styleTrueImg
            : props.styleFalseImg
        }
      >
        <p className={props.styleFirstName}>{DataPersonalDetails.firstName}</p>
        <p className={props.styleLastName}>{DataPersonalDetails.lastName}</p>
        <p className={props.styleHeadline}>{DataPersonalDetails.headline}</p>
      </div>
      <div>
        {DataPersonalDetails.website && DataPersonalDetails.checkedWeb && (
          <div className={props.styleQr}>
            <LanguageIcon fontSize="small" sx={{ color: props.IconColor }} />
            <QRCodeComponent value={DataPersonalDetails.website} />
          </div>
        )}
        {DataPersonalDetails.linkedIn &&
          DataPersonalDetails.checkedLinkedIn && (
            <div className={props.styleQr}>
              <LinkedInIcon fontSize="small" sx={{ color: props.IconColor }} />
              <QRCodeComponent value={DataPersonalDetails.linkedIn} />
            </div>
          )}
      </div>
    </div>
  );
}
