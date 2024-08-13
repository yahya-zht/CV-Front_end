import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { useSelector } from "react-redux";
export default function Hobbies(props) {
    const DataHobby = useSelector((state) => state.Hobbies.DataHobby);
    const DataListHobbies = useSelector(
      (state) => state.Hobbies.DataListHobbies
    );

  return (
    <div>
      {(DataListHobbies.length > 0 || DataHobby.hobby) && (
        <div className={props.StyleContainer}>
          <p className={props.StyleTitle}>Hobbies</p>
          <div className="mt-1 ms-2">
            {DataListHobbies.length > 0 &&
              DataListHobbies.map((hobby, i) => (
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
            {DataHobby.hobby.length > 0 && (
              <div className={props.styleContainerList}>
                <div className={props.styleList}>
                  <p className={props.StyleTitleSkill}>
                    {props.IconTitleSkill && (
                      <CircleIcon
                        sx={{ color: props.IconColorSkill, fontSize: 10 }}
                      />
                    )}
                    {DataHobby.hobby}
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
