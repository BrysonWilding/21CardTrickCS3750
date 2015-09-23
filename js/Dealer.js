var Dealer = function(){

    var deck = new Deck();

    this.deal = function deal(){
        return deck.select21();
    };
    
    this.revealCard = function(columns){
        // It is the 11th card, which is the second column, 4th row.
        //var column = [];
        //for(var i = 0; i < columns.length; i++){
        //    for(var j = 0; j < columns[i].length; j++){
        //        column.push(columns[i][j]);
        //    }
        //}
        // return column[10];
        console.log(columns[1].cards[3])
        return columns[1].cards[3];
    };
    
    this.pickupCards = function(columns, selected){
        // Re-doing this
        var longArr = [];
        switch (parseInt(selected)){
            case 0:
                longArr = longArr.concat(columns[1].cards, columns[selected].cards, columns[2].cards);
                break;
            case 1:
                longArr = longArr.concat(columns[0].cards, columns[selected].cards, columns[2].cards);
                break;
            case 2:
                longArr = longArr.concat(columns[0].cards, columns[selected].cards, columns[1].cards);
                break;
            default: alert('Selected is ' + selected + ', which sucks as a variable value here...');
        }
        // Every day I'm shufflin'
        var left = [], middle = [], right = [];
        longArr.map(function(cv, i , a){
            if(i % 3 == 0)
                left.push(cv);
            if(i % 3 == 1)
                middle.push(cv);
            if(i % 3 == 2)
                right.push(cv);
        });
        return left.concat(middle, right);
    }
};

