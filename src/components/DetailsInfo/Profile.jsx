import React, { forwardRef } from "react";
import CircleIcon from "@mui/icons-material/Circle";
export default function Profile(props) {
  return (
    <div>
      {props.formProfile && (
        <div className={props.styleContainer}>
          <p className={props.styleTitle}>
            {props.IconTitle && <CircleIcon sx={{ color: props.Color }} />}
            <span className="ms-5">Profile</span>
          </p>
          <p className={props.ProfileStyleDescription}>
            {props.DataProfile.descriptionProfile}
          </p>
        </div>
      )}
    </div>
  );
}
