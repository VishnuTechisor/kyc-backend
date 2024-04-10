const Router = require("express");
const addUserData = require("../controllers/usersForm/addUserData");
const showUsers = require("../controllers/usersForm/showUsers");
const addCallBack = require("../controllers/callBackForm/addCallbackform");
const showCallData = require("../controllers/callBackForm/showCallback");
const addComplaint = require("../controllers/complaintForm/addComplaint");
const addAboutForm = require("../controllers/aboutForm/aboutForm");
const addCareerForm = require("../controllers/careerForm/addCareerForm");
const pdfUpload = require("../middlewares/uploadEmpResume/multer");
const pdfUploadHandler = require("../middlewares/uploadEmpResume/pdfUpload");
const addRpmScore = require("../controllers/rpmScoreController/addRpmScore");
const showComplaintData = require("../controllers/complaintForm/showComplaint");
const showAboutFormData = require("../controllers/aboutForm/showAbout");
const showCareerData = require("../controllers/careerForm/showCareer");
const showRpmScore = require("../controllers/rpmScoreController/showRpmScore");
const showRpmScoreByid = require("../controllers/rpmScoreController/showRpmScoreByid");
const showCareerByid = require("../controllers/careerForm/showCareerByid");



const router = Router();

// router.post('/addUser',addUserData)
// router.get('/showUsers',showUsers)
router.post('/addCallback',addCallBack)
router.get('/showCallUser',showCallData)
router.post('/addComplaint',addComplaint)
router.get('/showComplaint',showComplaintData)
router.post('/addAboutForm',addAboutForm)
router.get('/showAbout',showAboutFormData)
router.post('/addCareerForm',pdfUpload.single("pdfFile"),pdfUploadHandler,addCareerForm)
router.get('/showCareer',showCareerData)
router.get('/showCareer/:id/download',showCareerByid)
router.post('/addRpmScore',addRpmScore)
router.get('/showRpmScore',showRpmScore)
router.get("/showRpmScore/:id", showRpmScoreByid);
// router.post('/submit-kyc',pdfUpload.single("pdfFile"), imageUpload.any("aadhaarFront", "", "") ,pdfUploadHandler,submitKyc)
// router.post(
//   "/submit-kyc",
//   anyFileUpload.any(
//     "aadharFront",
//     "aadharBack",
//     "panCard",
//     "photo",
//     "signature"
//   ),
//   pdfUploadHandler,
//   submitKyc
// );

module.exports = router;

