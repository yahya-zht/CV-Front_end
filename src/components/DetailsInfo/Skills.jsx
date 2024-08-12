import React from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
export default function Skills(props) {
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
      {(props.DataListSkills.length > 0 || props.DataSkill.skill) && (
        <div className={props.StyleContainer}>
          <p className={props.StyleTitle}>Skills</p>
          <div className="mt-1 ms-2">
            {props.DataListSkills.length > 0 &&
              props.DataListSkills.map((skill, i) => (
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
            {props.DataSkill.skill.length > 0 && (
              <div className={props.styleContainerList}>
                <div className={props.styleList}>
                  <p className={props.StyleTitleSkill}>
                    {props.IconTitleSkill && (
                      <CircleIcon
                        sx={{ color: props.IconColorSkill, fontSize: 10 }}
                      />
                    )}
                    {props.DataSkill.skill}
                  </p>
                  {props.Rating && props.DataSkill.value > 0 && (
                    <Rating
                      name="size-small"
                      size="small"
                      value={props.DataSkill.value}
                      readOnly
                    />
                  )}
                  {props.StyledRating && props.DataSkill.value > 0 && (
                    <StyledRating
                      readOnly
                      name="customized-color"
                      value={props.DataSkill.value}
                      precision={1}
                      icon={<CircleIcon fontSize="small" />}
                      emptyIcon={
                        <CircleOutlinedIcon
                          sx={{
                            color:
                              props.DataSkill.value >= 1 ? props.Color : "",
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
