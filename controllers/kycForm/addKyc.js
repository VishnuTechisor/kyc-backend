const kycModel = require("../../models/kycModel");

const submitKyc = async (req, res) => {
  try {
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
      aadharFront,
      aadharBack,
      panCard,
      photo,
      signature,
      declaration,
    } = req.body;
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
    await newKyc.save();
    res.status(200).json({ message: "Kyc added successfully", newKyc });
  } catch (error) {
    res.status(500).json({ error: "Kyc Not added" });
  }
};

module.exports = submitKyc;
