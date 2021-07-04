var firstCard = 10
var secondCard = 6
var hasBlackJack = false
var isAlive = true
var message = " "
var sum = firstCard + secondCard
var messsageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {

    sumEl.textContent = "Sum:" + sum
    cardsEl.textContent = "Cards:" + firstCard + " " + ", " + secondCard

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
    var newCard2 = 5
    sum += newCard2

    renderGame()


}



// if (sum <= 20) {
//     message = "Do you want to draw a new card"
// }
// else if (sum === 21) {

//     message = "Whohoo, you've got Blackjack ! "
//     hasBlackJack = true

// } else {

//     message = "You're out of the game my friend :S "
//     isAlive = false


// }

// console.log(message)

// var age = 21

// if (age < 21) {

//     console.log("you can not enter the club")
// }

// else {
//     console.log("welcome ")

// }
