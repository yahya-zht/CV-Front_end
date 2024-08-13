import React, { forwardRef } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";

export default function Profile(props) {
  const formProfile = useSelector((state) => state.Profile.formProfile);
  const DataProfile = useSelector((state) => state.Profile.DataProfile);
  return (
    <div>
      {formProfile && (
        <div className={props.styleContainer}>
          <p className={props.styleTitle}>
            {props.IconTitle && (
              <CircleIcon sx={{ color: props.Color, marginRight: 2 }} />
            )}
            <span className="">Profile</span>
          </p>
          <p className={props.ProfileStyleDescription}>
            {DataProfile.descriptionProfile}
          </p>
        </div>
      )}
    </div>
  );
}
