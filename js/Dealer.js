var Dealer = function(){

    var deck = new Deck();

    this.deal = function deal(){
        return deck.select21();
    };
    this.revealCard = function revealCard(){
        // It will be cardArray[10], which is the 11th card.
        // For the view, it is the second column, 4th row.
        pop(cardArray[10]);
    };
    this.pickupCards = function pickupCards(column){
        // This needs to know the column that needs to go in the middle.
        // For now I will just assume that it is an incoming parameter.
        // The columns are "left", "middle", and "right"
        // Whatever the incoming parameter is will become the new middle.
        // Left is 0, 3, 6, 9, 12, 15, 18
        // Middle is 1, 4, 7, 10, 13, 16, 19
        // Right is 2, 5, 8, 11, 14, 17, 20

        // This can get confusing (at least for me) so I am making copies.
        // As the cards are placed left to right, row by row, the order matters.
        var tempLeft = [];
        for (var i = 0; i < 18; i += 3)
        {
            tempLeft.push(cardArray[i]);
        }

        var tempMid = [];
        for (var i = 1; i < 19; i += 3)
        {
            tempMid.push(cardArray[i]);
        }

        var tempRight = [];
        for (var i = 2; i < 20; i += 3)
        {
            tempRight.push(cardArray[i]);
        }

        // I decided to empty the cardArray and we will repopulate it below.
        // If someone has a better idea, please make changes.
        for (var i = 0; i < 21; i++)
        {
            cardArray.pop();
        }

        // Left needs to become the middle.
        // It trades places with what is currently middle.
        if(column == "left")
        {
            for (var j = 0; j < 7; j++) {
                cardArray.push(tempMid[j]);
            }

            for (var j = 0; j < 7; j++) {
                cardArray.push(tempLeft[j]);
            }

            for (var j = 0; j < 7; j++) {
                cardArray.push(tempRight[j]);
            }
        }

        if(column == "middle")
        {
            for (var j = 0; j < 7; j++) {
                cardArray.push(tempLeft[j]);
            }

            for (var j = 0; j < 7; j++) {
                cardArray.push(tempMid[j]);
            }

            for (var j = 0; j < 7; j++) {
                cardArray.push(tempRight[j]);
            }
        }

        // Right needs to become the middle.
        // It trades places with the current middle.
        if(column == "right")
        {
            for (var j = 0; j < 7; j++) {
                cardArray.push(tempLeft[j]);
            }

            for (var j = 0; j < 7; j++) {
                cardArray.push(tempRight[j]);
            }

            for (var j = 0; j < 7; j++) {
                cardArray.push(tempMid[j]);
            }
        }
    }
};

