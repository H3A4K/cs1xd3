<?php
/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created : 30 03 26
 * Date Modified : 30 03 26
 * 
 * Main page for Textbook exercise 40.2 & 40.3
 */
?>


<!doctype html>

<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Guessing Game</title>

</head>

<body>
    <h1>Please enter a range:</h1>
    <form method="POST" action="guess.php">
        <input type="number" name="min" placeholder="min" min="0">
        <input type="number" name="max" placeholder="max" min="0">
        <input type="submit" value="Send">
    </form>
</body>

</html>