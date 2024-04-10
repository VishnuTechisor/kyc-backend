const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let careerFormSchema = new Schema(
    {
        name: { type: String, trim: true },       
        phoneNumber: { type: Number },
        email: { type: String },
        profileType: { type: String },
        uploadResume: { type: String }
    },
    {
        timestamps: true,
    }
);

const careerFormModel = mongoose.model('careerData', careerFormSchema);
module.exports = careerFormModel;