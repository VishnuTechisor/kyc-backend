const complaintFormModel = require("../../models/complaintFormModel");


const showComplaintData = async (req, res) => {
  try {
    const complaintData = await complaintFormModel.find({}).sort({createdAt:-1});
    res.status(200).json(complaintData);
    // console.log(complaintData)
  } catch (error) {
    console.error("complaint not found!!!", error);
    res.status(500).json({ error: "complaint not retrieved" });
  }
};

module.exports = showComplaintData;