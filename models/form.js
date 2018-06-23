const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Form = new Schema({
  email: { type: String, require: true },
  biasProperty: {
    type: [String],
    enum: ["age", "gender", "religion", "race", "disability", "marital-status", "sexual-orientation", "national-origin", "ethnicity", "gender-identity", "culture", "veteran-status", "ex-offender-status", "class-socioeconomic-status", "other"]
  },
  incidentProperty: {
    type: [String],
    enum: ["physical-harrassment", "verbal-harrassment", "phone-harrassment", "written-harrassment", "email-online-harrassment", "intimidation", "vandalism", "damage-destruction-property", "other"]
  },
  location: String,
  date: String,
  description: String,
  witness: String
})

module.exports = mongoose.model('Form', Form)