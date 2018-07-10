const User = require("../models/user");
const passport = require("passport");

module.exports = {
  login: (req, res) => {
    res.render("login", { message: req.flash("signupMessage") });
  },
  // Here we are calling the method authenticate (given to us by passport) and
  //then telling passport which strategy ('local-login') to use
  createLogin: (req, res) => {
    const login = passport.authenticate("local-login", {
      successRedirect: "/profile",
      failureRedirect: "/login",
      failureFlash: true
    });

    return login(req, res);
  },
  signUp: (req, res) => {
    res.render("signup", { message: req.flash("signupMessage") });
  },
  // Here we are calling the method authenticate (given to us by passport) and
  //then telling passport which strategy ('local-signup') to use
  createSignUp: (req, res) => {
    const signup = passport.authenticate("local-signup", {
      successRedirect: "/profile",
      failureRedirect: "/signup",
      failureFlash: true
    });

    return signup(req, res);
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  },
  secret: (req, res) => {
    if (req.isAuthenticated()) {
      res.render("secret");
    } else {
      res.redirect("/");
    }
  }
};
