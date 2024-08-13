import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";
export default function Qualities(props) {
  const formQualities = useSelector((state) => state.Qualities.formQualities);
  const QualitiesData = useSelector((state) => state.Qualities.QualitiesData);
  const QualitiesList = useSelector((state) => state.Qualities.QualitiesList);

  return (
    <div>
      {formQualities && (
        <div className={props.StyleContainer}>
          <p className={props.StyleTitle}>Qualities</p>
          <div className="mt-1 ms-2">
            {QualitiesList.length > 0 &&
              QualitiesList.map((quality, i) => (
                <div className={props.styleContainerList}>
                  <div className={props.styleList}>
                    <p className={props.StyleTitleList}>
                      {props.Icon && (
                        <CircleIcon
                          sx={{ color: props.IconColor, fontSize: 10 }}
                        />
                      )}{" "}
                      {quality.quality}
                    </p>
                  </div>
                </div>
              ))}
            {QualitiesData.quality && (
              <div className="list-disc">
                <div className={props.styleList}>
                  <p className={props.StyleTitleList}>
                    {props.Icon && (
                      <CircleIcon
                        sx={{ color: props.IconColor, fontSize: 10 }}
                      />
                    )}{" "}
                    {QualitiesData.quality}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
