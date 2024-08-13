"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function Footer(props) {
  const formFooter = useSelector((state) => state.Footer.formFooter);
  const FooterData = useSelector((state) => state.Footer.FooterData);

  return (
    <div>
      {formFooter && (
        <div className={props.styleContainerFooter}>
          <p className={props.styleDescription}>
            {FooterData.descriptionFooter}
          </p>
        </div>
      )}
    </div>
  );
}
