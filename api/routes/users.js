const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


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
                        const user=new User({
                            _id: new mongoose.Types.ObjectId(),
                            email:req.body.email,
                            password:hash
                        });
                        user.save().then(result=>{
                            console.log(result);
                            res.status(201).json({
                                message:'Uesr Created'
                            })
                        }).catch(err=>{
                            console.log(err);
                            res.status(500).json({
                                error:err
                            })
                        });
        
                    }
                });
            });
        }
    }).catch();
    console.log(req.body.email);
});

router.delete('/:userId',(req,res,next)=>{
    console.log("AOUISDHIUASHDIUASHDIUAHSDIUH")
    User.deleteOne({_id:req.params.userId}).exec().then(result=>{
        res.status(200).json({
            message:"user deleted"
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
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
                    return res.status(200).json({
                        message:'Auth successful',
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