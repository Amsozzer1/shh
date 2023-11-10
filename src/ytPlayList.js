import * as React from 'react';
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import Box from '@mui/material/Box';
import DenseAppBar from './menu_bar'
const API_KEY = 'AIzaSyAmXC1VLdeYR7COMirH-jUfYML4MRfYD1U';
const LIST = 'PL0Z67tlyTaWphlJ8dod2fSFGmBlUW_KJJ';
export default function playlist() {

    

    
    return (
        <div style={{position:'sticky',backgroundColor: '#FFF9C4'}}>
        <DenseAppBar/>
        <h1 style={{textAlign:'center'}}>Songs for my Love!</h1>
        <Box sx={{margin:'5%'}}>
        <YouTubePlaylist
        apiKey={API_KEY}
        playlistId={LIST}
        uniqueName='myPlaylist'
        
        
      />
        </Box>
        
        </div>
    );
    }