const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const studentSchema = new mongoose.Schema({

    password:{
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

studentSchema.pre("save", async function(next){
    if (this.isModified("password")) 
    {
        this.password = await bcrypt.hash(this.password , 10)
        console.log("passHash  ==>>  "+this.password);
    }
    next();
})

const student = new mongoose.model("student",studentSchema);



module.exports = student;
