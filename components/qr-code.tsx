"use client";

import QRCode from "react-qr-code";

export default function CoverLetterQR() {
  return (
    <QRCode
      value="http://localhost:3001/cover-letter"
      size={180}
    />
  );
}