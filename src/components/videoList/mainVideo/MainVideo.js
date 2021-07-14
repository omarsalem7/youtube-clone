import React from "react";
import "./MainVideo.css";
import Spinner from "../../spinner/Spinner";
const MainVideo = ({ mainVideo }) => {
  if (!mainVideo) return <Spinner />;
  const videoSrc = `https://www.youtube.com/embed/${mainVideo.id.videoId}`;

  return (
    <div className="main-video">
      <iframe
        frameBorder="0"
        height="100%"
        width="100%"
        title="youtube video"
        src={videoSrc}
      />
      <div className="info">
        <div className="title">{mainVideo.snippet.title} </div>
        <div className="username">{mainVideo.snippet.channelTitle} </div>
      </div>
    </div>
  );
};

export default MainVideo;
