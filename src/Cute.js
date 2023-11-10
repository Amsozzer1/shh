import * as React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import DenseAppBar from './menu_bar';
import StandardImageList from './Gallery';



export default function CuteApp() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#FFF9C4', minHeight: '100vh' }}>
      
        <DenseAppBar/>
      {/* Your main content goes here */}
      
      <Box sx={{ p: 2, color: '#333333' }}>
      
        <Typography variant="h4">Welcome to the Cute App!</Typography>
        <Typography variant="body1">This is a soft and sweet place for you and your girlfriend.</Typography>
        <StandardImageList />
      </Box>
    </Box>
  );
}
