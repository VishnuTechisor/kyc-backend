const aboutFormModel = require("../../models/aboutFormModel");

const addAboutForm = async (req, res) => {
  try {
    // console.log(req.body)
    const {
      name,
      phoneNumber,
      email,
      dematAccount,
      serviceRequest,
      comment
    } = req.body;

    const aboutFormData = await aboutFormModel.create({
        name,
        phoneNumber,
        email,
        dematAccount,
        serviceRequest,
        comment
    });

    await aboutFormData.save();
    // console.log(aboutFormData)
    res.status(200).json({ message: "data added successfully", aboutFormData });
  } catch (error) {
    console.error("data not added!!!", error);
    res.status(500).json({ error: "data Not added" });
  }
};


module.exports = addAboutForm;