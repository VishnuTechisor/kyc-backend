const careerFormModel = require("../../models/careerFormModel");
const path = require("path");
const fs = require('fs');

const showCareerByid = async (req, res) => {
    try {
        const id = req.params.id;
        const career = await careerFormModel.findById(id);

        if (!career) {
            return res.status(404).json({ error: "Career not found" });
        }

        const pdfPath = path.join(__dirname, `../../assets/pdfFiles/${career.uploadResume}`);
    
        // Check if the file exists
        if (!fs.existsSync(pdfPath)) {
            return res.status(404).json({ error: "PDF file not found" });
        }

        res.setHeader('Content-Type', 'application/pdf'); // Set the correct content type
        res.sendFile(pdfPath, (err) => {
            if (err) {
                console.error("Error sending PDF:", err);
                res.status(500).json({ error: "Internal server error" });
            }
        });
    } catch (error) {
        console.error("Error sending PDF:", error);
        res.status(500).json({ error: "Internal server error" });
    }

};


module.exports = showCareerByid;

