const pdfUploadHandler = async (req, res, next) => {
  try {
    const files = req.files ?? [];
    const photoPath = files.find((it) => it?.fieldname === "photo")?.filename;
    const aadhaarFrontPath = files.find((it) => it?.fieldname === "aadharFront")?.filename;
    const aadharBackPath = files.find((it) => it?.fieldname === "aadharBack")?.filename;
    const panCardPath = files.find((it) => it?.fieldname === "panCard")?.filename;
    const signaturePath = files.find((it) => it?.fieldname === "signature")?.filename

    // const pdfPath = req.file?.filename;

    // const result = await cloudinary.uploader.upload(imagePath, options);
    res.locals.aadharFrontUrl = {
      aadharFrontName: aadhaarFrontPath
    }

    res.locals.aadharBackUrl = {
      aadharBackName: aadharBackPath
    }
    res.locals.panCardUrl = {
      panCardName: panCardPath
    }

    res.locals.photoUrl = {
      photoName: photoPath
    };
    res.locals.signatureUrl = {
      signatureName: signaturePath
    }

    return next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = pdfUploadHandler;
