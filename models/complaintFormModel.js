const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let complaintFormSchema = new Schema(
    {
        name: { type: String, trim: true },
        email: { type: String },
        phoneNumber: { type: Number },
        complaintRegarding: { type: String },
        executiveName: { type: String }
    },
    {
        timestamps: true,
    }
);

const complaintFormModel = mongoose.model('complaintData', complaintFormSchema);
module.exports = complaintFormModel;