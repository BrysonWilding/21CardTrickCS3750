var Dealer = function(){

    var deck = new Deck();

    this.deal = function deal(){
        return deck.select21();
    };
    
    this.revealCard = function revealCard(){
        // It is the 11th card, which is the second column, 4th row.
         return board.playcards[1][3];
    };
    
    this.pickupCards = function pickupCards(column){
        // The column parameter is how it know which column was chosen by the player.
        // The columns are "left", "middle", and "right"
        // Whatever the incoming parameter is will become the new middle.
        // Left is 0, 3, 6, 9, 12, 15, 18
        // Middle is 1, 4, 7, 10, 13, 16, 19
        // Right is 2, 5, 8, 11, 14, 17, 20

        // This can get confusing (at least for me) so I am making copies.
        // As the cards are placed left to right, row by row, the order matters.
        // First copy the current columns.
        var tempLeft = [];
        var tempMid = [];
        var tempRight = [];

        for (var i = 0; i < 7; i ++)
        {
            tempLeft.push(board.playcards[0][i]);
            tempMid.push(board.playcards[1][i]);
            tempRight.push(board.playcards[2][i]);
        }

        // I decided to empty the cardArray and we will repopulate it below.
        // If someone has a better idea, please make changes.
        for (var i = 0; i < 7; i++)
        {
            board.playcards[0].pop();
            board.playcards[1].pop();
            board.playcards[2].pop();
        }

        // Left needs to become the middle of the deck.
        if(column == "left")
        {
            // A loop was considered but my tired mind did not think of one.
            board.playcards[0].push(tempMid[0]);
            board.playcards[1].push(tempMid[1]);
            board.playcards[2].push(tempMid[2]);
            board.playcards[0].push(tempMid[3]);
            board.playcards[1].push(tempMid[4]);
            board.playcards[2].push(tempMid[5]);
            board.playcards[0].push(tempMid[6]);
            board.playcards[1].push(tempLeft[0]);
            board.playcards[2].push(tempLeft[1]);
            board.playcards[0].push(tempLeft[2]);
            board.playcards[1].push(tempLeft[3]);
            board.playcards[2].push(tempLeft[4]);
            board.playcards[0].push(tempLeft[5]);
            board.playcards[1].push(tempLeft[6]);
            board.playcards[2].push(tempRight[0]);
            board.playcards[0].push(tempRight[1]);
            board.playcards[1].push(tempRight[2]);
            board.playcards[2].push(tempRight[3]);
            board.playcards[0].push(tempRight[4]);
            board.playcards[1].push(tempRight[5]);
            board.playcards[2].push(tempRight[6]);
        }

        if(column == "middle")
        {
            board.playcards[0].push(tempLeft[0]);
            board.playcards[1].push(tempLeft[1]);
            board.playcards[2].push(tempLeft[2]);
            board.playcards[0].push(tempLeft[3]);
            board.playcards[1].push(tempLeft[4]);
            board.playcards[2].push(tempLeft[5]);
            board.playcards[0].push(tempLeft[6]);
            board.playcards[1].push(tempMid[0]);
            board.playcards[2].push(tempMid[1]);
            board.playcards[0].push(tempMid[2]);
            board.playcards[1].push(tempMid[3]);
            board.playcards[2].push(tempMid[4]);
            board.playcards[0].push(tempMid[5]);
            board.playcards[1].push(tempMid[6]);
            board.playcards[2].push(tempRight[0]);
            board.playcards[0].push(tempRight[1]);
            board.playcards[1].push(tempRight[2]);
            board.playcards[2].push(tempRight[3]);
            board.playcards[0].push(tempRight[4]);
            board.playcards[1].push(tempRight[5]);
            board.playcards[2].push(tempRight[6]);
        }

        // Right needs to become the middle of the deck.
        // It trades places with the current middle.
        if(column == "right")
        {
            board.playcards[0].push(tempLeft[0]);
            board.playcards[1].push(tempLeft[1]);
            board.playcards[2].push(tempLeft[2]);
            board.playcards[0].push(tempLeft[3]);
            board.playcards[1].push(tempLeft[4]);
            board.playcards[2].push(tempLeft[5]);
            board.playcards[0].push(tempLeft[6]);
            board.playcards[1].push(tempRight[0]);
            board.playcards[2].push(tempRight[1]);
            board.playcards[0].push(tempRight[2]);
            board.playcards[1].push(tempRight[3]);
            board.playcards[2].push(tempRight[4]);
            board.playcards[0].push(tempRight[5]);
            board.playcards[1].push(tempRight[6]);
            board.playcards[2].push(tempMid[0]);
            board.playcards[0].push(tempMid[1]);
            board.playcards[1].push(tempMid[2]);
            board.playcards[2].push(tempMid[3]);
            board.playcards[0].push(tempMid[4]);
            board.playcards[1].push(tempMid[5]);
            board.playcards[2].push(tempMid[6]);
    }
};

