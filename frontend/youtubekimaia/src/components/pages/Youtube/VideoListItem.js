import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./VideoListItem.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Play from "../../../images/playButton.png"


function VideoListItem(props) {

  return (
    <div className="VideoListItem" onClick={e => props.handleVideoListClick([props.data.id,props.data.snippet.title])}>
      <div className="VideoListItemImage">
        <img
          src={props.data.snippet.thumbnails.default.url}
          style={{height:"auto"}}
        />
      </div>
        <div className="Split">
            <div className="VideoData">
                <div style={{fontWeight:"bold"}}>{props.data.snippet.title}</div>
                <div >{props.data.snippet.description}</div>
                {props.data.statistics.likeCount && <div>{props.data.statistics.likeCount} Likes</div>}
            </div>
            <div className="PlayButton">
                <img src={Play}></img>
                {/* <div className="testin">asd</div> */}
            </div>
        </div>
    </div>
  );
}

export default VideoListItem;
