const mongoose = require("mongoose");
mongoose.Promise = Promise;

const { mongoConnectionString } = require("./../config/env-vars");

mongoose.connect(mongoConnectionString);

module.exports = mongoose;
