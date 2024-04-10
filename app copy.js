const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/routes");
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use("/photos", express.static(path.join(__dirname, "./assets/pdfFiles")));

router.get("/assets", (req, res) => {
  const directoryPath = path.join(__dirname, "./assets/pdfFiles");

  // Read all files in the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Filter only files with allowed extensions, e.g., .jpg, .png
    const allowedExtensions = [".jpg", ".png", ".jpeg"];
    const imageFiles = files.filter((file) =>
      allowedExtensions.includes(path.extname(file).toLowerCase())
    );
    // console.log(imageFiles);

    // Send the list of image files
    res.status(200).json({ images: imageFiles });
  });
});

// router.get('/assets', (req, res) => {
//     const imagesPath = path.join(__dirname, './assets/pdfFiles');

//     // Read the contents of the directory
//     fs.readdir(imagesPath, (err, files) => {
//       if (err) {
//         console.error('Error reading directory:', err);
//         return res.status(500).json({ error: 'Internal server error' });
//       }

//       // Filter out non-image files (you can adjust the filter condition as needed)
//       const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

//       // Create an array of image URLs
//       const imageUrls = imageFiles.map(file => `/assets/pdfFiles/${file}`);

//       // Send the image URLs to the frontend
//       res.json({ images: imageUrls });
//     });
//   });

// console.log("path ", path.join(__dirname, "/assets/pdfFiles"));
module.exports = app;
