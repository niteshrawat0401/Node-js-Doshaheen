const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  mobile: Number,
  DOB: String,
  age: Number,
  mailId: {type:String},
  address: String,
  gender: String,
  PAN: String,
  aadhar: Number,
  passport: Number,
});

const User = model("users", UserSchema);
module.exports = User;
