import React from "react";
import { useSelector } from "react-redux";

export default function Description(props) {
  const Title = useSelector(
    (state) => state.Section.DescriptionTitle[props.index]
  );
  const DescriptionData = useSelector(
    (state) => state.Section.DataDescription[props.index]
  );
  return (
    <div className={props.styleContainer}>
      <div className={props.StyleContainerTitle}>
        <p
          className={props.StyleTitle}
          style={{
            borderColor: props.border && props.BgColor,
            backgroundColor: (!props.border || props.bgText) && props.BgColor,
          }}
        >
          {Title.length > 0 ? Title : `Description Section ${props.index + 1}`}
        </p>
      </div>
      <p className={props.styleDescription}>{DescriptionData.description}</p>
    </div>
  );
}
