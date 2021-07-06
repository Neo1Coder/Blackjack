# Blackjack
Simple Blackjack game developed using HTML, CSS and Java Script. The aim of Blackjack is to beat the dealer by getting a sum of 21 based on cards you are dealt, you can also win as long as the sum of your set of cards is closer to 21 then the dealers. Each card is given a numerical value, cards 2-10 of any suit are given thier respective value based on thier card number, Ace is given the value of 11 whilst Jack, King and Queen are all given the value of 10 respectively. 

Highlights of the Game 
- User is presented with two cards upon pressing the Start Game function 
- If the user does not have black jack and is "still alive" then he/she can be presented with a new card,
otherwise the generateNewCard function will cease to work.
- The user will be prompted with messages depending on the hand they have.
- The getRandomCard function will generate a random card between 1-11.
- Whenever the random number results in number greater then 10 it will evalute to 10, and if the random number results in 1 it will evalute to 11, this is to ensure that the game keeps in line with the rules of Blackjack.

[Deployed Link](https://neo1coder.github.io/Blackjack/)

[Git Hub Repo](https://github.com/Neo1Coder/Blackjack)

![website image](./assets/Images/blackjack.png)
