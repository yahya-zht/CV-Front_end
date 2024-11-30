import React from "react";
import QRCode from "qrcode.react";
const QRCodeComponent = ({ value }) => {
  return (
    <div className="border rounded border-black p-1">
      <QRCode value={value} level="Q" style={{ width: 60, height: 60 }} />
    </div>
  );
};

export default QRCodeComponent;
