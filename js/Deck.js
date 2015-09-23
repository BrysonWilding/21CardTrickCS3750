var Deck = function () {
    var cardArray = [];

    //initializes a brand new deck and shuffles it
    function initCards() {
        /*initialize cards and their types*/
        var suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        var face = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        for (var i = 0; i < suit.length; i++){
            for (var j = 0; j < face.length; j++){
                cardArray.push(new Card(suit[i], face[j], j + 1));
            }
        }
        return cardArray;
    }

    this.select21 = function(){
        this.shuffle();
        var playCards = [];
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 7; j++)
                playCards.push(cardArray[i * 7 + j]);
        }
        return playCards;
    };

    //shuffles the card array
    this.shuffle = function () {
        var o = cardArray;
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    //outputs a listing of all the cards in the current deck. helper function for debugging
    this.showCards = function() {
        return cardArray;
    };

    //checks to see if 10 or less cards in the deck, if so, we just shuffle a new deck
    this.checkCardCount = function () {
        if (cardArray.length <= 21) {
            initCards();
        }
    };

    //init new instance of deck
    this.cards = initCards();
    this.shuffle();
};