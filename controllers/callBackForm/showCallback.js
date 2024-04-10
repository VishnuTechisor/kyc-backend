const callBackModel = require("../../models/callBackFormModel");


const showCallData = async (req, res) => {
  try {
    const callusersData = await callBackModel.find({}).sort({createdAt:-1});
    res.status(200).json(callusersData);
    // console.log(callusersData)
  } catch (error) {
    console.error("users not found!!!", error);
    res.status(500).json({ error: "users not retrieved" });
  }
};

module.exports = showCallData;