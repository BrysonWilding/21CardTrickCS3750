var Board = function (){

    //Members Vars
    this.columns = [];
    var dealer = new Dealer();

    this.makeColumns = function(arr){
        var columns = [];
        for (var x = 0; x < 3; x++){
            var col = new Column(x, arr.slice(x * 7, (x + 1) * 7));
            columns.push(col);
        }
        return columns;
    }

    this.pickupcards = function(columns, selected){
        return dealer.pickupCards(columns, selected);
    };

    this.showCards = function(columns){
        console.log(dealer.revealCard(columns))
        return dealer.revealCard(columns);
    }

    //Init
    this.columns = this.makeColumns(dealer.deal());

};