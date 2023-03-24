const mongoose = require("mongoose");
const validator = require('validator');
//creating a schema that has an Id, name and a mail 
// that uses validator to check its validity 
const StudentSchema = new mongoose.Schema({
    StudentId:{
        type:Number,
        trim: true,
        lowercase: true,
        unique: true
    },
	Name:{
    type:String,
    trim: true,
    lowercase: true,
    unique: true
    },	
    Email:{
        type:String,
        validate:{
          validator: validator.isEmail,
          message: 'VALUE is not a valid email',
          isAsync: false
        },
        trim: true,
        lowercase: true,
        unique: true
    }
});

const student = mongoose.model("Student", StudentSchema);

module.exports = student;