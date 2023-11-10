import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function DenseAppBar() {
const navigate = useNavigate();
const menuItems = [
  { label: 'Photos', path: '/images' },
  { label: 'Songs', path: '/playlist' },
  { label: 'My Love', path: '/poems' },
  { label: 'Letter To You', path: '/letter' },
  // Add more items as needed
];
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky" top={0} sx={{ backgroundColor: ' black', boxShadow: 'none' }}>
      <Toolbar variant="dense" sx={{ justifyContent: 'space-around' }}>
        {menuItems.map((item, index) => (
          <Typography key={index} variant="h6" color="primary" component="div">
            <Button
              onClick={() => navigate(item.path)}
              sx={{ width: '100%', height: '100%', fontSize: '20px', color: 'white' }}
            >
              {item.label}
            </Button>
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  </Box>
  );
}
