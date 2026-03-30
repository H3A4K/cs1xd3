/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 23 03 26
 * Date Modified : 23 03 26
 */

window.addEventListener("load", function() {
    const password = document.getElementById("password");
    const button = document.getElementById("submit");
    const loading = document.getElementById("loading");

    function success(text) {
        if (text == 1) {
            password.style.backgroundColor = 'green';
        } else {
            password.style.backgroundColor = 'red';
        }

        password.disabled = false;
        button.disabled = false;
        loading.style.display = "none";
    }

    button.addEventListener("click", function() {
        let url = "validate.php?password=" + password.value;

        button.disabled = true;
        password.disabled = true;
        loading.style.display = "block";

        fetch(url)
            .then(response => response.text())
            .then(success);
    })
});