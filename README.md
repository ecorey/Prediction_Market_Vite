
# Predictrix Sui Move Predictive Market Game using Kiosk





---
---
---

Predictrix is a decentralized predictive game where a user is able to place a bet on the upcoming US presidential election. Predictrix leverages the SUI blockchain and SUI Move to implement security and low fee rates. The project leverages the power of SUI Kiosk to provide users the ability to place, take, list, delist, purchase, or withdraw a balance from a personal kiosk after making a prediction. 


The game logic is as follows. First the game admin publishes the contract. When the init function runs it will transfer the game_owner, start_time, and end_time caps to the publisher that are used to start the game.  The current time is seen in the event emitted from running the current_time script. The game admin then uses the start_game_cap and end_game_cap to set the game times by running the get_epochs script.  After the times are set the game admin runs the start_game script which starts the game and allows users to make a prediction through the front end.  


A user makes a prediction by going to the front end and entering a value in the make prediction box. The game is based on the US presidential election and the game determines a winner by the user guessing the exact electoral outcome for the election. In the US election the total for the electoral count is equal to 538, so on the front end the user only needs to enter a value in one box and the other box auto fills the value. Also, because the equation is A + B = 538, the game package also only needs to check one value and pull one result.  


After a user has placed a prediction and has the prediction object in their wallet, they can they use the id to place, take, list, or delist a prediction object in their kiosk. On the project’s front end is a button where a user can create a new kiosk to use for their prediction object and can also purchase another’s listed prediction. The package kiosk utilizes a transfer policy that includes a 5% royalty rule. 


At the appropriate time the game admin can close the game. After the game is closed the game status is reflected on the front end is changed to closed. When the game is closed the function will call the switchboard oracle that contains the result. The result is pulled from an aggregate of .gov sites after a winner is clearly and officially determined. 





---
---
---


[Presentation](https://vimeo.com/942519376?share=copy)



---
---
---
