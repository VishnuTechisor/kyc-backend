const Router = require("express");
const submitKyc = require("../controllers/kycForm/addKyc");
const showKycDetails = require("../controllers/kycForm/showKyc");
const showkycByid = require("../controllers/kycForm/showKycByid");
const loginForm = require("../controllers/login/loginController");


const router = Router();

router.post("/submit-kyc",submitKyc)
router.get("/showKyc", showKycDetails);
router.get("/showKyc/:id", showkycByid);
router.post("/login",loginForm)

module.exports = router;
