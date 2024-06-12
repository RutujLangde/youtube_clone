import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";



import { fetchFromAPI } from "../utils/fetchFromApi";
import Videos from "./Videos";


const SearchFeed = () => {

 const [videos, setVideos] = useState([]);
 const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
   

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
        <Box sx={{ mr: { sm: '110px' } }}/>
        <Videos videos={videos} />
      </Box>

  )
}

export default SearchFeed

