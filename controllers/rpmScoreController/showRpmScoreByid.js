const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");
const rpmModel = require("../../models/rpmScoreModel");


const showRpmScoreByid = async (req, res) => {
    try {
        const id = req.params.id;

        // Retrieve the RPM score document from the database
        const newRpmScoreId = await rpmModel.findById(id);

        // Create a new PDF document
        const doc = new PDFDocument();
        const imagePath = path.join(__dirname, "../../assets/images/logo-new.png");
        // Center the image at the top of the page
        const centerX = (doc.page.width - 150) / 2; // Assuming the image width is 150
        doc.image(imagePath, centerX, 20, { fit: [150, 150], align: 'center' });

        // Move down after the image
        doc.moveDown();

        // Add heading to the PDF with customized styling and reduced margin top
        doc.font('Helvetica-Bold')
            .fontSize(24)
            .fillColor('#30344d')
            .text("RPM Score Details", { align: "center" });

        // Reset styling to default for the rest of the document
        doc.font('Helvetica')
            .fontSize(16)
            .fillColor('black');

        // Add specific details to the PDF in text data format
        if (newRpmScoreId) {
            // Check for the existence of name, email, and rpmscore properties
            doc.fontSize(16).text(`Name: ${newRpmScoreId.name || 'N/A'}`);
            doc.fontSize(16).text(`Email: ${newRpmScoreId.email || 'N/A'}`);
            doc.fontSize(16).text(`RPM Score: ${newRpmScoreId.rpmScore || 'N/A'}`);

            // Add a new line for better separation
            doc.moveDown();

            // Check if responses array is defined before iterating
            if (newRpmScoreId.responses && Array.isArray(newRpmScoreId.responses)) {
                newRpmScoreId.responses.forEach((response, index) => {
                    const question = response.question.text || 'N/A';
                    const answer = response.selectedOption.label || 'N/A';
                    const score = response.selectedOption.score || 'N/A';

                    // Additional debugging
                    console.log(`Question ${index + 1} - Response:`, response);


                    // doc.fontSize(14).text(`${index + 1} Question : ${question}`);
                    doc.fontSize(14).text(`Question : ${question}`);
                    doc.fontSize(14).text(`Answer : ${answer}`);
                    doc.fontSize(14).text(`Score: ${score}`);

                    // Add a new line for better separation between questions
                    doc.moveDown();
                });
            } else {
                doc.fontSize(14).text("No responses available");
            }
            doc.fontSize(16).text(`Checked : ${newRpmScoreId.checkboxData || 'N/A'}`);
        }

        // Specify the directory path
        const directoryPath = path.join(__dirname, "../../assets/rpmPdf");

        // Create the directory if it doesn't exist
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
        }

        // Create an absolute path for the PDF file
        const filePath = path.join(directoryPath, `rpmScore_${id}.pdf`);

        // Pipe the PDF content to a writable stream
        const stream = doc.pipe(fs.createWriteStream(filePath));

        // Finalize the PDF
        doc.end();

        // Send the PDF as a response to the client
        stream.on("finish", () => {
            res.setHeader("Content-Type", "application/pdf");
            res.setHeader("Content-Disposition", `attachment; filename=rpmScore_${id}.pdf`);

            // Send the file using an absolute path
            res.status(200).sendFile(filePath);
        });

    } catch (error) {
        console.error("Error generating RPM Score PDF:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = showRpmScoreByid;
