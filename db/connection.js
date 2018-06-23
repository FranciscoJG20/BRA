const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/br')
mongoose.Promise = Promise // what does this do again?


if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect("mongodb://localhost/whenpresident");
  }

module.exports = mongoose;