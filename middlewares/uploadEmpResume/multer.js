const multer=require('multer')
const path=require("path")
/* This code is setting up a middleware for handling file uploads using the multer package in
Node.js. */
let storage = multer.diskStorage({
    destination: path.join(__dirname, "../../assets/pdfFiles"),
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});


const anyFileUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      // Allow any file type
      cb(null, true);
    },
  });
  
  module.exports = anyFileUpload; 