const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/personal-info', function(req, res) {
    res.render('personal-info');
})   ​
router.post('/saved', (req,res)=>{
    var name = req.body.name;
    var id_No = req.body.id;
    var nationality = req.body.nationaliy;
    var jnat = req.body.jnat;
    var city = req.body.city;
    var from = req.body.from;
    var street = req.body.street;
    ​​
    MongoClient.connect("mongodb://localhost:27017/zajel", function (err, db) {
        
        db.collection('Personal-Info', function (err, collection) {   
            collection.insert({ 
                name: name , 
                Id_Number: id_No,
                Nationality: nationality, 
                Jordan_Nationality_Number: jnat,
                city: city,
                city_Village_Camp: from,
                Street: street  });  
        });              
    });
    ​
    MongoClient.connect("mongodb://localhost:27017/zajel", function (err, db) {
            
        db.collection('Personal-Info', function (err, collection) {
    ​
            collection.find().toArray(function(err, items) {
                if(err) console.log("Error to find data");    
                res.render("personal_info_saved", {info :  items})
            });
        });            
    }); ​
});
    ​
router.get('/personal_info_saved', (req, res)=>{
        MongoClient.connect("mongodb://localhost:27017/zajel", function (err, db) {
            
        db.collection('Personal-Info', function (err, collection) {
    ​
            collection.find().toArray(function(err, items) {
                if(err) console.log("Error to find data");    
                res.render("personal_info_saved", {info :  items})
            });
        });
                    
    });
    ​
});
    module.exports = router;