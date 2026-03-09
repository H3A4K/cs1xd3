<!--
Author : Alexander Perlock
MACID : perlocka

Date Created     : 09 03 26
Date Modified    : 09 03 26

Textbook exercise 32.2 a,b,d
-->
<?php
$serverName = filter_input(INPUT_GET, "serverName");
$email = filter_input(INPUT_GET, "email", FILTER_VALIDATE_EMAIL);
$email2 = filter_input(INPUT_GET, "email2", FILTER_VALIDATE_EMAIL);
$cost = filter_input(INPUT_GET, "cost", FILTER_VALIDATE_FLOAT);
$tipPercent = filter_input(INPUT_GET, "tipPercent", FILTER_VALIDATE_FLOAT);
$creditNum = filter_input(INPUT_GET, "creditNum");
$tip = 0;

$paramsok = null;
if (isset($serverName, $email, $email2, $cost, $tipPercent, $creditNum)) {
    $paramsok = false;
    // $paramsok = true;
    if ($email == $email2 && $cost >= 0 && $tipPercent >= 0 && strlen($creditNum) == 16) {
        $paramsok = true;
        $tip = $cost * $tipPercent / 100;
    }
} else {
    $serverName = "";
    $email = "";
    $email2 = "";
    $cost = 0;
    $tipPercent = 0;
    $creditNum = 0000000000000000;
}

?>

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Tip Calculator</title>

    <style>
        form>input {
            display: block;
            margin: 0.7%;
        }
    </style>

    <script text="javascript/text">
        window.addEventListener("load", function() {
            document.getElementById("form").addEventListener("submit", function() {
                const emails = Array.from(document.querySelectorAll(".email"));

                console.log(emails);
                if (emails[0].value !== emails[1].value) {
                    emails.forEach(email => email.style.backgroundColor = "red");
                    console.log("A");
                    event.preventDefault();
                } else {
                    emails.forEach(email => email.style.backgroundColor = "none");
                }
                // event.preventDefault();
            });
        });

    </script>

</head>

<body>
    <form id="form" method="get" action="tip_calc.php"> <!-- required> -->
        <input type="text" name="serverName" placeholder="Server Name" required>
        <input type="email" class="email" name="email" placeholder="Email"  required>
        <input type="email" class="email" name="email2" placeholder="Confirm Email" required>
        <input type="number" name="cost" placeholder="Value of Bill" min="0" required>
        <input type="number" name="tipPercent" placeholder="Percent of Tip" min="0" required>
        <input type="text" name="creditNum" placeholder="Credit Card Number" required>
        <input type="submit">
    </form>
    <?php
    if ($paramsok !== null) {
        if ($paramsok) {
        ?>
        <p>Server : <?= $serverName ?></p>
        <p>Cost = <?= $cost ?></p>
        <p>Tip (<?= $tipPercent ?>%) = <?= $tip ?></p>
        <p>Total = <?= $cost + $tip ?></p>
        <p>Email : <?= $email ?></p>
        <p>Credit Card Number : <?= $creditNum ?></p>
        <?php
    } else {
        ?>
        <p>ERROR</p>
        <p>Bill Could not be calculated</p>
    <?php    
    }
    }
    ?>
</body>

</html>