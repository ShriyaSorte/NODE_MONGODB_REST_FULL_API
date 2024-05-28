const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    employeeName:{type:String, require:false},
    DateOfBirth:{type:String, require:false},
    email:{type:String, require:false},
    password:{type:String, require:false},
    salary:{type:Number, require:false}
});

module.exports = mongoose.model('Employee', EmployeeSchema);