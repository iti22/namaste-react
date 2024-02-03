import React, { useEffect } from "react";
import { YOUTUBE_VIDEO_URL } from "../Utils/constants";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = data.json();
    console.log(json);
  };
  return <div>VideoContainer</div>;
};

export default VideoContainer;
