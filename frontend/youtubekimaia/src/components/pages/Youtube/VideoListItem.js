import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./VideoListItem.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function VideoListItem(props) {
  console.log("Video Item" + props.data.id.videoId);
  return (
    <div className="VideoListItem">
        <img
          src={props.data.snippet.thumbnails.default.url}
        />
        <div className="VideoData">
            <div style={{fontWeight:"bold"}}>{props.data.snippet.title}</div>
            <div style={{overflow: "hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{props.data.snippet.description}</div>
            <div>{props.data.statistics.likeCount} Likes</div>
        </div>
        <div>
            Play
        </div>
    </div>
  );
}

export default VideoListItem;
