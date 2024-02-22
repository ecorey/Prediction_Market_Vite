import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import cn from 'classnames'; 

import firework from '/home/ub/SUI_PROJECTS/Predictrix_new/vite-project/src/assets/works.gif';


import {ConnectButton} from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import '../index.css'





const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000', elevation: 0 }}>
      <Toolbar>
        {/* Embed Giphy iframe */}
        <img src={firework} alt="Firework" style={{ maxHeight: '50%', maxWidth: '50%' }} />
        
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
        <ConnectButton/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
