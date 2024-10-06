import React from "react";
import { useSelector } from "react-redux";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function PersonalDetails(props) {
  const DataPersonalDetails = useSelector(
    (state) => state.PersonalDetailsStore.DataPersonalDetails
  );

  return (
    <div>
      {(DataPersonalDetails.phoneNumber ||
        DataPersonalDetails.email ||
        DataPersonalDetails.address ||
        DataPersonalDetails.postCode ||
        DataPersonalDetails.city ||
        DataPersonalDetails.website ||
        DataPersonalDetails.linkedIn) && (
        <div className={props.container}>
          {DataPersonalDetails.phoneNumber.length > 0 && (
            <p className="text-xs flex flex-row items-center mb-1">
              <span
                className={props.styleZoonIcon}
                style={{ backgroundColor: props.BgColor }}
              >
                <LocalPhoneIcon
                  fontSize="small"
                  sx={{ color: props.ColorIcon }}
                />
              </span>
              <span className={props.styleTitle}>
                {DataPersonalDetails.phoneNumber}
              </span>
            </p>
          )}
          {DataPersonalDetails.email.length > 0 && (
            <p className="text-xs flex flex-row items-center mb-1">
              <span
                className={props.styleZoonIcon}
                style={{ backgroundColor: props.BgColor }}
              >
                <MarkunreadIcon
                  fontSize="small"
                  sx={{ color: props.ColorIcon }}
                />
              </span>
              <span className={props.styleTitle}>
                {DataPersonalDetails.email}
              </span>
            </p>
          )}
          {DataPersonalDetails.website.length > 0 &&
            !DataPersonalDetails.checkedWeb && (
              <p className="text-xs flex flex-row items-center mb-1">
                <span
                  className={props.styleZoonIcon}
                  style={{ backgroundColor: props.BgColor }}
                >
                  <LanguageIcon
                    fontSize="small"
                    sx={{ color: props.ColorIcon }}
                  />
                </span>
                <span className={props.styleTitle}>
                  {DataPersonalDetails.website}
                </span>
              </p>
            )}
          {(DataPersonalDetails.address.length > 0 ||
            DataPersonalDetails.postCode.length > 0 ||
            DataPersonalDetails.city.length > 0) && (
            <p className="text-xs flex flex-row items-center mb-1">
              <span
                className={props.styleZoonIcon}
                style={{ backgroundColor: props.BgColor }}
              >
                <LocationOnIcon
                  fontSize="small"
                  sx={{ color: props.ColorIcon }}
                />
              </span>
              <span className={props.styleTitle}>
                {DataPersonalDetails.address} {DataPersonalDetails.postCode},{" "}
                {DataPersonalDetails.city}
              </span>
            </p>
          )}
          {DataPersonalDetails.linkedIn.length > 0 &&
            !DataPersonalDetails.checkedLinkedIn && (
              <p className="text-xs flex flex-row items-center ">
                <span
                  className={props.styleZoonIcon}
                  style={{ backgroundColor: props.BgColor }}
                >
                  <LinkedInIcon
                    fontSize="small"
                    sx={{ color: props.ColorIcon }}
                  />
                </span>
                <span className={props.styleTitle}>
                  {DataPersonalDetails.linkedIn}
                </span>
              </p>
            )}
        </div>
      )}
    </div>
  );
}
