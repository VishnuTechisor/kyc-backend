const { sign } = require("jsonwebtoken");
const loginModel = require("../../models/loginModel");

const loginForm = async (req, res) => {
    const { userName, password } = req.body;

    try {
        const existingUser = await loginModel.findOne({ userName });

        if (!existingUser) {
            return res.status(400).json({
                success: false,
                message: "User does not exist",
                error: {
                    errorAt: "userName",
                    message: "User does not exist.",
                },
            });
        }

        const passwordMatched = existingUser.password === password;

        if (!passwordMatched) {
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
        console.log("Error during login:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = loginForm;
