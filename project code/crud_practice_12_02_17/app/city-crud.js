var express = require('express');
var router = express.Router();
bodyParser = require('body-parser');


var mongoose = require('mongoose');

// defining schema
var citySchema = mongoose.Schema({
	cityName: String
});

var City = mongoose.model('City',citySchema,'city');

// add city
router.post('/addCity',function(req,res){
	console.log(req.body);
	var citydoc=new City({
		cityName:req.body.cityName
	});
	console.log(citydoc);

	citydoc.save(function(err,docs){
		if(err) throw err;
		console.log("City Saved Successfully!");
		res.json(docs);
	});
})


// get city
router.get('/getCity',function(req,res){
	City.find(function(err,docs){
		if(err) return console.log(err);
		res.json(docs);
	});
})

// list city

 
// update city
router.put('/updateCity/:id',function(req,res){
	console.log("Put Reached");
	console.log(req.params.id);
	console.log(req.body);
	City.findOneAndUpdate({_id:req.params.id},req.body,function(err,data){
		console.log(data);
		res.json(data);
	});
})

// delete city
router.delete('/deleteCity/:id',function(req,res){
	console.log("Reached DELETE function on server!!");
	console.log(req.params.id);
	     City.remove({_id:req.params.id},function(err,docs){
	     res.json(docs);
	 });
})


router.use(function(req,res,next){
    var err=new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = router;