const {Schema, model} = require("mongoose");

const UserSchema= new Schema({
    name: String,
    mobile: Number,
    dob: String,
    age: Number,
    mailid: String,
    address: String,
    gender: String,
    pan : String,
    aadhar: Number,
    passport: Number
})

const User= model("users", UserSchema);
module.exports= User;