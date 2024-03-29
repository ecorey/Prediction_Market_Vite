import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useWallet } from '@suiet/wallet-kit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TransactionBlock} from '@mysten/sui.js/transactions';
import { KioskClient, Network, KioskTransaction } from '@mysten/kiosk';
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



const CreatePlaceKiosk = () => {

  const { connected, account, signAndExecuteTransactionBlock } = useWallet();



  const handleCreateAndPlace = async () => {

    if (!connected  ) {
      alert("Please connect your wallet");
    } 

    // create Transaction Block
    const txb = new TransactionBlock();
      

    // create Kiosk TxBlock
    const kioskTx = new KioskTransaction({ transactionBlock: txb, kioskClient });


    txb.setGasBudget(10000000);




    // create a new kiosk public shared kiosk
    kioskTx
    .createPersonal(true) 
    .place({
        itemType: '0xeee834a8c14dda5c0722cb99470cb9613ec9aad3ac343476c910933c7eb2952b::kiosk_practice::Prediction',
        item: '0x950601fc797212a670e15d4ba17bc7a9e94f89029e75fd6e2d56d81203ce50c1',
    })
    .finalize();

    
    
    


    // Sign and execute transaction block.
    await signAndExecuteTransactionBlock({ transactionBlock: txb });

   


    



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
        color: 'red',
      }}>

        <Typography variant="h4" gutterBottom>
          Create Place Kiosk 
        </Typography>
        
        <Button
          variant="contained"
          onClick={handleCreateAndPlace}
          disabled={!connected}
        >
           Create Place Kiosk
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default CreatePlaceKiosk;
