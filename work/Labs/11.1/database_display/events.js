/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 23 03 26
 * Date Modified : 23 03 26
 */

window.addEventListener("load", function() {
    const button = document.getElementById("submit");
    const min = document.getElementById("min");
    const max = document.getElementById("max");
    const output = document.getElementById("output");

    function success(text) {
        // console.log(text);
        output.innerHTML = text;
        button.disabled = false;
    }

    function waiting() {
        button.disabled = true;

    }

    button.addEventListener("click", function() {
        const url = "cities.php?min=" + min.value + "&max=" + max.value;
        // console.log(url);
        waiting();
        fetch(url)
            .then(respone => respone.text())
            .then(success);
    }); 
});