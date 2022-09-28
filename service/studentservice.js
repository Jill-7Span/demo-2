const model = require('../models/student');
const express = require('express');
const student = require('../models/student');
const app = express();

exports.poststudent = async (studentregister) => {
    await studentregister.save();
    console.log(studentregister)
};

exports.login = async (email,pass) => {
    return await student.findOne({email});
    
    //await model.findOne({password:pass})

    
}