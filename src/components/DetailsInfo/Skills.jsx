import React from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { useSelector } from "react-redux";
export default function Skills(props) {
  const DataSkill = useSelector((state) => state.Skills.DataSkill);
  const DataListSkills = useSelector((state) => state.Skills.DataListSkills);
  const labels = {
    1: "Beginner",
    2: "Moderate",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: props.Color,
    },
    "& .MuiRating-iconHover": {
      color: props.Color,
    },
  });
  return (
    <div>
      {(DataListSkills.length > 0 || DataSkill.skill) && (
        <div className={props.StyleContainer}>
          <p className={props.StyleTitle}>Skills</p>
          <div className="mt-1 ms-2">
            {DataListSkills.length > 0 &&
              DataListSkills.map((skill, i) => (
                <div className={props.styleContainerList}>
                  <div className={props.styleList}>
                    <p className={props.StyleTitleSkill}>
                      {props.IconTitleSkill && (
                        <CircleIcon
                          sx={{ color: props.IconColorSkill, fontSize: 10 }}
                        />
                      )}
                      {skill.skill}
                    </p>

                    {props.Rating && skill.value > 0 && (
                      <Rating
                        name="size-small"
                        size="small"
                        value={skill.value}
                        readOnly
                      />
                    )}
                    {props.StyledRating && skill.value > 0 && (
                      <StyledRating
                        readOnly
                        name="customized-color"
                        value={skill.value}
                        precision={1}
                        icon={<CircleIcon fontSize="small" />}
                        emptyIcon={
                          <CircleOutlinedIcon
                            sx={{
                              color: skill.value >= 1 ? props.Color : "",
                            }}
                            fontSize="small"
                          />
                        }
                      />
                    )}
                  </div>
                </div>
              ))}
            {DataSkill.skill.length > 0 && (
              <div className={props.styleContainerList}>
                <div className={props.styleList}>
                  <p className={props.StyleTitleSkill}>
                    {props.IconTitleSkill && (
                      <CircleIcon
                        sx={{ color: props.IconColorSkill, fontSize: 10 }}
                      />
                    )}
                    {DataSkill.skill}
                  </p>
                  {props.Rating && DataSkill.value > 0 && (
                    <Rating
                      name="size-small"
                      size="small"
                      value={DataSkill.value}
                      readOnly
                    />
                  )}
                  {props.StyledRating && DataSkill.value > 0 && (
                    <StyledRating
                      readOnly
                      name="customized-color"
                      value={DataSkill.value}
                      precision={1}
                      icon={<CircleIcon fontSize="small" />}
                      emptyIcon={
                        <CircleOutlinedIcon
                          sx={{
                            color: DataSkill.value >= 1 ? props.Color : "",
                          }}
                          fontSize="small"
                        />
                      }
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
