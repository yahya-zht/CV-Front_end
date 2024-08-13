import React from "react";
import { useSelector } from "react-redux";

export default function Achievements(props) {
  const formAchievements = useSelector(
    (state) => state.Achievements.formAchievements
  );
  const AchievementsData = useSelector(
    (state) => state.Achievements.AchievementsData
  );
  return (
    <div>
      {formAchievements && (
        <div className={props.styleContainer}>
          <div className={props.StyleContainerTitle}>
            <p className={props.StyleTitle}>Achievements</p>
          </div>
          <p className={props.styleDescription}>
            {AchievementsData.descriptionAchievements}
          </p>
        </div>
      )}
    </div>
  );
}
