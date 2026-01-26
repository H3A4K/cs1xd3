// Alexander Perlock

// Managing swap between light and dark mode

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const button = document.getElementById("theme");
    button.innerHTML = `<img src="./assets/imgs/${theme}_mode.png">`;
}

function getTheme() {
    const stored = localStorage.getItem("theme")
    if (stored) {
        return stored;
    }

    //https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript4
    if (window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"; 
    }

    return "light";
}

// Implies only light and dark mode available
function invertTheme() {
    const theme = getTheme() == "light" ? "dark" : "light";
    setTheme(theme);
}

//https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript4
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    setTheme(event.matches ? "dark" : "light");
});

document.getElementById("theme").addEventListener("click", () => {
    invertTheme();
});

setTheme(getTheme())