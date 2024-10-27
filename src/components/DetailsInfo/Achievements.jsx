import React from "react";
import { useSelector } from "react-redux";

export default function Achievements(props) {
  const formAchievements = useSelector(
    (state) => state.Achievements.formAchievements
  );
  const AchievementsData = useSelector(
    (state) => state.Achievements.AchievementsData
  );
  const TitleAchievement = useSelector((state) => state.Achievements.Title);
  return (
    <div>
      {formAchievements && (
        <div className={props.styleContainer}>
          <div className={props.StyleContainerTitle}>
            <p
              className={props.StyleTitle}
              style={{
                borderColor: props.border && props.BgColor,
                backgroundColor:
                  (!props.border || props.bgText) && props.BgColor,
                color: props.colorTitle && props.colorTitle,
              }}
            >
              {TitleAchievement.length > 0 ? TitleAchievement : `Achievements`}
            </p>
          </div>
          <p className={props.styleDescription}>
            {AchievementsData.descriptionAchievements}
          </p>
        </div>
      )}
    </div>
  );
}
