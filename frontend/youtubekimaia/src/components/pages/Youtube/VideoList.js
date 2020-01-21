import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import Row from 'react-bootstrap/Row'
import VideoListItem from './VideoListItem'
import Col from 'react-bootstrap/Col'


function VideoList(props) {
  if(props.List.length>0)
  {
    console.log("test"+props.List[0].id.videoId)
      const content = props.List.map(id => {
    return (
      <div key={id.id.videoId}>
          <VideoListItem data={id}></VideoListItem>
      </div>
    );
  });
  return content
  }
  else
   return <div></div>
}

export default VideoList;
