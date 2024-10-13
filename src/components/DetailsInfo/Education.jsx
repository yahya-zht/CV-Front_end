import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";

export default function Education(props) {
  const DataEducation = useSelector((state) => state.Education.DataEducation);
  const DataListEducation = useSelector(
    (state) => state.Education.DataListEducation
  );
  const TitleEducation = useSelector((state) => state.Education.Title);
  const EditEducation = useSelector((state) => state.Education.Edit);
  return (
    <div>
      {(DataListEducation.length > 0 ||
        DataEducation.education ||
        DataEducation.school ||
        DataEducation.city ||
        DataEducation.startYear ||
        DataEducation.endYear ||
        DataEducation.description) && (
        <div className="mt-1">
          <div className={props.StyleTitleContainer}>
            <p
              className={props.StyleTitle}
              style={{
                borderColor: props.border && props.BgColor,
                backgroundColor:
                  (!props.border || props.bgText) && props.BgColor,
              }}
            >
              {props.Icon && <CircleIcon sx={{ color: props.IconColor }} />}
              <span className="">
                {TitleEducation.length > 0 ? TitleEducation : `Education`}
              </span>
            </p>
          </div>
          <div className="mt-1">
            {DataListEducation.length > 0 &&
              DataListEducation.map((education, i) => (
                <div
                  key={i}
                  className={props.styleContainerList}
                  style={props.border ? { borderColor: props.BgColor } : null}
                >
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>
                        {education.education}
                      </p>
                      {(education.startYear || education.endYear) && (
                        <p className={props.styleDate}>
                          {education.startMonth} {education.startYear} -{" "}
                          {education.endMonth} {education.endYear}
                        </p>
                      )}
                    </div>
                    {(education.school || education.city) && (
                      <p className={props.styleCity}>
                        {education.school}
                        <span>, {education.city}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>
                      {education.description}
                    </p>
                  </p>
                </div>
              ))}
            {(DataEducation.education ||
              DataEducation.school ||
              DataEducation.city ||
              DataEducation.startYear ||
              DataEducation.endYear ||
              DataEducation.description) &&
              EditEducation == false && (
                <div className={props.styleContainerList}>
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>
                        {DataEducation.education}
                      </p>
                      <p className={props.styleDate}>
                        {DataEducation.startMonth} {DataEducation.startYear} -{" "}
                        {DataEducation.endMonth} {DataEducation.endYear}
                      </p>
                    </div>
                    {(DataEducation.school || DataEducation.city) && (
                      <p className={props.styleCity}>
                        {DataEducation.school}
                        <span>, {DataEducation.city}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>
                      {DataEducation.description}
                    </p>
                  </p>
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
}
