####################################################
###################  OUTLINE #######################
####################################################

The structure of the program is as follows:
    1. GAME LOGIC
    2. INIT / TRANSFER POLICY LOGIC
    3. PREDICTION LOGIC
    4. KIOSK LOGIC
    5. WITHDRAW FUNCTIONS
    6. TESTS



1) GAME LOGIC
    - EPOCH struct to hold game times
    - GameOwnerCap that goes to sender of the init function
    - Game struct to hold a game instance
    - Winner event emitted when a winner is claimed
    - function to create a new game instance
    - function to start the game and allows predictions to be made
    - function to close the game/ sets the result and allows the report winner function to be called
    - function to claim the winner within timeframe by ref, add event to mark the winner
    - function to set predict epoch
    - funciton to set report epoch



2) INIT / TRANSFER POLICY LOGIC
    - OTW for the init function4
    - Registry struct that will hold the transfer policy
    - function for the init  that creates the transfer policy and stores it in the regisry which is a shared object
    - function that adds the royalty rule to the transfer policy



3) PREDICTION LOGIC
    - PredictionMade event emitted when a prediction is made
    - Prediction struct
    - function to make a prediction and lock it in the users kiosk, also emits an event for the prediction



4) KIOSK LOGIC
    - function that creates a new kiosk for a user that can hold the predictions
    - function that burns the prediction from the kiosk and deletes the prediction
    - function that lists the prediction in the kiosk for sale
    - functioin that delists the prediction from the kiosk
    - function to purchase a prediction from another user
    - funciton to withdraw from a personal kiosk
    - function to withdraw from the transfer policy



5) WITHDRAW FUNCTIONS
    - function to withdraw from a personal kiosk
    - function to withdraw from the transfer policy
    - function to withdraw from game balance



6) Tests
    - test the init function
    - test the sender has the game owner cap
    - test making a prediction





####################################################
###################  FLOW ##########################
####################################################

when the init function is called, it creates the transfer policy and stores it in the regisry which is a shared object
and transfers the transfer policy cap and game owner cap to the sender
the game owner cap is then used to start the game and close the game
the transfer policy is used to enforce a 5% royalty fee when making a prediction
the predictions are held and locked in a users kiosk and they can be listed/ delisted, purchased, and burned.
the game owner cap is used to close the game and allow the claim the winner function to be called
the winner can then claim the pot and the game instance is deleted

####################################################
####################################################
####################################################