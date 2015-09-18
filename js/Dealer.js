(function Dealer(){
    deal: function deal(){
        var row = 0, col = 0, card = 0;
        for (row = 0; row < 7; row++)
        {
            play[row][col] = deck[card];
            for (col = 0; col < 3; col++)
            {
                play[row][col] = deck[card];
                card++;
            }
        }
    }
    revealCard: function revealCard(){

    }
    pickupCards: function pickupCards(){

    }
});

