<?php
include "processing.php";
?>
<!DOCTYPE html>
<!-- A very simple PHP Template. Sam Scott, McMaster University, 2025 -->
<html>

<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <h1>Hi There <?=$userid?></h1>
    <p>
        <?php
        echo "Hello, World"
            ?>
    </p>
    <?php
    echo "<strong>How's this so far?</strong>";
    echo "<ul>";
    for ($i = 0; $i < $n; $i++) {
        echo "<li>$i: Yippee!!!</li>";
    }
    echo "</ul>";
    ?>
    <p>SEPARATOR</p>
    <?php
    echo "The number generated was " . $n . " ";
    ?>

    <p>sep:2</p>
    <?php
    echo "<strong>How's this so far?</strong>";
    echo "<ul>";
    for ($i = 0; $i < $n; $i++) {
        ?>
        <li>
            <?php echo "$i: Yippee!!!" ?>
        </li><?php
    }
    echo "</ul>";
    ?>

</body>

</html>