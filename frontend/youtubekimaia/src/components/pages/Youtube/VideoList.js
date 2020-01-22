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
      const content = props.List.map(id => {
    return (
          <VideoListItem key={id.id} data={id} handleVideoListClick={props.handleVideoListClick}></VideoListItem>

    );
  });
  return content
  }
  else
   return <div></div>
}

export default VideoList;
