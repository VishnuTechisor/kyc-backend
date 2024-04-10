const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let callBackSchema = new Schema(
	{
		name: { type: String, trim: true },
		phoneNumber: { type: Number },
		email: { type: String },
		city: { type: String },
		language: { type: String },
		dematAccount: { type: String },
		tandc: { type: Boolean },
		tag: { type: String },
	},
	{
		timestamps: true,
	}
);

const callBackModel = mongoose.model('FooterData', callBackSchema);
module.exports = callBackModel;