/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * 
 * Date Created : 02 02 26
 * Date Modified : 02 02 26
 * 
 * Lottery ball object used for Chapter 17 exercises 3 and 4
 */

/**
 * Creates 100 lottery balls with value [-100, 100] and either white or red.
 * 
 * Asks the user to chose a ball by index until the user has drawn a red one or the user chooses to leave.
 * Score is determined by the sum of the values of the white balls minus the value of the red ball (if given).
 */
function lottery_ball() {
    let array = [];
    for (let i = 0; i < 100; i++) {
        let color = Math.floor(Math.random() * 2) == 0 ? "red" : "white";
        let points = Math.floor(Math.random() * 100) + 1;
        array[i] = [color, points];
    }

    let cont = true;
    let score = 0;
    while (cont) {
        let choice = prompt("Choose a ball to draw (0 - 99)");
        let ball = array[choice];

        if (choice == null) {
            alert(`Your score was ${score}`);
            return;
        }
        if (!ball) {
            alert("This ball has already been chosen")
            continue;
        }
        alert(`Your ball is ${ball}`)

        if (ball[0] == "red") {
            score -= ball[1];
            alert(`Your score was ${score}`);
            return;
        }

        score += ball[1];
        array[choice] = null;
    }
}

lottery_ball()