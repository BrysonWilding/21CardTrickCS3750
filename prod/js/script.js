var Board = function (){

    this.columns = [];
    this.deck = new Deck();
    var playcards = this.deck.select21();

    for (var x = 0; x < 3; x++){
        var col = new Column(x, playcards.slice(x * 7, (x + 1) * 7));
        this.columns.push(col);
    }

    this.addToColumn = function addToColumn(columnid, card){
        for (var column in columns) {
            if (column.id = columnid)
                column.addCard(card);
        }
    }
};
var Card = function(suit, face, value){
    this.suit = suit;
    this.face = face;
    this.value = value;
};
var Column = function(id, cards){
    this.id = id;
    this.cards = cards;

    this.addCard = function addCard(card){
        this.cards.push(card);
    };
};
var Dealer = function(){

    var deck = new Deck();

    this.deal = function deal(){
        return deck.select21();
    };
    this.revealCard = function revealCard(){
        // It will be cardArray[10], which is the 11th card.
        // For the view, it is the second column, 4th row.

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


    //////////////////////////////////////////TODO////////////////////////////
    //used to select only 21 cards from the deck after it is shuffled
    //publicVar.randomElements = function () {

    //};

    this.select21 = function(){
        this.shuffle();
        var playcards = [];
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 7; j++)
                playcards.push(cardArray[i * 7 + j]);
        }
        return playcards;
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
    //this.shuffle();
};
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


    }
};
