var express = require('express');
var router = express.Router();
bodyParser = require('body-parser');


var mongoose = require('mongoose');

// defining schema
var Schema = mongoose.Schema;
var bookingSchema = mongoose.Schema({
	Show:{type:Schema.Types.ObjectId,ref:'ShowMapping'},	// subdocument
	BookingDate:String,
	ShowDate:String,
	ShowTime:String,
	Seats:String,
	TotalPrice:Number
});

var Booking = mongoose.model('Booking',bookingSchema,'booking');

// add booking
router.post('/addBooking',function(req,res){
	console.log(req.body);
	var doc = new Booking({
		Show:req.body.Show,
		BookingDate:req.body.BookingDate,
		ShowDate:req.body.ShowDate,
		ShowTime:req.body.ShowTime,
		Seats:req.body.Seats,
		TotalPrice:req.body.TotalPrice
	});

	doc.save(function(err,docs){
		if(err) throw err;
		console.log('Booking saved successfully!');
		res.json(docs);
	});
});

// fetch booking by id
router.get('/getBooking/:id',function(req,res){
	Booking.find({_id:req.params.id},req.body,function(err,docs){
    	console.log(docs);
    	res.json(docs);
  	});
});

// update booking by id
router.put('/updateBooking/:id',function(req,res){
  console.log("Put Reached.");
  console.log(req.params.id);
  console.log(req.body);
  Booking.findOneAndUpdate({_id:req.params.id},req.body,function(err,docs){
    console.log(docs);
    res.json(docs);
  });
});

// list Booking
router.get('/listBooking',function(req,res){
  Booking.find({},function(err,docs){
    if(err) return console.log(err);
    res.json(docs); 
  });
});

// delete booking by id
router.delete('/deleteBooking/:id',function(req,res){
	console.log(req.params.id);
	console.log("Reached DELETE function on server.");
	Booking.remove({_id:req.params.id},function(err,docs){
		res.json(docs);
	});
});


module.exports = Booking;
module.exports = router;






