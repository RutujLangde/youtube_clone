import { Stack, Box } from "@mui/material";

import ChannelCart from "./ChannelCart";
import VideCart from "./VideCart";


const Videos = ({videos,direction}) => { 
 
    
  return (
    <Stack direction={direction || "row"} flexWrap='wrap' justifyContent='start' gap={2} >
        {videos.map((item, idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideCart video={item} /> }
                {item.id.channelId && <ChannelCart ChannelDetails={item} /> }
            </Box>
        ))}
    </Stack>
    
  )
}

export default Videos
