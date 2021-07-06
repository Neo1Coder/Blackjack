var player = {
    name: "Mustafa: ",
    Chips: 145
}
var cards = []
var hasBlackJack = false
var isAlive = false
var message = " "
var sum = 0
var messsageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardsEl = document.getElementById("cards-el")
var playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + "£" + player.Chips

function getRandomCard() {

    var randomNumber = Math.floor(Math.random() * 13) + 1


    if (randomNumber > 10) {
        return 10
    }

    else if (randomNumber === 1) {
        return 11
    }

    else {
        return randomNumber

    }
}

function startGame() {
    isAlive = true
    var firstCard = getRandomCard()
    var secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard


    renderGame()
}

function renderGame() {

    sumEl.textContent = "Sum:" + sum

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent = "Cards:" + cards


    }

    if (sum <= 20) {
        message = "Do you want to draw a new card ?"
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }

    messsageEl.textContent = message

}
function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        var newCard2 = getRandomCard()
        sum += newCard2
        cards.push(newCard2)
    }
    renderGame()
}
