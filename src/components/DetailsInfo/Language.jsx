import React from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { useSelector } from "react-redux";

export default function Language(props) {
  const DataListLanguages = useSelector(
    (state) => state.Languages.DataListLanguages
  );
  const DataLanguage = useSelector((state) => state.Languages.DataLanguage);
  const TitleLanguage = useSelector((state) => state.Languages.Title);
  const EditLanguage = useSelector((state) => state.Languages.Edit);

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
      {(DataListLanguages.length > 0 || DataLanguage.language) && (
        <div className={props.StyleContainer}>
          <p
            className={props.StyleTitle}
            style={{
              borderColor: props.BgColor,
              backgroundColor: props.bgText && props.BgColor,
              color: props.colorText && props.colorTextTitle,
            }}
          >
            {TitleLanguage.length > 0 ? TitleLanguage : `Languages`}
          </p>
          <div className="mt-1 ms-2 ">
            {DataListLanguages.length > 0 &&
              DataListLanguages.map((language, i) => (
                <div className={props.styleContainerList}>
                  <div className={props.styleList}>
                    <p className={props.StyleTitleSkill}>
                      {props.IconTitleSkill && (
                        <CircleIcon
                          sx={{ color: props.IconColorSkill, fontSize: 10 }}
                        />
                      )}{" "}
                      {language.language}
                    </p>

                    {props.Rating && language.value > 0 && (
                      <Rating
                        name="size-small"
                        size="small"
                        value={language.value}
                        sx={{ color: props.Color }}
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
                          <whiteCircleOutlinedIcon
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
            {DataLanguage.language.length > 0 && EditLanguage == false && (
              <div className={props.styleContainerList}>
                <div className={props.styleList}>
                  <p className={props.StyleTitleSkill}>
                    {props.IconTitleSkill && (
                      <CircleIcon
                        sx={{ color: props.IconColorSkill, fontSize: 10 }}
                      />
                    )}{" "}
                    {DataLanguage.language}
                  </p>
                  {props.Rating && DataLanguage.value > 0 && (
                    <Rating
                      name="size-small"
                      size="small"
                      value={DataLanguage.value}
                      sx={{ color: props.Color }}
                      readOnly
                    />
                  )}
                  {props.StyledRating && DataLanguage.value > 0 && (
                    <StyledRating
                      readOnly
                      name="customized-color"
                      value={DataLanguage.value}
                      precision={1}
                      icon={<CircleIcon fontSize="small" />}
                      emptyIcon={
                        <CircleOutlinedIcon
                          sx={{
                            color: DataLanguage.value >= 1 ? props.Color : "",
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
