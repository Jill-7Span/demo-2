const studentservice = require('../service/studentservice');
const express = require('express');
const { model } = require('mongoose');
const app = express();
const student = require('../models/student');
const bcrypt = require('bcrypt');



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

    const isMatch = await bcrypt.compare(pass , data.password);

    console.log("pass ==>>   " + pass);
    console.log("data.password ==>>   " + data.password);
    if (isMatch) {
        res.send(data);
    }else{
        res.send("invalid details");
    }


};
