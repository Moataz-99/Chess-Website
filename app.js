const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result, includes } = require('lodash');
const move = require('./models/Record');
const bodyParser = require('body-parser');
const Move = require('./models/Record');
const { redirect } = require('express/lib/response');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { Router } = require('express');



//call express app 
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://website:123321@moves.yxjpv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; // add database remote
mongoose.connect(dbURI) // connect to database
 .then((result) => console.log('connected to db')) // alert when it's done
 .catch((err) => console.log(err)); //alert if something went wrong


 


//rigister view engine 
 app.set('view engine' , 'ejs'); // call the front engine
//  app.set('views','myviews');
 
  
//listen to request
app.listen(3000);
app.use(morgan('dev')); // 


// middleware & static files 
app.use(express.static('public')) ; 
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/' ,(req,res) =>{
    res.render('index');
    // res.sendFile('./views/index.html' , {root:__dirname});
    
});

// mongoose and mongo sandbox routes
app.use('/send',(req,res) => { // send / recieve the move from/to the database
    const Record = new Move(req.body); // implement the schema into the move
    Record.save(); // save the move to the database
    console.log(req.body); // log the move= to check if it's works
}); 
 
app.get('/get' , (req,res) => {
    Move.find()
    .then((result) => {
    var M = result[result.length-1];
    console.log(M);
     })
    .catch((err) => {
        console.log(err);
    })
    res.send(M);
    console.log('hey');
}); 