<?php
/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 30 03 26
 * Date Modified : 30 03 26
 * 
 * Feedback page, gives the user relavent feedback, like <, >, or =
 */

$guess = filter_input(INPUT_POST, "guess", FILTER_VALIDATE_INT);

$success = 0;

if ($guess === null) {
    $feedback = "No guess entered";
} else {
    session_start();

    if ($guess == $_SESSION["answer"]) {
        session_destroy();
        $feedback = "You got it!";
        $success = 1;
    } else if ($guess < $_SESSION["answer"]) {
        $feedback = "Your guess is too low";
    } else {
        $feedback = "Your guess is too high";
    }
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
    <h1><?= $feedback ?></h1>
    <form method="POST" action="<?= $success ? "index.php" : "guess.php" ?>">
        <input type="submit" value="<?= $success ? "Return" : "Try again" ?>">
    </form>
</body>

</html>