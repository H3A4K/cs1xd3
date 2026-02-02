/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 01 02 26
 * Date Modified : 01 02 26
 */

/**
 * Toggles the direction of the items contained in #work
 */
function toggle_direction() { // https://stackoverflow.com/questions/74510705/how-to-instantly-reverse-flexbox-item-order-with-non-full-row-at-the-bottom
    rev = !rev;
    const items = document.querySelectorAll("#works li");
    const img = document.querySelector("#toggle img")
    if (rev) {
        items.forEach((item, index, arr)=>item.style.order = arr.length - index);
        img.setAttribute("src", "./assets/imgs/arrows/up.png");
    } else {
        items.forEach((item)=>item.style.order = "");
        img.setAttribute("src", "./assets/imgs/arrows/down.png");
    }
}

// instantiation of rev
let rev = false;
