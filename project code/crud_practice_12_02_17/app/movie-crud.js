var express = require('express');
var router = express.Router();
bodyParser = require('body-parser');

var mongoose = require('mongoose');

// defining schema
console.log("movie---------");
var movieSchema=mongoose.Schema({
  Actors:String,
  Awards:String,
  Country:String,
  Director:String,
  Genre:String,
  Language:String,
  Metascore:String,
  Plot:String,
  Poster:String,
  Rated:String,
  Released:String,
  Response:String,
  Runtime:String,
  Title:String,
  Type:String,
  Writer:String,
  Year:String,
  imdbID:String,
  imdbRating:String,
  imdbVotes:String
});
  
var Movie = mongoose.model('Movie',movieSchema,'movie');

// add movie
router.post('/addMovie',function(req,res){
 console.log(req.body);
 Movie.create(req.body,function(err,docs){
    if(err) throw err;
    console.log("Book Saved Successfully");
     res.json(docs);
    });  
 });

// update movie
router.put('/updateMovie/:id',function(req,res){
  console.log("Put Reached.");
  console.log(req.params.id);
  console.log(req.body);
  Movie.findOneAndUpdate({_id:req.params.id},req.body,function(err,data){
    console.log(data);
    res.json(data);
  });
})

// get movie
router.get('/getMovie/:id',function(req,res){
  Movie.find({_id:req.params.id},function(err,docs){
    if(err) return console.log(err);
    res.json(docs); 
  });
});

// list movie
router.get('/listMovie',function(req,res){
  Movie.find({},function(err,docs){
    if(err) return console.log(err);
    res.json(docs); 
  });
});

// delete movie by id
router.delete('/deleteMovie/:id',function(req,res){
  console.log("Reached DELETE function on server.");
  console.log(req.params.id);
     Movie.remove({_id:req.params.id},function(err,docs){
        res.json(docs);
  });
})

router.use(function(req,res,next){
    var err=new Error('Not Found');
    err.status = 404;
    next(err);
});


module.exports = Movie;
module.exports = router;