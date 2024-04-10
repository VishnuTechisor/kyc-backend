const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
	{
		name: { type: String, trim: true },
		phoneNumber: { type: Number },
		email: { type: String },
		city: { type: String },
		dematAccount: { type: String },
		language: { type: String },
		tandc: { type: Boolean }
	},
	{
		timestamps: true,
	}
);

const userModel = mongoose.model('product data', userSchema);
module.exports = userModel;