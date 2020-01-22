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
  const [targetVideo,setTargetVideo]=useState("43kQ-344AnQ")//shown video ,default=kimaia video
  const opts = { // youtube embedded res
    height: '600px',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  const temp=[
    {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/7si9ke6qE_vt_t-Xcp4GDStcXME\"",
        "id": "wAjN3_tJKo0",
        "snippet": {
            "publishedAt": "2015-09-27T23:59:18.000Z",
            "channelId": "UCW6LEbNUszk02KswGTwIAAg",
            "title": "Chuck is territorial.",
            "description": "Chuck is best neko.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/wAjN3_tJKo0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/wAjN3_tJKo0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/wAjN3_tJKo0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/wAjN3_tJKo0/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/wAjN3_tJKo0/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "TehHeavy",
            "tags": [
                "Cat chuck territory cute"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Chuck is territorial.",
                "description": "Chuck is best neko."
            }
        },
        "statistics": {
            "viewCount": "71",
            "likeCount": "3",
            "dislikeCount": "0",
            "favoriteCount": "0",
            "commentCount": "2"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/63iRh7en8bj0R6lp37euPmFl-eo\"",
        "id": "4yLyiYuRvdA",
        "snippet": {
            "publishedAt": "2017-11-20T22:38:51.000Z",
            "channelId": "UCtxdtF8iCxZw593FSUIPrxg",
            "title": "Former Arizona DB Chuck Cecil recalls epic 100-yard pick-six in Territorial Cup",
            "description": "Chuck Cecil takes us through the intense Arizona-Arizona State rivalry, theTerritorial Cup and, specifically back to the 1986, when Cecil pulled off an epic 100-yard pick-six that deflated Tempe and led the 'Cats to a Territorial Cup victory.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/4yLyiYuRvdA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/4yLyiYuRvdA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/4yLyiYuRvdA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/4yLyiYuRvdA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/4yLyiYuRvdA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Pac-12 Networks",
            "tags": [
                "Arizona",
                "Football"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Former Arizona DB Chuck Cecil recalls epic 100-yard pick-six in Territorial Cup",
                "description": "Chuck Cecil takes us through the intense Arizona-Arizona State rivalry, theTerritorial Cup and, specifically back to the 1986, when Cecil pulled off an epic 100-yard pick-six that deflated Tempe and led the 'Cats to a Territorial Cup victory."
            }
        },
        "statistics": {
            "viewCount": "1648",
            "favoriteCount": "0"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/7QNpf5choD_OIfTeVsGBq7cC7fc\"",
        "id": "DZT0XbDHZsk",
        "snippet": {
            "publishedAt": "2017-06-21T17:52:36.000Z",
            "channelId": "UCmnlTWVJysjWPFiZhQ5uudg",
            "title": "How to Play \"Territorial Pissings\" by Nirvana on Guitar - Guitar Lesson",
            "description": "Follow Marty On Social Media!\nInstagram - http://www.instagram.com/martyschwartz\nTwitter - http://www.twitter.com/martyschwartz\nFacebook - http://www.facebook.com/martyschwartzofficial\nhttp://www.MartyMusic.com\n\n\nHey guys Marty here from MartyMusic! 2 new Nirvana lessons today! I hope you enjoy, also let me know what videos you would like to see in the comments section! \n\nThanks again,\nMarty\nhttp://www.MartyMusic.com\n\nThe Gear I Use:\nGuitar Strings: https://amzn.to/2LYtrQT\nGuitar Picks: https://amzn.to/2NaRgYN\nGuitar Cables: https://amzn.to/30oyvn5\nTuner: https://amzn.to/303wrFQ\nFavorite Practice Amp: https://amzn.to/3029ymb\nReverb Pedal: https://amzn.to/34Rs7rJ\nDelay Pedal: https://amzn.to/2Q9Bpfs\nCamera: https://amzn.to/2LpyvyM\nLens: https://amzn.to/2Namm2O\nComputer: https://amzn.to/30biTTQ\nSM57 Mic: https://amzn.to/308IT66",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/DZT0XbDHZsk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/DZT0XbDHZsk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/DZT0XbDHZsk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/DZT0XbDHZsk/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/DZT0XbDHZsk/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Marty Music",
            "tags": [
                "Marty Schwartz",
                "music",
                "guitar",
                "lessons",
                "marty music",
                "generic atlas feet",
                "Nirvana",
                "territorial pissings",
                "nirvana territorial pissings",
                "how to play nirvana on guitar",
                "guitar lesson for territorial pissings by Nirvana",
                "how to play territorial pissings on guitar",
                "kurt cobain guitar",
                "marty schwartz nirvana",
                "marty music nirvana",
                "martymusic",
                "dave grohl",
                "tutorial",
                "Nirvana tutorial"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "How to Play \"Territorial Pissings\" by Nirvana on Guitar - Guitar Lesson",
                "description": "Follow Marty On Social Media!\nInstagram - http://www.instagram.com/martyschwartz\nTwitter - http://www.twitter.com/martyschwartz\nFacebook - http://www.facebook.com/martyschwartzofficial\nhttp://www.MartyMusic.com\n\n\nHey guys Marty here from MartyMusic! 2 new Nirvana lessons today! I hope you enjoy, also let me know what videos you would like to see in the comments section! \n\nThanks again,\nMarty\nhttp://www.MartyMusic.com\n\nThe Gear I Use:\nGuitar Strings: https://amzn.to/2LYtrQT\nGuitar Picks: https://amzn.to/2NaRgYN\nGuitar Cables: https://amzn.to/30oyvn5\nTuner: https://amzn.to/303wrFQ\nFavorite Practice Amp: https://amzn.to/3029ymb\nReverb Pedal: https://amzn.to/34Rs7rJ\nDelay Pedal: https://amzn.to/2Q9Bpfs\nCamera: https://amzn.to/2LpyvyM\nLens: https://amzn.to/2Namm2O\nComputer: https://amzn.to/30biTTQ\nSM57 Mic: https://amzn.to/308IT66"
            }
        },
        "statistics": {
            "viewCount": "127032",
            "likeCount": "2809",
            "dislikeCount": "21",
            "favoriteCount": "0",
            "commentCount": "222"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/Upufoq3OHMAzv_2HEmEggiEXNgM\"",
        "id": "HhxAvWfF1UI",
        "snippet": {
            "publishedAt": "2019-05-22T11:17:44.000Z",
            "channelId": "UCovPYcSXHOgxESxTyZcastA",
            "title": "Chuck Pierce: War Within Your Boundaries",
            "description": "Deep insight from Chuck on our times and seasons, especially related to our assignments within our individual and territorial boundaries. Satan hates that we have boundaries and works to destroy them through unforgiveness. The enemy wants to flood in through those cracks and thwart our prophetic destiny in God. Don’t be ignorant of Satan’s devices (2 Corinthians 2:11). War within your boundaries. God has “determined [the] pre-appointed times and the boundaries of our dwellings.” (Acts 17:26). Like the Israelites, our promises lie within our boundaries, so learn to war where you have the most authority – within God’s boundaries for your life.\n\nENJOY!\n\nFull message can be found here: https://bit.ly/2JZMbAt\nNO COPYRIGHT INFRINGEMENT INTENDED.\nCopyright Disclaimer \nUnder Section 107 of the Copyright Act 1976, \nallowance is made for \"Fair use\" for purposes \nsuch as criticism, comment, news reporting, teaching, \nscholarship, and research. Fair use is a use permitted by\ncopyright statute that might otherwise be infringing. \nNon-profit, educational or personal\nuse tips the balance in favor of fair use.\n\nFor more videos, subscribe to King of Kings YouTube Channel here: https://bit.ly/2TRObAR\n\nIf this post is a blessing to you please \"like\", \"share” and “comment.” \n\nIf you need help with a personal problem email info@kingofkingswc.com.\nWe'd like to agree with you in prayer and offer whatever assistance we can provide.\n\nDonate to King of Kings here: http://www.kingofkingswc.com/donate/",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/HhxAvWfF1UI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/HhxAvWfF1UI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/HhxAvWfF1UI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/HhxAvWfF1UI/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/HhxAvWfF1UI/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "King of Kings Worship Center",
            "tags": [
                "Jesus",
                "Jesus Christ",
                "Bible",
                "Christian",
                "Christianity",
                "Holy Spirit",
                "Holy Ghost",
                "Pentecost",
                "Pentecostal",
                "Prophecy",
                "Prophesy",
                "Prophetic",
                "Gifts of the Spirit",
                "Miracles",
                "Salvation",
                "Deliverance",
                "Spiritual Warfare",
                "Intercession",
                "Prophetic Intercession",
                "Prayer",
                "Breakthrough",
                "Healing",
                "Chuck Pierce",
                "Glory of Zion",
                "GZI",
                "Bill Johnson",
                "Dutch Sheets",
                "Jane Hamon",
                "Bethel Redding",
                "It's Supernatural",
                "Shawn Bolz",
                "Sid Roth",
                "Karen Wheaton",
                "Kevin Zadai",
                "Jesus Culture",
                "Joel Osteen",
                "Joyce Meyer",
                "King of Kings"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Chuck Pierce: War Within Your Boundaries",
                "description": "Deep insight from Chuck on our times and seasons, especially related to our assignments within our individual and territorial boundaries. Satan hates that we have boundaries and works to destroy them through unforgiveness. The enemy wants to flood in through those cracks and thwart our prophetic destiny in God. Don’t be ignorant of Satan’s devices (2 Corinthians 2:11). War within your boundaries. God has “determined [the] pre-appointed times and the boundaries of our dwellings.” (Acts 17:26). Like the Israelites, our promises lie within our boundaries, so learn to war where you have the most authority – within God’s boundaries for your life.\n\nENJOY!\n\nFull message can be found here: https://bit.ly/2JZMbAt\nNO COPYRIGHT INFRINGEMENT INTENDED.\nCopyright Disclaimer \nUnder Section 107 of the Copyright Act 1976, \nallowance is made for \"Fair use\" for purposes \nsuch as criticism, comment, news reporting, teaching, \nscholarship, and research. Fair use is a use permitted by\ncopyright statute that might otherwise be infringing. \nNon-profit, educational or personal\nuse tips the balance in favor of fair use.\n\nFor more videos, subscribe to King of Kings YouTube Channel here: https://bit.ly/2TRObAR\n\nIf this post is a blessing to you please \"like\", \"share” and “comment.” \n\nIf you need help with a personal problem email info@kingofkingswc.com.\nWe'd like to agree with you in prayer and offer whatever assistance we can provide.\n\nDonate to King of Kings here: http://www.kingofkingswc.com/donate/"
            },
            "defaultAudioLanguage": "en"
        },
        "statistics": {
            "viewCount": "25622",
            "likeCount": "647",
            "dislikeCount": "23",
            "favoriteCount": "0",
            "commentCount": "20"
        }
    }
]
  const handleInput = event => {//saves Search bar value for later use
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  const handleVideoListClick = (value)=>{
      setTargetVideo(value);
      console.log({email:Auth.GetEmail(),action:'select',videoId:value});
      let data={email:Auth.GetEmail(),action:'select',videoId:value};
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
    let videoId = targetVideo;
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
                        videoId={targetVideo}
                        opts={opts}
                        onReady={e=>{handleVideoLog(e,"ready")}}                     // defaults -> noop
                        onPlay={e=>{handleVideoLog(e,"play")}}                        // defaults -> noop
                        onPause={e=>{handleVideoLog(e,"pause")}}                // defaults -> noop
                        onEnd={e=>{handleVideoLog(e,"end")}}                      // defaults -> noop
                        onError={e=>{handleVideoLog(e,"error")}}                    // defaults -> noop           // defaults -> noop
                    />

              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Youtube;
