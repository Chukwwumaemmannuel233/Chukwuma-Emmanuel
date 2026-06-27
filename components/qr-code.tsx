"use client";

import QRCode from "react-qr-code";

export default function CoverLetterQR() {
  return (
    <QRCode
      value="https://chukwuma-emmanuel-seven.vercel.app//cover-letter"
      size={180}
    />
  );
}