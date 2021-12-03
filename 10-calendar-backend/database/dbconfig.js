const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected to: " + mongoose.connection.name);
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't connect to MongoDB");
  }
};
module.exports = { dbConnection };
