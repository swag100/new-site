var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
   res.render('users');
});

router.get('/@:username', function(req, res) {
   res.send('username: ' + req.params.username);
});

//export this router to use in our index.js
module.exports = router;