const express  = require("express");
const app = express();
const bodyparser  = require('body-parser');
const dashRouter=require('./routes/dashboard.js')


var passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    flash        = require("connect-flash"),
    User        = require("./models/user"),
    session = require("express-session");
var indexRoutes      = require("./routes/index");
const db = require('./config/database');


var MongoClient= require('mongodb').MongoClient;

app.set('view engine' , 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"))

app.use(dashRouter)

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "lorem ipsum",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.user = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});

app.use("/", indexRoutes);



app.listen (9999, function(){
    console.log('Server started in port 9999');
    });
    