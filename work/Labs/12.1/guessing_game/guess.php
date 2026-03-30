<?php
/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 30 03 26
 * Date Modified : 30 03 26
 * 
 * Guessing Page, creates a number and gets the user to attempt guess it
 */

function create_random() {
    return rand($_SESSION["min"], $_SESSION["max"]);
}

session_start();

if (!isset($_SESSION["min"], $_SESSION["max"])) {
    $min = filter_input(INPUT_POST, "min", FILTER_VALIDATE_INT);
    $max = filter_input(INPUT_POST, "max", FILTER_VALIDATE_INT);

    if ($min < $max) { // reorders if the user entered max into min and min into max
        $_SESSION["min"] = $min;
        $_SESSION["max"] = $max;
    } else {
        $_SESSION["min"] = $max;
        $_SESSION["max"] = $min;
    }

    $_SESSION["answer"] = create_random();
}

if (!isset($_SESSION["answer"])) {
    $_SESSION["answer"] = create_random();
}


?>

<!doctype html>

<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Guessing Game</title>

</head>

<body>
    <h1>Please enter a guess on the range [<?= $_SESSION["min"] ?>, <?= $_SESSION["max"] ?>]:</h1>
    <form method="POST" action="feedback.php">
        <input type="number" name="guess" placeholder="Your Guess">
        <input type="submit" value="Send">
    </form>
</body>

</html>