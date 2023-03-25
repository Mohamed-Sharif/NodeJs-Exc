const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path');
const verified = require('../middlewares/verify');
const Todo = require('../models/todo');
// todos
// create todos
router.post('/',verified,async(req,res)=>{
	const todo = await Todo.create({
		title:req.body.title,
		status:req.body.status || 'todo',
		user: req.user._id
	})
	res.send(todo)
})
// gettodos
router.get('/',verified,async(req,res,next)=>{
		const todos = await Todo.find({user:req.user._id}).populate('user');
		res.send(todos);
})

//update todos
router.patch('/',verified,async(req,res,next)=>{
	Todo.updateOne({title: req.body.title}, { status: req.body.status }, function(
		err,
		result
	  ) {
		if (err) {
		  res.send(err);
		} else {
		  res.json(result);
		}
	  });
	});

module.exports = router;
