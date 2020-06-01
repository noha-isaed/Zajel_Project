const express  = require("express")
const app = express()
const bodyparser  = require('body-parser')
const dashRouter=require('./routes/dashboard.js')

var MongoClient= require('mongodb').MongoClient;

app.set('view engine' , 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"))

app.use(dashRouter)

app.get( "/" , function(req , res){
 app.render("logIn");
})

app.listen (9999, function(){
    console.log('Server started in port 9999');
    });
    