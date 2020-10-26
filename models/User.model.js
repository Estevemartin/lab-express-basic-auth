// User model here
const mongoose = require("mongoose");
// const { use } = require("../routes");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {type:String,unique:true},
    password: String,
  },
  {
    timestamps: true,

  }
);

const User = mongoose.model('User', userSchema)

module.exports = User;