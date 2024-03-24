import { getFullnodeUrl, SuiClient, SuiHTTPTransport  } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import walletDev from './dev-wallet.json' assert { type: 'json' };

import { WebSocket } from 'ws';

import {  PACKAGE, PREDICT_START_TIME, PREDICT_END_TIME, REPORT_START_TIME, REPORT_END_TIME  } from './config.js';

// generate a keypair
const privateKeyArray = walletDev.privateKey.split(',').map(num => parseInt(num, 10));
const privateKeyBytes = new Uint8Array(privateKeyArray);
const keypairdev = Ed25519Keypair.fromSecretKey(privateKeyBytes);



// client
const client = new SuiClient({
    transport: new SuiHTTPTransport({
        url: getFullnodeUrl('testnet'),
        WebSocketConstructor: WebSocket
    }),
});



(async () => {
    try {
     
        
        // create Transaction Block
        const txb = new TransactionBlock();


        txb.setGasBudget(10000000);




        txb.moveCall({
            target: `${PACKAGE}::predictrix::set_predict_epoch`,
            arguments: [ txb.pure.u64(PREDICT_START_TIME), txb.pure.u64(PREDICT_END_TIME) ],
        });


        txb.moveCall({
            target: `${PACKAGE}::predictrix::set_report_epoch`,
            arguments: [ txb.pure.u64(REPORT_START_TIME), txb.pure.u64(REPORT_END_TIME) ],
        });


        console.log()



        // finalize the transaction block
        let txid = await client.signAndExecuteTransactionBlock({
            signer: keypairdev,
            transactionBlock: txb,
        });
        


        // log the transaction result
        console.log(`Transaction result: ${JSON.stringify(txid, null, 2)}`);
        console.log(`success: https://suiexplorer.com/txblock/${txid.digest}?network=testnet`);



        console.log(`END OF SCRIPT`);

    } catch (e) {
        console.error(`error: ${e}`);
    }
})();




