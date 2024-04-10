const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let loginSchema = new Schema(
	{
		userName: { type: String, trim: true },
        password:{type:String}

	},
	{
		timestamps: true,
	}
);

const loginModel = mongoose.model('login details', loginSchema);
module.exports = loginModel;