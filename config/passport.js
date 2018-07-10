const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

module.exports = function(passport) {
  //Passport authentication works by storing a value in a cookie, and then,
  // this cookie is sent to the server for every request
  // until the session expires or is destroyed. This is a form of serialization.
  passport.serializeUser(function(user, callback) {
    callback(null, user.id);
  });

  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user);
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, callback) {
        //Find a user with this e-mail
        User.findOne({ "local.email": email })
          .then(user => {
            // If there already is a user with this email
            if (user) {
              return callback(
                null,
                false,
                req.flash("signupMessage", "this email is already taken")
              );
            } else {
              // There is no email registered with this email
              // Create a new user
              let newUser = new User();
              newUser.local.email = email;
              newUser.local.password = newUser.encrypt(password);

              newUser.save(err => {
                if (err) throw err;
                return callback(null, newUser);
              });
            }
          })
          .catch(err => console.log(err));
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, callback) {
        // Search for a user with this email
        User.findOne({ "local.email": email }, function(err, user) {
          if (err) return callback(err);

          // If no user is found
          if (!user) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "No user found")
            );
          }
          // Wrong password
          if (!user.validPassword(password)) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "Ooops, wrong password")
            );
          }
          return callback(null, user);
        });
      }
    )
  );
};
