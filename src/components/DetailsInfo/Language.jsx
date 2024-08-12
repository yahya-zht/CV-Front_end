import React from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function Language(props) {
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
      {(props.DataListLanguages.length > 0 || props.DataLanguage.language) && (
        <div className={props.StyleContainer}>
          <p className={props.StyleTitle}>Language</p>
          <div className="mt-1 ms-2">
            {props.DataListLanguages.length > 0 &&
              props.DataListLanguages.map((language, i) => (
                <div className={props.styleContainerList}>
                  <div className={props.styleList}>
                    <p className={props.StyleTitleSkill}>
                      {props.IconTitleSkill && (
                        <CircleIcon
                          sx={{ color: props.IconColorSkill, fontSize: 10 }}
                        />
                      )}
                      {language.language}
                    </p>

                    {props.Rating && language.value > 0 && (
                      <Rating
                        name="size-small"
                        size="small"
                        value={language.value}
                        readOnly
                      />
                    )}
                    {props.StyledRating && language.value > 0 && (
                      <StyledRating
                        readOnly
                        name="customized-color"
                        value={language.value}
                        precision={1}
                        icon={<CircleIcon fontSize="small" />}
                        emptyIcon={
                          <CircleOutlinedIcon
                            sx={{
                              color: language.value >= 1 ? props.Color : "",
                            }}
                            fontSize="small"
                          />
                        }
                      />
                    )}
                  </div>
                </div>
              ))}
            {props.DataLanguage.language.length > 0 && (
              <div className={props.styleContainerList}>
                <div className={props.styleList}>
                  <p className={props.StyleTitleSkill}>
                    {props.IconTitleSkill && (
                      <CircleIcon
                        sx={{ color: props.IconColorSkill, fontSize: 10 }}
                      />
                    )}
                    {props.DataLanguage.language}
                  </p>
                  {props.Rating && props.DataLanguage.value > 0 && (
                    <Rating
                      name="size-small"
                      size="small"
                      value={props.DataLanguage.value}
                      readOnly
                    />
                  )}
                  {props.StyledRating && props.DataLanguage.value > 0 && (
                    <StyledRating
                      readOnly
                      name="customized-color"
                      value={props.DataLanguage.value}
                      precision={1}
                      icon={<CircleIcon fontSize="small" />}
                      emptyIcon={
                        <CircleOutlinedIcon
                          sx={{
                            color:
                              props.DataLanguage.value >= 1 ? props.Color : "",
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
