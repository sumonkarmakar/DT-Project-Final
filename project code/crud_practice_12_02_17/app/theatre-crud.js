var express = require('express');
var router = express.Router();
bodyParser = require('body-parser');

var mongoose = require('mongoose');

// defining schema
var theatreSchema = mongoose.Schema({
	theatreName: String,
	theatreCity: String,
	theatreAddress: String,
	theatreContact: String
});

var Theatre = mongoose.model('Theatre',theatreSchema,'theatre');

// Add Theatre
router.post('/addTheatre',function(req,res){
	console.log(req.body);
	var theatredoc = new Theatre({
		theatreName: req.body.Name,
		theatreCity: req.body.City,
		theatreAddress: req.body.Address,
		theatreContact: req.body.Contact
	});

	theatredoc.save(function(err,docs){
		if(err) throw err;
		console.log("Theatre saved successfully.");
		res.json(docs);
	});
});

// update Theatre
router.put('/updateTheatre/:id',function(req,res){
  console.log("Put Reached.");
  console.log(req.params.id);
  console.log(req.body);
  Theatre.findOneAndUpdate({_id:req.params.id},req.body,function(err,data){
    console.log(data);
    res.json(data);
  });
})

// get Theatre
router.get('/getTheatre',function(req,res){
  Theatre.find(function(err,docs){
    if(err) return console.log(err);
    res.json(docs); 
  });
});

// list Theatre
router.get('/listTheatre',function(req,res){
   listTheatre();
   Theatre.listTheatre();
});

// delete Theatre by id
router.delete('/deleteTheatre/:id',function(req,res){
  console.log("Reached DELETE function on server.");
  console.log(req.params.id);
     Theatre.remove({_id:req.params.id},function(err,docs){
        res.json(docs);
  });
})


router.use(function(req,res,next){
    var err=new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = Theatre;
module.exports = router;
