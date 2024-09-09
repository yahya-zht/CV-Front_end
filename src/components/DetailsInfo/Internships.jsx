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
  const TitleInternships = useSelector((state) => state.Internships.Title);
  const EditInternships = useSelector((state) => state.Internships.Edit);
  console.log("InternshipsData====>", InternshipsData);
  return (
    <div>
      {formInternships && (
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
                {TitleInternships.length > 0 ? TitleInternships : `Internships`}
              </span>
            </p>
          </div>
          <div className="mt-1">
            {InternshipsList.length > 0 &&
              InternshipsList.map((internship, i) => (
                <div
                  key={i}
                  className={props.styleContainerList}
                  style={props.border ? { borderColor: props.BgColor } : null}
                >
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>
                        {internship.position}
                      </p>
                      {(internship.startYear || internship.endYear) && (
                        <p className={props.styleDate}>
                          {internship.startMonth} {internship.startYear} -{" "}
                          {internship.endMonth} {internship.endYear}
                        </p>
                      )}
                    </div>
                    {(internship.Internship || internship.city) && (
                      <p className={props.styleCity}>
                        {internship.Internship}
                        <span>, {internship.city}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>
                      {internship.description}
                    </p>
                  </p>
                </div>
              ))}
            {(InternshipsData.position ||
              InternshipsData.startMonth ||
              InternshipsData.startYear ||
              InternshipsData.endMonth ||
              InternshipsData.endYear ||
              InternshipsData.description ||
              InternshipsData.employer ||
              InternshipsData.city) &&
              EditInternships == false && (
                <div
                  className={props.styleContainerList}
                  style={props.border ? { borderColor: props.BgColor } : null}
                >
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>
                        {InternshipsData.position}
                      </p>
                      <p className={props.styleDate}>
                        {InternshipsData.startMonth} {InternshipsData.startYear}{" "}
                        - {InternshipsData.endMonth} {InternshipsData.endYear}
                      </p>
                    </div>
                    {(InternshipsData.Internship || InternshipsData.city) && (
                      <p className={props.styleCity}>
                        {InternshipsData.Internship}
                        <span>, {InternshipsData.city}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>
                      {InternshipsData.description}
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
