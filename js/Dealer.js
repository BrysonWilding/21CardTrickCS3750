var Dealer = function(){

    var deck = new Deck();

    var dealNumber =0;
    this.deal = function deal(){
        return deck.select21();
    };
    var playCards= this.deal();
    this.revealCard = function revealCard(){
        // It is the 11th card, which is the second column, 4th row.
         return playCards[1,3];
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
/*      NOT SURE IF THIS IS NEEDED
        for (var i = 0; i < 18; i += 3)
        {
            tempLeft.push(playCards[i]);
        }

        for (var i = 1; i < 19; i += 3)
        {
            tempMid.push(playCards[i]);
        }

        for (var i = 2; i < 20; i += 3)
        {
            tempMid.push(playCards[i]);
        }

        // I decided to empty the playCards and we will repopulate it below.
        // If someone has a better idea, please make changes.
        for (i = 0; i < 7; i++)
        {
            playCards[0].pop();
            playCards[1].pop();
            playCards[2].pop();
        }
 */
        // Left needs to become the middle of the deck.
        if(column == 0)
        {
            for(var i=1;i<21;i+=3)
            {
                tempLeft.push(playCards[1,i]);
            }
            for(i=0;i<21;i+=3)
            {
                tempLeft.push(playCards[0,i]);
            }
            for(i=2;i<21;i+=3)
            {
                tempLeft.push(playCards[2,i]);
            }
        }
        //Middle Column stays the same
        if(column == 1)
        {
            for(i=0;i<21;i+=3)
            {
                tempMid.push(playCards[0,i]);
            }
            for(i=1;i<21;i+=3)
            {
                tempMid.push(playCards[1,i]);
            }
            for(i=2;i<21;i+=3)
            {
                tempMid.push(playCards[2,i]);
            }
        }

        // Right needs to become the middle of the deck.
        // It trades places with the current middle.
        if(column == 2)
        {
            for(i=1;i<21;i+=3)
            {
                tempRight.push(playCards[1,i]);
            }
            for(i=2;i<21;i+=3)
            {
                tempRight.push(playCards[2,i]);
            }
            for(i=0;i<21;i+=3)
            {
                tempRight.push(playCards[0,i]);
            }
        }
        //Adding cards back into array.
        playCards=null;
        for (j = 0; j < 7; j++) {
            playCards.push(tempLeft[j]);
        }
        for (j = 0; j < 7; j++) {
            playCards.push(tempMid[j]);
        }
        for (j = 0; j < 7; j++) {
            playCards.push(tempRight[j]);
        }
    };
    var dealer = new Dealer();
    dealer.deal();
    for (i=0; i<3; i++) {
        console.log("Player needs to pick a column.");
        dealer.pickupCards();
    }
    dealer.revealCard();
};

