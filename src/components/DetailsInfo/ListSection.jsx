import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";
export default function List(props) {
  const Title = useSelector((state) => state.Section.ListTitle[props.index]);
  const Edit = useSelector((state) => state.Section.EditList[props.index]);
  const titleList = useSelector((state) => state.Section.DataList[props.index]);
  const List = useSelector((state) => state.Section.ListDataList[props.index]);
  return (
    <div className={props.StyleContainer}>
      <div className="flex">
        <p
          className={props.StyleTitle}
          style={{
            borderColor: props.border && props.BgColor,
            backgroundColor: (!props.border || props.bgText) && props.BgColor,
            color: props.colorTitle && props.colorTitle,
          }}
        >
          {Title.length > 0 ? Title : `List Section ${props.index + 1}`}
        </p>
      </div>
      <div className="mt-1 ms-2">
        {List.length > 0 &&
          List.map((L, i) => (
            <div key={i} className={props.styleContainerList}>
              <div className={props.styleList}>
                <p className={props.StyleTitleList}>
                  {props.Icon && (
                    <CircleIcon sx={{ color: props.IconColor, fontSize: 10 }} />
                  )}{" "}
                  {L.title}
                </p>
              </div>
            </div>
          ))}

        {titleList.title && (Edit == false || Edit == undefined) && (
          <div className="list-disc">
            <div className={props.styleList}>
              <p className={props.StyleTitleList}>
                {props.Icon && (
                  <CircleIcon sx={{ color: props.IconColor, fontSize: 10 }} />
                )}{" "}
                {titleList.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
