<!DOCTYPE html>
<!-- A very simple PHP Template. Sam Scott, McMaster University, 2025 -->
<?php
    $username = filter_input(INPUT_GET, "userid", FILTER_SANITIZE_SPECIAL_CHARS);
    $age = filter_input(INPUT_GET, "age", FILTER_VALIDATE_INT);
    $error = false;

    if ($username === null) {
        $error = true;
    }
    if ($age === null or $age === false) {
        $error = true;
    }
?>
<html>

<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <p>Hello <?= $username ?></p>
    <p>In 10 years you will be <?= $age + 10 ?></p>
    <?php
    if ($error) {
        echo "ERROR";
    }
    ?>
</body>

</html>