//      require 
const express = require('express');
const env = require('./.env');
require('./models/db');
const studentcontroller = require('./controller/studentcontroller')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');

const student = require('./models/student');

app.set("view engine", "hbs")

app.get('/register',(req,res)=>{ res.render("index")});
app.get('/login', (req,res) => { res.render("login")});


app.post('/register',studentcontroller.poststudent)
app.post('/login', studentcontroller.login );

// app.post('/login',async (req,res)=>{
//     const pass = req.body.password;
//     const email = req.body.email;

//     const user = await student.findOne({email:email});

//     console.log(user);
// })

app.use('/hello', (req, res) => {
    res.send("working")
});




app.listen(PORT, () => {
    console.log('port started on port => 5000')
});