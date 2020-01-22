const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const { google } = require('googleapis');
const youtube = google.youtube({ version: 'v3', auth: process.env.API_KEY });
const Stat = require ('../models/stat')

    async function logLogin(email) {
        try{
            const stat= new Stat({
                _id: mongoose.Types.ObjectId(),
                email:email,
                action: "login",
                time:Date()
            });
            await stat.save();
            console.log("logged login")
        }
        catch(err){
            console.log(err)
        }
    }
    async function logSignup(email) {
        try{
            const stat= new Stat({
                _id: mongoose.Types.ObjectId(),
                email:email,
                action: "SignUp",
                time:Date()
            });
            await stat.save();
            console.log("logged SignUp")
        }
        catch(err){
            console.log(err)
        }
    }
    async function logSearch(email,search){
        try{
            const stat= new Stat({
                _id: mongoose.Types.ObjectId(),
                email:email,
                searchTitle: search,
                action: "search",
                time:Date()
            });
            await stat.save();
            console.log("logged Search")
        }
        catch(err){
            console.log(err)
        }

    }
    async function logUserlog(email,action,videoId){
        try{
            const stat= new Stat({
                _id: mongoose.Types.ObjectId(),
                email:email,
                video: videoId,
                action: action,
                time:Date()
            });
            await stat.save();
            console.log("logged Select")
        }
        catch(err){
            console.log(err)
        }

    }
    async function YoutubePlayerLog(email,action,videoTime,videoId){//email,action,videoTime,videoId
        try{
            const stat= new Stat({
                _id: mongoose.Types.ObjectId(),
                email:email,
                video: videoId,
                videoTime:videoTime,
                action: action,
                time:Date()
            });
            await stat.save();
            console.log("logged Select")
        }
        catch(err){
            console.log(err)
        }

    }
  
    module.exports.logLogin=logLogin;
    module.exports.logSignup=logSignup;
    module.exports.logSearch=logSearch;
    module.exports.logUserlog=logUserlog;
    module.exports.YoutubePlayerLog=YoutubePlayerLog;