var shuffle = function(event){
    event.stopPropagation();

    var e = event.target;
    while(!e.classList.contains('column')){
        e = e.parentNode
    }

    var columns = document.getElementsByClassName('column');

    for(var i = 0; i < columns.length; i++){
        for(var j = 0; j < columns[i].children.length; j++){
            move(columns[i].children[j]).set('top', -(j * 10) + 'vw').end();
        }
        move(columns[i]).set('left', (10 + (-10 * i)) + '%').end();
    }
    setTimeout(function(){Game.resetCards(e.id)}, 750);
};

function fan() {
    var columns = document.getElementsByClassName('column');
    for(var i = 0; i < columns.length; i++){
        for(var j = 0; j < columns[i].children.length; j++){
            move(columns[i].children[j]).set('top', -(j * 7.5) + 'vw').end();
        }
        move(columns[i]).set('left', 0).end();
    }
}

function showCard(card){
    var domCard = document.createElement('div');
    var face = document.createElement('div');
    var front = document.createElement('div');
    var back = document.createElement('div');
    var topleft = document.createElement('div');
    var bottomright = document.createElement('div');
}

function game() {

    var board = new Board();
    var domBoard = document.querySelector('.board');
    var tries = 0;

    function createCards(columns){
        columns.map(function(column, i){
            var domColumn = document.createElement('div');
            domColumn.classList.add('column' + column.id);
            domColumn.classList.add('column');
            domColumn.style.left = (10 + (-10 * i)) + '%';
            domColumn.id = column.id;
            for (var card in column.cards){
                var domCard = document.createElement('div');
                var face = document.createElement('div');
                var front = document.createElement('div');
                var back = document.createElement('div');
                var topleft = document.createElement('div');
                var bottomright = document.createElement('div');

                domCard.classList.add('card');
                face.classList.add('face');
                front.classList.add('front', column.cards[card].suit.toLowerCase(), column.cards[card].suit.toLowerCase() + column.cards[card].value);
                back.classList.add('back');
                topleft.classList.add('topleft');
                topleft.textContent = column.cards[card].face;
                bottomright.classList.add('bottomright');
                bottomright.textContent = column.cards[card].face;

                domCard.appendChild(front);
                domCard.appendChild(back);
                face.appendChild(topleft);
                face.appendChild(bottomright);
                front.appendChild(face);

                domCard.style.top = - (card * 10) + 'vw';
                domColumn.appendChild(domCard);
            }

            domColumn.addEventListener('click', shuffle, false);
            domBoard.appendChild(domColumn);
        })
    }

    function destroyCards(){
        domBoard.innerHTML = '';
    }

    this.start = function(){
        createCards(board.columns);
        fan();
    };

    this.resetCards = function(selectedColumn){
        board.columns = board.makeColumns(board.pickupcards(board.columns, selectedColumn));
        destroyCards();
        createCards(board.columns);
        fan();
        tries++;
        if(tries >= 3){
            var yourCard = board.showCards(board.columns);
            var domCard = document.createElement('div');
            var face = document.createElement('div');
            var front = document.createElement('div');
            var back = document.createElement('div');
            var topleft = document.createElement('div');
            var bottomright = document.createElement('div');
            domCard.classList.add('card');
            domCard.classList.add('finalCard');
            face.classList.add('face');
            front.classList.add('front', yourCard.suit.toLowerCase(), yourCard.suit.toLowerCase() + yourCard.value);
            back.classList.add('back');
            topleft.classList.add('topleft');
            topleft.textContent = yourCard.face;
            bottomright.classList.add('bottomright');
            bottomright.textContent = yourCard.face;

            domCard.appendChild(front);
            domCard.appendChild(back);
            face.appendChild(topleft);
            face.appendChild(bottomright);
            front.appendChild(face);

            destroyCards();

            domBoard.appendChild(domCard);

        }
    }
};

var Game = new game();
Game.start();