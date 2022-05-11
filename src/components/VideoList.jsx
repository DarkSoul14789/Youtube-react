import React from "react";
import { Grid } from '@material-ui/core';
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect })=>{
  const listOfVideos = videos.map((video, key) => <VideoItem onVideoSelect={onVideoSelect} key={key} video={video} />);
  return (
    <Grid constainer spacing={10}>
      {listOfVideos}
    </Grid>
  )  
}
export default VideoList;