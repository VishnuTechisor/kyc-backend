const Router = require("express");
const express = require("express");
const multer = require("multer");
const path = require("path");
const submitKyc = require("../controllers/kycForm/addKyc");

const router = Router();

router.post("/submit-kyc",submitKyc)

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "uploads"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// router.use("/uploads", express.static(path.join(__dirname, "uploads")));

// router.post(
//   "/submit-kyc",
//   upload.fields([
//     { name: "aadharFront", maxCount: 1 },
//     { name: "aadharBack", maxCount: 1 },
//     { name: "panCard", maxCount: 1 },
//     { name: "photo", maxCount: 1 },
//     { name: "signature", maxCount: 1 },
//   ]),
//   async (req, res) => {
//     const formData = req.body;
//     const files = req.files;

//     const result = await submitKYC(formData, files);

//     if (result.success) {
//       res.status(200).json({ message: result.message });
//     } else {
//       res.status(500).json({ message: result.message });
//     }
//   }
// );

module.exports = router;
