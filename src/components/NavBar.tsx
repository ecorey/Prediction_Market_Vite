import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import firework from '/home/ub/SUI_PROJECTS/Predictrix_new/vite-project/src/assets/works.gif';


import {ConnectButton} from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import '../index.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from 'react-router-dom';

import NavigationLinks from './NavLinks';



const theme = createTheme({
  typography: {
    fontFamily: "'Finger Paint', sans-serif",
  },
});




const NavBar = () => {
  return (

    
    <ThemeProvider theme={theme}> 
      <AppBar position="static" sx={{ backgroundColor: '#000000', elevation: 0, '.MuiToolbar-root': { backgroundColor: '#000000' } }}>
        <Toolbar>
          <img src={firework} alt="Firework" style={{ backgroundColor: '#000000', maxHeight: '50%', maxWidth: '50%' }} />
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <NavigationLinks /> {/* Use the NavigationLinks component */}
          </Box>
          <Typography variant="h1" component="div" sx={{ /* styles */ }}>
            PREDICTRIX
          </Typography>
          <ConnectButton style={{ padding: '10px 20px' }} />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
