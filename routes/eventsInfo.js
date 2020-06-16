const express = require('express');
const router = express.Router();

router.get('/newevent', function (req, res) {
    res.render('newevent')
  });
module.exports = router;