function game() {
    this.start = function(){
        var board = new Board();
        var domBoard = document.querySelector('.board');

        board.columns.map(function(column){
            var domColumn = document.createElement('div');
            domColumn.classList.add('column' + column.id);

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

                domCard.style.top = - (card * 7.5) + 'vw';

                domColumn.appendChild(domCard);

            }

            domBoard.appendChild(domColumn);
            console.log('Wrote column');
        })

    }

    this.reset =  function(){
    // Figure this out later... I mean TODO: Figure this out or remove it
        alert("Not implemented yet!");

    }
};

var Game = new game();
Game.start();