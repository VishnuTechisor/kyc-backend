const userModel = require("../../models/usersFormModel");


const showUsers = async (req, res) => {
  try {
    const usersData = await userModel.find({}).sort({createdAt:-1});
    res.status(200).json(usersData);
    // console.log(usersData)
  } catch (error) {
    console.error("users not found!!!", error);
    res.status(500).json({ error: "users not retrieved" });
  }
};

module.exports = showUsers;
