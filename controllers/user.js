const User = require("../models/user");
//const passport = require("passport");

module.exports = {
  login: (req, res) => {
    res.render("login", { message: req.flash("signupMessage") });
  },
  createLogin: (req, res) => {
    const login = passport.authenticate("local-login", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true
    });

    return login(req, res);
  },
  signUp: (req, res) => {
    res.render("signup", { message: req.flash("signupMessage") });
  },
  createSignUp: (req, res) => {
    const signup = passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/signup",
      failureFlash: true
    });

    return signup(req, res);
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  }
};
