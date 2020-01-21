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
    console.log(req.body.title)
    console.log(req.body.email)
    console.log("searching")
    // let date=Date();
    // console.log(date)
    // try{
    //     const stat= new Stat({
    //         _id: mongoose.Types.ObjectId(),
    //         email:req.body.email,
    //         searchTitle: req.body.title,
    //         action: "search",
    //         time:date
    //     });
    //     await stat.save();
    // }
    // catch(err){
    //     return res.status(500).json({error:err});
    // }
    // return res.status(200).json({
    //     message:"hello"
    // })
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

    //  await youtube.videos.list({
    //     part:'statistics,snippet',
    //     id: 'wAjN3_tJKo0,4yLyiYuRvdA',   
    //   }, function (err, data) {
    //     if (err) {
    //       console.error('Error: ' + err);
    //      return  res.status(404).json({
    //           error:err
    //       })
    //     }
    //     if (data) {
    //       console.log(data)
    //       return res.status(200).json(data);
    //     }
    //   });

});
module.exports=router;