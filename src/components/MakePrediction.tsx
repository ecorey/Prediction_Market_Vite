// Import necessary libraries and components
import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import cn from 'classnames';
import { WebSocket } from 'ws';
import { useWallet } from '@suiet/wallet-kit';
import { getFullnodeUrl, SuiClient, SuiHTTPTransport  } from "@mysten/sui.js/client";
import { TransactionBlock } from '@mysten/sui.js/transactions';
import {  PACKAGE, CLOCK  } from '../../scripts/config.ts';






const MakePrediction = () => {
  const { connected } = useWallet();

  const [republican, setRepublican] = useState<string>('');
  const [democrat, setDemocrat] = useState<string>('');


  // Ensure value is a positive integer or fallback to 0
  const toUint = (value: string): number => {
    const num = parseInt(value, 10);
    return isNaN(num) || num < 0 ? 0 : num;
  };


  // input boxes will always be A + B = 538
  const handleInput = (setValueOther: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    const numValue = toUint(value);
    setValueOther((538 - numValue).toString());
  };



  const handlePrediction = async () => {
    // only the first input box is needed as A + B = 538
    if (republican && democrat) {


      // client
      const client = new SuiClient({
        transport: new SuiHTTPTransport({
          url: getFullnodeUrl('testnet'),
        }),
      });



      const wallet = useWallet();

      if (!wallet.connected) return
  
      
      const txb = new TransactionBlock();
      const packageObjectId = `${PACKAGE}`;


      txb.moveCall({
        target: `${packageObjectId}::kiosk_practice::make_prediction`,
        arguments: [txb.pure.u64(333), txb.object(CLOCK)],
      });



      try {
    
        const predictionData = await wallet.signAndExecuteTransactionBlock({
          transactionBlock: txb
        });


        console.log('prediction made!', predictionData);

        

      } catch (e) {
          console.error('sorry the prediction failed to be created', e);
      }

    


    
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
          <TextField
            id="input-a"
            variant="outlined"
            placeholder="REPUBLICANS"
            value={republican}
            onChange={(e) => {
              const value = e.target.value;
              setRepublican(value);
              handleInput(setDemocrat, value);
            }}
          />
          <Typography variant="h6">/</Typography>
          <TextField
            id="input-b"
            variant="outlined"
            placeholder="DEMOCRATS"
            value={democrat}
            onChange={(e) => {
              const value = e.target.value;
              setDemocrat(value);
              handleInput(setRepublican, value);
            }}
          />

          <Button variant="outlined" onClick={handlePrediction}>Make Prediction</Button>
        </Box>
      </Box>
    );
  }
};

export default MakePrediction;















