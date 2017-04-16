var express = require('express');
var router = express.Router();
bodyParser = require('body-parser');
var TheaterFile=require('./theatre-crud.js');
var MovieFile=require('./movie-crud.js');
var mongoose = require('mongoose');

// defining schema
var Schema= mongoose.Schema;
var ShowMappingSchema = mongoose.Schema({
	theater: {type:Schema.Types.ObjectId,ref:'Theatre'}, // sub document
	movie:   {type:Schema.Types.ObjectId,ref:'Movie'},	 // sub document
	fromDate:String,
	toDate:String,
	slot:Array
});

var ShowMapping = mongoose.model('ShowMapping',ShowMappingSchema,'showmappings');

// add show
router.post('/addShow',function(req,res){
	console.log(req.body);
	var doc = new ShowMapping({
		theater:req.body.theater,
		movie:req.body.movie,
		fromDate:req.body.fromDate,
		toDate:req.body.toDate,
		slot:req.body.slot
	});

	doc.save(function(err,docs){
		if(err) throw err;
		console.log("Theatre saved successfully.");
		res.json(docs);
	});
});

// get show
router.get('/getShow',function(req,res){
  ShowMapping.find({}).populate('theater').populate('movie').exec(function(err,docs){
    if(err) return console.log(err);
    res.json(docs); 
  });
});

// get show by id
router.get('/getShow/:id',function(req,res){
	ShowMapping.find({_id:req.params.id},function(err,docs){
		if(err) return console.log(err);
		res.json(docs);
	});
});

// delete show
router.delete('/deleteShow/:id',function(req,res){
	console.log(req.params.id);
	ShowMapping.remove({_id:req.params.id},function(err,docs){
		res.json(docs);
	});
});	

module.exports = ShowMapping;
module.exports = router;