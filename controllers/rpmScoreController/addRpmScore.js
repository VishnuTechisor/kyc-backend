const rpmModel = require("../../models/rpmScoreModel");


const addRpmScore = async (req, res) => {
  try {
    console.log(req.body)
    const {
      name,
      email,
      rpmScore,
      responses,
      checkboxData
    } = req.body;

    const rpmScoreData = await rpmModel.create({
        name,
        email,
        rpmScore,
        responses,
        checkboxData
    });

    await rpmScoreData.save();
    console.log(rpmScoreData)
    res.status(200).json({ message: "rpm score added successfully", rpmScoreData });
  } catch (error) {
    console.error("rpm score not added!!!", error);
    res.status(500).json({ error: "rpm score Not added" });
  }
};


module.exports = addRpmScore;