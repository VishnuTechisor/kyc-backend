const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let kycSchema = new Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    fatherOrSpouseName: String,
    dateOfBirth: String,
    gender: String,
    maritalStatus: String,
    occupationType: String,
    proofOfIdentity: String,
    aadharNumber: String,
    panNumber: String,
    idProofNumber: String,
    grossAnnualSalary: String,
    occupation: String,
    proofOfAddress: String,
    city:String,
    district:String,
    pincode:String,
    state:String,
    country:String,
    aadharFront: String,
    aadharBack: String,
    panCard: String,
    photo: String,
    signature: String,
    declaration: Boolean,
  },
  {
    timestamps: true,
  }
);

const kycModel = mongoose.model("kycData", kycSchema);
module.exports = kycModel;
