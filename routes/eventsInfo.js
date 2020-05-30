const express = require('express');
const router = express.Router();
const Event = require('./../models/calendarSchema');


router.get('/newevent', function (req, res) {
    res.render('events/newevent')
  })
  ​

router.post('/saved', function (req, res) {
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
            if (err) Console.log("Data is not inserted");
        });
    });
    res.render("events/calender");
})

router.get('/getEvent', function (req, res) {
    var url = "mongodb://localhost:27017";
    // create a client to mongodb
    var MongoClient = require('mongodb').MongoClient;
    // make client connect to mongo service
    MongoClient.connect(url, { useUnifiedTopology: ture }, function (err, client) {
        var db = client.db('zajel');
        db.collection("calendar").find().toArray(function (err, items) {
            if (err) Consle.log("")
            res.render("events/getevent", { data: items });
        });
    });
});



module.exports = router;