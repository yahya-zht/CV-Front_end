import React, { forwardRef } from "react";
import ResumePDF2 from "./ResumePDF2";
import Resume1PDF from "./Resume1PDF";
import { useSelector } from "react-redux";

const ResumePDF = forwardRef((props, ref) => {
  const TemplateSelected = useSelector(
    (state) => state.Templates.TemplateSelected
  );
  const Template = () => {
    switch (TemplateSelected) {
      case 1:
        return <ResumePDF2 />;
      case 2:
        return <Resume1PDF />;
      default:
        return <Resume1PDF />;
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
