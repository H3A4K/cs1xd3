/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 02 02 26
 * Date Modified : 02 02 26
 * 
 * Main code for moving the rabbits
 */

function next_rabit() {
    console.log("HI");
    rabbits[current_rabbit].style.visibility = "hidden";
    current_rabbit += 1;
    current_rabbit %= 4;
    counter += 1;
    rabbits[current_rabbit].style.visibility = "visible";

    if (counter == 4) {
        document.getElementById("noeggs").style.visibility = "visible";
    } else if (counter == 20) {
        document.getElementById("slow").style.visibility = "visible";
    }
}


let rabbits = [
    document.getElementById("rabbit1"),
    document.getElementById("rabbit2"),
    document.getElementById("rabbit3"),
    document.getElementById("rabbit4")
]

let current_rabbit = 0;
let counter = 0;

rabbits.forEach((r) => {
    r.addEventListener("mouseover", () => next_rabit())
})