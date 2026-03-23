// models/user.js
const mongoose = require("mongoose");
const  UserSchema  = require("../schemas/user");

const UserModel =  mongoose.model("user", UserSchema);

module.exports =  UserModel ;
