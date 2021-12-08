import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import VideoList from "./components/videoList/VideoList";
import youtube from "./components/youtube/Youtube";

function App() {
  const [state, setVideo] = useState({ mainVideo: null, videos: [] });
  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 8,
        key: "",
        q: searchTerm,
      },
    });
    console.log(response.data.items);
    setVideo({
      mainVideo: response.data.items[0],
      videos: response.data.items,
    });
  };
  useEffect(() => {
    handleSubmit("react js");
  }, []);
  const onSelectVideo = (video) => {
    setVideo({ ...state, mainVideo: video });
  };
  return (
    <div className="App">
      <Navbar onSubmitForm={handleSubmit} />
      <VideoList
        mainVideo={state.mainVideo}
        onSelectVideo={onSelectVideo}
        videos={state.videos}
      />
    </div>
  );
}

export default App;
