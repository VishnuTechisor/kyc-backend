User
const { compare } = require("bcrypt"); // Import the compare function from bcrypt
const { sign } = require("jsonwebtoken");
// Assuming you have a config file with your JWT_SECRET_KEY
const loginModel = require("../../models/loginModel");

const loginForm = async (req, res) => {
  const { userName, password } = req.body;

//   console.log("userName, password", userName, password)
  const existingUser = await loginModel.findOne({ userName });
  console.log("existingUser",existingUser)

    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: "userName does not exist",
        error: {
          errorAt: "userName",
          message: "userName does not exist.",
        },
      });
    }

    // const { password: hashedPassword } = existingUser;

    try {
      // const matched = await compare(password, hashedPassword);

      if (!existingUser.password == password) {
        return res.status(400).json({
          success: false,
          message: "Password did not match",
          error: {
            errorAt: "password",
            message: "Password did not match",
          },
        });
      }
      const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
      const token = sign(JSON.stringify(existingUser), JWT_SECRET_KEY);

      res.status(200).json({
        success: true,
        message: "Login successful",
        data: { token, user: existingUser },
      });
    } catch (error) {
      console.error("Error comparing passwords:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
};

module.exports = loginForm;