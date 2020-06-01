const express = require('express')
const router = express.Router()
const calenderRouter=require('./doctortable.js')
const tableRouter=require('./doctortable.js')
//const personalRouter=require('./personalinfo')


router.use('/events',calenderRouter)
router.use(tableRouter)
//router.use(personalRouter)

router.get('/timetable',function(req,res){
    var url ="mongodb://localhost:27017"
    MongoClient.connect(url,function(err,client){
        useNewUrlparser:true

        var dbo =client.db('mytable')
        dbo.collection("studentcourses").find({}).toArray(function(err,items){
            if(err) console.log("")
            res.render('studentTable',{items:items})
        })   
    });
})


router.get("/calender", function (req, res) {
    res.render('events/calender');
});


router.get("/Email",function(req,res){
res.render('email/inbox')

});

router.get('/personal-info', (req, res) =>{
    res.render('personal-info');
    })

module.exports = router;