const express = require("express")
const router = express.Router()
var MongoClient = require('mongodb').MongoClient;

router.get('/hazimahmad',function(req,res){
var url="mongodb://localhost:27017"
MongoClient.connect(url,function(err,client){
useNewUrlparser:true

var dbo =client.db('mytable')
    dbo.collection("doctor1").find({}).toArray(function(err,doctor){

        if(err) Console.log("");
        res.render('/doctorhazim',{doctor:doctor});
    });
});

});


router.get('/mustafa',function(req,res){
    var url="mongodb://localhost:27017"
    MongoClient.connect(url,function(err,client){
        useNewUrlparser:true
        
        var dbo =client.db('mytable')
            dbo.collection("doctor2").find({}).toArray(function(err,doctor){
        
                if(err) Console.log("");
                res.render('/doctormustafa',{doctor:doctor});       
            });
        });
});
module.exports =router