"use client ";
import React from "react";
import { useSelector } from "react-redux";
import CircleIcon from "@mui/icons-material/Circle";

export default function ExtracurricularActivities(props) {
  const formExtracurricularActivities = useSelector(
    (state) => state.ExtracurricularActivities.formExtracurricularActivities
  );
  const ExtracurricularActivitiesData = useSelector(
    (state) => state.ExtracurricularActivities.ExtracurricularActivitiesData
  );
  const ExtracurricularActivitiesList = useSelector(
    (state) => state.ExtracurricularActivities.ExtracurricularActivitiesList
  );
  const TitleExtracurricularActivities = useSelector(
    (state) => state.ExtracurricularActivities.Title
  );
  const Edit = useSelector((state) => state.ExtracurricularActivities.Edit);
  return (
    <div>
      {formExtracurricularActivities && (
        <div className="my-1">
          <div className={props.StyleTitleContainer}>
            <p
              className={props.StyleTitle}
              style={
                props.border
                  ? { borderColor: props.BgColor }
                  : { backgroundColor: props.BgColor }
              }
            >
              {props.Icon && <CircleIcon sx={{ color: props.IconColor }} />}
              <span className="">
                {TitleExtracurricularActivities.length > 0
                  ? TitleExtracurricularActivities
                  : `Extracurricular Activities`}
              </span>
            </p>
          </div>
          <div className="mt-1">
            {ExtracurricularActivitiesList.length > 0 &&
              ExtracurricularActivitiesList.map((e, i) => (
                <div
                  key={i}
                  className={props.styleContainerList}
                  style={props.border ? { borderColor: props.BgColor } : null}
                >
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>{e.position}</p>
                      {(e.startYear || e.endYear) && (
                        <p className={props.styleDate}>
                          {e.startMonth} {e.startYear} - {e.endMonth}{" "}
                          {e.endYear}
                        </p>
                      )}
                    </div>
                    {(e.employer || e.city) && (
                      <p className={props.styleCity}>
                        {e.employer}
                        <span>, {e.city}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>{e.description}</p>
                  </p>
                </div>
              ))}
            {(ExtracurricularActivitiesData.position ||
              ExtracurricularActivitiesData.startMonth ||
              ExtracurricularActivitiesData.startYear ||
              ExtracurricularActivitiesData.endMonth ||
              ExtracurricularActivitiesData.endYear ||
              ExtracurricularActivitiesData.description ||
              ExtracurricularActivitiesData.employer ||
              ExtracurricularActivitiesData.city) &&
              Edit == false && (
                <div
                  className={props.styleContainerList}
                  style={props.border ? { borderColor: props.BgColor } : null}
                >
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>
                        {ExtracurricularActivitiesData.position}
                      </p>
                      <p className={props.styleDate}>
                        {ExtracurricularActivitiesData.startMonth}{" "}
                        {ExtracurricularActivitiesData.startYear} -{" "}
                        {ExtracurricularActivitiesData.endMonth}{" "}
                        {ExtracurricularActivitiesData.endYear}
                      </p>
                    </div>
                    {(ExtracurricularActivitiesData.employer ||
                      ExtracurricularActivitiesData.city) && (
                      <p className={props.styleCity}>
                        {ExtracurricularActivitiesData.employer}
                        <span>, {ExtracurricularActivitiesData.city}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>
                      {ExtracurricularActivitiesData.description}
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
