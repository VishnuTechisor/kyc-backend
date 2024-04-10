const kycModel = require("../../models/kycModel");



const showKycDetails = async (req, res) => {
  const id= req.params.id
  try {
    const kycData = await kycModel.findById(id)
    res.status(200).json(kycData);
    // console.log(kycData)
  } catch (error) {
    console.error("data not found!!!", error);
    res.status(500).json({ error: "data not retrieved" });
  }
};

module.exports = showKycDetails;