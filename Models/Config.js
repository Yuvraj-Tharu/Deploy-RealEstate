const mongoose = require("mongoose");
require("dotenv").config();

mongoose

  .connect(process.env.MONGODB_URI)
  .then(console.log("Connected to database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
