const {Schema, model} = require("mongoose");

const UserSchema= new Schema({
    name: String,
    mobile: Number,
    age: Number,
    mailid: String,
    address: String,
    gender: String,
    date: String,
    pan : String,
    aadhar: String,
    passport: String
})

const User= model("users", UserSchema);
module.exports= User;