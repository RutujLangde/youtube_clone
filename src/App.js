import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

 
import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from './components';


const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetails />} />
        <Route path='/channel/:id' element={<ChannelDetails />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  )
}

export default App
