const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    password:{
        type:String,
        require:true
    },
    conpassword:{
        type:String,
        require:true
    },
    student_first_name:{
        type:String,
        require:true
    },
    student_last_name:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    }
});

const student = new mongoose.model("student",studentSchema);

module.exports = student;
