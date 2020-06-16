allCards = [];
deck = [];
currentCard = null;

number_of_cards_to_play_with = 24;


function loadCards() {
    var number_of_cards = 36;
    allCards = [];
    for (i = 1; i <= number_of_cards; i++) { 
        allCards.push(i);
    }
}

function restart() {
    $('.initially-hidden').hide()
    $('#intro').show()
    
    //show logo
    $('.menu-logo').removeClass("d-none d-sm-inline");
    
    $('#draw-button-container').show();
}

function start() {
    $('#intro').slideToggle("slow", startGame());   
}

function startGame() {

    populateDeck();
    
    currentCard = null;
    $('#current-card').attr("src", "images/back.jpg");
    $('#current-card').attr("alt", "back of card");
    
    
    updateNumbers();
    
    $('#number-of-cards-menu-item').show();
    $('#restart-menu-item').show();
    
    //hide logo (on small screens)
    $('.menu-logo').addClass("d-none d-sm-inline");
    
    $('#select-deck-container').slideToggle("slow", goToCurrentCard());   
}

function goToCurrentCard() {
    $('#current-card-container').slideToggle();
}

function updateNumbers() {
    $('#number-of-cards').html(number_of_cards_to_play_with - deck.length);
}

function populateDeck() {
    loadCards();
    deck = [];
    for (i = 1; i <= number_of_cards_to_play_with; i++) { 
        deck.push(selectRandomCard(allCards));
    }
}

function drawCard() {

    currentCard = selectRandomCard(deck);
    updateNumbers();
    
    //display current card
    $('#current-card').attr("src", "images/card-" + currentCard + ".jpg");
    $('#current-card').attr("alt", "card-" + currentCard);
    
    console.log("cards in deck: " + deck.length)
    if (deck.length == 0) {
    console.log("empty deck")
        $('#draw-button-container').hide();
        $('#game-end').show();
    }
}

