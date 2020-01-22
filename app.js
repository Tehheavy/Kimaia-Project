const express = require('express');
const app = express();
const morgan= require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/users');
const youtubeRoutes = require('./api/routes/youtube');
const logRoutes = require('./api/routes/logs');
const bodyParser = require('body-parser');


mongoose.connect(
    'mongodb+srv://'+process.env.MONGO_ATLAS_USER+':'+process.env.MONGO_ATLAS_PW+'@node-server-m3de6.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,useUnifiedTopology: true }).then(() => console.log("Connected to database")).catch(error => console.log(error));

 
    app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Acess-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }  
    next();
});

app.use('/users',userRoutes)
app.use('/youtube',youtubeRoutes)
app.use('/log',logRoutes)

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message: error.message
        }
    });
});             


module.exports=app;