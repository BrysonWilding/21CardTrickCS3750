var Player = function(selectedCard){
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
        alert("Please pick a card from a column.")
        do {
            alert("You have not selected a card, please pick a card to proceed.");
        } while (this.selectedCard == false);

        alert("Now, select the column you card is in.");
    }
};
