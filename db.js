const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/books";

const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI);
  console.log("MongoDB Connected");
};

module.exports = connectDB;