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