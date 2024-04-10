const careerFormModel = require("../../models/careerFormModel");


const showCareerData = async (req, res) => {
  try {
    const careerData = await careerFormModel.find({}).sort({createdAt:-1});
    res.status(200).json(careerData);
    // console.log(careerData)
  } catch (error) {
    console.error("data not found!!!", error);
    res.status(500).json({ error: "data not retrieved" });
  }
};

module.exports = showCareerData;