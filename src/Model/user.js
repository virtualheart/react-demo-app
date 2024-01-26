const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Add any additional validation for email format if needed
  },
  password: {
    type: String,
    required: true,
    // You might want to hash the password before saving it to the database
  },
  cpassword: {
    type: String,
    required: true,
    // You might want to add additional validation for matching passwords
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
