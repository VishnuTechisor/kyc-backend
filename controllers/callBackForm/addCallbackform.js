const callBackModel = require("../../models/callBackFormModel");


const addCallBack = async (req, res) => {
  try {
    // console.log(req.body)
    const {
      name,
      phoneNumber,
      email,
      city,
      language,
      dematAccount,
      tandc,
      tag
    } = req.body;

    const callBackdata = await callBackModel.create({
      name,
      phoneNumber,
      email,
      city,
      language,
      dematAccount,
      tandc,
      tag
    });

    await callBackdata.save();
    // console.log(callBackdata)
    res.status(200).json({ message: "user added successfully", callBackdata });
  } catch (error) {
    console.error("user not added!!!", error);
    res.status(500).json({ error: "user Not added" });
  }
};


module.exports = addCallBack;