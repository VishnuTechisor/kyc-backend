const complaintFormModel = require("../../models/complaintFormModel");


const addComplaint = async (req, res) => {
  try {
    // console.log(req.body)
    const {
      name,
      email,
      phoneNumber,
      complaintRegarding,
      executiveName
    } = req.body;

    const complaintData = await complaintFormModel.create({
        name,
        email,
        phoneNumber,
        complaintRegarding,
        executiveName
    });

    await complaintData.save();
    // console.log(complaintData)
    res.status(200).json({ message: "complaint added successfully", complaintData });
  } catch (error) {
    console.error("complaint not added!!!", error);
    res.status(500).json({ error: "complaint Not added" });
  }
};


module.exports = addComplaint;