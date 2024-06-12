import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromApi";
import ChannelCard from "./ChannelCart";
import Videos from "./Videos";



const ChannelDetails = () => {
  
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  const {id} = useParams();
  
 

  useEffect(() => {
    fetchFromAPI(`channels?&id=${id}`)
    .then((data) => {
      setChannelDetail(data.items[0]);
    }
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data.items));
  },[id])

  return (
    <Box minHeight="95vh" sx={{justifyContent:'center', alignContent:'center'}}>
      <Box sx={{justifyContent:'center', alignContent:'center'}}>
      <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard ChannelDetails={channelDetail} marginTop='-93px'/>
        
        <Box p={2} display="flex" sx={{justifyContent:'center', alignContent:'center'}}>
        <Box sx={{ mr: { sm: '110px'} }}/>
          <Videos videos= {videos} />
        </Box>
        
      </Box>
      </Box>
  )
}

export default ChannelDetails

