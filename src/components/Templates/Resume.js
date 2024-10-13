import React, { forwardRef, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Resume1 from "./Resume1";
import Resume2 from "./Resume2";
import Resume3 from "./Resume3";
import Resume4 from "./Resume4";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Resume5 from "./Resume5";

const Resume = forwardRef((props, ref) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "resume",
  });

  useEffect(() => {
    if (props.clk) {
      handlePrint();
      props.setClk(false);
    }
  }, [props.clk, handlePrint, props.setClk]);

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
        return <Resume3 />;
      case 4:
        return <Resume4 />;
      case 5:
        return <Resume5 />;
      default:
        return <Resume2 />;
    }
  };
  return (
    <div
      id="resume"
      ref={componentRef}
      className="bg-white shadow-lg fixed"
      style={{ width: "210mm", height: "297mm" }}
    >
      {Template()}
    </div>
  );
});

export default Resume;
