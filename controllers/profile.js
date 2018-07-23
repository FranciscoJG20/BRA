const User = require("../models/user");

module.exports = {
  index: (req, res) => {
    // Profile.findOne({ user: req.user.id })
    //   .populate('user')
    //   .then(function (profile) {
    //   res.render('profile', {profile, user: req.user })
    //})
    res.render("./profile/profile");
  }
};
