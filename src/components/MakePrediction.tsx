import { useState } from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useWallet } from '@suiet/wallet-kit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PACKAGE, CLOCK, GAME_ID } from '../../scripts/config.ts';
import { TransactionBlock } from "@mysten/sui.js/transactions";


const theme = createTheme({
  typography: {
    fontFamily: "'Finger Paint', sans-serif",
  },
});

const textFieldStyle = {
  input: {
    color: "white", 
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif", 
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    borderRadius: "4px", 
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
  },
};

const MakePrediction = () => {
  const { connected, signAndExecuteTransactionBlock } = useWallet();
  const [republican, setRepublican] = useState('');
  const [democrat, setDemocrat] = useState('');

  const handleRepublicanChange = (value: string) => {
    setRepublican(value);
    const numValue = Math.max(parseInt(value, 10) || 0, 0);
    setDemocrat(`${538 - numValue}`);
  };

  const handleDemocratChange = (value: string): void => {
    setDemocrat(value);
    const numValue: number = Math.max(parseInt(value, 10) || 0, 0);
    setRepublican(`${538 - numValue}`);
  };

  const handlePrediction = async () => {
    if (!connected) {
      alert("Please connect your wallet.");
      return;
    }

    const republicanValue = parseInt(republican, 10) || 0;
    const democratValue = parseInt(democrat, 10) || 0;
    if (republicanValue + democratValue !== 538) {
      alert("The total should be 538.");
      return;
    }

    const txb = new TransactionBlock();

    txb.setGasBudget(10000000);
    const [coin] = txb.splitCoins(txb.gas, [txb.pure(1000000)]);
    txb.moveCall({
      target: `${PACKAGE}::kiosk_practice::make_prediction`,
      arguments: [txb.pure.u64(republicanValue), coin, txb.object(GAME_ID), txb.object(CLOCK)],
    });

    try {
      const predictionData = await signAndExecuteTransactionBlock({
        transactionBlock: txb,
      });
      console.log('Prediction made!', predictionData);
      alert(`Congrats! Your prediction has been made! \n Digest: ${predictionData.digest}`);
    } catch (error) {
      console.error('Sorry, the prediction failed to be created', error);
      alert("Sorry, the prediction failed to be created.");
    }
  };

  if (!connected) {
    return null; 
  }

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
        <Typography variant="h4" gutterBottom sx={{ color: 'blue' }}>
          Make Prediction
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pb: 2 }}>
          <TextField
            id="input-republican"
            variant="outlined"
            placeholder="REPUBLICANS"
            value={republican}
            onChange={(e) => handleRepublicanChange(e.target.value)}
            InputProps={{ style: textFieldStyle.input }}
            InputLabelProps={{ style: { color: 'white' } }}
          />
          <Typography variant="h6">/</Typography>
          <TextField
            id="input-democrat"
            variant="outlined"
            placeholder="DEMOCRATS"
            value={democrat}
            onChange={(e) => handleDemocratChange(e.target.value)}
            InputProps={{ style: textFieldStyle.input }}
            InputLabelProps={{ style: { color: 'white' } }}
          />
          <Button variant="outlined" onClick={handlePrediction} sx={{ color: 'white', borderColor: 'white' }}>Make Prediction</Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MakePrediction;
