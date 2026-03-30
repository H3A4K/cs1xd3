/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 09 03 26
 * Date Modified : 30 03 26
 * 
 * AJAX handleing
 */

window.addEventListener("load", function() {
    const button = document.getElementById("submit");
    const display = document.getElementById("display");
    const credits = document.getElementById("credits");

    const imgs = Array.from(document.getElementById("box").children);
    
    /**
     * Handles AJAX fetch success
     * 
     * @param {JSON} text
     */
    function success(text) {
        data = JSON.parse(text);

        display.innerText = data["display"];

        if (!(data["img1"] && data["img2"] && data["img3"])) {
            imgs.forEach(img => img.setAttribute("src", "./images/x.png"));
            button.disabled = true;
        } else {
            imgs.forEach((img, ind) => img.setAttribute("src", `./images/${data[`img${ind + 1}`]}.png`));
        }

        if (data["credits"] !== undefined) {
            credits.innerText = data["credits"];
        }

    }

    button.addEventListener("click", () => {
        fetch("./slot.php")
            .then(respose => respose.text())
            .then(success);
    });
});