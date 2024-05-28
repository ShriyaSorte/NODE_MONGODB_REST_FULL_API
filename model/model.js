const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student_name:{
        type:String,
        require:true
    },
    student_age:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('studentdata', studentSchema)

// module.exports = {
//     studentSchema
// }