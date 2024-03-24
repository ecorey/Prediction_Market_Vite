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
export const PACKAGE_PUBLISHER_WALLET = "";

export const DEV_WALLET_SUIET = "";

// created in init
export const PACKAGE = "";
export const START_GAME_CAP = "";
export const END_GAME_CAP = "";
export const GAME_OWNER_CAP = "";
export const TRANSFER_POLICY  = "";
export const TRANSFER_POLICY_CAP = "";
export const PUBLISHER = "";
export const UPGRADE_CAP = "";
export const ITEMTYPE = `${PACKAGE}::predictrix::Prediction`;


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




