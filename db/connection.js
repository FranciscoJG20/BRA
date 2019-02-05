const mongoose = require("mongoose");
mongoose.Promise = Promise;

const { mongoConnectionString } = require("./../config/env-vars");

console.log(mongoConnectionString);
mongoose.connect(mongoConnectionString);

module.exports = mongoose;
