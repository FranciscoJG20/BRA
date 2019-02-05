// Utils Class for reusable functionalities
class Utils {
  // Ensures the user is Authenticated via Passport
  isAuth(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  }
}

module.exports = new Utils();
