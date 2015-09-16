var Deck = function () {
    var cardArray = [];
    var playCards = [7][3];
    var publicVar = this;

    //initializes a brand new deck and shuffles it
    function initCards() {
        /*initialize cards and their types*/
        cardArray = [];
        for (var i = 0; i < 4; i++) {
            var type = "";
            switch (i) {
                case 0:
                    type = "heart";
                    break;
                case 1:
                    type = "diamond";
                    break;
                case 2:
                    type = "spade";
                    break;
                default:
                    type = "club";
            }
            for (var j = 1; j <= 13; j++) {
                cardArray.push(new Card({ suit: type, value: j }))
            }
        }
        /*end init*/

        //shuffle new deck
        publicVar.shuffle();
    }

    //shuffles the card array
    publicVar.shuffle = function () {
        var o = cardArray;
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    //outputs a listing of all the cards in the current deck. helper function for debugging
    publicVar.showCards = function () {
        return cardArray;
    };

    //checks to see if 10 or less cards in the deck, if so, we just shuffle a new deck
    publicVar.checkCardCount = function () {
        if (cardArray.length <= 21) {
            initCards();
        }
    };

    //init new instance of deck
    initCards();
};