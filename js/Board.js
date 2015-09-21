var Board = function (){

    this.columns = [];
    this.deck = new Deck();

    for (var x = 0; x < 3; x++){
        var col = new Column(x, this.deck.select21());
        this.columns.push(col);
    }

    this.addToColumn = function addToColumn(columnid, card){
        for (var column in columns) {
            if (column.id = columnid)
                column.addCard(card);
        }
    }
};

var db = new Board();