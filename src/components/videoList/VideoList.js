import React from "react";
import "./VideoList.css";
import VideoCard from "./videCard/VideoCard";
import MainVideo from "./mainVideo/MainVideo";
const Video = ({ mainVideo, videos, onSelectVideo }) => {
  return (
    <div className="video-list">
      <MainVideo mainVideo={mainVideo} />
      <div className="recommended">
        {videos.map((vid, i) => (
          <VideoCard onSelectVideo={onSelectVideo} key={i} video={vid} />
        ))}
      </div>
    </div>
  );
};

export default Video;
