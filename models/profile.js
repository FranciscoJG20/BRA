const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const User = require("../models/user");

const Profile = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});

module.exports = mongoose.model("Profile", Profile);
