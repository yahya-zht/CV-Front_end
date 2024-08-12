import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
export default function Hobbies(props) {
  return (
    <div>
      {(props.DataListHobbies.length > 0 || props.DataHobby.hobby) && (
        <div className={props.StyleContainer}>
          <p className={props.StyleTitle}>Hobbies</p>
          <div className="mt-1 ms-2">
            {props.DataListHobbies.length > 0 &&
              props.DataListHobbies.map((hobby, i) => (
                <div className={props.styleContainerList}>
                  <div className={props.styleList}>
                    <p className={props.StyleTitleSkill}>
                      {props.IconTitleSkill && (
                        <CircleIcon
                          sx={{ color: props.IconColorSkill, fontSize: 10 }}
                        />
                      )}
                      {hobby.hobby}
                    </p>
                  </div>
                </div>
              ))}
            {props.DataHobby.hobby.length > 0 && (
              <div className={props.styleContainerList}>
                <div className={props.styleList}>
                  <p className={props.StyleTitleSkill}>
                    {props.IconTitleSkill && (
                      <CircleIcon
                        sx={{ color: props.IconColorSkill, fontSize: 10 }}
                      />
                    )}
                    {props.DataHobby.hobby}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
