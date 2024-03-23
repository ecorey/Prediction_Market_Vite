import { useState } from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useWallet } from '@suiet/wallet-kit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TransactionBlock} from '@mysten/sui.js/transactions';
import { KioskClient, Network, KioskTransaction } from '@mysten/kiosk';
import { PACKAGE, CLOCK, GAME_ID } from '../../../scripts/config.ts';
import { ITEMTYPE } from '../../../scripts/config.js'; 
import { getFullnodeUrl, SuiClient, SuiHTTPTransport } from "@mysten/sui.js/client";



const theme = createTheme({
  typography: {
    fontFamily: "'Finger Paint', sans-serif",
  },
});


// client
const client = new SuiClient({
  transport: new SuiHTTPTransport({
      url: getFullnodeUrl('testnet'),
  }),
});



// kiosk client
const kioskClient = new KioskClient({
  client, 
  network: Network.TESTNET,
});

const DeListPrediction = () => {
  const { connected, signAndExecuteTransactionBlock } = useWallet();
  const [userPredictionId, setUserPredictionId] = useState('');
  const [kioskId, setKioskId] = useState(''); 
  const [capId, setCapId] = useState('');

  const handle = async () => {
    if (!connected || !userPredictionId) {
      alert("Please connect your wallet and enter a prediction ID.");
      

      // create Transaction Block
      const txb = new TransactionBlock();
        

      // create Kiosk TxBlock
      const kioskTx = new KioskTransaction({ transactionBlock: txb, kioskClient });


      // create a new kiosk public shared kiosk
        kioskTx.create();


        

        kioskTx.finalize();

      

      console.log(`Prediction taken from kiosk`);

  
      
      try {
        const result = await signAndExecuteTransactionBlock({
          transactionBlock: txb,
        });
  
        console.log('Prediction Taken', result);
        alert('Prediciton Taken!');
      } catch (error) {
        console.error('Failed to take prediction', error);
        alert('Failed to take prediciton');
      }
      








      return;
    }

   

    alert("Prediction Taken from kiosk.");
    
    
    setUserPredictionId('');
    setKioskId('');
    setCapId('');
  };

  return (
    <ThemeProvider theme={theme}>
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
        color: 'white',
      }}>
        <Typography variant="h4" gutterBottom>
         DeList Prediction (must be in KIOSK)
        </Typography>
        <TextField
          label="Prediction ID"
          placeholder="Enter your prediction ID" 
          variant="outlined"
          value={userPredictionId}
          onChange={(e) => setUserPredictionId(e.target.value)}
          sx={{
            mb: 2,
            width: '100%',
            "& .MuiOutlinedInput-root": {
              
              "& fieldset": {
                
                borderColor: "white", 
              },
              "&:hover fieldset": {
                borderColor: "lightblue", 
              },
              "&.Mui-focused fieldset": {
                borderColor: "lightblue", 
              },
            },
            "& .MuiInputBase-input": {
              color: "white", 
            },
          }}
        />
        <TextField
          label="Kiosk ID"
          placeholder="Enter your Kiosk ID" 
          variant="outlined"
          value={userPredictionId}
          onChange={(e) => setKioskId(e.target.value)}
          sx={{
            mb: 2,
            width: '100%',
            "& .MuiOutlinedInput-root": {
              
              "& fieldset": {
                
                borderColor: "white", 
              },
              "&:hover fieldset": {
                borderColor: "lightblue", 
              },
              "&.Mui-focused fieldset": {
                borderColor: "lightblue", 
              },
            },
            "& .MuiInputBase-input": {
              color: "white", 
            },
          }}
        />
        <TextField
          label="Kiosk Cap ID"
          placeholder="Enter your Kiosk Cap ID" 
          variant="outlined"
          value={userPredictionId}
          onChange={(e) => setCapId(e.target.value)}
          sx={{
            mb: 2,
            width: '100%',
            "& .MuiOutlinedInput-root": {
              
              "& fieldset": {
                
                borderColor: "white", 
              },
              "&:hover fieldset": {
                borderColor: "lightblue", 
              },
              "&.Mui-focused fieldset": {
                borderColor: "lightblue", 
              },
            },
            "& .MuiInputBase-input": {
              color: "white", 
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handle}
          disabled={!connected}
        >
          DeList Prediction
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default DeListPrediction;
