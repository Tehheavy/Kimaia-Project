const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { google } = require('googleapis');
const youtube = google.youtube({ version: 'v3', auth: process.env.API_KEY });
const dateTime = require('date-time');
const Stat = require ('../models/stat')
const Logger = require('../middleware/log')

router.post('/search',async (req,res,next)=>{
    console.log("searching")
    Logger.logSearch(req.body.email,req.body.title);
    await youtube.search.list({
        part: 'snippet',
        fields:"items(id)",
        q: req.body.title,
        maxResults:'4'     
      }, function (err, data) {
        if (err) {
          console.error('Error: ' + err);
         return  res.status(404).json({
              error:err
          })
        }
        if (data) {
          console.log(data.data)
          let ids=data.data.items.map(x=>{return x.id.videoId})
          console.log("ids are: "+ids.toString());
          youtube.videos.list({
                part: 'statistics,snippet',
                id: ids.toString(),
            }, function (inErr, fdata) {
                if (inErr) {
                    console.error('Error: ' + err);
                    return res.status(404).json({
                        error: err
                    });
                }
                if (fdata) {
                    console.log(fdata);
                    return res.status(200).json(fdata.data.items);
                }
            });
        }
      });



});


router.post('/selectlog',async (req,res,next)=>{
  console.log("selectlog")
  try{
    Logger.logUserlog(req.body.email,req.body.action,req.body.videoId);
  }catch(err){
    return res.status(500).json({error:err})
  }
  return res.status(200).json({})

});

router.post('/playerlog',async (req,res,next)=>{ //email,action,videoTime,videoId
  console.log("playerlog")
  try{
    Logger.YoutubePlayerLog(req.body.email,req.body.action,req.body.videoTime,req.body.videoId);
  }catch(err){
    return res.status(500).json({error:err})
  }
  return res.status(200).json({})

});
module.exports=router;