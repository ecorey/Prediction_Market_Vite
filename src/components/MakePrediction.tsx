import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField"; 
import cn from 'classnames'; 

import { useWallet, ConnectModal } from '@suiet/wallet-kit';


const MakePrediction = () => {

  const {connected} = useWallet()
 

  if (connected) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        p: 2, 
        border: '1px solid white',  
        boxShadow: '0px 0px 10px orange', 
        borderRadius: '4px', 
        m: 1, 
        width: '100%',  
      }}>
        <Typography className={cn("px-2 py-2 m-2 pixelify_sans")} variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', pb: 2, color: 'red' }}>
          Make Prediction
        </Typography>


        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pb: 2 }}>
          <TextField
            id="input-a"
            variant="outlined"
            placeholder="REPUBLICANS"
            sx={{ 
              width: 'calc(50% - 12px)',
              backgroundColor: 'rgba(128, 128, 128, 0.6)',
              '& .MuiOutlinedInput-input': {
                backgroundColor: 'rgba(128, 128, 128, 0.6)', 
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },
                '&:hover fieldset': {
                  borderColor: 'white', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'orange', 
                },
              },
            }}
          />
          <Typography variant="h6" component="span">
            /
          </Typography>
          <TextField
            id="input-b"
            variant="outlined"
            placeholder="DEMOCRATS"
            sx={{ 
              width: 'calc(50% - 12px)',
              backgroundColor: 'rgba(128, 128, 128, 0.6)', 
              '& .MuiOutlinedInput-input': {
                backgroundColor: 'rgba(128, 128, 128, 0.6)', 
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },
                '&:hover fieldset': {
                  borderColor: 'white', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'orange', 
                },
              },
            }}
          />
          <Button variant="outlined">Make Prediction</Button>
        </Box>

        
        
      </Box>
    );
  }
  };


export default MakePrediction;
