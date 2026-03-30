<?php

/**
 * Author : Alexander Perlock
 * MACID : perlocka
 * Date Created     : 09 03 26
 * Date Modified    : 30 03 26
 * 
 * Textbook exercise 31.4 
 */

session_start();

function send($arr) {
    echo json_encode($arr);
}

function main() {
    if (!isset($_SESSION["credits"])) {
        $data = ["display" => "ERROR: No Session Active"];
        send($data);
        return;
    }


    if ($_SESSION["credits"] < 1) {
        $data = ["display" => "Too Few Credits, Game Over"];
        send($data);
        session_destroy();
        return;
    } else {
        $_SESSION["credits"]--;
    }

    $pull = fn() => rand(1, 7);

    $img1 = $pull();
    $img2 = $pull();
    $img3 = $pull();

    if ($img1 == $img2 && $img2 == $img3) {
        // all 3 equal
        $_SESSION["credits"] += 9;
        $display = "JACKPOT!";
    } else if ($img1 == $img2 || $img1 == $img3 || $img2 == $img3) {
        // 2 equal
        $_SESSION["credits"] += 3;
        $display = "You've won!";
    } else {
        // none equal
        $display = "Unfortunate";
    }


    $data = [
        "display" => $display,
        "img1" => $img1,
        "img2" => $img2,
        "img3" => $img3,
        "credits" => $_SESSION["credits"]
    ];

    send($data);
}

main();

?>