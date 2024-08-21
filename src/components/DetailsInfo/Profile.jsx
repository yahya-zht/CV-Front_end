import React, { forwardRef } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";

export default function Profile(props) {
  const formProfile = useSelector((state) => state.Profile.formProfile);
  const DataProfile = useSelector((state) => state.Profile.DataProfile);
  const TitleProfile = useSelector((state) => state.Profile.Title);

  return (
    <div>
      {formProfile && (
        <div className={props.styleContainer}>
          <div className={props.StyleTitleContainer}>
            <p className={props.styleTitle}>
              {props.IconTitle && (
                <CircleIcon sx={{ color: props.Color, marginRight: 2 }} />
              )}
              <span className="">
                {TitleProfile.length > 0 ? TitleProfile : `Profile`}
              </span>
            </p>
          </div>
          <p className={props.ProfileStyleDescription}>
            {DataProfile.descriptionProfile}
          </p>
        </div>
      )}
    </div>
  );
}
