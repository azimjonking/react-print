import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const generatePDF = () => {
  const input = document.getElementById("pdf-content");
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "JPEG", 0, 0);
    pdf.save("download.pdf");
  });
};

const PdfFormatContent = () => {
  return (
    <div>
      <div id="pdf-content">
        <h1>PDF uchun kontent</h1>
        <p>Bu yerda matn bo'lishi mumkin.</p>
      </div>
      <button onClick={generatePDF}>PDF yaratish</button>
    </div>
  );
};

export default PdfFormatContent;
