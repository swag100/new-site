var express = require('express');
var app = express();

var users = require('./users.js');
var good = require('./good.js');
//
app.set('view engine', 'pug');
app.set('views','./views');

//for forms
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});

// no more form stuff
app.get('/', function(req, res){
    res.render('index',
        {
            name: 'dynamic value',
            url: './users',
            /*
            user: {
                name: 'poop',
                age: '2'
            }*/
        }
    );
});

app.use(express.static('public'));
app.use('/users', users);
app.use('/good', good);

//Other routes here
app.get('/*name', function(req, res){
   res.send('Check your spelling. this is an invalid URL.');
});

app.listen(3000);