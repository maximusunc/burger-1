var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/index', function(req,res) {
	burger.selectAll(function(data) {
		var hbsObject = {
     	burgers: data
    };
    	console.log(hbsObject);
    	res.render("index", hbsObject);
    });
});
router.post('/api/burgers', function(req,res) {
	burger.insertOne("'" + req.body.name + "'", function(result) {
		console.log(req.body.name);
		res.json({id: result.insertID});
	});
});

router.put("/api/burgers/:id", function(req,res) {
	var id = req.params.id;
	console.log('deleted id ', id);
	burger.updateOne(id, function(result) {
		if(result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});
router.delete("/api/burgers/:id", function(req,res) {
	var id = req.params.id;
	console.log('deleted id ', id);
	burger.deleteOne(id, function(result) {
		console.log(result.changedRows);
		res.status(200).end();
	})
})
module.exports = router;
