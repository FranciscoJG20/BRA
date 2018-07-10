const Form = require("../models/form");

module.exports = {
  form: (req, res) => {
    res.render("form");
  },
  createForm: (req, res) => {
    Form.create({
      // Once Auth is working:
      //    - switch to use req.user.email
      email: req.body.email,
      location: req.body.location,
      date: req.body.date,
      description: req.body.description,
      witness: req.body.witness,
      biasProperty: Object.keys(req.body.bias),
      incidentProperty: Object.keys(req.body.incident)
    }).then(Form => {
      // For later (once auth is working):
      //    - update user obj to include ID of new form obj
      //       req.user.forms.push(form)
      //       req.user.save(callback)
      console.log(Form);
    });
  }
};
