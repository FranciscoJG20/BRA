const mongoose = require("../models/Form");
const Form = mongoose.model("Form");
const formData = require("./form-data.json");

Form.remove({})
  .then(() => {
    Form.collection.insert(formData).then(form => {
      console.log(form);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });
