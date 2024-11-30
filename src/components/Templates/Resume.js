import React, { forwardRef, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import Resume1 from "./Resume1";
import Resume2 from "./Resume2";
import Resume3 from "./Resume3";
import Resume4 from "./Resume4";
import Resume5 from "./Resume5";
import Resume6 from "./Resume6";
import Resume7 from "./Resume7";
import Resume8 from "./Resume8";
import Resume9 from "./Resume9";
import Resume10 from "./Resume10";
import Resume11 from "./Resume11";
import Resume12 from "./Resume12";
import Resume13 from "./Resume13";

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
      case 6:
        return <Resume6 />;
      case 7:
        return <Resume7 />;
      case 8:
        return <Resume8 />;
      case 9:
        return <Resume9 />;
      case 10:
        return <Resume10 />;
      case 11:
        return <Resume11 />;
      case 12:
        return <Resume12 />;
      case 13:
        return <Resume13 />;
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
