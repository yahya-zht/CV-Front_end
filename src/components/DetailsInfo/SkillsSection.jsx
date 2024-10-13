import React from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { useSelector } from "react-redux";
export default function SkillsSection(props) {
  const Title = useSelector((state) => state.Section.SkillsTitle[props.index]);
  const DataSkill = useSelector(
    (state) => state.Section.DataSkills[props.index]
  );
  const DataListSkills = useSelector(
    (state) => state.Section.ListDataSkills[props.index]
  );
  const Edit = useSelector((state) => state.Section.EditSkills[props.index]);
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
      <div className={props.StyleContainer}>
        <div className="flex">
          <p
            className={props.StyleTitle}
            style={{
              borderColor: props.border && props.BgColor,
              backgroundColor: (!props.border || props.bgText) && props.BgColor,
            }}
          >
            {Title.length > 0 ? Title : `Skills Section ${props.index + 1}`}
          </p>
        </div>
        {(DataListSkills.length > 0 || DataSkill.skill) && (
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
                      )}{" "}
                      {skill.skill}
                    </p>

                    {props.Rating && skill.value > 0 && (
                      <Rating
                        name="size-small"
                        size="small"
                        value={skill.value}
                        sx={{ color: props.Color }}
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
            {DataSkill.skill.length > 0 &&
              (Edit == false || Edit === undefined) && (
                <div className={props.styleContainerList}>
                  <div className={props.styleList}>
                    <p className={props.StyleTitleSkill}>
                      {props.IconTitleSkill && (
                        <CircleIcon
                          sx={{ color: props.IconColorSkill, fontSize: 10 }}
                        />
                      )}{" "}
                      {DataSkill.skill}
                    </p>
                    {props.Rating && DataSkill.value > 0 && (
                      <Rating
                        name="size-small"
                        size="small"
                        value={DataSkill.value}
                        sx={{ color: props.Color }}
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
        )}
      </div>
    </div>
  );
}
