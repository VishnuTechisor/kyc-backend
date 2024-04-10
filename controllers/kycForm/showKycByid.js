const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");
const kycModel = require("../../models/kycModel");
const { Buffer } = require("buffer");

const showKycByid = async (req, res) => {
  try {
    const id = req.params.id;

    const kycData = await kycModel.findById(id);

    const doc = new PDFDocument();

    // Center the image at the top of the page
    const centerX = (doc.page.width - 150) / 2;
    const imagePath = path.join(
      __dirname,
      "../../assets/images/dark_logo NV.png"
    );
    doc.image(imagePath, centerX, 20, { fit: [180, 180], align: "center" });

    // Add heading to the PDF with customized styling and reduced margin top
    doc
      .font("Helvetica-Bold")
      .fontSize(22)
      .fillColor("#28AB9E")
      .text("KYC Details", { align: "center" });

    // Reset styling to default for the rest of the document
    doc.font("Helvetica").fontSize(12).fillColor("black");

    // Add specific details to the PDF in text data format
    if (kycData) {
      const keys = Object.keys(kycData.toObject());

      keys.forEach((key) => {
        const value = kycData[key] || "N/A";
        if (
          key === "aadharFront" ||
          key === "aadharBack" ||
          key === "panCard" ||
          key === "photo" ||
          key === "signature"
        ) {
          // Decode base64 image
          const base64Image = value.split(";base64,").pop();
          const imageBuffer = Buffer.from(base64Image, "base64");
          // Embed image into PDF
          doc.image(imageBuffer, { width: 500, height: 250 });
          // doc.moveDown(6);
          // doc.addPage();
          doc.addPage();
        } else {
          switch (key) {
            case "name":
              doc.fontSize(10).text(`Name :- ${value}`);
              doc.moveDown();
              break;
            case "email":
              doc.fontSize(10).text(`Email :- ${value}`);
              doc.moveDown();
              break;
            case "phoneNumber":
              doc.fontSize(10).text(`Phone Number :- ${value}`);
              doc.moveDown();
              break;
            case "fatherOrSpouseName":
              doc.fontSize(10).text(`Father / Spouse Name :- ${value}`);
              doc.moveDown();
              break;
            case "dateOfBirth":
              doc.fontSize(10).text(`Date of Birth :- ${value}`);
              doc.moveDown();
              break;
            case "gender":
              doc.fontSize(10).text(`Gender :- ${value}`);
              doc.moveDown();
              break;
            case "maritalStatus":
              doc.fontSize(10).text(`Marital Status :- ${value}`);
              doc.moveDown();
              break;
            case "occupationType":
              doc.fontSize(10).text(`Occupation Type :- ${value}`);
              doc.moveDown();
              break;
            case "proofOfIdentity":
              doc.fontSize(10).text(`Proof of Identity :- ${value}`);
              doc.moveDown();
              break;
            case "aadharNumber":
              doc.fontSize(10).text(`Aadhar Number :- ${value}`);
              doc.moveDown();
              break;
            case "panNumber":
              doc.fontSize(10).text(`Pan Number :- ${value}`);
              doc.moveDown();
              break;
            case "idProofNumber":
              doc.fontSize(10).text(`ID Proof Number :- ${value}`);
              doc.moveDown();
              break;
            case "grossAnnualSalary":
              doc.fontSize(10).text(`Groos Annual Salary :- ${value}`);
              doc.moveDown();
              break;
            case "occupation":
              doc.fontSize(10).text(`Occupation :- ${value}`);
              doc.moveDown();
              break;
            case "proofOfAddress":
              doc.fontSize(10).text(`Proof of Address :- ${value}`);
              doc.moveDown();
              break;
            case "city":
              doc.fontSize(10).text(`City :- ${value}`);
              doc.moveDown();
              break;
            case "district":
              doc.fontSize(10).text(`District :- ${value}`);
              doc.moveDown();
              break;
            case "pincode":
              doc.fontSize(10).text(`Pincode :- ${value}`);
              doc.moveDown();
              break;
            case "state":
              doc.fontSize(10).text(`State :- ${value}`);
              doc.moveDown();
              break;
            case "country":
              doc.fontSize(10).text(`Country :- ${value}`);
              doc.moveDown();
              break;
            default:
              break;
          }
        }
        doc.moveDown();
      });
    } else {
      doc.fontSize(14).text("No KYC data available");
      doc.moveDown(); // Add space after the line
    }

    // Specify the directory path
    const directoryPath = path.join(__dirname, "../../assets/kycMainpdf");

    // Create the directory if it doesn't exist
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }
    // Create an absolute path for the PDF file
    const filePath = path.join(directoryPath, `kycData_${this.name}.pdf`);

    // Pipe the PDF content to a writable stream
    const stream = doc.pipe(fs.createWriteStream(filePath));

    // Finalize the PDF
    doc.end();
    // Send the PDF as a response to the client
    stream.on("finish", () => {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=kycData_${this.name}.pdf`
      );

      // Send the file using an absolute path
      res.status(200).sendFile(filePath);
    });
  } catch (error) {
    console.log("Error generating KYC PDF:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = showKycByid;
