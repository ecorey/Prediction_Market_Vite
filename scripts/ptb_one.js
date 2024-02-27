import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { MIST_PER_SUI } from '@mysten/sui.js/utils';



const suiClient = new SuiClient({ url: getFullnodeUrl('testnet')});


const txb = new TransactionBlock();


const ADDRESS_User = '0xf0e708980e6c1c65405ddd75ebe57bba61fc9dfd91b4ad55cf88be8df26e5472';

const balance = (balance) => {
	return Number.parseInt(balance.totalBalance) / Number(MIST_PER_SUI);
};

const acctBalance = await suiClient.getBalance({
	owner: ADDRESS_User,
});


// createTextSpanFromBounds.moveCall({
//     target: '0x0::predictrix::make_prediction',
//     arguments: [ ],
// });


console.log(
    `prediction made by ${ balance(acctBalance) }`
)