const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let responseSchema = new Schema({
  question: {
    id: { type: Number },
    text: { type: String },
  },
  selectedOption: {
    id: { type: Number },
    label: { type: String },
    score: { type: Number },
  },
});

let rpmScoreSchema = new Schema(
  {
    name: { type: String, trim: true },
    email: { type: String },
    rpmScore: { type: Number },
    responses: [responseSchema],  // Specify the schema for each element in the array
    checkboxData:{type:String}
  },
  {
    timestamps: true,
  }
);

const rpmModel = mongoose.model('rpmScore', rpmScoreSchema);
module.exports = rpmModel;
