import React from "react"
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect })=>{
  // const url = `https://www.youtube.com/embed/${video.id}`
  return (
    <Grid item xs={12}>
      <Paper style={{display: 'flex', alignItems:'center', cursor: 'pointer'}} onClick={()=>onVideoSelect(video)}>
        {/* <a href={url}></a> */}
        <img src={video.snippet.thumbnails.medium.url} alt="Video recommendations thumbnail" style={{marginRight: '20px'}} />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  )
}
export default VideoItem;