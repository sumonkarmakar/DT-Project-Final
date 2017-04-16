var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var movies = require('./app/movie-crud');
var cities = require('./app/city-crud');
var theatre = require('./app/theatre-crud');
var show = require('./app/showmapping-crud');
var book = require('./app/booking-crud');

//var db = require('./config/db');
app.use(bodyParser.json({})); 
//app.use(bodyParser.urlencoded({extended:false}));


app.use('/movie', movies);
app.use('/city', cities);
app.use('/theatre',theatre);
app.use('/show',show);
app.use('/booking',book);

 
var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/practice';
var db=mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to DB");
});

var port = process.env.PORT || 7000; 
app.use(express.static(__dirname + '/public')); 


require('./app/routes')(app); 


app.listen(port);	
console.log('Magic happens on port ' + port); 			
exports = module.exports = app; 						