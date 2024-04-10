const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let aboutFormSchema = new Schema(
    {
        name: { type: String, trim: true },
        phoneNumber: { type: Number },
        email: { type: String },
       dematAccount:{type:String},
        serviceRequest: { type: String },
        comment: { type: String }
    },
    {
        timestamps: true,
    }
);

const aboutFormModel = mongoose.model('AboutFormData', aboutFormSchema);
module.exports = aboutFormModel;