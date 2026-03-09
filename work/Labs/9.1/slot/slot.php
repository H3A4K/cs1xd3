<!--
Author : Alexander Perlock
MACID : perlocka

Date Created     : 09 03 26
Date Modified    : 09 03 26

Textbook exercise 31.4 
-->
<?php
$img1 = 1;
$img2 = 1;
$img3 = 1;
$display = "";
function pull_slot()
{
    $pull = fn() => rand(1, 7);

    global $img1, $img2, $img3, $display;

    $img1 = $pull();
    $img2 = $pull();
    $img3 = $pull();

    if ($img1 == $img2 && $img2 == $img3) {
        // all 3 equal
        $display = "JACKPOT!";
    } else if ($img1 == $img2 || $img1 == $img3 || $img2 == $img3) {
        // 2 equal
        $display = "You've won!";
    } else {
        // none equal
        $display = "Unfortunate";
    }
}

pull_slot();
?>

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Slot Machine</title>

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
    <h1><?= $display ?></h1>
    <div id="box">
        <img src=<?= "./images/$img1.png" ?>>
        <img src=<?= "./images/$img2.png" ?>>
        <img src=<?= "./images/$img3.png" ?>>
    </div>
    <form method="post">
        <input type="submit" value="Click to play again">
    </form>

</body>

</html>