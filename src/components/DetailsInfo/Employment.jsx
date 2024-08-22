import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";
export default function Employment(props) {
  const DataEmployment = useSelector(
    (state) => state.Employment.DataEmployment
  );
  const DataListEmployment = useSelector(
    (state) => state.Employment.DataListEmployment
  );
  const TitleEmployment = useSelector((state) => state.Employment.Title);
  const EditEmployment = useSelector((state) => state.Employment.Edit);

  return (
    <div>
      {(DataListEmployment.length > 0 ||
        DataEmployment.position ||
        DataEmployment.startMonthEmployment ||
        DataEmployment.startYearEmployment ||
        DataEmployment.employer ||
        DataEmployment.cityEmployment ||
        DataEmployment.endMonthEmployment ||
        DataEmployment.endYearEmployment ||
        DataEmployment.descriptionEmployment) && (
        <div className="my-1">
          <div className={props.StyleTitleContainer}>
            <p className={props.StyleTitle}>
              {props.Icon && <CircleIcon sx={{ color: props.IconColor }} />}
              <span className="">
                {TitleEmployment.length > 0 ? TitleEmployment : `Employment`}
              </span>
            </p>
          </div>
          <div className="mt-1">
            {DataListEmployment.length > 0 &&
              DataListEmployment.map((employ, i) => (
                <div key={i} className={props.styleContainerList}>
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>{employ.position}</p>
                      {(employ.startYearEmployment ||
                        employ.endYearEmployment) && (
                        <p className={props.styleDate}>
                          {employ.startMonthEmployment}{" "}
                          {employ.startYearEmployment} -{" "}
                          {employ.endMonthEmployment} {employ.endYearEmployment}
                        </p>
                      )}
                    </div>
                    {(employ.employer || employ.cityEmployment) && (
                      <p className={props.styleCity}>
                        {employ.employer}
                        <span>, {employ.cityEmployment}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>
                      {employ.descriptionEmployment}
                    </p>
                  </p>
                </div>
              ))}
            {(DataEmployment.position ||
              DataEmployment.startMonthEmployment ||
              DataEmployment.startYearEmployment ||
              DataEmployment.endMonthEmployment ||
              DataEmployment.endYearEmployment ||
              DataEmployment.descriptionEmployment ||
              DataEmployment.employer ||
              DataEmployment.cityEmployment) &&
              EditEmployment == false && (
                <div className={props.styleContainerList}>
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>
                        {DataEmployment.position}
                      </p>
                      <p className={props.styleDate}>
                        {DataEmployment.startMonthEmployment}{" "}
                        {DataEmployment.startYearEmployment} -{" "}
                        {DataEmployment.endMonthEmployment}{" "}
                        {DataEmployment.endYearEmployment}
                      </p>
                    </div>
                    {(DataEmployment.employer ||
                      DataEmployment.cityEmployment) && (
                      <p className={props.styleCity}>
                        {DataEmployment.employer}
                        <span>, {DataEmployment.cityEmployment}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>
                      {DataEmployment.descriptionEmployment}
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
