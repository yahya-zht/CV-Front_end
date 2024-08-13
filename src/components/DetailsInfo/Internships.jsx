"use client";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";

export default function Internships(props) {
  const formInternships = useSelector(
    (state) => state.Internships.formInternships
  );
  const InternshipsData = useSelector(
    (state) => state.Internships.InternshipsData
  );
  const InternshipsList = useSelector(
    (state) => state.Internships.InternshipsList
  );
  return (
    <div>
      {formInternships && (
        <div className="my-1">
          <div className={props.StyleTitleContainer}>
            <p className={props.StyleTitle}>
              {props.Icon && <CircleIcon sx={{ color: props.IconColor }} />}
              <span className="">Internships</span>
            </p>
          </div>
          <div className="mt-1">
            {InternshipsList.length > 0 &&
              InternshipsList.map((internship, i) => (
                <div key={i} className={props.styleContainerList}>
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>
                        {internship.position}
                      </p>
                      {(internship.startYearInternship ||
                        internship.endYearInternship) && (
                        <p className={props.styleDate}>
                          {internship.startMonthInternship}{" "}
                          {internship.startYearInternship} -{" "}
                          {internship.endMonthInternship}{" "}
                          {internship.endYearInternship}
                        </p>
                      )}
                    </div>
                    {(internship.Internship || internship.cityInternship) && (
                      <p className={props.styleCity}>
                        {internship.Internship}
                        <span>, {internship.cityInternship}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>
                      {internship.descriptionInternship}
                    </p>
                  </p>
                </div>
              ))}
            {(InternshipsData.position ||
              InternshipsData.startMonthEmployment ||
              InternshipsData.startYearEmployment ||
              InternshipsData.endMonthEmployment ||
              InternshipsData.endYearEmployment ||
              InternshipsData.descriptionEmployment ||
              InternshipsData.employer ||
              InternshipsData.cityEmployment) && (
              <div className={props.styleContainerList}>
                <p className="">
                  <div className={props.styleList}>
                    <p className={props.StyleTitleList}>
                      {InternshipsData.position}
                    </p>
                    <p className={props.styleDate}>
                      {InternshipsData.startMonthInternship}{" "}
                      {InternshipsData.startYearInternship} -{" "}
                      {InternshipsData.endMonthInternship}{" "}
                      {InternshipsData.endYearInternship}
                    </p>
                  </div>
                  {(InternshipsData.Internship ||
                    InternshipsData.cityInternship) && (
                    <p className={props.styleCity}>
                      {InternshipsData.Internship}
                      <span>, {InternshipsData.cityInternship}</span>
                    </p>
                  )}
                  <p className={props.StyleDescription}>
                    {InternshipsData.descriptionInternship}
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
