/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 
 * Date Modified : 
 * 
 * Guessing Game class from Chapter 25 exercise 1
 */


class GuessingGame {
    constructor(upperBound, local_game) {
        if (local_game) {
            local_game = JSON.parse(local_game);
            this.value = local_game.value;
            this.guesses = local_game.guesses;
        } else {
            this.value = Math.floor(Math.random() * upperBound + 1);
            this.guesses = 0;
        }
        document.getElementById("guess_count").innerHTML = this.guesses;
    }

    /**
     * Checks a user's guess against the stored value.
     * 
     * @param {number} value the user's guess
     * 
     * @returns either <, =, or > depending on whether the guess is greater / less than or equal to the stored value.
     */
    guess(value) {
        this.guesses += 1
        document.getElementById("guess_count").innerHTML = this.guesses;
        let output = "";
        if (value > this.value) {
            output = `The number is smaller than ${value}`;
        } else if (value == this.value) {
            return [true, `You guessed it in ${this.guesses} tries`];
        } else if (value < this.value) {
            output = `The number is bigger than ${value}`;
        }
        if (this.guesses == 10) {
            return [true, `Game Over : The number was ${this.value}`];
        }
        return [false, output];
    }

    /**
     * Saves the object to local storage
     */
    save() {
        localStorage.game = JSON.stringify(this);
    }
}

let upper = 100;
let game;


window.addEventListener("load", () => {
    document.getElementById("upperbound").innerHTML = upper;
    let local_game = localStorage.game;
    let game = new GuessingGame(100, local_game)
    let count = 1;

    let input = document.getElementById("input");
    let button = document.getElementById("button");
    let disp = document.getElementById("output");
    let count_e = document.getElementById("game_count");

    
    button.addEventListener("click", () => {
        let user_guess = input.value;
        let out = game.guess(user_guess);
        disp.innerHTML = out[1];
        if (out[0]) {
            game = new GuessingGame(upper);
            count ++;
            count_e.innerHTML = count;
        }
        game.save();
    });

});