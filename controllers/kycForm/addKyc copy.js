const kycModel = require("../../models/kycModel");

const submitKyc = async (req, res) => {
  try {
    const aadharFront = res.locals.aadharFrontUrl.aadharFrontName;
    const aadharBack = res.locals.aadharBackUrl.aadharBackName;
    const panCard = res.locals.panCardUrl.panCardName;
    const photo = res.locals.photoUrl.photoName;
    const signature = res.locals.signatureUrl.signatureName;
    const jsonData = req.body.jsonData ? JSON.parse(req.body.jsonData) : {};
    const {
      name,
      email,
      phoneNumber,
      fatherOrSpouseName,
      dateOfBirth,
      gender,
      maritalStatus,
      occupationType,
      proofOfIdentity,
      aadharNumber,
      panNumber,
      idProofNumber,
      grossAnnualSalary,
      occupation,
      proofOfAddress,
      city,
      district,
      pincode,
      state,
      country,
      declaration,
    } = jsonData;

    const newKyc = await kycModel.create({
      name,
      email,
      phoneNumber,
      fatherOrSpouseName,
      dateOfBirth,
      gender,
      maritalStatus,
      occupationType,
      proofOfIdentity,
      aadharNumber,
      panNumber,
      idProofNumber,
      grossAnnualSalary,
      occupation,
      proofOfAddress,
      city,
      district,
      pincode,
      state,
      country,
      aadharFront,
      aadharBack,
      panCard,
      photo,
      signature,
      declaration,
    });

    console.log(newKyc);
    res.status(200).json({ message: "Kyc added successfully", newKyc });
  } catch (error) {
    console.error("Kyc not added!!!", error);
    res.status(500).json({ error: "Kyc Not added" });
  }
};

module.exports = submitKyc;
