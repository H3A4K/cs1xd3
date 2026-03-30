<?php
/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 09 03 26
 * Date Modified : 30 03 26
 * 
 * Textbook exercise 40.8
 */
session_start();

$display = "";
$img1 = 1;
$img2 = 1;
$img3 = 1;

if (!isset($_SESSION["credits"])) {
    $_SESSION["credits"] = 10; // initialisation of number of credits
}

?>
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Slot Machine</title>

    <script src="./ajax.js"></script>

    <style>
        body {
            background-color: white;
        }
        h1 {
            font-size: x-large;
            text-align: center;
        }
        #box {
            align-self: center;
            display: flex;
            justify-content: space-evenly;
        }

        img {
            margin: 5%;
            width: 15%;
            height: 350px;
        }

        input {
            width: 100%;
            padding: 4%
        }
    </style>

</head>

<body>
    <h1 id="display"></h1>
    <div id="box">
        <img id="img1" src=<?= "./images/$img1.png" ?>>
        <img id="img2" src=<?= "./images/$img2.png" ?>>
        <img id="img3" src=<?= "./images/$img3.png" ?>>
    </div>
    <div>Credits Left: <span id="credits"><?= $_SESSION["credits"] ?></span></div>
    <input type="button" id="submit" value="Click to play again">

</body>

</html>