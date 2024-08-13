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
  return (
    <div>
      {formCertificates && (
        <div className="my-1">
          <p className={props.StyleTitle}>Certificates</p>
          <div className="mt-1 mx-2">
            {CertificatesList.length > 0 &&
              CertificatesList.map((certificate, i) => (
                <div key={i} className={props.styleContainerList}>
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
            {CertificateData && (
              <div className={props.styleContainerList}>
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
