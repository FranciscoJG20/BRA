const express = require("express");
const hbs = require("hbs");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");

const app = express();

const port = process.env.PORT || 3001;
const hostname = process.env.hostname || "localhost";

require("./config/passport")(passport);

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "EXPRESS-IS-AWESOME",
    saveUninitialized: true,
    resave: false
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use(require("./routes/index.js"));

app.listen(port, () => {
  console.log(`✅ application is running at http://${hostname}:${port} 🌟`);
});
