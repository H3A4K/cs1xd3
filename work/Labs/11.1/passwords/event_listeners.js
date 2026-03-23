/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 23 03 26
 * Date Modified : 23 03 26
 */

window.addEventListener("load", function() {
    const password = document.getElementById("password");
    const button = document.getElementById("submit");

    function success(text) {
        if (text == 1) {
            password.style.backgroundColor = 'green';
        } else {
            password.style.backgroundColor = 'red';
        }
        // console.log(text);
    }

    button.addEventListener("click", function() {
        let url = "validate.php?password=" + password.value;
        // console.log(url);
        fetch(url)
            .then(response => response.text())
            .then(success);
    })
});