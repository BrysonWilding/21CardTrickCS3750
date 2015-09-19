var Deck = function () {
    var cardArray = [];
    var playCards = [7][3];
    var publicVar = this;

        //initializes a brand new deck and shuffles it
        function initCards() {
            /*initialize cards and their types*/
            this.face = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
            this.suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
            cardArray = [];
            for (var j = 1; j <= this.suit.length; j++) {
                for (var k = 1; k <= this.face.length; k++) {
                    cardArray.push(new Card(j + 1, this.face[j], this.suit[k]))
                }
            }   
            return cardArray;
        }
        /*end init*/

        //shuffle new deck
        publicVar.shuffle();
    }

    //////////////////////////////////////////TODO////////////////////////////
    //used to select only 21 cards from the deck after it is shuffled
    //publicVar.randomElements = function () {

    //};

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