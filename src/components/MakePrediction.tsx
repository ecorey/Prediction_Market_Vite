// Import necessary libraries and components
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import cn from 'classnames'; 
import { useWallet } from '@suiet/wallet-kit';

import { TransactionBlock } from '@mysten/sui.js/transactions';



const txb = new TransactionBlock();



const MakePrediction = () => {

  const { connected } = useWallet();



  const handlePrediction = async () => {
    const demoInput = document.getElementById('input-a') as HTMLInputElement;
    const repubInput = document.getElementById('input-b') as HTMLInputElement;
    if (demoInput && repubInput) {
      const demoValue = demoInput.value;
      const repubValue = repubInput.value;


      
      txb.moveCall({
        target: '0x0::predictrix::make_prediction',
        arguments: [
          { index: 0, kind: "Input", type: "pure", value: demoValue },
          { index: 1, kind: "Input", type: "pure", value: repubValue }
        ],
      });
      
    }
  };



 

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
        <Typography className={cn("px-2 py-2 m-2 pixelify_sans")} variant="h4" gutterBottom>
          Make Prediction
        </Typography>


        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pb: 2 }}>

          
          <TextField id="input-a" variant="outlined" placeholder="REPUBLICANS" />
          <Typography variant="h6">/</Typography>
          <TextField id="input-b" variant="outlined" placeholder="DEMOCRATS" />

          <Button variant="outlined" onClick={handlePrediction}>Make Prediction</Button>

        </Box>
      </Box>
    );
  }
};

export default MakePrediction;
