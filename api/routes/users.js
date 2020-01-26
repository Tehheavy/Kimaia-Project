const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Stat = require('../models/stat')
const Logger = require('../middleware/log')

const dotenv = require('dotenv').config();

router.post('/signup',(req,res,next)=>{
    User.find({email: req.body.email}).exec().then(user=>{
        if(user.length>=1){
            return res.status(409).json({
                message:"email exists"
            })
        }
        else{
            bcrypt.genSalt(10, (err, salt)=>{
                bcrypt.hash(req.body.password,salt,(err,hash)=>{
                    if(err){
                        console.log(err);
                        return res.status(500).json({
                            error:err
                        });
                    }
                    else{
                        if(req.body.admin===true){
                            const user=new User({
                                _id: new mongoose.Types.ObjectId(),
                                email:req.body.email,
                                password:hash,
                                admin:true
                            });
                            user.save().then(result=>{
                                console.log(result);
                                res.status(201).json({
                                    message:'User Created'
                                })
                            }).catch(err=>{
                                console.log(err);
                                res.status(500).json({
                                    error:err
                                })
                            });
                        }
                        else{

                            const user=new User({
                                _id: new mongoose.Types.ObjectId(),
                                email:req.body.email,
                                password:hash
                            });
                            user.save().then(result=>{
                                console.log(result);
                                res.status(201).json({
                                    message:'User Created'
                                })
                            }).catch(err=>{
                                console.log(err);
                                res.status(500).json({
                                    error:err
                                })
                            });
                        }
        
                    }
                });
            });
        }
    }).catch();
    console.log(req.body.email);
});

router.post('/login',(req,res,next)=>{
    User.findOne({email:req.body.email}).exec().then(user=>{
        if(user){
            console.log("user found")
            bcrypt.compare(req.body.password, user.password,(err, cmpres)=> {
                if(err){
                    return res.status(401).json({
                        message:'Auth failed'
                    });
                }
                if(cmpres){
                    console.log("user ")
                    const token=jwt.sign({
                        email:user.email,
                        userId:user._id
                    },process.env.JWT_KEY,{
                        expiresIn:"1h"
                    })
                    Logger.logLogin(req.body.email);
                    return res.status(200).json({
                        message:'Auth successful',
                        admin:user.admin,
                        token:token
                    })
                }
                return res.status(401).json({
                    message:'Auth failed'
                });
            });
        }
        else{
            res.status(401).json({
                message:'Auth failed'
            });
        }
    }).catch();
});
module.exports=router;