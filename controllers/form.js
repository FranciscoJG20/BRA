const Form = require("../models/Form");

module.exports = {
  form: (req, res) => {
    res.render("form");
  },
  createForm: (req, res) => {
    console.log("I'm running");
    console.log(req.body);
    Form.create({
      //    Once Auth is working switch to use req.user.email
      email: req.body.email,
      location: req.body.location,
      date: req.body.date,
      description: req.body.description,
      witness: req.body.witness,
      biasProperty: req.body.bias ? Object.keys(req.body.bias) : [], // conditional ternary operators
      incidentProperty: req.body.incident ? Object.keys(req.body.incident) : [] // conditional ternary operators
    }).then(form => {
      res.redirect("/profile");

      // For later (once auth is working):
      //    - update user obj to include ID of new form obj
      //       req.user.forms.push(form)
      //       req.user.save(callback)
    });
  }
};
