const kycModel = require("../../models/kycModel");



const showKycDetails = async (req, res) => {
  try {
    const kycData = await kycModel.find({}).sort({createdAt:-1});
    res.status(200).json(kycData);
    // console.log(kycData)
  } catch (error) {
    console.error("data not found!!!", error);
    res.status(500).json({ error: "data not retrieved" });
  }
};

module.exports = showKycDetails;
