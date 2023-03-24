import mongoose from 'mongoose';
import express from "express";
var router = express.Router();
var StudentModel = require('./studentschema');

// Connecting to database
var query = 'mongodb+srv://ms2036:thebestintheworld@nodejs.ixhdqr6.mongodb.net/?retryWrites=true&w=majority'

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
	if (error) {
		console.log("Error!" + error);
	}
});

module.exports = router;
