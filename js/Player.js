﻿var Player = function(selectedCard){
    this.selectedCard = selectedCard;
    this.indicateColumn = function indicateColumn(){
        // For user comprehension the columns will be selected as "Left", "Middle", or "Right".
        // It depends on the user interface. Do we want a button below each column?
        // Or is it selected and highlighted?
        // The user interface defines how this will work

    };
    this.pickCard = function pickCard(){
        // I think this just asks the player to select a card
        // Give a message that says something like "Pick a card, memorize it, maybe write it down"
        // Then it could just say select a column after making your decision.
        alert("Please select the column your card is in.")
        do {
            alert("You have not selected a column, please pick a column to proceed.");
        } while (this.selectedCard == false);
    }
};
