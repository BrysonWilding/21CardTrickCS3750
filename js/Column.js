var Column = function(id, cards){
    this.id = id;
    this.cards = cards;

    this.addCard = function addCard(card){
        this.cards.push(card);
        console.log('Adding cards...')
    };
};