/* const careerFormModel = require("../../models/careerFormModel");

const addCareerForm = async (req, res) => {
    try {
        const uploadResume = res.locals.pdfUrl.pdfName;

        const jsonData = req.body.jsonData ? JSON.parse(req.body.jsonData) : {};
        const { name, phoneNumber, email, profileType } = jsonData;

        const careerFormData = await careerFormModel.create({
            name,
            phoneNumber,
            email,
            profileType,
            uploadResume,
        });

        console.log(careerFormData);
        res.status(200).json({ message: "user added successfully", careerFormData });
    } catch (error) {
        console.error("user not added!!!", error);
        res.status(500).json({ error: "user Not added" });
    }
};

module.exports = addCareerForm;
 */