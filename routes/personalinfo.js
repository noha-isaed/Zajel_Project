const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.post('/saved', function (req, res) {​
    var url="mongodb://localhost:27017"
    MongoClient.connect(url​, function (err, client) {
        var db = client.db("zajel");
        var doc = {
            name: req.body.name,
            id_No: req.body.id,
            nationality: req.body.nationaliy,
            jnat: req.body.jnat,
            city: req.body.city,
            from: req.body.from,
            street: req.body.street
        }
        db.collection('Personal-Info').insertOne(doc, function (err, res) {
            if (err) console.log("Data is not inserted");
        })
    });
​
    MongoClient.connect(url, function (err, client) {
​
        var db = client.db('zajel');
        db.collection("Personal-Info").find().toArray(function (err, items) {
            if (err) Consle.log("Data is not defined")
            res.render("personal-info-saved", { info: items })
        });
    });
});
​
​
​
router.get('/personal-info-saved', (req, res) => {
​
    MongoClient.connect(url, function (err, client) {
​
        var db = client.db('zajel');
        db.collection("Personal-Info").find().toArray(function (err, items) {
            if (err) Consle.log("Data is not defined")
            res.render("personal-info-saved", { info: items })
        });
    });
});
module.exports = router;