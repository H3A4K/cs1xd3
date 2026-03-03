<?php
$dice = rand(1, 6);
?>
<!DOCTYPE html>
<!-- A very simple PHP Template. Sam Scott, McMaster University, 2025 -->
<html>

<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        .dice {
            font-size: 46px;
            color: green;
            border: 2px solid black;
            text-align: center;
            border-radius: 10px;
            width: 100px;
        }
    </style>
</head>

<body>
    <div class="dice"><?=$dice?></div>

</body>

</html>