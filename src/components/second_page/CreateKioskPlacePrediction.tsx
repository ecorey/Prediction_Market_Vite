import { useState, useEffect } from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useWallet } from '@suiet/wallet-kit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TransactionBlock} from '@mysten/sui.js/transactions';
import { KioskClient, Network, KioskTransaction } from '@mysten/kiosk';
import { PACKAGE, CLOCK, GAME_ID } from '../../../scripts/config.ts';
import { ITEMTYPE, PREDICTION_TWO } from '../../../scripts/config.js'; 
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



const CreateKioskPlacePrediction = () => {

  const { connected, account, signAndExecuteTransactionBlock } = useWallet();

  useEffect(() => {
    if (connected) {
      console.log(account?.address);
    }
  }, [connected, account]);





  const [userPredictionId, setUserPredictionId] = useState('');

  const handleCreateAndPlace = async () => {

    if (!connected || !userPredictionId) {
      alert("Please connect your wallet and enter a prediction ID.");
    } 

    // create Transaction Block
    const txb = new TransactionBlock();
      

    // create Kiosk TxBlock
    const kioskTx = new KioskTransaction({ transactionBlock: txb, kioskClient });


    txb.setGasBudget(10000000);


    // create a new kiosk public shared kiosk
    kioskTx.create();

    const item = userPredictionId;
    const itemType = ITEMTYPE;

    
    // kioskTx
    //   .place({
    //     item,
    //     itemType,
    //   })
    //   .finalize();
  
    // how to get the wallet pub key
    kioskTx.shareAndTransferCap("0x4a75b7e9852292171621404a75ea7ffe87faf231fc3b9778f9e9de75f8e618f3");



    




    // Sign and execute transaction block.
    await signAndExecuteTransactionBlock({ transactionBlock: txb });

   

  




   
  
    
    setUserPredictionId('');



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
      }}>

        <Typography variant="h4" gutterBottom>
          Create Kiosk & Place Prediction
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
        <Button
          variant="contained"
          onClick={handleCreateAndPlace}
          disabled={!connected}
        >
          Place Prediction
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default CreateKioskPlacePrediction;
