const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const express = require("express");
const session = require("express-session");
const hbs = require("hbs");
const methodOverride = require("method-override");
const MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("passport");
const {
  hostname,
  mongoConnectionString,
  port,
  sessionSecret
} = require("./config/env-vars");

const app = express();
const store = new MongoDBStore({
  uri: mongoConnectionString,
  collection: "sessions"
});

// Catch errors
store.on("error", function(error) {
  console.log(error);
});

app.use(
  require("express-session")({
    secret: sessionSecret,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store,
    resave: true,
    saveUninitialized: true
  })
);

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
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use(require("./routes/index.js"));

app.listen(port, () => {
  console.log(`✅  application is running at http://${hostname}:${port} 🌟`);
});
