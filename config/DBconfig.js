const mongoose = require("mongoose");
require("dotenv").config();

const mongo_uri = process.env.MONGODB_URI;

const connectDatabase = async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(
      mongo_uri,
      {
        useNewUrlParser: true,
      }
    )
    .then((res) => {
      // console.log("10 at config res", res),
      console.log("mongo db connected successfully");
    })
    .catch((err) => console.log("errr", err));
};

module.exports = connectDatabase;
