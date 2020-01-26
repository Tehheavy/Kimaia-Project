import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/pages/Youtube/SearchBar";
import Auth from "../Auth";
import ApiCalls from "../ApiCalls";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import VideoBar from '../components/pages/Youtube/VideoList'
import YouTube from 'react-youtube';
import './Youtube.css'
import Navbar from '../components/navbar'
import ReactPlayer from 'react-player'


function Youtube(props) {
  const [search, setSearch] = useState("");// Search bar value
  const [videos,setVideos] = useState([]);//list of videos found by search
  const [targetVideo,setTargetVideo]=useState(["43kQ-344AnQ","Kimaia"])//shown video ,default=kimaia video
  const opts = { // youtube embedded res
    height: '600px',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  const handleInput = event => {//saves Search bar value for later use
    setSearch(event.target.value);
  };
  const handleVideoListClick = (value)=>{
      setTargetVideo(value);
      let data={email:Auth.GetEmail(),action:'select',videoId:value[0]};
      ApiCalls.userSelectLog(data);
  }
  const handlePress = event => {// handles Search request to get video list
    let email = Auth.GetEmail();
    let title = search;
    let data = { email, title };
    ApiCalls.search(data,setVideos);
  };
  const handleVideoLog=(event,action)=>{ // handles video interactions for Logs email,action,videoTime,videoId
    let email = Auth.GetEmail();
    let videoId = targetVideo[0];
    let videoTime=event.target.getCurrentTime()
    let data={email,action,videoTime,videoId}

    ApiCalls.userYoutubePlayerLog(data);
  }
  return (
    <div>
                <Navbar></Navbar>
      <SearchBar
        handleInput={handleInput}
        handlePress={handlePress}
      ></SearchBar>
      <Container style={{maxWidth:"90%"}}>
        <Row>
          <Col  xs={{ span: 12, order: 2 }} md={{ span: 4, order: 1 }}><VideoBar handleVideoListClick={handleVideoListClick} List={videos}></VideoBar></Col>
          <Col  xs={{ span: 12, order: 1 }} md={{ span: 8, order: 2 }}>
              <div className="YoutubePlayer">
                <YouTube
                        videoId={targetVideo[0]}
                        opts={opts}
                        onReady={e=>{handleVideoLog(e,"ready")}}                     // defaults -> noop
                        onPlay={e=>{handleVideoLog(e,"play")}}                        // defaults -> noop
                        onPause={e=>{handleVideoLog(e,"pause")}}                // defaults -> noop
                        onEnd={e=>{handleVideoLog(e,"end")}}                      // defaults -> noop
                        onError={e=>{handleVideoLog(e,"error")}}                    // defaults -> noop           // defaults -> noop
                    />
                  <div> Now playing: {targetVideo[1]}</div>

              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Youtube;
