import React from "react";
import "./VideoCard.css";
const VideoCard = ({ video, onSelectVideo }) => {
  return (
    <div className="box" onClick={() => onSelectVideo(video)}>
      <img
        alt="1"
        width="100%"
        height="100%"
        src={video.snippet.thumbnails.high.url}
      />
      <div className="info">
        <div className="title">{video.snippet.title} </div>
        <div className="username">{video.snippet.channelTitle} </div>
      </div>
    </div>
  );
};

export default VideoCard;
