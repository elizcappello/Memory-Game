/*
 * Create a list that holds all of your cards
 */
var cards = ['paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'cube', 'cube',
        'anchor', 'anchor', 'leaf', 'leaf ', 'bicycle ', 'bicycle ', 'diamond ', 'diamond ',
        'bomb', 'bomb', 'leaf', 'leaf'
    ],

    function generateCard(card) {
        return '<li class="card" data-card= "${card}"><i class = "fa ${card}"></i></li>';

    }


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//Begin game and select cards
function initGame() {
    var deck = document.querySelector('.deck');


    //Shuffle the array
    var cardHTML = shuffle(cards).map(function(card) {
        return generateCard(card);
    });
    moves = 0;
    moveCounter.innerText = moves;

    deck.innerHTML = cardHTML.join('');

}


var allCards = document.querySelectorAll('.card'); /*selects all the cards*/
var openCards = []; /*make an array where all of the cards are stored*/
var moves = 0;

initGame();

allCards.forEach(function(card) { /*loop through the cards*/
    card.addEventListener('click', function(e) { /*add an event listener*/ ///card list

        if (!card.classList.contains('open') && !card.classList.contains('show)') && !card.classList.contains('match')) {
            openCards.push(card); /*pushes the current card into the array*/
            card.classList.add('open', 'show'); /*makes all of teh cards turn over*/


            //check if they match
            //var firstCardType = openCards[0].dataset.card;
            //console.log(firstCardType);



            if (openCards.length == 2) { //hide
                if (openCards[0].dataset.card == openCards[1].dataset.card) {
                    openCards[0].classList.add('match');
                    openCards[0].classList.add('open');
                    openCards[0].classList.add('show');

                    openCards[1].classList.add('match');
                    openCards[1].classList.add('open');
                    openCards[1].classList.add('show');

                    openCards = [];

                } else {


                }

                //if cards don't match go away,hide
                setTimeout(function() { /*after a period of time will hide the cards*/
                    openCards.forEach(function(card) { /*loops through the cards*/
                        card.classList.remove('open', 'show'); /*hide the cards*/

                    });

                    openCards = [];

                }, 1000);

            }

            moves += 1;
            moveCounter.innertext.moves;

        }

    });

});







/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
