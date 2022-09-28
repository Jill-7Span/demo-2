const studentservice = require('../service/studentservice');
const express = require('express');
const { model } = require('mongoose');
const app = express();
const student = require('../models/student');



exports.poststudent = async  (req,res) =>{
    const pass = req.body.password;
    const cpass = req.body.conpassword;

    if (pass == cpass) {
        const studentregister = new student({
            password: req.body.password,
            conpassword: req.body.conpassword,
            student_first_name: req.body.student_first_name,
            student_last_name: req.body.student_last_name,
            phone: req.body.phone,
            email: req.body.email,
            city: req.body.city,
            state: req.body.state
        });
        await studentservice.poststudent(studentregister);
    }else{
        res.send("password not match");
    }
    res.render("index");
};

exports.login = async (req,res)=> {
    const pass = req.body.password;
    const email = req.body.email;
    const data = await studentservice.login(email);
    
    if (data.password === pass) {
        res.send(data);
    }else{
        res.send("invalid details");
    }


};
