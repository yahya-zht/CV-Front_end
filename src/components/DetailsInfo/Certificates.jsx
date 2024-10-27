"use client";
import React from "react";
import { useSelector } from "react-redux";
import CircleIcon from "@mui/icons-material/Circle";
export default function Certificates(props) {
  const formCertificates = useSelector(
    (state) => state.Certificates.formCertificates
  );
  const CertificateData = useSelector(
    (state) => state.Certificates.CertificateData
  );
  const CertificatesList = useSelector(
    (state) => state.Certificates.CertificatesList
  );
  const TitleCertificates = useSelector((state) => state.Certificates.Title);
  const EditCertificates = useSelector((state) => state.Certificates.Edit);

  return (
    <div>
      {formCertificates && (
        <div className="my-1">
          <div className={props.StyleTitleContainer}>
            <p
              className={props.StyleTitle}
              style={{
                borderColor: props.border && props.BgColor,
                backgroundColor:
                  (!props.border || props.bgText) && props.BgColor,
                color: props.colorTitle && props.colorTitle,
              }}
            >
              {TitleCertificates.length > 0
                ? TitleCertificates
                : `Certificates`}
            </p>
          </div>
          <div className="mt-1">
            {CertificatesList.length > 0 &&
              CertificatesList.map((certificate, i) => (
                <div
                  key={i}
                  className={props.styleContainerList}
                  style={props.border ? { borderColor: props.BgColor } : null}
                >
                  <div className={props.styleList}>
                    <p className={props.StyleTitleList}>
                      <p className="text-md font-bold">
                        {props.Icon && (
                          <CircleIcon
                            sx={{ color: props.IconColor, fontSize: 10 }}
                          />
                        )}{" "}
                        {certificate.Certificate}
                      </p>
                    </p>
                    {(certificate.monthCertificate ||
                      certificate.yearCertificate) && (
                      <p className={props.styleDate}>
                        {certificate.monthCertificate} -{" "}
                        {certificate.yearCertificate}
                      </p>
                    )}
                  </div>
                  <p className={props.StyleDescription}>
                    {certificate.descriptionCertificate}
                  </p>
                </div>
              ))}
            {CertificateData && EditCertificates == false && (
              <div
                className={props.styleContainerList}
                style={props.border ? { borderColor: props.BgColor } : null}
              >
                <div className={props.styleList}>
                  <p className={props.StyleTitleList}>
                    {props.Icon && (
                      <CircleIcon
                        sx={{ color: props.IconColor, fontSize: 10 }}
                      />
                    )}{" "}
                    {CertificateData.Certificate}
                  </p>
                  {(CertificateData.monthCertificate ||
                    CertificateData.yearCertificate) && (
                    <p className={props.styleDate}>
                      {CertificateData.monthCertificate} -{" "}
                      {CertificateData.yearCertificate}
                    </p>
                  )}
                </div>
                <p className={props.StyleDescription}>
                  {CertificateData.descriptionCertificate}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
