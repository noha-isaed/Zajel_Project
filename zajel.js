const express  = require("express")
const app = express()
const bodyparser  = require('body-parser')
const calenderRouter= require('./routes/eventsinfo.js')


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


<<<<<<< HEAD


=======
app.get( "/dashboard" , function(req , res){
    res.render("dashboard");
   })
>>>>>>> 0e5a2df8dab7acc9b30c9b93fb3b8e98d1c29e24

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

app.post('/SAVED', function (req, res) {
    var url = "mongodb://localhost:27017";
    // create a client to mongodb
    // make client connect to mongo service
    MongoClient.connect(url, function (err, client) {
        var db = client.db('zajel');
        // document to be inserted
        var doc = {
            date: req.body.date,
            name: req.body.name,
            Stime: req.body.Stime,
            Etime: req.body.Etime,
            tage: req.body.tage
        };
        // insert document to 'users' collection using insertOne
        db.collection("calendar").insertOne(doc, function (err, res) {
            if (err) console.log("Data is not inserted");
        });
    });
    res.render("calender");
})

app.get('/getEvent', function (req, res) {
    var url = "mongodb://localhost:27017";
    // create a client to mongodb
    var MongoClient = require('mongodb').MongoClient;
    // make client connect to mongo service
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        var db = client.db('zajel');
        db.collection("calendar").find().toArray(function (err, items) {
            if (err) Consle.log("")
            res.render("getevent", { data: items });
        });
    });
})


app.listen (9999, function(){
    console.log('Server started in port 9999');
});
    