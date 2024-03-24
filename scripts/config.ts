// ###################################
// ############CONFIG#################
// ###################################




// ORDER OF SCRIPTS AFTER PUBLISHING PACKAGE 

// 1. node subscribe_events.js [FIX]


// 2. node current_time.js (use to set PREDICT_START_TIME in config.js)
// 3. node start_game.js (use to set GAME_ID in config.js)
// 4. node game_balance.js (check before adding to game balance)
// 5. node add_balance_to_game.js (set COIN_TO_ADD in config.js)
// 6. node game_balance.js (check after adding the game balance)


// 7. node withdraw_bal_from_game.js [FIX]

// 8. node make_prediction.js
// 9. node create_kiosk_and_place.js
// 10. node kiosk_list_prediction.js
// 11. node kiosk_delist_prediction.js




//   KIOSK SCRIPTS [TODO]
// - purchase with another wallet
// - withdraw balance from kiosk and transfer policy
//   WINNER SCRIPTS [TODO]
// - get winner





// 98. node close_game.js 
// 99. node delete_owner_cap.js 







// ###################################
// ############CONSTS#################
// ###################################

export const CLOCK = "0x6";


export const DEV_WALLET = "0x07095af51002db0e9be284b8dab97263f77fec2a1be68cd42b7dd2358a6eccdd";
export const PACKAGE_PUBLISHER_WALLET = "0x07095af51002db0e9be284b8dab97263f77fec2a1be68cd42b7dd2358a6eccdd";

export const DEV_WALLET_SUIET = "0x8765e12c4e37aa222a40986bb3d8b893d1c0b3483b617974954e9d860436506f";

// created in init
export const PACKAGE = "0x9a36f7ee14fad9b13fc08a17c4fa065ce874e58966cdd6265e543c58d871c72e";
export const START_GAME_CAP = "0xfe80f53dd0886dd207c1e823ec4c9f16cf50d86289c9a15ed1e138a5852645f4";
export const END_GAME_CAP = "0x4f9aa794a64ad41f05b9634dd94863ee7ab291a1323bce48aa4c6210fa68e05c";
export const GAME_OWNER_CAP = "0xf419f470ec657c20e890fd23b4fac55b1314e143ce1116a028a9052c735016d8";
export const TRANSFER_POLICY  = "0x485b68d0af79b270a8bee17627eebd0cd28fcb93bc80706736ba640e54b6d4ec";
export const TRANSFER_POLICY_CAP = "0x650776b2faa01d902032e55fde9f23a800cee5825e36aee1cfffcf03c67b47c6";
export const PUBLISHER = "";
export const UPGRADE_CAP = "";
export const ITEMTYPE = `${PACKAGE}::kiosk_practice::Prediction`;


// START GAME SCRIPT
export const GAME_PRICE = "1000000";


// for demo testing quick reference
// timestamp_ms plus 2 minutes is + 120,000 ms
// 4 mins + 240,000 ms
// 5 mins + 300,000 ms
// 10 mins + 600,000 ms
// 1 hour + 3,600,000 ms
// (election event on Nov. 5)
// get from get time event log
export const PREDICT_START_TIME = 1711299758038;

// November 3, 2024, at 12:00 AM (GMT)
export const PREDICT_END_TIME = 1711300058038;

// November 10, 2024 at 12:00 AM (GMT)
export const REPORT_START_TIME = 1711300058038;

// February 2, 2024, at 12:00 AM (GMT)
export const REPORT_END_TIME = 1711302958346;



export const IS_GAME_OPEN = true;


//CLOSE GAME SCRIPT
// game id
export const GAME_ID = "";



// ADD BALANCE TO GAME SCRIPT
export const COIN_TO_ADD = "";




// GAME RESULT SCRIPT
export const GAME_RESULT = "223";



// PREDCITION SCRIPT
export const PREDICTION = "";
export const PREDICTION_ID = "";

export const PREDICTION_TWO = "";


export const GUESS = 444;



// KIOSK SCRIPT
export const KIOSK = "";
export const KIOSK_OWNER_CAP = "";




// WALLETS

export const devWalletPublicKeyRef = "0xb3d4cb714181fec39c22d820c963da9cfac970d3ab77c464b0dea06ce673c3e5";

export const walletOneRef = "0x6dc3f9438f890ff4031f6a2151b3ca02aebf9e1522f0014a956dd8ef067e3b01";

export const walletTwoRef = "0xe5f5e09892328ff278b473f485cbf85cef8a9958112023c84126aec3d32b8114";

export const walletThreeRef = "0x07095af51002db0e9be284b8dab97263f77fec2a1be68cd42b7dd2358a6eccdd";

export const walletFourRef = "0xf84965aee90c0e4d56a9658d78ecbc01e7908cab78cad6a62bcc558171cd2b34";

export const walletFiveRef = "0x95b2e05ab1b7f9f53f7085069dd5b7f9d7d1055e406605791d87b34253bca1cb";