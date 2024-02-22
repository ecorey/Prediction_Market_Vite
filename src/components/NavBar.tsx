import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import cn from 'classnames'; 


import {ConnectButton} from '@suiet/wallet-kit';


const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000', elevation: 0 }}>
      <Toolbar>
        {/* Embed Giphy iframe */}
        <iframe src="https://giphy.com/embed/jWcQLzQUa6rQc" width="480" height="252" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h1"
            component="div"
            className={cn("px-2 py-2 m-2 pixelify_sans")} 
            sx={{ flexGrow: 1, textAlign: 'center', textShadow: '2px 2px 4px rgba(255, 165, 0, 0.8)' }} 
          >
            PREDICTRIX
          </Typography>
        </Box>
        <Button variant="outlined" sx={{ border: '1px solid', marginRight: '8px' }}>
          Connect Wallet
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
