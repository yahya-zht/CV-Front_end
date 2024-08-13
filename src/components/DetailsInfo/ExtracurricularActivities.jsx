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
  return (
    <div>
      {formExtracurricularActivities && (
        <div className="my-1">
          <div className={props.StyleTitleContainer}>
            <p className={props.StyleTitle}>
              {props.Icon && <CircleIcon sx={{ color: props.IconColor }} />}
              <span className="">Extracurricular Activities</span>
            </p>
          </div>
          <div className="mt-1">
            {ExtracurricularActivitiesList.length > 0 &&
              ExtracurricularActivitiesList.map((e, i) => (
                <div key={i} className={props.styleContainerList}>
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>{e.position}</p>
                      {(e.startYearExtracurricularActivities ||
                        e.endYearExtracurricularActivities) && (
                        <p className={props.styleDate}>
                          {e.startMonthExtracurricularActivities}{" "}
                          {e.startYearExtracurricularActivities} -{" "}
                          {e.endMonthExtracurricularActivities}{" "}
                          {e.endYearExtracurricularActivities}
                        </p>
                      )}
                    </div>
                    {(e.employer || e.cityExtracurricularActivities) && (
                      <p className={props.styleCity}>
                        {e.employer}
                        <span>, {e.cityExtracurricularActivities}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>
                      {e.descriptionExtracurricularActivities}
                    </p>
                  </p>
                </div>
              ))}
            {(ExtracurricularActivitiesData.position ||
              ExtracurricularActivitiesData.startMonthExtracurricularActivities ||
              ExtracurricularActivitiesData.startYearExtracurricularActivities ||
              ExtracurricularActivitiesData.endMonthExtracurricularActivities ||
              ExtracurricularActivitiesData.endYearExtracurricularActivities ||
              ExtracurricularActivitiesData.descriptionExtracurricularActivities ||
              ExtracurricularActivitiesData.employer ||
              ExtracurricularActivitiesData.cityExtracurricularActivities) && (
              <div className={props.styleContainerList}>
                <p className="">
                  <div className={props.styleList}>
                    <p className={props.StyleTitleList}>
                      {ExtracurricularActivitiesData.position}
                    </p>
                    <p className={props.styleDate}>
                      {
                        ExtracurricularActivitiesData.startMonthExtracurricularActivities
                      }{" "}
                      {
                        ExtracurricularActivitiesData.startYearExtracurricularActivities
                      }{" "}
                      -{" "}
                      {
                        ExtracurricularActivitiesData.endMonthExtracurricularActivities
                      }{" "}
                      {
                        ExtracurricularActivitiesData.endYearExtracurricularActivities
                      }
                    </p>
                  </div>
                  {(ExtracurricularActivitiesData.employer ||
                    ExtracurricularActivitiesData.cityExtracurricularActivities) && (
                    <p className={props.styleCity}>
                      {ExtracurricularActivitiesData.employer}
                      <span>
                        ,{" "}
                        {
                          ExtracurricularActivitiesData.cityExtracurricularActivities
                        }
                      </span>
                    </p>
                  )}
                  <p className={props.StyleDescription}>
                    {
                      ExtracurricularActivitiesData.descriptionExtracurricularActivities
                    }
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
