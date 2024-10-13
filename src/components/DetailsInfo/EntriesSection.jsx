import React from "react";
import { useSelector } from "react-redux";
import CircleIcon from "@mui/icons-material/Circle";

export default function EntriesSection(props) {
  const Title = useSelector((state) => state.Section.EntriesTitle[props.index]);
  const Edit = useSelector((state) => state.Section.EditEntries[props.index]);
  const Entries = useSelector(
    (state) => state.Section.DataEntries[props.index]
  );
  const ListEntries = useSelector(
    (state) => state.Section.ListDataEntries[props.index]
  );
  return (
    <div>
      <div className="my-1">
        <div className={props.StyleTitleContainer}>
          <p
            className={props.StyleTitle}
            style={{
              borderColor: props.border && props.BgColor,
              backgroundColor: (!props.border || props.bgText) && props.BgColor,
            }}
          >
            {props.Icon && <CircleIcon sx={{ color: props.IconColor }} />}
            <span className="">
              {Title.length > 0 ? Title : `Entries Section ${props.index + 1}`}{" "}
            </span>
          </p>
        </div>
        {(ListEntries.length > 0 ||
          Entries.title ||
          Entries.startMonth ||
          Entries.startYear ||
          Entries.summary ||
          Entries.city ||
          Entries.endMonth ||
          Entries.endYear ||
          Entries.description) && (
          <div className="mt-1">
            {ListEntries.length > 0 &&
              ListEntries.map((entrie, i) => (
                <div
                  key={i}
                  className={props.styleContainerList}
                  style={props.border ? { borderColor: props.BgColor } : null}
                >
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>{entrie.title}</p>
                      {(entrie.startYear || entrie.endYear) && (
                        <p className={props.styleDate}>
                          {entrie.startMonth} {entrie.startYear} -{" "}
                          {entrie.endMonth} {entrie.endYear}
                        </p>
                      )}
                    </div>
                    {(entrie.summary || entrie.city) && (
                      <p className={props.styleCity}>
                        {entrie.summary}
                        <span>, {entrie.city}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>
                      {entrie.description}
                    </p>
                  </p>
                </div>
              ))}
            {(Entries.title ||
              Entries.startMonth ||
              Entries.startYear ||
              Entries.endMonth ||
              Entries.endYear ||
              Entries.description ||
              Entries.summary ||
              Entries.city) &&
              (Edit == false || Edit == undefined) && (
                <div
                  className={props.styleContainerList}
                  style={props.border ? { borderColor: props.BgColor } : null}
                >
                  <p className="">
                    <div className={props.styleList}>
                      <p className={props.StyleTitleList}>{Entries.title}</p>
                      <p className={props.styleDate}>
                        {Entries.startMonth} {Entries.startYear} -{" "}
                        {Entries.endMonth} {Entries.endYear}
                      </p>
                    </div>
                    {(Entries.summary || Entries.city) && (
                      <p className={props.styleCity}>
                        {Entries.summary}
                        <span>, {Entries.city}</span>
                      </p>
                    )}
                    <p className={props.StyleDescription}>
                      {Entries.description}
                    </p>
                  </p>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
}
