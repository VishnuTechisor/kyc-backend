const aboutFormModel = require("../../models/aboutFormModel");


const showAboutFormData = async (req, res) => {
  try {
    const aboutData = await aboutFormModel.find({}).sort({createdAt:-1});
    res.status(200).json(aboutData);
    // console.log(aboutData)
  } catch (error) {
    console.error("data not found!!!", error);
    res.status(500).json({ error: "data not retrieved" });
  }
};

module.exports = showAboutFormData;