const rpmModel = require("../../models/rpmScoreModel");


const showRpmScore = async (req, res) => {
  try {
    const rpmData = await rpmModel.find({}).sort({createdAt:-1});
    res.status(200).json(rpmData);
    console.log(rpmData)
  } catch (error) {
    console.error("data not found!!!", error);
    res.status(500).json({ error: "data not retrieved" });
  }
};

module.exports = showRpmScore;