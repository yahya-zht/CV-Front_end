import React, { forwardRef } from "react";
import ResumePDF2 from "./ResumePDF2";
import Resume2 from "./Resume2";
import { useSelector } from "react-redux";
import Resume1 from "./Resume1";

const ResumePDF = forwardRef((props, ref) => {
  const TemplateSelected = useSelector(
    (state) => state.Templates.TemplateSelected
  );
  const Template = () => {
    switch (TemplateSelected) {
      case 1:
        return <Resume1 />;
      case 2:
        return <Resume2 />;
      case 3:
        return <ResumePDF2 />;
      default:
        return <Resume2 />;
    }
  };
  return (
    <div
      id="resume"
      ref={ref}
      className="bg-white shadow-lg fixed"
      style={{ width: "210mm", height: "297mm" }}
    >
      {Template()}
    </div>
  );
});

export default ResumePDF;
