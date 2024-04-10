const PDFDocument = require("pdfkit");
const fs = require("fs");

 async function generatePDF(data) {
  const doc = new PDFDocument();

  // Set up the PDF document
  const pdfStream = fs.createWriteStream("output.pdf");
  doc.pipe(pdfStream);

  // Add content to the PDF based on the JSON data
  doc.fontSize(14).text("KYC Details", { align: 'center' }).moveDown();

  for (const [key, value] of Object.entries(data)) {
    doc.fontSize(12).text(`${key}: ${value}`).moveDown();
  }

  // Finalize the PDF
  doc.end();

  // Return a promise that resolves when the PDF is generated
  return new Promise((resolve, reject) => {
    pdfStream.on("finish", () => {
      console.log("PDF created successfully!");
      resolve();
    });

    pdfStream.on("error", (error) => {
      console.error("Error creating PDF:", error);
      reject(error);
    });
  });
}

module.exports=generatePDF