const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Stat = require('../models/stat')
const Logger = require('../middleware/log')

router.get('/',(req,res,next)=>{
    Stat.find({}).select('email action searchTitle video videoTime time').exec().then(stats=>{
        if(stats){
            console.log("user")
            res.status(200).json({data:stats})
        }
        else{
            res.status(401).json({
                message:'Auth failed'
            });
        }
    }).catch();
});
module.exports=router;